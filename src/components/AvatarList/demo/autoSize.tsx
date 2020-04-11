/**
 * title: 尺寸
 * desc: 三种尺寸可选择
 */

import React, { FC, useState } from 'react';
import { Button, Space } from 'antd';
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

const Page: FC = () => {
  const [size, setSize] = useState('default');

  const changeSize = (val: string) => {
    setSize(val);
  };

  return (
    <>
      <Space>
        <Button
          onClick={() => {
            changeSize('large');
          }}
        >
          large
        </Button>
        <Button
          onClick={() => {
            changeSize('default');
          }}
        >
          default
        </Button>
        <Button
          onClick={() => {
            changeSize('small');
          }}
        >
          small
        </Button>
      </Space>
      <AvatarList size={size}>
        {members.map(member => (
          <AvatarList.Item
            key={member.id}
            src={member.avatar}
            tips={member.name}
          />
        ))}
      </AvatarList>
    </>
  );
};

export default Page;
