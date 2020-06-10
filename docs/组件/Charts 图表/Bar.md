# Bar

## 代码演示

<code src="../../../src/components/Charts/Bar/demo/basic.tsx" />

## API

| 参数     | 说明   | 类型                               | 默认值                     | 是否必填 |
| -------- | ------ | ---------------------------------- | -------------------------- | -------- |
| data     | 数据源 | `{ x: string; y: number; }[]`      | []                         | 是       |
| height   | 高度   | number                             | 1                          | 否       |
| color    | 颜色   | string                             | `rgba(24, 144, 255, 0.85)` | 否       |
| padding  | 内边距 | `[number, number, number, number]` | []                         | 否       |
| forceFit | 自适应 | boolean                            | true                       | 否       |
| alias    | 别名   | {x: string, y: string}             | { x: x, y: y }             | 否       |
