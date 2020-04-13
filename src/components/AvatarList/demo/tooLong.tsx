/**
 * title: 人数过多
 * desc: 可设置最大人数，过多隐藏, 默认5个
 */

import React, { FC } from 'react';
import { AvatarList } from 'ant-design-atom';

const members = [
  {
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
    name: '曲丽丽',
    id: 'member1',
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
    name: '王昭君',
    id: 'member2',
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
    name: '董娜娜',
    id: 'member3',
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/ZiESqWwCXBRQoaPONSJe.png',
    name: '安琪拉',
    id: 'member4',
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/tBOxZPlITHqwlGjsJWaF.png',
    name: '貂蝉',
    id: 'member5',
  },
  {
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/sBxjgqiuHMGRkIjqlQCd.png',
    name: '钟馗',
    id: 'member6',
  },
];

const Page: FC = () => (
  <AvatarList maxLength={4}>
    {members.map(member => (
      <AvatarList.Item key={member.id} src={member.avatar} tips={member.name} />
    ))}
  </AvatarList>
);

export default Page;
