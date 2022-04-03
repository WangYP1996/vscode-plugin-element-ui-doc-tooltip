/* eslint-disable @typescript-eslint/naming-convention */
const mapData: { [key: string]: componentDoc } =
{
	"el-alert": {
		"attributes": [{
			"attribute": "title",
			"description": "标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "type",
			"description": "主题",
			"type": "string",
			"acceptedValues": "success/warning/info/error",
			"default": "info"
		},
		{
			"attribute": "description",
			"description": "辅助性文字。也可通过默认 slot 传入",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "closable",
			"description": "是否可关闭",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "center",
			"description": "文字是否居中",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "close-text",
			"description": "关闭按钮自定义文本",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "show-icon",
			"description": "是否显示图标",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "effect",
			"description": "选择提供的主题",
			"type": "string",
			"acceptedValues": "light/dark",
			"default": "light"
		}],
		"slots": [{
			"name": "—",
			"description": "描述"
		},
		{
			"name": "title",
			"description": "标题的内容"
		}],
		"events": [{
			"eventName": "close",
			"description": "关闭alert时触发的事件",
			"parameters": "—"
		}]
	},
	"el-avatar": {
		"attributes": [{
			"attribute": "icon",
			"description": "设置头像的图标类型，参考 Icon 组件",
			"type": "string",
			"acceptedValues": "",
			"default": ""
		},
		{
			"attribute": "size",
			"description": "设置头像的大小",
			"type": "number/string",
			"acceptedValues": "number / large / medium / small",
			"default": "large"
		},
		{
			"attribute": "shape",
			"description": "设置头像的形状",
			"type": "string",
			"acceptedValues": "circle / square",
			"default": "circle"
		},
		{
			"attribute": "src",
			"description": "图片头像的资源地址",
			"type": "string",
			"acceptedValues": "",
			"default": ""
		},
		{
			"attribute": "srcSet",
			"description": "以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像",
			"type": "string",
			"acceptedValues": "",
			"default": ""
		},
		{
			"attribute": "alt",
			"description": "描述图像的替换文本",
			"type": "string",
			"acceptedValues": "",
			"default": ""
		},
		{
			"attribute": "fit",
			"description": "当展示类型为图片的时候，设置图片如何适应容器框",
			"type": "string",
			"acceptedValues": "fill / contain / cover / none / scale-down",
			"default": "cover"
		}],
		"events": [{
			"eventName": "error",
			"description": "图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为",
			"parameters": "(e: Event)"
		}],
		"slots": []
	},
	"el-backtop": {
		"attributes": [{
			"attribute": "target",
			"description": "触发滚动的对象",
			"type": "string",
			"acceptedValues": "",
			"default": ""
		},
		{
			"attribute": "visibility-height",
			"description": "滚动高度达到此参数值才出现",
			"type": "number",
			"acceptedValues": "",
			"default": "200"
		},
		{
			"attribute": "right",
			"description": "控制其显示位置, 距离页面右边距",
			"type": "number",
			"acceptedValues": "",
			"default": "40"
		},
		{
			"attribute": "bottom",
			"description": "控制其显示位置, 距离页面底部距离",
			"type": "number",
			"acceptedValues": "",
			"default": "40"
		}],
		"events": [{
			"eventName": "click",
			"description": "点击按钮触发的事件",
			"parameters": "点击事件"
		}]
	},
	"el-badge": {
		"attributes": [{
			"attribute": "value",
			"description": "显示值",
			"type": "string, number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "max",
			"description": "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "is-dot",
			"description": "小圆点",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "hidden",
			"description": "隐藏 badge",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "type",
			"description": "类型",
			"type": "string",
			"acceptedValues": "primary / success / warning / danger / info",
			"default": "—"
		}]
	},
	"el-breadcrumb": {
		"attributes": [{
			"attribute": "separator",
			"description": "分隔符",
			"type": "string",
			"acceptedValues": "—",
			"default": "斜杠'/'"
		},
		{
			"attribute": "separator-class",
			"description": "图标分隔符 class",
			"type": "string",
			"acceptedValues": "—"
		}]
	},
	"el-breadcrumb-item": {
		"attributes": [{
			"attribute": "to",
			"description": "路由跳转对象，同 `vue-router` 的 `to`",
			"type": "string/object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "replace",
			"description": "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}]
	},
	"el-button": {
		"attributes": [{
			"attribute": "size",
			"description": "尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "type",
			"description": "类型",
			"type": "string",
			"acceptedValues": "primary / success / warning / danger / info / text",
			"default": "—"
		},
		{
			"attribute": "plain",
			"description": "是否朴素按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "round",
			"description": "是否圆角按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "circle",
			"description": "是否圆形按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "loading",
			"description": "是否加载中状态",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用状态",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "icon",
			"description": "图标类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "autofocus",
			"description": "是否默认聚焦",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "native-type",
			"description": "原生 type 属性",
			"type": "string",
			"acceptedValues": "button / submit / reset",
			"default": "button"
		}]
	},
	"el-calendar": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "Date/string/number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "range",
			"description": "时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。",
			"type": "Array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "first-day-of-week",
			"description": "周起始日",
			"type": "Number",
			"acceptedValues": "1 到 7",
			"default": "1"
		}]
	},
	"el-card": {
		"attributes": [{
			"attribute": "header",
			"description": "设置 header，也可以通过 `slot#header` 传入 DOM",
			"type": "strin",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "body-style",
			"description": "设置 body 的样",
			"type": "objec",
			"acceptedValues": "—",
			"default": "{ padding: '20px' }"
		},
		{
			"attribute": "shadow",
			"description": "设置阴影显示时机",
			"type": "string",
			"acceptedValues": "always / hover / never",
			"default": "always"
		}]
	},
	"el-carousel": {
		"attributes": [{
			"attribute": "height",
			"description": "走马灯的高度",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "initial-index",
			"description": "初始状态激活的幻灯片的索引，从 0 开始",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "trigger",
			"description": "指示器的触发方式",
			"type": "string",
			"acceptedValues": "click",
			"default": "—"
		},
		{
			"attribute": "autoplay",
			"description": "是否自动切换",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "interval",
			"description": "自动切换的时间间隔，单位为毫秒",
			"type": "number",
			"acceptedValues": "—",
			"default": "3000"
		},
		{
			"attribute": "indicator-position",
			"description": "指示器的位置",
			"type": "string",
			"acceptedValues": "outside/none",
			"default": "—"
		},
		{
			"attribute": "arrow",
			"description": "切换箭头的显示时机",
			"type": "string",
			"acceptedValues": "always/hover/never",
			"default": "hover"
		},
		{
			"attribute": "type",
			"description": "走马灯的类型",
			"type": "string",
			"acceptedValues": "card",
			"default": "—"
		},
		{
			"attribute": "loop",
			"description": "是否循环显示",
			"type": "boolean",
			"default": "true"
		},
		{
			"attribute": "direction",
			"description": "走马灯展示的方向",
			"type": "string",
			"acceptedValues": "horizontal/vertical",
			"default": "horizontal"
		}],
		"events": [{
			"eventName": "change",
			"description": "幻灯片切换时触发",
			"parameters": "目前激活的幻灯片的索引，原幻灯片的索引"
		}],
		"methods": [{
			"name": "setActiveItem",
			"description": "手动切换幻灯片"
		},
		{
			"name": "prev",
			"description": "切换至上一张幻灯片"
		},
		{
			"name": "next",
			"description": "切换至下一张幻灯片"
		}]
	},
	"el-carousel-item": {
		"attributes": [{
			"attribute": "name",
			"description": "幻灯片的名字，可用作 `setActiveItem` 的参数",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "该幻灯片所对应指示器的文本",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}]
	},
	"el-cascader": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "选中项绑定值",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "options",
			"description": "可选项数据源，键名可通过 `Props` 属性配置",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "props",
			"description": "配置选项，具体见下表",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "size",
			"description": "尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "placeholder",
			"description": "输入框占位文本",
			"type": "string",
			"acceptedValues": "—",
			"default": "请选择"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "clearable",
			"description": "是否支持清空选项",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "show-all-levels",
			"description": "输入框中是否显示选中值的完整路径",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "collapse-tags",
			"description": "多选模式下是否折叠Tag",
			"type": "boolean",
			"default": "false"
		},
		{
			"attribute": "separator",
			"description": "选项分隔符",
			"type": "string",
			"acceptedValues": "—",
			"default": "斜杠' / '"
		},
		{
			"attribute": "filterable",
			"description": "是否可搜索选项",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "filter-method",
			"description": "自定义搜索逻辑，第一个参数是节点`node`，第二个参数是搜索关键词`keyword`，通过返回布尔值表示是否命中",
			"type": "function(node, keyword)"
		},
		{
			"attribute": "debounce",
			"description": "搜索关键词输入的去抖延迟，毫秒",
			"type": "number",
			"acceptedValues": "—",
			"default": "300"
		},
		{
			"attribute": "before-filter",
			"description": "筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选",
			"type": "function(value)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "popper-class",
			"description": "自定义浮层类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "change",
			"description": "当选中节点变化时触发",
			"parameters": "选中节点的值"
		},
		{
			"eventName": "expand-change",
			"description": "当展开节点发生变化时触发",
			"parameters": "各父级选项值组成的数组"
		},
		{
			"eventName": "blur",
			"description": "当失去焦点时触发",
			"parameters": "(event: Event)"
		},
		{
			"eventName": "focus",
			"description": "当获得焦点时触发",
			"parameters": "(event: Event)"
		},
		{
			"eventName": "visible-change",
			"description": "下拉框出现/隐藏时触发",
			"parameters": "出现则为 true，隐藏则为 false"
		},
		{
			"eventName": "remove-tag",
			"description": "在多选模式下，移除Tag时触发",
			"parameters": "移除的Tag对应的节点的值"
		}],
		"methods": [{
			"name": "getCheckedNodes",
			"description": "获取选中的节点"
		}],
		"slots": [{
			"name": "default",
			"description": "自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据"
		},
		{
			"name": "empty",
			"description": "无匹配选项时的内容"
		}]
	},
	"el-cascaderpanel": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "选中项绑定值",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "options",
			"description": "可选项数据源，键名可通过 `Props` 属性配置",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "props",
			"description": "配置选项，具体见下表",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "change",
			"description": "当选中节点变化时触发",
			"parameters": "选中节点的值"
		},
		{
			"eventName": "expand-change",
			"description": "当展开节点发生变化时触发",
			"parameters": "各父级选项值组成的数组"
		}],
		"methods": [{
			"name": "getCheckedNodes",
			"description": "获取选中的节点数组"
		},
		{
			"name": "clearCheckedNodes",
			"description": "清空选中的节点"
		}],
		"slots": [{
			"name": "default",
			"description": "自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据"
		}]
	},
	"el-checkbox": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "string / number / boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效",
			"type": "string / number / boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "true-label",
			"description": "选中时的值",
			"type": "string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "false-label",
			"description": "没有选中时的值",
			"type": "string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "border",
			"description": "是否显示边框",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "size",
			"description": "Checkbox 的尺寸，仅在 border 为真时有效",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "name",
			"description": "原生 name 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "checked",
			"description": "当前是否勾选",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "indeterminate",
			"description": "设置 indeterminate 状态，只负责样式控制",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}],
		"events": [{
			"eventName": "change",
			"description": "当绑定值变化时触发的事件",
			"parameters": "更新后的值"
		}]
	},
	"el-checkbox-group": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "size",
			"description": "多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "min",
			"description": "可被勾选的 checkbox 的最小数量",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "max",
			"description": "可被勾选的 checkbox 的最大数量",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "text-color",
			"description": "按钮形式的 Checkbox 激活时的文本颜色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#ffffff"
		},
		{
			"attribute": "fill",
			"description": "按钮形式的 Checkbox 激活时的填充色和边框色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#409EFF"
		}],
		"events": [{
			"eventName": "change",
			"description": "当绑定值变化时触发的事件",
			"parameters": "更新后的值"
		}]
	},
	"el-checkbox-button": {
		"attributes": [{
			"attribute": "label",
			"description": "选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效",
			"type": "string / number / boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "true-label",
			"description": "选中时的值",
			"type": "string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "false-label",
			"description": "没有选中时的值",
			"type": "string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "name",
			"description": "原生 name 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "checked",
			"description": "当前是否勾选",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}]
	},
	"el-collapse": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "当前激活的面板(如果是手风琴模式，绑定值类型需要为`string`，否则为`array`)",
			"type": "string / array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "accordion",
			"description": "是否手风琴模式",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}],
		"events": [{
			"eventName": "change",
			"description": "当前激活面板改变时触发(如果是手风琴模式，参数 `activeNames` 类型为`string`，否则为`array`)",
			"parameters": "(activeNames: array / string)"
		}]
	},
	"el-collapse-item": {
		"attributes": [{
			"attribute": "name",
			"description": "唯一标志符",
			"type": "string/number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "title",
			"description": "面板标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "—"
		}]
	},
	"el-color-picker": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "size",
			"description": "尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "show-alpha",
			"description": "是否支持透明度选择",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "color-format",
			"description": "写入 v-model 的颜色的格式",
			"type": "string",
			"acceptedValues": "hsl / hsv / hex / rgb",
			"default": "hex（show-alpha 为 false）/ rgb（show-alpha 为 true）"
		},
		{
			"attribute": "popper-class",
			"description": "ColorPicker 下拉框的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "predefine",
			"description": "预定义颜色",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "change",
			"description": "当绑定值变化时触发",
			"parameters": "当前值"
		},
		{
			"eventName": "active-change",
			"description": "面板中当前显示的颜色发生改变时触发",
			"parameters": "当前显示的颜色值"
		}]
	},
	"el-container": {
		"attributes": [{
			"attribute": "direction",
			"description": "子元素的排列方向",
			"type": "string",
			"acceptedValues": "horizontal / vertical",
			"default": "子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal"
		}]
	},
	"el-header": {
		"attributes": [{
			"attribute": "height",
			"description": "顶栏高度",
			"type": "string",
			"acceptedValues": "—",
			"default": "60px"
		}]
	},
	"el-aside": {
		"attributes": [{
			"attribute": "width",
			"description": "侧边栏宽度",
			"type": "string",
			"acceptedValues": "—",
			"default": "300px"
		}]
	},
	"el-footer": {
		"attributes": [{
			"attribute": "height",
			"description": "底栏高度",
			"type": "string",
			"acceptedValues": "—",
			"default": "60px"
		}]
	},
	"el-date-picker": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "date(DatePicker) / array(DateRangePicker)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "readonly",
			"description": "完全只读",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disabled",
			"description": "禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "editable",
			"description": "文本框可输入",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "clearable",
			"description": "是否显示清除按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "size",
			"description": "输入框尺寸",
			"type": "string",
			"acceptedValues": "large, small, mini",
			"default": "—"
		},
		{
			"attribute": "placeholder",
			"description": "非范围选择时的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "start-placeholder",
			"description": "范围选择时开始日期的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "end-placeholder",
			"description": "范围选择时结束日期的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "type",
			"description": "显示类型",
			"type": "string",
			"acceptedValues": "year/month/date/dates/ week/datetime/datetimerange/ daterange/monthrange",
			"default": "date"
		},
		{
			"attribute": "format",
			"description": "显示在输入框中的格式",
			"type": "string",
			"acceptedValues": "见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)",
			"default": "yyyy-MM-dd"
		},
		{
			"attribute": "align",
			"description": "对齐方式",
			"type": "string",
			"acceptedValues": "left, center, right",
			"default": "left"
		},
		{
			"attribute": "popper-class",
			"description": "DatePicker 下拉框的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "picker-options",
			"description": "当前时间日期选择器特有的选项参考下表",
			"type": "object",
			"acceptedValues": "—",
			"default": "{}"
		},
		{
			"attribute": "range-separator",
			"description": "选择范围时的分隔符",
			"type": "string",
			"acceptedValues": "—",
			"default": "'-'"
		},
		{
			"attribute": "default-value",
			"description": "可选，选择器打开时默认显示的时间",
			"type": "Date",
			"acceptedValues": "可被`new Date()`解析",
			"default": "—"
		},
		{
			"attribute": "default-time",
			"description": "范围选择时选中日期所使用的当日内具体时刻",
			"type": "string[]",
			"acceptedValues": "数组，长度为 2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻，不指定会使用时刻 `00:00:00`",
			"default": "—"
		},
		{
			"attribute": "value-format",
			"description": "可选，绑定值的格式。不指定则绑定值为 Date 对象",
			"type": "string",
			"acceptedValues": "见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)",
			"default": "—"
		},
		{
			"attribute": "name",
			"description": "原生属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "unlink-panels",
			"description": "在范围选择器里取消两个日期面板之间的联动",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "prefix-icon",
			"description": "自定义头部图标的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-date"
		},
		{
			"attribute": "clear-icon",
			"description": "自定义清空图标的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-circle-close"
		},
		{
			"attribute": "validate-event",
			"description": "输入时是否触发表单的校验",
			"type": "boolean",
			"default": "true"
		}],
		"events": [{
			"eventName": "change",
			"description": "用户确认选定的值时触发",
			"parameters": "组件绑定值。格式与绑定值一致，可受 `value-format` 控制"
		},
		{
			"eventName": "blur",
			"description": "当 input 失去焦点时触发",
			"parameters": "组件实例"
		},
		{
			"eventName": "focus",
			"description": "当 input 获得焦点时触发",
			"parameters": "组件实例"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 input 获取焦点"
		}]
	},
	"el-datetime-picker": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "date(DateTimePicker) / array(DateTimeRangePicker)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "readonly",
			"description": "完全只读",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disabled",
			"description": "禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "editable",
			"description": "文本框可输入",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "clearable",
			"description": "是否显示清除按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "size",
			"description": "输入框尺寸",
			"type": "string",
			"acceptedValues": "large, small, mini",
			"default": "—"
		},
		{
			"attribute": "placeholder",
			"description": "非范围选择时的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "start-placeholder",
			"description": "范围选择时开始日期的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "end-placeholder",
			"description": "范围选择时结束日期的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "time-arrow-control",
			"description": "是否使用箭头进行时间选择",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "type",
			"description": "显示类型",
			"type": "string",
			"acceptedValues": "year/month/date/week/ datetime/datetimerange/daterange",
			"default": "date"
		},
		{
			"attribute": "format",
			"description": "显示在输入框中的格式",
			"type": "string",
			"acceptedValues": "见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)",
			"default": "yyyy-MM-dd HH:mm:ss"
		},
		{
			"attribute": "align",
			"description": "对齐方式",
			"type": "string",
			"acceptedValues": "left, center, right",
			"default": "left"
		},
		{
			"attribute": "popper-class",
			"description": "DateTimePicker 下拉框的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "picker-options",
			"description": "当前时间日期选择器特有的选项参考下表",
			"type": "object",
			"acceptedValues": "—",
			"default": "{}"
		},
		{
			"attribute": "range-separator",
			"description": "选择范围时的分隔符",
			"type": "string",
			"default": "'-'"
		},
		{
			"attribute": "default-value",
			"description": "可选，选择器打开时默认显示的时间",
			"type": "Date",
			"acceptedValues": "可被`new Date()`解析",
			"default": "—"
		},
		{
			"attribute": "default-time",
			"description": "选中日期后的默认具体时刻",
			"type": "非范围选择时：string / 范围选择时：string[]",
			"acceptedValues": "非范围选择时：形如`12:00:00`的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如`12:00:00`，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 `00:00:00`",
			"default": "—"
		},
		{
			"attribute": "value-format",
			"description": "可选，绑定值的格式。不指定则绑定值为 Date 对象",
			"type": "string",
			"acceptedValues": "见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)",
			"default": "—"
		},
		{
			"attribute": "name",
			"description": "原生属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "unlink-panels",
			"description": "在范围选择器里取消两个日期面板之间的联动",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "prefix-icon",
			"description": "自定义头部图标的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-date"
		},
		{
			"attribute": "clear-icon",
			"description": "自定义清空图标的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-circle-close"
		}],
		"events": [{
			"eventName": "change",
			"description": "用户确认选定的值时触发",
			"parameters": "组件绑定值。格式与绑定值一致，可受 `value-format` 控制"
		},
		{
			"eventName": "blur",
			"description": "当 input 失去焦点时触发",
			"parameters": "组件实例"
		},
		{
			"eventName": "focus",
			"description": "当 input 获得焦点时触发",
			"parameters": "组件实例"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 input 获取焦点"
		}],
		"slots": [{
			"name": "range-separator",
			"description": "自定义分隔符"
		}]
	},
	"el-descriptions": {
		"attributes": [{
			"attribute": "border",
			"description": "是否带有边框",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "column",
			"description": "一行 `Descriptions Item` 的数量",
			"type": "number",
			"acceptedValues": "—",
			"default": "3"
		},
		{
			"attribute": "direction",
			"description": "排列的方向",
			"type": "string",
			"acceptedValues": "vertical / horizontal",
			"default": "horizontal"
		},
		{
			"attribute": "size",
			"description": "列表的尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "title",
			"description": "标题文本，显示在左上方",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "extra",
			"description": "操作区文本，显示在右上方",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "colon",
			"description": "是否显示冒号",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "labelClassName",
			"description": "自定义标签类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "contentClassName",
			"description": "自定义内容类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "labelStyle",
			"description": "自定义标签样式",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "contentStyle",
			"description": "自定义内容样式",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		}],
		"slots": [{
			"name": "title",
			"description": "自定义标题，显示在左上方"
		},
		{
			"name": "extra",
			"description": "自定义操作区，显示在右上方"
		}]
	},
	"el-descriptions-item": {
		"attributes": [{
			"attribute": "label",
			"description": "标签文本",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "span",
			"description": "列的数量",
			"type": "number",
			"acceptedValues": "—",
			"default": "1"
		},
		{
			"attribute": "labelClassName",
			"description": "自定义标签类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "contentClassName",
			"description": "自定义内容类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "labelStyle",
			"description": "自定义标签样式",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "contentStyle",
			"description": "自定义内容样式",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		}],
		"slots": [{
			"name": "label",
			"description": "自定义标签文本"
		}]
	},
	"el-dialog": {
		"attributes": [{
			"attribute": "visible",
			"description": "是否显示 Dialog，支持 .sync 修饰符",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "title",
			"description": "Dialog 的标题，也可通过具名 slot （见下表）传入",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "width",
			"description": "Dialog 的宽度",
			"type": "string",
			"acceptedValues": "—",
			"default": "50%"
		},
		{
			"attribute": "fullscreen",
			"description": "是否为全屏 Dialog",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "top",
			"description": "Dialog CSS 中的 margin-top 值",
			"type": "string",
			"acceptedValues": "—",
			"default": "15vh"
		},
		{
			"attribute": "modal",
			"description": "是否需要遮罩层",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "modal-append-to-body",
			"description": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "append-to-body",
			"description": "Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "lock-scroll",
			"description": "是否在 Dialog 出现时将 body 滚动锁定",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "custom-class",
			"description": "Dialog 的自定义类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "close-on-click-modal",
			"description": "是否可以通过点击 modal 关闭 Dialog",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "close-on-press-escape",
			"description": "是否可以通过按下 ESC 关闭 Dialog",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "show-close",
			"description": "是否显示关闭按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "before-close",
			"description": "关闭前的回调，会暂停 Dialog 的关闭",
			"type": "function(done)，done 用于关闭 Dialog",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "center",
			"description": "是否对头部和底部采用居中布局",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "destroy-on-close",
			"description": "关闭时销毁 Dialog 中的元素",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}],
		"slots": [{
			"name": "—",
			"description": "Dialog 的内容"
		},
		{
			"name": "title",
			"description": "Dialog 标题区的内容"
		},
		{
			"name": "footer",
			"description": "Dialog 按钮操作区的内容"
		}],
		"events": [{
			"eventName": "open",
			"description": "Dialog 打开的回调",
			"parameters": "—"
		},
		{
			"eventName": "opened",
			"description": "Dialog 打开动画结束时的回调",
			"parameters": "—"
		},
		{
			"eventName": "close",
			"description": "Dialog 关闭的回调",
			"parameters": "—"
		},
		{
			"eventName": "closed",
			"description": "Dialog 关闭动画结束时的回调",
			"parameters": "—"
		}]
	},
	"el-divider": {
		"attributes": [{
			"attribute": "direction",
			"description": "设置分割线方向",
			"type": "string",
			"acceptedValues": "horizontal / vertical",
			"default": "horizontal"
		},
		{
			"attribute": "content-position",
			"description": "设置分割线文案的位置",
			"type": "string",
			"acceptedValues": "left / right / center",
			"default": "center"
		}]
	},
	"el-drawer": {
		"attributes": [{
			"attribute": "append-to-body",
			"description": "Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "before-close",
			"description": "关闭前的回调，会暂停 Drawer 的关闭",
			"type": "function(done)，done 用于关闭 Drawer",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "close-on-press-escape",
			"description": "是否可以通过按下 ESC 关闭 Drawer",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "custom-class",
			"description": "Drawer 的自定义类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "destroy-on-close",
			"description": "控制是否在关闭 Drawer 之后将子元素全部销毁",
			"type": "boolean",
			"default": "false"
		},
		{
			"attribute": "modal",
			"description": "是否需要遮罩层",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "modal-append-to-body",
			"description": "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "direction",
			"description": "Drawer 打开的方向",
			"type": "Direction",
			"acceptedValues": "rtl / ltr / ttb / btt",
			"default": "rtl"
		},
		{
			"attribute": "show-close",
			"description": "是否显示关闭按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "size",
			"description": "Drawer 窗体的大小, 当使用 `number` 类型时, 以像素为单位, 当使用 `string` 类型时, 请传入 'x%', 否则便会以 `number` 类型解释",
			"type": "number / string",
			"default": "'30%'"
		},
		{
			"attribute": "title",
			"description": "Drawer 的标题，也可通过具名 slot （见下表）传入",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "visible",
			"description": "是否显示 Drawer，支持 .sync 修饰符",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "wrapperClosable",
			"description": "点击遮罩层是否可以关闭 Drawer",
			"type": "boolean",
			"default": "true"
		},
		{
			"attribute": "withHeader",
			"description": "控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效",
			"type": "boolean",
			"default": "true"
		}],
		"slots": [{
			"name": "—",
			"description": "Drawer 的内容"
		},
		{
			"name": "title",
			"description": "Drawer 标题区的内容"
		}],
		"methods": [{
			"name": "closeDrawer",
			"description": "用于关闭 Drawer, 该方法会调用传入的 `before-close` 方法"
		}],
		"events": [{
			"eventName": "open",
			"description": "Drawer 打开的回调",
			"parameters": "—"
		},
		{
			"eventName": "opened",
			"description": "Drawer 打开动画结束时的回调",
			"parameters": "—"
		},
		{
			"eventName": "close",
			"description": "Drawer 关闭的回调",
			"parameters": "—"
		},
		{
			"eventName": "closed",
			"description": "Drawer 关闭动画结束时的回调",
			"parameters": "—"
		}]
	},
	"el-dropdown": {
		"attributes": [{
			"attribute": "type",
			"description": "菜单按钮类型，同 Button 组件(只在`split-button`为 true 的情况下有效)",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "size",
			"description": "菜单尺寸，在`split-button`为 true 的情况下也对触发按钮生效",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "split-button",
			"description": "下拉触发元素呈现为按钮组",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "placement",
			"description": "菜单弹出位置",
			"type": "string",
			"acceptedValues": "top/top-start/top-end/bottom/bottom-start/bottom-end",
			"default": "bottom-end"
		},
		{
			"attribute": "trigger",
			"description": "触发下拉的行为",
			"type": "string",
			"acceptedValues": "hover, click",
			"default": "hover"
		},
		{
			"attribute": "hide-on-click",
			"description": "是否在点击菜单项后隐藏菜单",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "show-timeout",
			"description": "展开下拉菜单的延时（仅在 trigger 为 hover 时有效",
			"type": "number",
			"acceptedValues": "—",
			"default": "250"
		},
		{
			"attribute": "hide-timeout",
			"description": "收起下拉菜单的延时（仅在 trigger 为 hover 时有效",
			"type": "number",
			"acceptedValues": "—",
			"default": "150"
		},
		{
			"attribute": "tabindex",
			"description": "Dropdown 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}],
		"slots": [{
			"name": "—",
			"description": "触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件"
		},
		{
			"name": "dropdown",
			"description": "下拉列表，通常是 `<el-dropdown-menu>` 组件"
		}],
		"events": [{
			"eventName": "click",
			"description": "`split-button` 为 true 时，点击左侧按钮的回调",
			"parameters": "—"
		},
		{
			"eventName": "command",
			"description": "点击菜单项触发的事件回调",
			"parameters": "dropdown-item 的指令"
		},
		{
			"eventName": "visible-change",
			"description": "下拉框出现/隐藏时触发",
			"parameters": "出现则为 true，隐藏则为 false"
		}]
	},
	"el-dropdown-menu-item": {
		"attributes": [{
			"attribute": "command",
			"description": "指令",
			"type": "string/number/object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "divided",
			"description": "显示分割线",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "icon",
			"description": "图标类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}]
	},
	"el-empty": {
		"attributes": [{
			"attribute": "image",
			"description": "图片地址",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "image-size",
			"description": "图片大小（宽度）",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "description",
			"description": "文本描述",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}],
		"slots": [{
			"name": "default",
			"description": "自定义底部内容"
		},
		{
			"name": "image",
			"description": "自定义图片"
		},
		{
			"name": "description",
			"description": "自定义描述文字"
		}]
	},
	"el-form": {
		"attributes": [{
			"attribute": "model",
			"description": "表单数据对象",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "rules",
			"description": "表单验证规则",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "inline",
			"description": "行内表单模式",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "label-position",
			"description": "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width`",
			"type": "string",
			"acceptedValues": "right/left/top",
			"default": "right"
		},
		{
			"attribute": "label-width",
			"description": "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 `auto`。",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label-suffix",
			"description": "表单域标签的后缀",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "hide-required-asterisk",
			"description": "是否隐藏必填字段的标签旁边的红色星号",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "show-message",
			"description": "是否显示校验错误信息",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "inline-message",
			"description": "是否以行内形式展示校验信息",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "status-icon",
			"description": "是否在输入框中显示校验结果反馈图标",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "validate-on-rule-change",
			"description": "是否在 `rules` 属性改变后立即触发一次验证",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "size",
			"description": "用于控制该表单内组件的尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}],
		"methods": [],
		"events": [{
			"eventName": "validate",
			"description": "任一表单项被校验后触发",
			"parameters": "被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）"
		}]
	},
	"el-form-item": {
		"attributes": [{
			"attribute": "prop",
			"description": "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的",
			"type": "string",
			"acceptedValues": "传入 Form 组件的 `model` 中的字段",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "标签文本",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label-width",
			"description": "表单域标签的的宽度，例如 '50px'。支持 `auto`。",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "required",
			"description": "是否必填，如不设置，则会根据校验规则自动生成",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "rules",
			"description": "表单验证规则",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "error",
			"description": "表单域验证错误信息, 设置该值会使表单验证状态变为`error`，并显示该错误信息",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "show-message",
			"description": "是否显示校验错误信息",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "inline-message",
			"description": "以行内形式展示校验信息",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "size",
			"description": "用于控制该表单域下组件的尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini"
		}],
		"slots": [{
			"name": "—",
			"description": "Form Item 的内容"
		},
		{
			"name": "label",
			"description": "标签文本的内容"
		}],
		"methods": []
	},
	"el-form-item-scoped": {
		"slots": [{
			"name": "error",
			"description": "自定义表单校验信息的显示方式，参数为 { error }"
		}]
	},
	"el-image": {
		"attributes": [{
			"attribute": "src",
			"description": "图片源，同原生",
			"type": "string",
			"acceptedValues": "—"
		},
		{
			"attribute": "fit",
			"description": "确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)",
			"type": "string",
			"acceptedValues": "fill / contain / cover / none / scale-down"
		},
		{
			"attribute": "alt",
			"description": "原生 alt",
			"type": "string"
		},
		{
			"attribute": "referrer-policy",
			"description": "原生 referrerPolicy",
			"type": "string"
		},
		{
			"attribute": "lazy",
			"description": "是否开启懒加载",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "scroll-container",
			"description": "开启懒加载后，监听 scroll 事件的容器",
			"type": "string / HTMLElement",
			"acceptedValues": "—",
			"default": "最近一个 overflow 值为 auto 或 scroll 的父元素"
		},
		{
			"attribute": "preview-src-list",
			"description": "开启图片预览功能",
			"type": "Array",
			"acceptedValues": "—"
		},
		{
			"attribute": "z-index",
			"description": "设置图片预览的 z-index",
			"type": "Number",
			"acceptedValues": "—",
			"default": "2000"
		}],
		"events": [{
			"eventName": "load",
			"description": "图片加载成功触发",
			"parameters": "(e: Event)"
		},
		{
			"eventName": "error",
			"description": "图片加载失败触发",
			"parameters": "(e: Error)"
		}],
		"slots": [{
			"name": "placeholder",
			"description": "图片未加载的占位内容"
		},
		{
			"name": "error",
			"description": "加载失败的内容"
		}]
	},
	"el-infiniteScroll": {
		"attributes": [{
			"attribute": "infinite-scroll-disabled",
			"description": "是否禁用",
			"type": "boolean",
			"default": "false"
		},
		{
			"attribute": "infinite-scroll-delay",
			"description": "节流时延，单位为ms",
			"type": "number",
			"default": "200"
		},
		{
			"attribute": "infinite-scroll-distanc",
			"description": "触发加载的距离阈值，单位为px",
			"type": "number",
			"default": "0"
		},
		{
			"attribute": "infinite-scroll-immediate",
			"description": "是否立即执行加载方法，以防初始状态下内容无法撑满容器",
			"type": "boolean",
			"default": "true"
		}]
	},
	"el-input-number": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "min",
			"description": "设置计数器允许的最小值",
			"type": "number",
			"acceptedValues": "—",
			"default": "-Infinity"
		},
		{
			"attribute": "max",
			"description": "设置计数器允许的最大值",
			"type": "number",
			"acceptedValues": "—",
			"default": "Infinity"
		},
		{
			"attribute": "step",
			"description": "计数器步长",
			"type": "number",
			"acceptedValues": "—",
			"default": "1"
		},
		{
			"attribute": "step-strictly",
			"description": "是否只能输入 step 的倍数",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "precisio",
			"description": "数值精度",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "size",
			"description": "计数器尺寸",
			"type": "string",
			"acceptedValues": "large, small",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用计数器",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "controls",
			"description": "是否使用控制按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "controls-position",
			"description": "控制按钮位置",
			"type": "string",
			"acceptedValues": "right"
		},
		{
			"attribute": "name",
			"description": "原生属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "输入框关联的label文字",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "placeholder",
			"description": "输入框默认 placeholder",
			"type": "string"
		}],
		"events": [{
			"eventName": "change",
			"description": "绑定值被改变时触发",
			"parameters": "currentValue, oldValue"
		},
		{
			"eventName": "blur",
			"description": "在组件 Input 失去焦点时触发",
			"parameters": "(event: Event)"
		},
		{
			"eventName": "focus",
			"description": "在组件 Input 获得焦点时触发",
			"parameters": "(event: Event)"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 input 获取焦点"
		},
		{
			"name": "select",
			"description": "选中 input 中的文字"
		}]
	},
	"el-input": {
		"attributes": [{
			"attribute": "type",
			"description": "类型",
			"type": "string",
			"acceptedValues": "text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)",
			"default": "text"
		},
		{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "maxlength",
			"description": "原生属性，最大输入长度",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "minlength",
			"description": "原生属性，最小输入长度",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "show-word-limit",
			"description": "是否显示输入字数统计，只在 `type = \"text\"` 或 `type = \"textarea\"` 时有效",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "placeholder",
			"description": "输入框占位文本",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "clearable",
			"description": "是否可清空",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "show-password",
			"description": "是否显示切换密码图",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disabled",
			"description": "禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "size",
			"description": "输入框尺寸，只在 `type!=\"textarea\"` 时有效",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "prefix-icon",
			"description": "输入框头部图标",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "suffix-icon",
			"description": "输入框尾部图标",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "rows",
			"description": "输入框行数，只对 `type=\"textarea\"` 有效",
			"type": "number",
			"acceptedValues": "—",
			"default": "2"
		},
		{
			"attribute": "autosize",
			"description": "自适应内容高度，只对 `type=\"textarea\"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }",
			"type": "boolean / object",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "autocomplete",
			"description": "原生属性，自动补全",
			"type": "string",
			"acceptedValues": "on, off",
			"default": "off"
		},
		{
			"attribute": "auto-complete",
			"description": "下个主版本弃用",
			"type": "string",
			"acceptedValues": "on, off",
			"default": "off"
		},
		{
			"attribute": "name",
			"description": "原生属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "readonly",
			"description": "原生属性，是否只读",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "max",
			"description": "原生属性，设置最大值",
			"type": "—",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "min",
			"description": "原生属性，设置最小值",
			"type": "—",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "step",
			"description": "原生属性，设置输入字段的合法数字间隔",
			"type": "—",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "resize",
			"description": "控制是否能被用户缩放",
			"type": "string",
			"acceptedValues": "none, both, horizontal, vertical",
			"default": "—"
		},
		{
			"attribute": "autofocus",
			"description": "原生属性，自动获取焦点",
			"type": "boolean",
			"acceptedValues": "true, false",
			"default": "false"
		},
		{
			"attribute": "form",
			"description": "原生属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "输入框关联的label文字",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "tabindex",
			"description": "输入框的tabindex",
			"type": "string"
		},
		{
			"attribute": "validate-event",
			"description": "输入时是否触发表单的校验",
			"type": "boolean",
			"default": "true"
		}],
		"slots": [{
			"name": "prefix",
			"description": "输入框头部内容，只对 `type=\"text\"` 有效"
		},
		{
			"name": "suffix",
			"description": "输入框尾部内容，只对 `type=\"text\"` 有效"
		},
		{
			"name": "prepend",
			"description": "输入框前置内容，只对 `type=\"text\"` 有效"
		},
		{
			"name": "append",
			"description": "输入框后置内容，只对 `type=\"text\"` 有效"
		}],
		"events": [{
			"eventName": "blur",
			"description": "在 Input 失去焦点时触发",
			"parameters": "(event: Event)"
		},
		{
			"eventName": "focus",
			"description": "在 Input 获得焦点时触发",
			"parameters": "(event: Event)"
		},
		{
			"eventName": "change",
			"description": "仅在输入框失去焦点或用户按下回车时触发",
			"parameters": "(value: string \\| number)"
		},
		{
			"eventName": "input",
			"description": "在 Input 值改变时触发",
			"parameters": "(value: string \\| number)"
		},
		{
			"eventName": "clear",
			"description": "在点击由 `clearable` 属性生成的清空按钮时触发",
			"parameters": "—"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 input 获取焦点"
		},
		{
			"name": "blur",
			"description": "使 input 失去焦点"
		},
		{
			"name": "select",
			"description": "选中 input 中的文字"
		}]
	},
	"el-autocomplete": {
		"attributes": [{
			"attribute": "placeholder",
			"description": "输入框占位文本",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "value-key",
			"description": "输入建议对象中用于显示的键名",
			"type": "string",
			"acceptedValues": "—",
			"default": "value"
		},
		{
			"attribute": "value",
			"description": "必填值，输入绑定值",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "debounce",
			"description": "获取输入建议的去抖延时",
			"type": "number",
			"acceptedValues": "—",
			"default": "300"
		},
		{
			"attribute": "placement",
			"description": "菜单弹出位置",
			"type": "string",
			"acceptedValues": "top / top-start / top-end / bottom / bottom-start / bottom-end",
			"default": "bottom-start"
		},
		{
			"attribute": "fetch-suggestions",
			"description": "返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它",
			"type": "Function(queryString, callback)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "popper-class",
			"description": "Autocomplete 下拉列表的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "trigger-on-focus",
			"description": "是否在输入框 focus 时显示建议列表",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "name",
			"description": "原生属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "select-when-unmatched",
			"description": "在输入没有任何匹配建议的情况下，按下回车是否触发 `select` 事件",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "label",
			"description": "输入框关联的label文字",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "prefix-icon",
			"description": "输入框头部图标",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "suffix-icon",
			"description": "输入框尾部图标",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "hide-loading",
			"description": "是否隐藏远程加载时的加载图标",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "popper-append-to-body",
			"description": "是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false",
			"type": "boolean",
			"default": "true"
		},
		{
			"attribute": "highlight-first-item",
			"description": "是否默认突出显示远程搜索建议中的第一项",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}],
		"slots": [{
			"name": "prefix",
			"description": "输入框头部内容"
		},
		{
			"name": "suffix",
			"description": "输入框尾部内容"
		},
		{
			"name": "prepend",
			"description": "输入框前置内容"
		},
		{
			"name": "append",
			"description": "输入框后置内容"
		}],
		"events": [{
			"eventName": "select",
			"description": "点击选中建议项时触发",
			"parameters": "选中建议项"
		},
		{
			"eventName": "change",
			"description": "在 Input 值改变时触发",
			"parameters": "(value: string \\| number)"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 input 获取焦点"
		}]
	},
	"el-autocomplete-scoped": {
		"slots": [{
			"name": "—",
			"description": "自定义输入建议，参数为 { item }"
		}]
	},
	"el-row": {
		"attributes": [{
			"attribute": "gutter",
			"description": "栅格间隔",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "type",
			"description": "布局模式，可选 flex，现代浏览器下有效",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "justify",
			"description": "flex 布局下的水平排列方式",
			"type": "string",
			"acceptedValues": "start/end/center/space-around/space-between",
			"default": "start"
		},
		{
			"attribute": "align",
			"description": "flex 布局下的垂直排列方式",
			"type": "string",
			"acceptedValues": "top/middle/bottom",
			"default": "—"
		},
		{
			"attribute": "tag",
			"description": "自定义元素标签",
			"type": "string",
			"acceptedValues": "*",
			"default": "div"
		}]
	},
	"el-col": {
		"attributes": [{
			"attribute": "span",
			"description": "栅格占据的列数",
			"type": "number",
			"acceptedValues": "—",
			"default": "24"
		},
		{
			"attribute": "offset",
			"description": "栅格左侧的间隔格数",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "push",
			"description": "栅格向右移动格数",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "pull",
			"description": "栅格向左移动格数",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "xs",
			"description": "`<768px` 响应式栅格数或者栅格属性对象",
			"type": "number/object (例如： {span: 4, offset: 4})",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "sm",
			"description": "`≥768px` 响应式栅格数或者栅格属性对象",
			"type": "number/object (例如： {span: 4, offset: 4})",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "md",
			"description": "`≥992px` 响应式栅格数或者栅格属性对象",
			"type": "number/object (例如： {span: 4, offset: 4})",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "lg",
			"description": "`≥1200px` 响应式栅格数或者栅格属性对象",
			"type": "number/object (例如： {span: 4, offset: 4})",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "xl",
			"description": "`≥1920px` 响应式栅格数或者栅格属性对象",
			"type": "number/object (例如： {span: 4, offset: 4})",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "tag",
			"description": "自定义元素标签",
			"type": "string",
			"acceptedValues": "*",
			"default": "div"
		}]
	},
	"el-link": {
		"attributes": [{
			"attribute": "type",
			"description": "类型",
			"type": "string",
			"acceptedValues": "primary / success / warning / danger / info",
			"default": "default"
		},
		{
			"attribute": "underline",
			"description": "是否下划线",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用状态",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "href",
			"description": "原生 href 属性",
			"type": "string",
			"acceptedValues": "—"
		},
		{
			"attribute": "icon",
			"description": "图标类名",
			"type": "string",
			"acceptedValues": "—"
		}]
	},
	"el-menu": {
		"attributes": [{
			"attribute": "mode",
			"description": "模式",
			"type": "string",
			"acceptedValues": "horizontal / vertical",
			"default": "vertical"
		},
		{
			"attribute": "collapse",
			"description": "是否水平折叠收起菜单（仅在 mode 为 vertical 时可用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "background-color",
			"description": "菜单的背景色（仅支持 hex 格式）",
			"type": "string",
			"acceptedValues": "—",
			"default": "#ffffff"
		},
		{
			"attribute": "text-color",
			"description": "菜单的文字颜色（仅支持 hex 格式）",
			"type": "string",
			"acceptedValues": "—",
			"default": "#303133"
		},
		{
			"attribute": "active-text-color",
			"description": "当前激活菜单的文字颜色（仅支持 hex 格式）",
			"type": "string",
			"acceptedValues": "—",
			"default": "#409EFF"
		},
		{
			"attribute": "default-active",
			"description": "当前激活菜单的 index",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "default-openeds",
			"description": "当前打开的 sub-menu 的 index 的数组",
			"type": "Array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "unique-opened",
			"description": "是否只保持一个子菜单的展开",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "menu-trigger",
			"description": "子菜单打开的触发方式(只在 mode 为 horizontal 时有效)",
			"type": "string",
			"acceptedValues": "hover / click",
			"default": "hover"
		},
		{
			"attribute": "router",
			"description": "是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "collapse-transition",
			"description": "是否开启折叠动画",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		}],
		"methods": [{
			"name": "open",
			"description": "展开指定的 sub-menu"
		},
		{
			"name": "close",
			"description": "收起指定的 sub-menu"
		}],
		"events": [{
			"eventName": "select",
			"description": "菜单激活回调",
			"parameters": "index: 选中菜单项的 index, indexPath: 选中菜单项的 index path"
		},
		{
			"eventName": "open",
			"description": "sub-menu 展开的回调",
			"parameters": "index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path"
		},
		{
			"eventName": "close",
			"description": "sub-menu 收起的回调",
			"parameters": "index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path"
		}]
	},
	"el-submenu": {
		"attributes": [{
			"attribute": "index",
			"description": "唯一标志",
			"type": "string/null",
			"acceptedValues": "—",
			"default": "null"
		},
		{
			"attribute": "popper-class",
			"description": "弹出菜单的自定义类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "show-timeout",
			"description": "展开 sub-menu 的延时",
			"type": "number",
			"acceptedValues": "—",
			"default": "300"
		},
		{
			"attribute": "hide-timeout",
			"description": "收起 sub-menu 的延时",
			"type": "number",
			"acceptedValues": "—",
			"default": "300"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "popper-append-to-body",
			"description": "是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "一级子菜单：true / 非一级子菜单：false"
		}]
	},
	"el-menu-item": {
		"attributes": [{
			"attribute": "index",
			"description": "唯一标志",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "route",
			"description": "Vue Router 路径对象",
			"type": "Object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}]
	},
	"el-menu-group": {
		"attributes": [{
			"attribute": "title",
			"description": "分组标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}]
	},
	"el-page-header": {
		"attributes": [{
			"attribute": "title",
			"description": "标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "返回"
		},
		{
			"attribute": "content",
			"description": "内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "back",
			"description": "点击左侧区域触发",
			"parameters": "—"
		}],
		"slots": [{
			"name": "title",
			"description": "标题内容"
		},
		{
			"name": "content",
			"description": "内容"
		}]
	},
	"el-pagination": {
		"attributes": [{
			"attribute": "small",
			"description": "是否使用小型分页样式",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "background",
			"description": "是否为分页按钮添加背景色",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "page-size",
			"description": "每页显示条目个数，支持 .sync 修饰符",
			"type": "number",
			"acceptedValues": "—",
			"default": "10"
		},
		{
			"attribute": "total",
			"description": "总条目数",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "page-count",
			"description": "总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
			"type": "Number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "pager-count",
			"description": "页码按钮的数量，当总页数超过该值时会折叠",
			"type": "number",
			"acceptedValues": "大于等于 5 且小于等于 21 的奇数",
			"default": "7"
		},
		{
			"attribute": "current-page",
			"description": "当前页数，支持 .sync 修饰符",
			"type": "number",
			"acceptedValues": "—",
			"default": "1"
		},
		{
			"attribute": "layout",
			"description": "组件布局，子组件名用逗号分",
			"type": "String",
			"acceptedValues": "`sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot`",
			"default": "'prev, pager, next, jumper, ->, total'"
		},
		{
			"attribute": "page-sizes",
			"description": "每页显示个数选择器的选项设置",
			"type": "number[]",
			"acceptedValues": "—",
			"default": "[10, 20, 30, 40, 50, 100]"
		},
		{
			"attribute": "popper-class",
			"description": "每页显示个数选择器的下拉框类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "prev-text",
			"description": "替代图标显示的上一页文字",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "next-text",
			"description": "替代图标显示的下一页文字",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "hide-on-single-page",
			"description": "只有一页时是否隐藏",
			"type": "boolean",
			"acceptedValues": "—"
		}],
		"events": [{
			"eventName": "size-change",
			"description": "pageSize 改变时会触发",
			"parameters": "每页条数"
		},
		{
			"eventName": "current-change",
			"description": "currentPage 改变时会触发",
			"parameters": "当前页"
		},
		{
			"eventName": "prev-click",
			"description": "用户点击上一页按钮改变当前页后触发",
			"parameters": "当前页"
		},
		{
			"eventName": "next-click",
			"description": "用户点击下一页按钮改变当前页后触发",
			"parameters": "当前页"
		}],
		"slots": [{
			"name": "—",
			"description": "自定义内容，需要在 `layout` 中列出 `slot`"
		}]
	},
	"el-popconfirm": {
		"attributes": [{
			"attribute": "title",
			"description": "标题",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "confirm-button-text",
			"description": "确认按钮文字",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "cancel-button-text",
			"description": "取消按钮文字",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "confirm-button-type",
			"description": "确认按钮类型",
			"type": "String",
			"acceptedValues": "—",
			"default": "Primary"
		},
		{
			"attribute": "cancel-button-type",
			"description": "取消按钮类型",
			"type": "String",
			"acceptedValues": "—",
			"default": "Text"
		},
		{
			"attribute": "icon",
			"description": "Icon",
			"type": "String",
			"acceptedValues": "—",
			"default": "el-icon-question"
		},
		{
			"attribute": "icon-color",
			"description": "Icon 颜色",
			"type": "String",
			"acceptedValues": "—",
			"default": "#f90"
		},
		{
			"attribute": "hide-icon",
			"description": "是否隐藏 Icon",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		}],
		"slots": [{
			"name": "reference",
			"description": "触发 Popconfirm 显示的 HTML 元素"
		}],
		"events": [{
			"eventName": "confirm",
			"description": "点击确认按钮时触发",
			"parameters": "—"
		},
		{
			"eventName": "cancel",
			"description": "点击取消按钮时触发",
			"parameters": "—"
		}]
	},
	"el-popover": {
		"attributes": [{
			"attribute": "trigger",
			"description": "触发方式",
			"type": "String",
			"acceptedValues": "click/focus/hover/manual",
			"default": "click"
		},
		{
			"attribute": "title",
			"description": "标题",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "content",
			"description": "显示的内容，也可以通过 `slot` 传入 DOM",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "width",
			"description": "宽度",
			"type": "String, Number",
			"acceptedValues": "—",
			"default": "最小宽度 150px"
		},
		{
			"attribute": "placement",
			"description": "出现位置",
			"type": "String",
			"acceptedValues": "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
			"default": "bottom"
		},
		{
			"attribute": "disabled",
			"description": "Popover 是否可用",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "value / v-model",
			"description": "状态是否可见",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "offset",
			"description": "出现位置的偏移量",
			"type": "Number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "transition",
			"description": "定义渐变动画",
			"type": "String",
			"acceptedValues": "—",
			"default": "fade-in-linear"
		},
		{
			"attribute": "visible-arrow",
			"description": "是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper)",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "popper-options",
			"description": "[popper.js](https://popper.js.org/documentation.html) 的参数",
			"type": "Object",
			"acceptedValues": "参考 [popper.js](https://popper.js.org/documentation.html) 文档",
			"default": "`{ boundariesElement: 'body', gpuAcceleration: false }`"
		},
		{
			"attribute": "popper-class",
			"description": "为 popper 添加类名",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "open-delay",
			"description": "触发方式为 hover 时的显示延迟，单位为毫秒",
			"type": "Number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "close-delay",
			"description": "触发方式为 hover 时的隐藏延迟，单位为毫秒",
			"type": "number",
			"acceptedValues": "—",
			"default": "200"
		},
		{
			"attribute": "tabindex",
			"description": "Popover 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		}],
		"slots": [{
			"name": "—",
			"description": "Popover 内嵌 HTML 文本"
		},
		{
			"name": "reference",
			"description": "触发 Popover 显示的 HTML 元素"
		}],
		"events": [{
			"eventName": "show",
			"description": "显示时触发",
			"parameters": "—"
		},
		{
			"eventName": "after-enter",
			"description": "显示动画播放完毕后触发",
			"parameters": "—"
		},
		{
			"eventName": "hide",
			"description": "隐藏时触发",
			"parameters": "—"
		},
		{
			"eventName": "after-leave",
			"description": "隐藏动画播放完毕后触发",
			"parameters": "—"
		}]
	},
	"el-progress": {
		"attributes": [{
			"attribute": "**percentage**",
			"description": "**百分比（必填）**",
			"type": "number",
			"acceptedValues": "0-100",
			"default": "0"
		},
		{
			"attribute": "type",
			"description": "进度条类型",
			"type": "string",
			"acceptedValues": "line/circle/dashboard",
			"default": "line"
		},
		{
			"attribute": "stroke-width",
			"description": "进度条的宽度，单位 px",
			"type": "number",
			"acceptedValues": "—",
			"default": "6"
		},
		{
			"attribute": "text-inside",
			"description": "进度条显示文字内置在进度条内（只在 type=line 时可用）",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "status",
			"description": "进度条当前状态",
			"type": "string",
			"acceptedValues": "success/exception/warning",
			"default": "—"
		},
		{
			"attribute": "color",
			"description": "进度条背景色（会覆盖 status 状态颜色）",
			"type": "string/function/array",
			"acceptedValues": "—",
			"default": "''"
		},
		{
			"attribute": "width",
			"description": "环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）",
			"type": "number",
			"acceptedValues": "",
			"default": "126"
		},
		{
			"attribute": "show-text",
			"description": "是否显示进度条文字内容",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "stroke-linecap",
			"description": "circle/dashboard 类型路径两端的形状",
			"type": "string",
			"acceptedValues": "butt/round/square",
			"default": "round"
		},
		{
			"attribute": "format",
			"description": "指定进度条文字内容",
			"type": "function(percentage)",
			"acceptedValues": "—",
			"default": "—"
		}]
	},
	"el-radio": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "string / number / boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "Radio 的 value",
			"type": "string / number / boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "border",
			"description": "是否显示边框",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "size",
			"description": "Radio 的尺寸，仅在 border 为真时有效",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "name",
			"description": "原生 name 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "change",
			"description": "绑定值变化时触发的事件",
			"parameters": "选中的 Radio label 值"
		}]
	},
	"el-radio-group": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "string / number / boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "size",
			"description": "单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "text-color",
			"description": "按钮形式的 Radio 激活时的文本颜色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#ffffff"
		},
		{
			"attribute": "fill",
			"description": "按钮形式的 Radio 激活时的填充色和边框色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#409EFF"
		}],
		"events": [{
			"eventName": "change",
			"description": "绑定值变化时触发的事件",
			"parameters": "选中的 Radio label 值"
		}]
	},
	"el-radio-button": {
		"attributes": [{
			"attribute": "label",
			"description": "Radio 的 value",
			"type": "string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "name",
			"description": "原生 name 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		}]
	},
	"el-rate": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "max",
			"description": "最大分值",
			"type": "number",
			"acceptedValues": "—",
			"default": "5"
		},
		{
			"attribute": "disabled",
			"description": "是否为只读",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "allow-half",
			"description": "是否允许半选",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "low-threshold",
			"description": "低分和中等分数的界限值，值本身被划分在低分中",
			"type": "number",
			"acceptedValues": "—",
			"default": "2"
		},
		{
			"attribute": "high-threshold",
			"description": "高分和中等分数的界限值，值本身被划分在高分中",
			"type": "number",
			"acceptedValues": "—",
			"default": "4"
		},
		{
			"attribute": "colors",
			"description": "icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色",
			"type": "array/object",
			"acceptedValues": "—",
			"default": "['#F7BA2A', '#F7BA2A', '#F7BA2A']"
		},
		{
			"attribute": "void-color",
			"description": "未选中 icon 的颜色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#C6D1DE"
		},
		{
			"attribute": "disabled-void-color",
			"description": "只读时未选中 icon 的颜色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#EFF2F7"
		},
		{
			"attribute": "icon-classes",
			"description": "icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名",
			"type": "array/object",
			"acceptedValues": "—",
			"default": "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']"
		},
		{
			"attribute": "void-icon-class",
			"description": "未选中 icon 的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-star-off"
		},
		{
			"attribute": "disabled-void-icon-class",
			"description": "只读时未选中 icon 的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-star-on"
		},
		{
			"attribute": "show-text",
			"description": "是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "show-score",
			"description": "是否显示当前分数，show-score 和 show-text 不能同时为真",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "text-color",
			"description": "辅助文字的颜色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#1F2D3D"
		},
		{
			"attribute": "texts",
			"description": "辅助文字数组",
			"type": "array",
			"acceptedValues": "—",
			"default": "['极差', '失望', '一般', '满意', '惊喜']"
		},
		{
			"attribute": "score-template",
			"description": "分数显示模板",
			"type": "string",
			"acceptedValues": "—",
			"default": "{value}"
		}],
		"events": [{
			"eventName": "change",
			"description": "分值改变时触发",
			"parameters": "改变后的分值"
		}]
	},
	"el-result": {
		"attributes": [{
			"attribute": "title",
			"description": "标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "sub-title",
			"description": "二级标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "icon",
			"description": "图标类型",
			"type": "string",
			"acceptedValues": "success / warning / info / error",
			"default": "info"
		}],
		"slots": [{
			"name": "icon",
			"description": "自定义图标"
		},
		{
			"name": "title",
			"description": "自定义标题"
		},
		{
			"name": "subTitle",
			"description": "自定义二级标题"
		},
		{
			"name": "extra",
			"description": "自定义底部额外区域"
		}]
	},
	"el-select": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "boolean / string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "multiple",
			"description": "是否多选",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "value-key",
			"description": "作为 value 唯一标识的键名，绑定值为对象类型时必填",
			"type": "string",
			"acceptedValues": "—",
			"default": "value"
		},
		{
			"attribute": "size",
			"description": "输入框尺寸",
			"type": "string",
			"acceptedValues": "medium/small/mini",
			"default": "—"
		},
		{
			"attribute": "clearable",
			"description": "是否可以清空选项",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "collapse-tags",
			"description": "多选时是否将选中值按文字的形式展示",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "multiple-limit",
			"description": "多选时用户最多可以选择的项目数，为 0 则不限制",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "name",
			"description": "select input 的 name 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "autocomplete",
			"description": "select input 的 autocomplete 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "off"
		},
		{
			"attribute": "auto-complete",
			"description": "下个主版本弃用",
			"type": "string",
			"acceptedValues": "—",
			"default": "off"
		},
		{
			"attribute": "placeholder",
			"description": "占位符",
			"type": "string",
			"acceptedValues": "—",
			"default": "请选择"
		},
		{
			"attribute": "filterable",
			"description": "是否可搜索",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "allow-create",
			"description": "是否允许用户创建新条目，需配合 `filterable` 使用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "filter-method",
			"description": "自定义搜索方法",
			"type": "function",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "remote",
			"description": "是否为远程搜索",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "remote-method",
			"description": "远程搜索方法",
			"type": "function",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "loading",
			"description": "是否正在从远程获取数据",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "loading-text",
			"description": "远程加载时显示的文字",
			"type": "string",
			"acceptedValues": "—",
			"default": "加载中"
		},
		{
			"attribute": "no-match-text",
			"description": "搜索条件无匹配时显示的文字，也可以使用`slot=\"empty\"`设置",
			"type": "string",
			"acceptedValues": "—",
			"default": "无匹配数据"
		},
		{
			"attribute": "no-data-text",
			"description": "选项为空时显示的文字，也可以使用`slot=\"empty\"`设置",
			"type": "string",
			"acceptedValues": "—",
			"default": "无数据"
		},
		{
			"attribute": "popper-class",
			"description": "Select 下拉框的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "reserve-keyword",
			"description": "多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "default-first-option",
			"description": "在输入框按下回车，选择第一个匹配项。需配合 `filterable` 或 `remote` 使用",
			"type": "boolean",
			"default": "false"
		},
		{
			"attribute": "popper-append-to-body",
			"description": "是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false",
			"type": "boolean",
			"default": "true"
		},
		{
			"attribute": "automatic-dropdown",
			"description": "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
			"type": "boolean",
			"default": "false"
		}],
		"events": [{
			"eventName": "change",
			"description": "选中值发生变化时触发",
			"parameters": "目前的选中值"
		},
		{
			"eventName": "visible-change",
			"description": "下拉框出现/隐藏时触发",
			"parameters": "出现则为 true，隐藏则为 false"
		},
		{
			"eventName": "remove-tag",
			"description": "多选模式下移除tag时触发",
			"parameters": "移除的tag值"
		},
		{
			"eventName": "clear",
			"description": "可清空的单选模式下用户点击清空按钮时触发",
			"parameters": "—"
		},
		{
			"eventName": "blur",
			"description": "当 input 失去焦点时触发",
			"parameters": "(event: Event)"
		},
		{
			"eventName": "focus",
			"description": "当 input 获得焦点时触发",
			"parameters": "(event: Event)"
		}],
		"slots": [{
			"name": "—",
			"description": "Option 组件列表"
		},
		{
			"name": "prefix",
			"description": "Select 组件头部内容"
		},
		{
			"name": "empty",
			"description": "无选项时的列表"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 input 获取焦点"
		},
		{
			"name": "blur",
			"description": "使 input 失去焦点，并隐藏下拉框"
		}]
	},
	"el-option-group": {
		"attributes": [{
			"attribute": "label",
			"description": "分组的组名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否将该分组下所有选项置为禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}]
	},
	"el-option": {
		"attributes": [{
			"attribute": "value",
			"description": "选项的值",
			"type": "string/number/object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "选项的标签，若不设置则默认与 `value` 相同",
			"type": "string/number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用该选项",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}]
	},
	"el-skeleton": {
		"attributes": [{
			"attribute": "animated",
			"description": "是否使用动画",
			"type": "boolean",
			"acceptedValues": "true / false",
			"default": "false"
		},
		{
			"attribute": "count",
			"description": "渲染多少个 template, 建议使用尽可能小的数字",
			"type": "number",
			"acceptedValues": "integer",
			"default": "1"
		},
		{
			"attribute": "loading",
			"description": "是否显示 skeleton 骨架屏",
			"type": "boolean",
			"acceptedValues": "true / false",
			"default": "true"
		},
		{
			"attribute": "rows",
			"description": "骨架屏段落数量",
			"type": "number",
			"acceptedValues": "正整数",
			"default": "4"
		},
		{
			"attribute": "throttle",
			"description": "延迟占位 DOM 渲染的时间, 单位是毫秒",
			"type": "number",
			"acceptedValues": "正整数",
			"default": "0"
		}],
		"slots": [{
			"name": "default",
			"description": "\b用来展示真实 UI"
		},
		{
			"name": "template",
			"description": "用来展示自定义占位符"
		}]
	},
	"el-skeleton-item": {
		"attributes": [{
			"attribute": "variant",
			"description": "当前显示的占位元素的样式",
			"type": "Enum(string)",
			"acceptedValues": "p / text / h1 / h3 / text / caption / button / image / circle / rect",
			"default": "text"
		}]
	},
	"el-slider": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "min",
			"description": "最小值",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "max",
			"description": "最大值",
			"type": "number",
			"acceptedValues": "—",
			"default": "100"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "step",
			"description": "步长",
			"type": "number",
			"acceptedValues": "—",
			"default": "1"
		},
		{
			"attribute": "show-input",
			"description": "是否显示输入框，仅在非范围选择时有效",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "show-input-controls",
			"description": "在显示输入框的情况下，是否显示输入框的控制按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "input-size",
			"description": "输入框的尺寸",
			"type": "string",
			"acceptedValues": "large / medium / small / mini",
			"default": "small"
		},
		{
			"attribute": "show-stops",
			"description": "是否显示间断点",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "show-tooltip",
			"description": "是否显示 tooltip",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "format-tooltip",
			"description": "格式化 tooltip message",
			"type": "function(value)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "range",
			"description": "是否为范围选择",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "vertical",
			"description": "是否竖向模式",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "height",
			"description": "Slider 高度，竖向模式时必填",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "屏幕阅读器标签",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "debounce",
			"description": "输入时的去抖延迟，毫秒，仅在`show-input`等于true时有效",
			"type": "number",
			"acceptedValues": "—",
			"default": "300"
		},
		{
			"attribute": "tooltip-class",
			"description": "tooltip 的自定义类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "marks",
			"description": "标记， key 的类型必须为 number 且取值在闭区间 `[min, max]` 内，每个标记可以单独设置样式",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "change",
			"description": "值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）",
			"parameters": "改变后的值"
		},
		{
			"eventName": "input",
			"description": "数据改变时触发（使用鼠标拖曳时，活动过程实时触发）",
			"parameters": "改变后的值"
		}]
	},
	"el-steps": {
		"attributes": [{
			"attribute": "space",
			"description": "每个 step 的间距，不填写将自适应间距。支持百分比。",
			"type": "number / string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "direction",
			"description": "显示方向",
			"type": "string",
			"acceptedValues": "vertical/horizontal",
			"default": "horizontal"
		},
		{
			"attribute": "active",
			"description": "设置当前激活步骤",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "process-status",
			"description": "设置当前步骤的状态",
			"type": "string",
			"acceptedValues": "wait / process / finish / error / success",
			"default": "process"
		},
		{
			"attribute": "finish-status",
			"description": "设置结束步骤的状态",
			"type": "string",
			"acceptedValues": "wait / process / finish / error / success",
			"default": "finish"
		},
		{
			"attribute": "align-center",
			"description": "进行居中对齐",
			"type": "boolean",
			"default": "false"
		},
		{
			"attribute": "simple",
			"description": "是否应用简洁风格",
			"type": "boolean",
			"default": "false"
		}]
	},
	"el-step": {
		"attributes": [{
			"attribute": "title",
			"description": "标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "description",
			"description": "描述性文字",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "icon",
			"description": "图标",
			"type": "传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入",
			"acceptedValues": "string",
			"default": "—"
		},
		{
			"attribute": "status",
			"description": "设置当前步骤的状态，不设置则根据 steps 确定状态",
			"type": "wait / process / finish / error / success",
			"default": ""
		}],
		"slots": [{
			"name": "icon",
			"description": "自定义图标"
		},
		{
			"name": "title",
			"description": "自定义标题"
		},
		{
			"name": "description",
			"description": "自定义描述性文字"
		}]
	},
	"el-switch": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "boolean / string / number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "width",
			"description": "switch 的宽度（像素）",
			"type": "number",
			"acceptedValues": "—",
			"default": "40"
		},
		{
			"attribute": "active-icon-class",
			"description": "switch 打开时所显示图标的类名，设置此项会忽略 `active-text`",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "inactive-icon-class",
			"description": "switch 关闭时所显示图标的类名，设置此项会忽略 `inactive-text`",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "active-text",
			"description": "switch 打开时的文字描述",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "inactive-text",
			"description": "switch 关闭时的文字描述",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "active-value",
			"description": "switch 打开时的值",
			"type": "boolean / string / number",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "inactive-value",
			"description": "switch 关闭时的值",
			"type": "boolean / string / number",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "active-color",
			"description": "switch 打开时的背景色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#409EFF"
		},
		{
			"attribute": "inactive-color",
			"description": "switch 关闭时的背景色",
			"type": "string",
			"acceptedValues": "—",
			"default": "#C0CCDA"
		},
		{
			"attribute": "name",
			"description": "switch 对应的 name 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "validate-event",
			"description": "改变 switch 状态时是否触发表单的校验",
			"type": "boolean",
			"default": "true"
		}],
		"events": [{
			"eventName": "change",
			"description": "switch 状态发生变化时的回调函数",
			"parameters": "新状态的值"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 Switch 获取焦点"
		}]
	},
	"el-table": {
		"attributes": [{
			"attribute": "data",
			"description": "显示的数据",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "height",
			"description": "Table 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。",
			"type": "string/number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "max-height",
			"description": "Table 的最大高度。合法的值为数字或者单位为 px 的高度。",
			"type": "string/number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "stripe",
			"description": "是否为斑马纹 table",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "border",
			"description": "是否带有纵向边框",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "size",
			"description": "Table 的尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "fit",
			"description": "列的宽度是否自撑开",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "show-header",
			"description": "是否显示表头",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "highlight-current-row",
			"description": "是否要高亮当前行",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "current-row-key",
			"description": "当前行的 key，只写属性",
			"type": "String,Number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "row-class-name",
			"description": "行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。",
			"type": "Function({row, rowIndex})/String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "row-style",
			"description": "行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。",
			"type": "Function({row, rowIndex})/Object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "cell-class-name",
			"description": "单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。",
			"type": "Function({row, column, rowIndex, columnIndex})/String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "cell-style",
			"description": "单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。",
			"type": "Function({row, column, rowIndex, columnIndex})/Object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "header-row-class-name",
			"description": "表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。",
			"type": "Function({row, rowIndex})/String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "header-row-style",
			"description": "表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。",
			"type": "Function({row, rowIndex})/Object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "header-cell-class-name",
			"description": "表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。",
			"type": "Function({row, column, rowIndex, columnIndex})/String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "header-cell-style",
			"description": "表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。",
			"type": "Function({row, column, rowIndex, columnIndex})/Object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "row-key",
			"description": "行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：`user.info.id`，但不支持 `user.info[0].id`，此种情况请使用 `Function`。",
			"type": "Function(row)/String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "empty-text",
			"description": "空数据时显示的文本内容，也可以通过 `slot=\"empty\"` 设置",
			"type": "String",
			"acceptedValues": "—",
			"default": "暂无数据"
		},
		{
			"attribute": "default-expand-all",
			"description": "是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "expand-row-keys",
			"description": "可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组",
			"type": "Array",
			"acceptedValues": "—",
			"default": ""
		},
		{
			"attribute": "default-sort",
			"description": "默认的排序列的 prop 和顺序。它的`prop`属性指定默认的排序的列，`order`指定默认排序的顺",
			"type": "Object",
			"acceptedValues": "`order`: ascending, descending",
			"default": "如果只指定了`prop`, 没有指定`order`, 则默认顺序是ascending"
		},
		{
			"attribute": "tooltip-effect",
			"description": "tooltip `effect` 属性",
			"type": "String",
			"acceptedValues": "dark/light",
			"default": ""
		},
		{
			"attribute": "show-summary",
			"description": "是否在表尾显示合计行",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "sum-text",
			"description": "合计行第一列的文本",
			"type": "String",
			"acceptedValues": "—",
			"default": "合计"
		},
		{
			"attribute": "summary-method",
			"description": "自定义的合计计算方法",
			"type": "Function({ columns, data })",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "span-method",
			"description": "合并行或列的计算方法",
			"type": "Function({ row, column, rowIndex, columnIndex })",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "select-on-indeterminate",
			"description": "在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "indent",
			"description": "展示树形数据时，树节点的缩进",
			"type": "Number",
			"acceptedValues": "—",
			"default": "16"
		},
		{
			"attribute": "lazy",
			"description": "是否懒加载子节点数据",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "load",
			"description": "加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息",
			"type": "Function(row, treeNode, resolve)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "tree-props",
			"description": "渲染嵌套数据的配置选项",
			"type": "Object",
			"acceptedValues": "—",
			"default": "{ hasChildren: 'hasChildren', children: 'children' }"
		}],
		"events": [{
			"eventName": "select",
			"description": "当用户手动勾选数据行的 Checkbox 时触发的事件",
			"parameters": "selection, row"
		},
		{
			"eventName": "select-all",
			"description": "当用户手动勾选全选 Checkbox 时触发的事件",
			"parameters": "selection"
		},
		{
			"eventName": "selection-change",
			"description": "当选择项发生变化时会触发该事件",
			"parameters": "selection"
		},
		{
			"eventName": "cell-mouse-enter",
			"description": "当单元格 hover 进入时会触发该事件",
			"parameters": "row, column, cell, event"
		},
		{
			"eventName": "cell-mouse-leave",
			"description": "当单元格 hover 退出时会触发该事件",
			"parameters": "row, column, cell, event"
		},
		{
			"eventName": "cell-click",
			"description": "当某个单元格被点击时会触发该事件",
			"parameters": "row, column, cell, event"
		},
		{
			"eventName": "cell-dblclick",
			"description": "当某个单元格被双击击时会触发该事件",
			"parameters": "row, column, cell, event"
		},
		{
			"eventName": "row-click",
			"description": "当某一行被点击时会触发该事件",
			"parameters": "row, column, event"
		},
		{
			"eventName": "row-contextmenu",
			"description": "当某一行被鼠标右键点击时会触发该事件",
			"parameters": "row, column, event"
		},
		{
			"eventName": "row-dblclick",
			"description": "当某一行被双击时会触发该事件",
			"parameters": "row, column, event"
		},
		{
			"eventName": "header-click",
			"description": "当某一列的表头被点击时会触发该事件",
			"parameters": "column, event"
		},
		{
			"eventName": "header-contextmenu",
			"description": "当某一列的表头被鼠标右键点击时触发该事件",
			"parameters": "column, event"
		},
		{
			"eventName": "sort-change",
			"description": "当表格的排序条件发生变化的时候会触发该事件",
			"parameters": "{ column, prop, order }"
		},
		{
			"eventName": "filter-change",
			"description": "当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。",
			"parameters": "filters"
		},
		{
			"eventName": "current-change",
			"description": "当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的 highlight-current-row 属性",
			"parameters": "currentRow, oldCurrentRow"
		},
		{
			"eventName": "header-dragend",
			"description": "当拖动表头改变了列的宽度的时候会触发该事件",
			"parameters": "newWidth, oldWidth, column, event"
		},
		{
			"eventName": "expand-change",
			"description": "当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）",
			"parameters": "row, (expandedRows \\| expanded)"
		}],
		"methods": [{
			"name": "clearSelection",
			"description": "用于多选表格，清空用户的选择"
		},
		{
			"name": "toggleRowSelection",
			"description": "用于多选表格，切换某一行的选中状态，如果使用了第二个参数，则是设置这一行选中与否（selected 为 true 则选中）"
		},
		{
			"name": "toggleAllSelection",
			"description": "用于多选表格，切换所有行的选中状态"
		},
		{
			"name": "toggleRowExpansion",
			"description": "用于可展开表格与树形表格，切换某一行的展开状态，如果使用了第二个参数，则是设置这一行展开与否（expanded 为 true 则展开）"
		},
		{
			"name": "setCurrentRow",
			"description": "用于单选表格，设定某一行为选中行，如果调用时不加参数，则会取消目前高亮行的选中状态。"
		},
		{
			"name": "clearSort",
			"description": "用于清空排序条件，数据会恢复成未排序的状态"
		},
		{
			"name": "clearFilter",
			"description": "不传入参数时用于清空所有过滤条件，数据会恢复成未过滤的状态，也可传入由columnKey组成的数组以清除指定列的过滤条件"
		},
		{
			"name": "doLayout",
			"description": "对 Table 进行重新布局。当 Table 或其祖先元素由隐藏切换为显示时，可能需要调用此方法"
		},
		{
			"name": "sort",
			"description": "手动对 Table 进行排序。参数`prop`属性指定排序列，`order`指定排序顺序。"
		}],
		"slots": [{
			"name": "append",
			"description": "插入至表格最后一行之后的内容，如果需要对表格的内容进行无限滚动操作，可能需要用到这个 slot。若表格有合计行，该 slot 会位于合计行之上。"
		}]
	},
	"el-table-column": {
		"attributes": [{
			"attribute": "type",
			"description": "对应列的类型。如果设置了 `selection` 则显示多选框；如果设置了 `index` 则显示该行的索引（从 1 开始计算）；如果设置了 `expand` 则显示为一个可展开的按钮",
			"type": "string",
			"acceptedValues": "selection/index/expand",
			"default": "—"
		},
		{
			"attribute": "index",
			"description": "如果设置了 `type=index`，可以通过传递 `index` 属性来自定义索引",
			"type": "number, Function(index)"
		},
		{
			"attribute": "column-key",
			"description": "column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label",
			"description": "显示的标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "prop",
			"description": "对应列内容的字段名，也可以使用 property 属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "width",
			"description": "对应列的宽度",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "min-width",
			"description": "对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "fixed",
			"description": "列是否固定在左侧或者右侧，true 表示固定在左侧",
			"type": "string, boolean",
			"acceptedValues": "true, left, right",
			"default": "—"
		},
		{
			"attribute": "render-header",
			"description": "列标题 Label 区域渲染使用的 Function",
			"type": "Function(h, { column, $index })",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "sortable",
			"description": "对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件",
			"type": "boolean, string",
			"acceptedValues": "true, false, 'custom'",
			"default": "false"
		},
		{
			"attribute": "sort-method",
			"description": "对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致",
			"type": "Function(a, b)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "sort-by",
			"description": "指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推",
			"type": "String/Array/Function(row, index)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "sort-orders",
			"description": "数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序",
			"type": "array",
			"acceptedValues": "数组中的元素需为以下三者之一：`ascending` 表示升序，`descending` 表示降序，`null` 表示还原为原始顺序",
			"default": "['ascending', 'descending', null]"
		},
		{
			"attribute": "resizable",
			"description": "对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "formatter",
			"description": "用来格式化内容",
			"type": "Function(row, column, cellValue, index)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "show-overflow-tooltip",
			"description": "当内容过长被隐藏时显示 tooltip",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "align",
			"description": "对齐方式",
			"type": "String",
			"acceptedValues": "left/center/right",
			"default": "left"
		},
		{
			"attribute": "header-align",
			"description": "表头对齐方式，若不设置该项，则使用表格的对齐方式",
			"type": "String",
			"acceptedValues": "left/center/right",
			"default": "—"
		},
		{
			"attribute": "class-name",
			"description": "列的 className",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "label-class-name",
			"description": "当前列标题的自定义类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "selectable",
			"description": "仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选",
			"type": "Function(row, index)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "reserve-selection",
			"description": "仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 `row-key`）",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "filters",
			"description": "数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。",
			"type": "Array[{ text, value }]",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "filter-placement",
			"description": "过滤弹出框的定位",
			"type": "String",
			"acceptedValues": "与 Tooltip 的 `placement` 属性相同",
			"default": "—"
		},
		{
			"attribute": "filter-multiple",
			"description": "数据过滤的选项是否多选",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "filter-method",
			"description": "数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。",
			"type": "Function(value, row, column)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "filtered-value",
			"description": "选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。",
			"type": "Array",
			"acceptedValues": "—",
			"default": "—"
		}]
	},
	"el-table-column-scoped": {
		"slots": [{
			"name": "—",
			"description": "自定义列的内容，参数为 { row, column, $index }"
		},
		{
			"name": "header",
			"description": "自定义表头的内容. 参数为 { column, $index }"
		}]
	},
	"el-tabs": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值，选中选项卡的 name",
			"type": "string",
			"acceptedValues": "—",
			"default": "第一个选项卡的 name"
		},
		{
			"attribute": "type",
			"description": "风格类型",
			"type": "string",
			"acceptedValues": "card/border-card",
			"default": "—"
		},
		{
			"attribute": "closable",
			"description": "标签是否可关闭",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "addable",
			"description": "标签是否可增加",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "editable",
			"description": "标签是否同时可增加和关闭",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "tab-position",
			"description": "选项卡所在位置",
			"type": "string",
			"acceptedValues": "top/right/bottom/left",
			"default": "top"
		},
		{
			"attribute": "stretch",
			"description": "标签的宽度是否自撑开",
			"type": "boolean",
			"default": "false"
		},
		{
			"attribute": "before-leave",
			"description": "切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。",
			"type": "Function(activeName, oldActiveName)",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "tab-click",
			"description": "tab 被选中时触发",
			"parameters": "被选中的标签 tab 实例"
		},
		{
			"eventName": "tab-remove",
			"description": "点击 tab 移除按钮后触发",
			"parameters": "被删除的标签的 name"
		},
		{
			"eventName": "tab-add",
			"description": "点击 tabs 的新增按钮后触发",
			"parameters": "—"
		},
		{
			"eventName": "edit",
			"description": "点击 tabs 的新增按钮或 tab 被关闭后触发",
			"parameters": "(targetName, action)"
		}]
	},
	"el-tab-pane": {
		"attributes": [{
			"attribute": "label",
			"description": "选项卡标题",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "name",
			"description": "与选项卡绑定值 value 对应的标识符，表示选项卡别名",
			"type": "string",
			"acceptedValues": "—",
			"default": "该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'"
		},
		{
			"attribute": "closable",
			"description": "标签是否可关闭",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "lazy",
			"description": "标签是否延迟渲染",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}]
	},
	"el-tag": {
		"attributes": [{
			"attribute": "type",
			"description": "类型",
			"type": "string",
			"acceptedValues": "success/info/warning/danger",
			"default": "—"
		},
		{
			"attribute": "closable",
			"description": "是否可关闭",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disable-transitions",
			"description": "是否禁用渐变动画",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "hit",
			"description": "是否有边框描边",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "color",
			"description": "背景色",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "size",
			"description": "尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "effect",
			"description": "主题",
			"type": "string",
			"acceptedValues": "dark / light / plain",
			"default": "light"
		}],
		"events": [{
			"eventName": "click",
			"description": "点击 Tag 时触发的事件",
			"parameters": "—"
		},
		{
			"eventName": "close",
			"description": "关闭 Tag 时触发的事件",
			"parameters": "—"
		}]
	},
	"el-time-picker": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "date(TimePicker) / string(TimeSelect)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "readonly",
			"description": "完全只读",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disabled",
			"description": "禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "editable",
			"description": "文本框可输入",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "clearable",
			"description": "是否显示清除按钮",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "size",
			"description": "输入框尺寸",
			"type": "string",
			"acceptedValues": "medium / small / mini",
			"default": "—"
		},
		{
			"attribute": "placeholder",
			"description": "非范围选择时的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "start-placeholder",
			"description": "范围选择时开始日期的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "end-placeholder",
			"description": "范围选择时开始日期的占位内容",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "is-range",
			"description": "是否为时间范围选择，仅对`<el-time-picker>`有效",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "arrow-control",
			"description": "是否使用箭头进行时间选择，仅对`<el-time-picker>`有效",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "align",
			"description": "对齐方式",
			"type": "string",
			"acceptedValues": "left / center / right",
			"default": "left"
		},
		{
			"attribute": "popper-class",
			"description": "TimePicker 下拉框的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "picker-options",
			"description": "当前时间日期选择器特有的选项参考下表",
			"type": "object",
			"acceptedValues": "—",
			"default": "{}"
		},
		{
			"attribute": "range-separator",
			"description": "选择范围时的分隔符",
			"type": "string",
			"default": "'-'"
		},
		{
			"attribute": "value-format",
			"description": "可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象",
			"type": "string",
			"acceptedValues": "见[日期格式](#/zh-CN/component/date-picker#ri-qi-ge-shi)",
			"default": "—"
		},
		{
			"attribute": "default-value",
			"description": "可选，选择器打开时默认显示的时间",
			"type": "Date(TimePicker) / string(TimeSelect)",
			"acceptedValues": "可被`new Date()`解析(TimePicker) / 可选值(TimeSelect)",
			"default": "—"
		},
		{
			"attribute": "name",
			"description": "原生属性",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "prefix-icon",
			"description": "自定义头部图标的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-time"
		},
		{
			"attribute": "clear-icon",
			"description": "自定义清空图标的类名",
			"type": "string",
			"acceptedValues": "—",
			"default": "el-icon-circle-close"
		}],
		"events": [{
			"eventName": "change",
			"description": "用户确认选定的值时触发",
			"parameters": "组件绑定值"
		},
		{
			"eventName": "blur",
			"description": "当 input 失去焦点时触发",
			"parameters": "组件实例"
		},
		{
			"eventName": "focus",
			"description": "当 input 获得焦点时触发",
			"parameters": "组件实例"
		}],
		"methods": [{
			"name": "focus",
			"description": "使 input 获取焦点"
		}]
	},
	"el-timeline": {
		"attributes": [{
			"attribute": "reverse",
			"description": "指定节点排序方向，默认为正序",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		}]
	},
	"el-timeline-item": {
		"attributes": [{
			"attribute": "timestamp",
			"description": "时间戳",
			"type": "string",
			"default": "—"
		},
		{
			"attribute": "hide-timestamp",
			"description": "是否隐藏时间戳",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "placement",
			"description": "时间戳位置",
			"type": "string",
			"acceptedValues": "top / bottom",
			"default": "bottom"
		},
		{
			"attribute": "type",
			"description": "节点类型",
			"type": "string",
			"acceptedValues": "primary / success / warning / danger / info"
		},
		{
			"attribute": "color",
			"description": "节点颜色",
			"type": "string",
			"acceptedValues": "hsl / hsv / hex / rgb"
		},
		{
			"attribute": "size",
			"description": "节点尺寸",
			"type": "string",
			"acceptedValues": "normal / large",
			"default": "normal"
		},
		{
			"attribute": "icon",
			"description": "节点图标",
			"type": "string",
			"acceptedValues": "—"
		}],
		"slots": [{
			"name": "—",
			"description": "Timeline-Item 的内容"
		},
		{
			"name": "dot",
			"description": "自定义节点"
		}]
	},
	"el-tooltip": {
		"attributes": [{
			"attribute": "effect",
			"description": "默认提供的主题",
			"type": "String",
			"acceptedValues": "dark/light",
			"default": "dark"
		},
		{
			"attribute": "content",
			"description": "显示的内容，也可以通过 `slot#content` 传入 DOM",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "placement",
			"description": "Tooltip 的出现位置",
			"type": "String",
			"acceptedValues": "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
			"default": "bottom"
		},
		{
			"attribute": "value / v-model",
			"description": "状态是否可见",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "disabled",
			"description": "Tooltip 是否可用",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "offset",
			"description": "出现位置的偏移量",
			"type": "Number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "transition",
			"description": "定义渐变动画",
			"type": "String",
			"acceptedValues": "—",
			"default": "el-fade-in-linear"
		},
		{
			"attribute": "visible-arrow",
			"description": "是否显示 Tooltip 箭头，更多参数可见[Vue-popper](https://github.com/element-component/vue-popper)",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "popper-options",
			"description": "[popper.js](https://popper.js.org/documentation.html) 的参数",
			"type": "Object",
			"acceptedValues": "参考 [popper.js](https://popper.js.org/documentation.html) 文档",
			"default": "{ boundariesElement: 'body', gpuAcceleration: false }"
		},
		{
			"attribute": "open-delay",
			"description": "延迟出现，单位毫秒",
			"type": "Number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "manual",
			"description": "手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "popper-class",
			"description": "为 Tooltip 的 popper 添加类名",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "enterable",
			"description": "鼠标是否可进入到 tooltip 中",
			"type": "Boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "hide-after",
			"description": "Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		},
		{
			"attribute": "tabindex",
			"description": "Tooltip 组件的 [tabindex](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)",
			"type": "number",
			"acceptedValues": "—",
			"default": "0"
		}]
	},
	"el-transfer": {
		"attributes": [{
			"attribute": "value / v-model",
			"description": "绑定值",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "data",
			"description": "Transfer 的数据源",
			"type": "array[{ key, label, disabled }]",
			"acceptedValues": "—",
			"default": "[ ]"
		},
		{
			"attribute": "filterable",
			"description": "是否可搜索",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "filter-placeholder",
			"description": "搜索框占位符",
			"type": "string",
			"acceptedValues": "—",
			"default": "请输入搜索内容"
		},
		{
			"attribute": "filter-method",
			"description": "自定义搜索方法",
			"type": "function",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "target-order",
			"description": "右侧列表元素的排序策略：若为 `original`，则保持与数据源相同的顺序；若为 `push`，则新加入的元素排在最后；若为 `unshift`，则新加入的元素排在最前",
			"type": "string",
			"acceptedValues": "original / push / unshift",
			"default": "original"
		},
		{
			"attribute": "titles",
			"description": "自定义列表标题",
			"type": "array",
			"acceptedValues": "—",
			"default": "['列表 1', '列表 2']"
		},
		{
			"attribute": "button-texts",
			"description": "自定义按钮文案",
			"type": "array",
			"acceptedValues": "—",
			"default": "[ ]"
		},
		{
			"attribute": "render-content",
			"description": "自定义数据项渲染函数",
			"type": "function(h, option)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "format",
			"description": "列表顶部勾选状态文案",
			"type": "object{noChecked, hasChecked}",
			"acceptedValues": "—",
			"default": "{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }"
		},
		{
			"attribute": "props",
			"description": "数据源的字段别名",
			"type": "object{key, label, disabled}",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "left-default-checked",
			"description": "初始状态下左侧列表的已勾选项的 key 数组",
			"type": "array",
			"acceptedValues": "—",
			"default": "[ ]"
		},
		{
			"attribute": "right-default-checked",
			"description": "初始状态下右侧列表的已勾选项的 key 数组",
			"type": "array",
			"acceptedValues": "—",
			"default": "[ ]"
		}],
		"slots": [{
			"name": "left-footer",
			"description": "左侧列表底部的内容"
		},
		{
			"name": "right-footer",
			"description": "右侧列表底部的内容"
		}],
		"methods": [{
			"name": "clearQuery",
			"description": "清空某个面板的搜索关键词"
		}],
		"events": [{
			"eventName": "change",
			"description": "右侧列表元素变化时触发",
			"parameters": "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组"
		},
		{
			"eventName": "left-check-change",
			"description": "左侧列表元素被用户选中 / 取消选中时触发",
			"parameters": "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"
		},
		{
			"eventName": "right-check-change",
			"description": "右侧列表元素被用户选中 / 取消选中时触发",
			"parameters": "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组"
		}]
	},
	"el-scoped": {
		"slots": [{
			"name": "—",
			"description": "自定义树节点的内容，参数为 { node, data }"
		}]
	},
	"el-tree": {
		"attributes": [{
			"attribute": "data",
			"description": "展示数据",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "empty-text",
			"description": "内容为空的时候展示的文本",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "node-key",
			"description": "每个树节点用来作为唯一标识的属性，整棵树应该是唯一的",
			"type": "String",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "props",
			"description": "配置选项，具体看下表",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "render-after-expand",
			"description": "是否在第一次展开某个树节点后才渲染其子节点",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "load",
			"description": "加载子树数据的方法，仅当 lazy 属性为true 时生效",
			"type": "function(node, resolve)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "render-content",
			"description": "树节点的内容区的渲染 Function",
			"type": "Function(h, { node, data, store }",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "highlight-current",
			"description": "是否高亮当前选中节点，默认值是 false。",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "default-expand-all",
			"description": "是否默认展开所有节点",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "expand-on-click-node",
			"description": "是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "check-on-click-node",
			"description": "是否在点击节点的时候选中节点，默认值为 false，即只有在点击复选框时才会选中节点。",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "auto-expand-parent",
			"description": "展开子节点的时候是否自动展开父节点",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "default-expanded-keys",
			"description": "默认展开的节点的 key 的数组",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "show-checkbox",
			"description": "节点是否可被选择",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "check-strictly",
			"description": "在显示复选框的情况下，是否严格的遵循父子不互相关联的做法，默认为 false",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "default-checked-keys",
			"description": "默认勾选的节点的 key 的数组",
			"type": "array",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "current-node-key",
			"description": "当前选中的节点",
			"type": "string, number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "filter-node-method",
			"description": "对树节点进行筛选时执行的方法，返回 true 表示这个节点可以显示，返回 false 则表示这个节点会被隐藏",
			"type": "Function(value, data, node)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "accordion",
			"description": "是否每次只打开一个同级树节点展开",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "indent",
			"description": "相邻级节点间的水平缩进，单位为像素",
			"type": "number",
			"acceptedValues": "—",
			"default": "16"
		},
		{
			"attribute": "icon-class",
			"description": "自定义树节点的图标",
			"type": "string"
		},
		{
			"attribute": "lazy",
			"description": "是否懒加载子节点，需与 load 方法结合使用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "draggable",
			"description": "是否开启拖拽节点功能",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "allow-drag",
			"description": "判断节点能否被拖拽",
			"type": "Function(node)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "allow-drop",
			"description": "拖拽时判定目标节点能否被放置。`type` 参数有三种情况：'prev'、'inner' 和 'next'，分别表示放置在目标节点前、插入至目标节点和放置在目标节点后",
			"type": "Function(draggingNode, dropNode, type)",
			"acceptedValues": "—",
			"default": "—"
		}],
		"events": [{
			"eventName": "node-click",
			"description": "节点被点击时的回调",
			"parameters": "共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
		},
		{
			"eventName": "node-contextmenu",
			"description": "当某一节点被鼠标右键点击时会触发该事件",
			"parameters": "共四个参数，依次为：event、传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身。"
		},
		{
			"eventName": "check-change",
			"description": "节点选中状态发生变化时的回调",
			"parameters": "共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点本身是否被选中、节点的子树中是否有被选中的节点"
		},
		{
			"eventName": "check",
			"description": "当复选框被点击的时候触发",
			"parameters": "共两个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性"
		},
		{
			"eventName": "current-change",
			"description": "当前选中节点变化时触发的事件",
			"parameters": "共两个参数，依次为：当前节点的数据，当前节点的 Node 对象"
		},
		{
			"eventName": "node-expand",
			"description": "节点被展开时触发的事件",
			"parameters": "共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
		},
		{
			"eventName": "node-collapse",
			"description": "节点被关闭时触发的事件",
			"parameters": "共三个参数，依次为：传递给 `data` 属性的数组中该节点所对应的对象、节点对应的 Node、节点组件本身"
		},
		{
			"eventName": "node-drag-start",
			"description": "节点开始拖拽时触发的事件",
			"parameters": "共两个参数，依次为：被拖拽节点对应的 Node、event"
		},
		{
			"eventName": "node-drag-enter",
			"description": "拖拽进入其他节点时触发的事件",
			"parameters": "共三个参数，依次为：被拖拽节点对应的 Node、所进入节点对应的 Node、event"
		},
		{
			"eventName": "node-drag-leave",
			"description": "拖拽离开某个节点时触发的事件",
			"parameters": "共三个参数，依次为：被拖拽节点对应的 Node、所离开节点对应的 Node、event"
		},
		{
			"eventName": "node-drag-over",
			"description": "在拖拽节点时触发的事件（类似浏览器的 mouseover 事件）",
			"parameters": "共三个参数，依次为：被拖拽节点对应的 Node、当前进入节点对应的 Node、event"
		},
		{
			"eventName": "node-drag-end",
			"description": "拖拽结束时（可能未成功）触发的事件",
			"parameters": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点（可能为空）、被拖拽节点的放置位置（before、after、inner）、event"
		},
		{
			"eventName": "node-drop",
			"description": "拖拽成功完成时触发的事件",
			"parameters": "共四个参数，依次为：被拖拽节点对应的 Node、结束拖拽时最后进入的节点、被拖拽节点的放置位置（before、after、inner）、event"
		}]
	},
	"el-upload": {
		"attributes": [{
			"attribute": "action",
			"description": "必选参数，上传的地址",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "headers",
			"description": "设置上传的请求头部",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "multiple",
			"description": "是否支持多选文件",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "data",
			"description": "上传时附带的额外参数",
			"type": "object",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "name",
			"description": "上传的文件字段名",
			"type": "string",
			"acceptedValues": "—",
			"default": "file"
		},
		{
			"attribute": "with-credentials",
			"description": "支持发送 cookie 凭证信息",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "show-file-list",
			"description": "是否显示已上传文件列表",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "drag",
			"description": "是否启用拖拽上传",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "accept",
			"description": "接受上传的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)（thumbnail-mode 模式下此参数无效",
			"type": "string",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "on-preview",
			"description": "点击文件列表中已上传的文件时的钩子",
			"type": "function(file)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "on-remove",
			"description": "文件列表移除文件时的钩子",
			"type": "function(file, fileList)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "on-success",
			"description": "文件上传成功时的钩子",
			"type": "function(response, file, fileList)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "on-error",
			"description": "文件上传失败时的钩子",
			"type": "function(err, file, fileList)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "on-progress",
			"description": "文件上传时的钩子",
			"type": "function(event, file, fileList)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "on-change",
			"description": "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
			"type": "function(file, fileList)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "before-upload",
			"description": "上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
			"type": "function(file)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "before-remove",
			"description": "删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除",
			"type": "function(file, fileList)",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "list-type",
			"description": "文件列表的类型",
			"type": "string",
			"acceptedValues": "text/picture/picture-card",
			"default": "text"
		},
		{
			"attribute": "auto-upload",
			"description": "是否在选取文件后立即进行上传",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "true"
		},
		{
			"attribute": "file-list",
			"description": "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
			"type": "array",
			"acceptedValues": "—",
			"default": "[]"
		},
		{
			"attribute": "http-request",
			"description": "覆盖默认的上传行为，可以自定义上传的实现",
			"type": "function",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "disabled",
			"description": "是否禁用",
			"type": "boolean",
			"acceptedValues": "—",
			"default": "false"
		},
		{
			"attribute": "limit",
			"description": "最大允许上传个数",
			"type": "number",
			"acceptedValues": "—",
			"default": "—"
		},
		{
			"attribute": "on-exceed",
			"description": "文件超出个数限制时的钩子",
			"type": "function(files, fileList)",
			"acceptedValues": "—"
		}],
		"slots": [{
			"name": "trigger",
			"description": "触发文件选择框的内容"
		},
		{
			"name": "tip",
			"description": "提示说明文字"
		}],
		"methods": [{
			"name": "clearFiles",
			"description": "清空已上传的文件列表（该方法不支持在 before-upload 中调用）"
		},
		{
			"name": "abort",
			"description": "取消上传请求"
		},
		{
			"name": "submit",
			"description": "手动上传文件列表"
		}]
	}
};
export default mapData;