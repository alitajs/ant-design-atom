/**
 * title: 比例
 * desc: 饼图
 */

import React, { FC } from 'react';
import { Pie, Yuan } from 'ant-design-atom';

const Page: FC = () => (
  <Pie
    percent={80}
    hasLegend
    height={248}
    subTitle="销售额"
    lineWidth={4}
    valueFormat={() => <></>}
  />
);

export default Page;
