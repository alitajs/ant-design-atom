# CardList 卡片列表

## 代码演示

<code src="../../src/components/CardList/demo/basic.tsx"/>

## API

### CardList

| 参数        | 说明                  | 类型                 | 默认值 | 是否必填 |
| ----------- | --------------------- | -------------------- | ------ | -------- |
| cardClick   | 卡片点击事件          | `(id) => void`       | 无     | 否       |
| bottomClick | 卡片`action` 点击事件 | `(id, item) => void` | 无     | 否       |
| list        | 列表数据              | `CardList.List`      | []     | 是       |

### CardList.List

| 参数         | 说明             | 类型              | 默认值 | 是否必填 |
| ------------ | ---------------- | ----------------- | ------ | -------- |
| id           | id               | `string | number` | 无     | 是       |
| title        | 标题             | `string`          | ''     | 否       |
| avatar       | 头像             | `string`          | ''     | 否       |
| dropdownItem | 卡片底部下拉数据 | []                | 无     | 否       |
| data         | 卡片内容         | []                | []     | 否       |
| actions      | 卡片底部操作按钮 | []                | []     | 否       |
