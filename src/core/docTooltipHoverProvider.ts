import {
    CancellationToken,
    Hover,
  HoverProvider, Position, TextDocument, MarkdownString,
} from "vscode";
import TagSelector from "./tagSelector";
import DocGetter from "./docGetter";
const tagSelector = new TagSelector();
const docGetter = new DocGetter();
export class DocTooltipHoverProvider implements HoverProvider {
    provideHover(document: TextDocument, position: Position, token: CancellationToken): Hover | null | undefined {
        const _document = document;
        const _position = position;
        const label = tagSelector.getLabel(_document, _position);
        if(label.tag) {
            return new Hover(this.markdownDocumentGenerator(label.tag));
        };
        return null;
    }
    private markdownDocumentGenerator(tag: string): MarkdownString {
        const ms = new MarkdownString('', true);
        ms.isTrusted = true;
        ms.appendMarkdown(`当前查看的标签为：${tag}  \n`);

        const docs = docGetter.hoverDocGenerator(tag);
        docs.forEach((val: string) => {
            ms.appendMarkdown(`${val}  \n`);
        });
        return ms;
    }
    public setCustomLabel(custom: string){
        tagSelector.setCustomLabel(custom);
    }
}
