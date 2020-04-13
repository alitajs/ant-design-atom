/**
 * title: 基础
 * desc: 最简单的头像展示
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
];

const Page: FC = () => (
  <AvatarList>
    {members.map(member => (
      <AvatarList.Item key={member.id} src={member.avatar} tips={member.name} />
    ))}
  </AvatarList>
);

export default Page;
