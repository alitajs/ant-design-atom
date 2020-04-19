# Radar

## 代码演示

<code src="../../../src/components/Charts/Radar/demo/basic.tsx" />

## API

| 参数      | 说明                 | 类型                             | 默认值           | 是否必填 |
| --------- | -------------------- | -------------------------------- | ---------------- | -------- |
| data      | 数据源               | IDataProps                       | []               | 是       |
| title     | 标题                 | `string` or `React.ReactNode`    | `''`             | 否       |
| height    | 高度                 | number                           | 300              | 否       |
| padding   | 内边距               | [number, number, number, number] | [35, 30, 16, 30] | 否       |
| hasLegend | 图例                 | boolean                          | false            | 否       |
| colors    | 颜色                 | array                            | []               | 否       |
| animate   | 动画                 | boolean                          | true             | 否       |
| forceFit  | 图表的宽度自适应开关 | boolean                          | `false`          | 否       |
| tickCount | 刻度数量             | number                           | 5                | 否       |
