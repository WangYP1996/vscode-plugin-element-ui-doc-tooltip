# element-ui-doc-tooltip README

一个帮助用户快速查看element-ui中各组件属性的Vscode插件，支持Vue单文件及html文件下的使用

## Features

### 查看组件可选属性值

将鼠标悬浮在符合命名规范的组件上，可以看到可选的属性值，可以通过设置将悬浮框内容改变为完整的文档

![Hover](https://github.com/WangYP1996/vscode-plugin-element-ui-doc-tooltip/raw/master/assets/hover.gif)

### 查看组件详细文档

点击查看更多按钮，将在侧边打开包含属性详细说明的Webview面板，并自动跳转到相应位置

![viewMore](https://github.com/WangYP1996/vscode-plugin-element-ui-doc-tooltip/blob/master/assets/viewMoreDoc.gif)

### 组件属性值补全

提供相关组件的attr、events、slot补全

![completion](https://github.com/WangYP1996/vscode-plugin-element-ui-doc-tooltip/raw/master/assets/completion.gif)

### 设置自定义组件label

针对部分组件中对element-ui组件的重定义，支持自定义组件前缀的输入，可以同时匹配多种前缀

![setcustomlabel](https://github.com/WangYP1996/vscode-plugin-element-ui-doc-tooltip/raw/master/assets/setcustomlabel.gif)

### 直接查看组件文档

不需要悬浮组件直接进入文档详情

![getdoc](https://github.com/WangYP1996/vscode-plugin-element-ui-doc-tooltip/raw/master/assets/getdoc.gif)

## Requirements

需要marked组件

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

```javascript
"element-ui-doc-tooltip.component-prefix": {
    "type": "string",
    "default": "el",
    "description": "element-ui组件的标签前缀，默认为el，如input组件的标签为el-input"
},
"element-ui-doc-tooltip.doc-language": {
    "type": "string",
    "default": "zh-CN",
    "description": "提示文本的语言类型，默认为简体中文"
},
"element-ui-doc-tooltip.complex-hover-doc": {
    "type": "boolean",
    "default": false,
    "description": "是否在悬浮提示框上展示完整文档，默认为否"
}
```
## Known Issues

暂无

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

发布组件
