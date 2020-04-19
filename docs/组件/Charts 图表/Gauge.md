# Gauge

## 代码演示

<code src="../../../src/components/Charts/Gauge/demo/basic.tsx" />

## API

| 参数      | 说明                                       | 类型               | 默认值   | 是否必填 |
| --------- | ------------------------------------------ | ------------------ | -------- | -------- |
| percent   | 百分比                                     | number             | 0        | 是       |
| cols      | 数据                                       | obj                | {}       | 是       |
| title     | 标题                                       | `string` or `node` | `''`     | 否       |
| height    | 高度                                       | number             | 1        | 否       |
| color     | 颜色                                       | string             | #2F9CFF' | 否       |
| bgColor   | 背景颜色                                   | string             | #F0F2F5  | 否       |
| forceFit  | 图表的宽度自适应开关                       | boolean            | `false`  | 否       |
| formatter | 回调函数，用于格式化坐标轴上显示的文本信息 | `(val) => string`  |          | 否       |
