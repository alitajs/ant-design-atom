/**
 * title: 基本
 * desc: 饼图
 */

import React, { FC } from 'react';
import { Space } from 'antd';
import { MiniPie } from 'ant-design-atom';

const Page: FC = () => (
  <Space>
    <MiniPie
      animate={false}
      inner={0.55}
      tooltip={false}
      margin={[0, 0, 0, 0]}
      percent={90}
      height={64}
    />
    <MiniPie
      animate={false}
      inner={0.7}
      tooltip={false}
      margin={[0, 0, 0, 0]}
      percent={90}
      height={64}
    />
  </Space>
);

export default Page;
