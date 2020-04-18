# Charts 图表

## MiniArea

### 代码演示

<code src="../../src/components/Charts/demo/miniAreaDemo.tsx" />

### MiniArea API

| 参数        | 说明                                               | 类型                           | 默认值                  | 是否必填 |
| ----------- | -------------------------------------------------- | ------------------------------ | ----------------------- | -------- |
| data        | 数据源                                             | {x: numberstring, y: number}[] | []                      | 是       |
| color       | 背景色                                             | string                         | `rgba(24, 144, 255, 1)` | 否       |
| height      | 高度                                               | number                         | 1                       | 否       |
| line        | 边线                                               | boolean                        | `false`                 | 否       |
| borderColor | 边线的颜色                                         | string                         | `#1089ff`               | 否       |
| animate     | 图表动画开关                                       | boolean                        | `true`                  | 否       |
| forceFit    | 图表的宽度自适应开关                               | boolean                        | `false`                 | 否       |
| borderWidth | 边线宽度                                           | number                         | 2                       | 否       |
| xAxis       | 横坐标样式                                         | obj                            | {}                      | 否       |
| yAxis       | 纵坐标样式                                         | obj                            | {}                      | 否       |
| scale       | 配置数据比例尺，该配置会影响数据在图表中的展示方式 | obj                            | `x: {}, y: {}`          | 否       |
