# AvatarList 头像列表

## 代码演示

<code src="../../src/components/AvatarList/demo/basic.tsx" />

<code src="../../src/components/AvatarList/demo/autoSize.tsx" />

<code src="../../src/components/AvatarList/demo/tooLong.tsx" />

<code src="../../src/components/AvatarList/demo/autoStyle.tsx" />

## API

### AvatarList

| 参数      | 说明                      | 类型                      | 默认值       | 是否必填 |
| --------- | ------------------------- | ------------------------- | ------------ | -------- |
| size      | 头像尺寸大小              | `default | small | large` | `default`    | 否       |
| maxLength | 最大长度                  | number                    | 5            | 否       |
| style     | list 样式                 | object                    | {}           | 否       |
| itemStyle | `antd` 中 `Avatar` 的样式 | object                    | {}           | 否       |
| onClick   | 头像列表点击事件          | function                  | `() => void` | 否       |

### AvatarList.Item

| 参数    | 说明                 | 类型     | 默认值           | 是否必填 |
| ------- | -------------------- | -------- | ---------------- | -------- |
| tips    | 鼠标覆盖时的样式展示 | string   | ''               | 否       |
| src     | 头像 url             | string   | ''               | 是       |
| style   | 头像样式             | object   | {}               | 否       |
| onClick | 头像点击事件         | function | `(data) => void` | 否       |
