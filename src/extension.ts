import * as vscode from "vscode";
import { ApiTooltipCompletionProvider } from "./core/apiTooltipCompletionProvider";
import { DocTooltipHoverProvider } from "./core/docTooltipHoverProvider";
import DocGetter from "./core/docGetter";
const docGetter = new DocGetter();
export function activate(context: vscode.ExtensionContext) {
    console.log("plugin activate");
    
    const apiTooltipCompletionProvider = new ApiTooltipCompletionProvider();
    const docTooltipHoverProvider = new DocTooltipHoverProvider();
    const _configuration: any = vscode.workspace.getConfiguration('element-ui-doc-tooltip');
    
    const _componentPrefix: string = _configuration.get('component-prefix').toString();
    
    if(_componentPrefix) {
        apiTooltipCompletionProvider.setCustomLabel(_componentPrefix);
        docTooltipHoverProvider.setCustomLabel(_componentPrefix);
    }

    context.subscriptions.push(
        vscode.languages.registerCompletionItemProvider(
            [
                {
                    language: "vue",
                    scheme: "file",
                },
                {
                    language: "vue",
                    scheme: "untitled",
                },
                {
                    language: "html",
                    scheme: "file",
                },
                {
                    language: "html",
                    scheme: "untitled",
                },
            ],
            apiTooltipCompletionProvider,
            '\n',
            ' ',
            ':',
            '"',
            "'",
            '@',
        ));

    context.subscriptions.push(vscode.languages.registerHoverProvider(
        [
            {
                language: "vue",
                scheme: "file",
            },
            {
                language: "vue",
                scheme: "untitled",
            },
            {
                language: "html",
                scheme: "file",
            },
            {
                language: "html",
                scheme: "untitled",
            },
        ],
        docTooltipHoverProvider,
    ));
    context.subscriptions.push(
        vscode.commands.registerCommand('element-ui-doc-tooltip.setCustomLabel', () => {
            vscode.window.showInputBox({
                value: '',
                placeHolder: '???????????????????????????????????????el-col????????????el????????????????????? | ??????',
            }).then(val => {
                const finalValue = val?.replace(/\s/g, '');
                if(finalValue?.replace(/[a-z|\||-]/g, '') !== '') {
                    vscode.window.showErrorMessage('???????????????');
                } else {
                    apiTooltipCompletionProvider.setCustomLabel(val || 'el');
                    docTooltipHoverProvider.setCustomLabel(val || 'el');
                    vscode.window.showInformationMessage('???????????????????????????????????????');
                }
            });
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('element-ui-doc-tooltip.viewMore', (tag: string, col: string | undefined) => {
            const htmlString = docGetter.webViewContentGetter(tag);
            if(htmlString === '') {
                vscode.window.showInformationMessage('???????????????????????????');
                return;
            }
            const _webview = vscode.window.createWebviewPanel('preview', `element-ui?????????${tag}`, -2, {
                enableScripts: true
            });
            _webview.webview.html = `
                <html>
                    <style type="text/css">
                        table
                        {
                            width: 100%;
                        }
                        table, th, td
                        {
                            border: 1px solid gray;
                        }
                    </style>
                    <body>
                        ${htmlString}
                    </body>
                    <script>
                        window.addEventListener('message', event => {
                            document.querySelector('#' + event.data.component + '-' + event.data.col).scrollIntoView(true);
                        });
                    </script>
                </html>
            `;
            setTimeout(() => {
                col && _webview.webview.postMessage({
                    "component": tag,
                    "col": col,
                });
            }, 100);
        })
    );
    context.subscriptions.push(
        vscode.commands.registerCommand('element-ui-doc-tooltip.getComponentDoc', () => {
            vscode.window.showInputBox({
                value: '',
                placeHolder: '????????????el-?????????????????????',
            }).then(val => {
                vscode.commands.executeCommand('element-ui-doc-tooltip.viewMore', val);
            });
        })
    );
}


export function deactivate() { }
export default {
    activate,
    deactivate,
};