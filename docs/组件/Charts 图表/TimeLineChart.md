# TimeLine

## 代码演示

<code src="../../../src/components/Charts/TimelineChart/demo/basic.tsx" />

## API

### Timeline

| 参数        | 说明         | 类型                             | 默认值             | 是否必填 |
| ----------- | ------------ | -------------------------------- | ------------------ | -------- |
| data        | IDataProps[] | obj                              | []                 | 是       |
| title       | 标题         | `string` or `node`               | `''`               | 否       |
| padding     | 内间距       | [number, number, number, number] | `[60, 20, 40, 40]` | 否       |
| height      | 高度         | number                           | 400                | 否       |
| borderWidth | 线宽         | number                           | 2                  | 否       |
| titleMap    | 名称         | {}                               | {}                 | 否       |

### Timeline.data

| 参数 | 说明         | 类型   | 默认值 | 是否必填 |
| ---- | ------------ | ------ | ------ | -------- |
| x    | 时间戳       | number | 0      | 是       |
| y1   | 表中数据的值 | number | 0      | 是       |
| y2   | 表中数据的值 | number | 0      | 是       |
