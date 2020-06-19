# ExtraCard

## 代码演示

<code src="../../src/components/ExtraCard/demo/basic.tsx" />

## API

| 参数             | 说明                 | 类型              | 默认值 | 是否必填 |
| ---------------- | -------------------- | ----------------- | ------ | -------- |
| title            | 卡片标题             | string or node    | ''     | 是       |
| loading          | 卡片是否加载中的标识 | boolean           | false  | 否       |
| radioGroup       | radio 数组           | IRadioGroupItem[] | 无     | 否       |
| radioGroupChange | radio 数组点击事件   | (e) => void       | 无     | 否       |
| menuList         | 下拉菜单数组         | string[]          | 无     | 否       |
| menuChange       | 下拉菜单数组点击事件 | (e) => void       | 无     | 否       |

### IRadioGroupItem

| 参数  | 说明     | 类型              | 默认值 | 是否必填 |
| ----- | -------- | ----------------- | ------ | -------- |
| label | 选项名称 | string            | 无     | 否       |
| value | 选项值   | `string | number` | 无     | 否       |
