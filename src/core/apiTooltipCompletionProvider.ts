import {
    CompletionItemProvider,
    CompletionItem,
    CancellationToken,
    CompletionContext,
    CompletionList,
    Position,
    ProviderResult,
    TextDocument,
} from 'vscode';
import TagSelector from "./tagSelector";
import DocGetter from './docGetter';
const tagSelector = new TagSelector();
const docGetter = new DocGetter();
export class ApiTooltipCompletionProvider implements CompletionItemProvider<CompletionItem> {
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
        const _document = document;
        const _position = position;
        const _context = context;
        // console.log(`trigger: ${context.triggerCharacter}`);
        // console.log(`label: ${this.getLabel(_document, _position)}`);
        const label: LabelGroup = tagSelector.getLabel(_document, _position);
        if (context.triggerCharacter === '"' || context.triggerCharacter === "'") {
            const parentTag = this.isInputingSlots(_document, _position, position.line);
            return new CompletionList(parentTag ? docGetter.completionItemGenerator(parentTag || '', ['slots'], true) : []);
        } 
        if (!label.tag) {
            return [];
        }
        let result: CompletionItem[] = [];
        if (context.triggerCharacter === ' ' || context.triggerCharacter === '\n') {
            result = docGetter.completionItemGenerator(label.tag, ['attributes', 'events']);
        } else if (context.triggerCharacter === "@") {
            result = docGetter.completionItemGenerator(label.tag, ['events'], true);
        } else if (context.triggerCharacter === ':') {
            result = docGetter.completionItemGenerator(label.tag, ['attributes'], true);
        } else {
            result = [];
        }
        return new CompletionList(result, false);
    }

    private isInputingSlots(document: TextDocument, position: Position, childLine?: number): string | undefined {
        const preset = document.lineAt(position.line).text.slice(position.character - 6, position.character - 1);
        if(preset === 'slot=') {
            return tagSelector.getParentLabel(document, position, childLine);;
        }
        return undefined;
    }
    public setCustomLabel(custom: string) {
        tagSelector.setCustomLabel(custom);
    }
}
