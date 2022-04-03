import mapData from '../const/docs';
import {CompletionItem, workspace, Uri} from 'vscode';
import Language from '../const/language';
import {marked} from 'marked';
const language: any = Language;
const docData = mapData;
class DocGetter {
    private requestDoc(tag: string): componentDoc {
        const result = Reflect.has(docData, tag) ? docData[tag] : {};
        return result;
    }
    public hoverDocGenerator(tag: string): string[] {
        const complex: boolean = !!workspace.getConfiguration('element-ui-doc-tooltip').get('complex-hover-doc');
        if(complex) {return this.docGenerator(tag, true);}
        return this.simpleHoverDocGenerator(tag, true);
    }
    private simpleHoverDocGenerator(tag: string, hasViewMoreButton: boolean = false): string[] {
        const _env: string = workspace.getConfiguration('element-ui-doc-tooltip').get('doc-language') || 'zh-CN';
        const languageMap = language[_env];
        const docObj: componentDoc = this.requestDoc(tag);
        const result: string[] = [];
        if((docObj.attributes || []).length) {
            const attrHeader = this.attrHeaderGererator(tag, _env);
            if(hasViewMoreButton) {attrHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.attributes.title);};
            result.push(attrHeader[0]);
            result.push((docObj.attributes || []).map(val => val.attribute).join(', '));
            result.push(`  \n`);
        }
        if((docObj?.events || []).length) {
            const eventsHeader = this.eventsHeaderGererator(tag, _env);
            if(hasViewMoreButton) {eventsHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.events.title);};
            result.push(eventsHeader[0]);
            result.push((docObj.events || []).map(val => val.eventName).join(', '));
            result.push(`  \n`);
        }
        if((docObj.methods || []).length) {
            const methodsHeader = this.methodsHeaderGererator(tag, _env);
            if(hasViewMoreButton){methodsHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.methods.title);};
            result.push(methodsHeader[0]);
            result.push((docObj.methods || []).map(val => val.name).join(', '));
            result.push(`  \n`);
        }
        if((docObj.slots || []).length) {
            const slotsHeader = this.slotsHeaderGererator(tag, _env);
            if(hasViewMoreButton){ slotsHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.slots.title);};
            result.push(slotsHeader[0]);
            result.push((docObj.slots || []).map(val => val.name).join(', '));
            result.push(`  \n`);
        }
        return result;
    }
    private docGenerator(tag: string, hasViewMoreButton: boolean = false): string[] {
        const _env: string = workspace.getConfiguration('element-ui-doc-tooltip').get('doc-language') || 'zh-CN';
        const languageMap = language[_env];
        const docObj: componentDoc = this.requestDoc(tag);
        const result: string[] = [];
        if((docObj.attributes|| []).length) {
            const attrHeader = this.attrHeaderGererator(tag, _env);
            if(hasViewMoreButton) {attrHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.attributes.title);};
            result.push(...attrHeader);
            (docObj.attributes|| []).forEach((val: attributeItem) => {
                result.push(this.attrLineGenerator(val));
            });
            result.push(`  \n`);
        }
        if((docObj?.events || []).length) {
            const eventsHeader = this.eventsHeaderGererator(tag, _env);
            if(hasViewMoreButton) {eventsHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.events.title);};
            result.push(...eventsHeader);
            (docObj.events || []).forEach((val: eventItem) => {
                result.push(this.eventLineGenerator(val));
            });
            result.push(`  \n`);
        }
        if((docObj.methods || []).length) {
            const methodsHeader = this.methodsHeaderGererator(tag, _env);
            if(hasViewMoreButton){methodsHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.methods.title);};
            result.push(...methodsHeader);
            (docObj.methods || []).forEach((val: methodItem) => {
                result.push(this.methodLineGenerator(val));
            });
            result.push(`  \n`);
        }
        if((docObj.slots || []).length) {
            const slotsHeader = this.slotsHeaderGererator(tag, _env);
            if(hasViewMoreButton){ slotsHeader[0] += this.viewMoreButtonGenerator(tag, languageMap.slots.title);};
            result.push(...slotsHeader);
            (docObj.slots || []).forEach((val: slotItem) => {
                result.push(this.slotLineGenerator(val));
            });
            result.push(`  \n`);
        }
        return result;
    }
    private attrHeaderGererator(tag: string, env: string = "zh-CN"): string[] {
        const languageMap: any = language[env];
        const title = `### ${tag} ${languageMap.attributes.title}`;
        const header = [
            `| ${languageMap.attributes.attribute} |  ${languageMap.attributes.description} |  ${languageMap.attributes.type} | ${languageMap.attributes.acceptedValues} | ${languageMap.attributes.default} |`,
            `| :---- | :---- | :---- | :---- | :---- |`
        ];
        return [title, ...header];
    }
    private attrLineGenerator(attrObj: attributeItem): string {
        const attribute = attrObj.attribute;
        const description = attrObj.description || '--';
        const type = attrObj.type || '--';
        const acceptedValues = attrObj.acceptedValues || '--';
        const def = attrObj.default || '--';
        return `| ${attribute} | ${description} | ${type} | ${acceptedValues} | ${def} |`;        
    }
    private eventsHeaderGererator(tag: string, env: string = "zh-CN"): string[] {
        const languageMap: any = language[env];
        
        const title = `### ${tag} ${languageMap.events.title}`;
        const header = [
            `| ${languageMap.events.eventName} |  ${languageMap.events.description} | ${languageMap.events.parameters} |`,
            `| :---- | :---- | :---- | `
        ];
        return [title, ...header];
    }
    private eventLineGenerator(eventObj: eventItem): string {
        const eventName = eventObj.eventName;
        const description = eventObj.description || '--';
        const parameters = eventObj.parameters || '--';
        return `| ${eventName} | ${description} | ${parameters} |`;        
    }
    private slotsHeaderGererator(tag: string, env: string = "zh-CN"): string[] {
        const languageMap: any = language[env];
        const title = `### ${tag} ${languageMap.slots.title}`;
        const header = [
            `| ${languageMap.slots.name} |  ${languageMap.slots.description} `,
            `| :---- | :---- | `
        ];
        return [title, ...header];
    }
    private slotLineGenerator(slotObj: slotItem): string {
        const name = slotObj.name;
        const description = slotObj.description || '--';
        return `| ${name} | ${description} |`;        
    }
    private methodsHeaderGererator(tag: string, env: string = "zh-CN"): string[] {
        const languageMap: any = language[env];
        const title = `### ${tag} ${languageMap.methods.title}`;
        const header = [
            `| ${languageMap.methods.name} |  ${languageMap.methods.description} `,
            `| :---- | :---- | `
        ];
        return [title, ...header];
    }
    private methodLineGenerator(methodObj: methodItem): string {
        const name = methodObj.name;
        const description = methodObj.description || '--';
        return `| ${name} | ${description} |`;        
    }
    public completionItemGenerator(tag: string, types: string[], prefixed: boolean = false, env: string = 'zh-CN'): CompletionItem[] {
        const languageMap: any = language[env];
        const docs: componentDoc = this.requestDoc(tag);
        const results: CompletionItem[] = [];
        types.forEach((val: string) => {
            if(val.toString() === 'events') {
                const items =(docs.events || [])?.map((val: eventItem) => {
                    const ci = new CompletionItem(`${languageMap.events.title}: @${val.eventName}${val.parameters ? ':'+val.parameters : ''}`, 22);
                    ci.sortText = `01${val.eventName}`;
                    ci.insertText = !prefixed ? `@${val.eventName}` : val.eventName;
                    ci.detail = val.description || undefined;
                    return ci;
                });
                results.push(...items);
            }
            if(val.toString() === 'attributes') {
                const items =(docs.attributes || [])?.map((val: attributeItem) => {
                    const ci = new CompletionItem(`${languageMap.attributes.title}: ${val.attribute}${val.type ? ': '+val.type.split('/').join('|') : ''}${val.default ? " = "+val.default: ''}`, 4);
                    ci.sortText = `00${val.attribute}`;
                    ci.insertText = !prefixed ? `:${val.attribute}` : val.attribute;
                    ci.detail = (function(value: attributeItem): string|undefined{
                        if (!value.description && !value.acceptedValues) {
                            return undefined;
                        }
                        const des = value.description ? `${languageMap.attributes.description}: ${value.description}  \n` : '';
                        const av = value.acceptedValues ? `${languageMap.attributes.acceptedValues}: ${value.acceptedValues}  \n`: '';
                        return des + av;
                    })(val);
                    return ci;
                });
                results.push(...items);
            }
            if(val.toString() === 'slots') {
                const items =(docs.slots || [])?.map((val: slotItem) => {
                    const ci = new CompletionItem(`${languageMap.slots.title}: ${val.name}`);
                    ci.sortText = `02${val.name}`;
                    ci.insertText = val.name;
                    ci.detail = val.description || undefined;
                    return ci;
                });
                results.push(...items);
            }
        });
        return results;
    }
    private viewMoreButtonGenerator(tag: string, col: string): string {
        const arg = [tag, col];
        const uri = Uri.parse(`command:element-ui-doc-tooltip.viewMore?${encodeURIComponent(JSON.stringify(arg))}`);
        return ` [查看更多](${uri})`;
    }
    public webViewContentGetter(tag: string): string {
        const markdownStrings = this.docGenerator(tag);
        return marked(markdownStrings.join('  \n').toString());
    }
}
export default DocGetter;