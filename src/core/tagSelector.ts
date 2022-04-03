import { TextDocument, Position } from "vscode";
class TagSelector {
    private label = /^<()([a-z|-]+)/;
    private tagStart = /^<([a-z-]+)/;
    private tagEnd = /^>?<\/([a-z-]+)>/;
    private annotation = /(^<--|-->$)/;
    public getLabel(document: TextDocument, position: Position, line?: number): LabelGroup{
        let currentLine = line || position.line;
        while(currentLine >= 0) {
            const lineText = document.lineAt(currentLine).text.trimLeft().trimRight();
            if(this.annotation.test(lineText)) {
                currentLine --;
            } else if(this.label.test(lineText)) {
                const results = lineText.match(this.label) || [undefined, undefined, undefined];
                const [ , prefix, tag] = results;
                const result: LabelGroup = {
                    line: currentLine,
                    tag: prefix ? `el-${tag}` : tag,
                };
                return result;
            } else {
                if(this.tagStart.test(lineText) || this.tagEnd.test(lineText)) {
                    return {
                        line: undefined,
                        tag: undefined,
                    };
                };
                currentLine --;
            }
        }
        return {
            line: undefined,
            tag: undefined,
        };
    }
    public getParentLabel(document: TextDocument, position: Position, line?: number): string | undefined {
        let currentLine = (line || position.line) - 1;
        const selfClose = /(^<[a-z-]+).*(\/.*>$)/;
        const stack = [];
        while(currentLine >= 0) {
            const lineText = document.lineAt(currentLine).text.trimLeft().trimRight();
            if (this.annotation.test(lineText) || selfClose.test(lineText)) {
                currentLine --;
            } else {
                if (this.tagEnd.test(lineText)) {
                    const end = (lineText.match?.(this.tagEnd) || [undefined, undefined])[1];
                    stack.unshift(end);
                } else {
                    if(this.tagStart.test(lineText)) {
                        const start = (lineText.match?.(this.tagStart) || [undefined, undefined])[1];
                        if(start === stack[0]) {
                            stack.shift();
                        } else {
                            return start;
                        }
                    }
                }
                currentLine --;
            }
        }
        return undefined;
    }
    public setCustomLabel(custom: string){
        const expString = custom.split('|').sort((a,b) => {return b.length - a.length;}).join('|');
        this.label = new RegExp(`^<${expString ? '('+expString+')-': ''}([a-z|-]+)`);
    }
}
export default TagSelector;