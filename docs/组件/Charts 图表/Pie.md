# Pie

## 代码演示

<code src="../../../src/components/Charts/Pie/demo/basic.tsx" />

## API

| 参数        | 说明                 | 类型                           | 默认值         | 是否必填 |
| ----------- | -------------------- | ------------------------------ | -------------- | -------- |
| data        | 数据源               | {x: numberstring, y: number}[] | []             | 是       |
| hasLegend   | 是否展示 Legend      | boolean                        | false          | 否       |
| height      | 高度                 | number                         | 1              | 是       |
| subTitle    | 副标题               | `string` or `node`             | ''             | 否       |
| total       | 在饼图中展示总数     | node                           | ''             | 否       |
| lineWidth   | 饼图线宽             | number                         | 1              | 否       |
| valueFormat | Legend 侧的 Y 值展示 | node                           | ''             | 否       |
| inner       | 内边距               | number                         | 0.75           | 否       |
| colors      | 自定义图表颜色       | array                          | []             | 否       |
| animate     | 是否开启动画         | boolean                        | true           | 否       |
| forceFit    | 是否自适应           | boolean                        | true           | 否       |
| alias       | 别名                 | {x: string, y: string}         | { x: x, y: y } | 否       |
