/**
 * title: 基本
 * desc: 饼图
 */

import React, { FC } from 'react';
import { Pie, Yuan } from 'ant-design-atom';

const data = [
  { x: '家用电器', value: 4544 },
  { x: '食用酒水', value: 3321 },
  { x: '个护健康', value: 3113 },
  { x: '服饰箱包', value: 2341 },
  { x: '母婴产品', value: 1231 },
  { x: '其他', value: 1231 },
];

const Page: FC = () => (
  <Pie
    data={data}
    hasLegend
    height={248}
    subTitle="销售额"
    total={() => <Yuan>{data.reduce((pre, now) => now.value + pre, 0)}</Yuan>}
    lineWidth={4}
    valueFormat={(value: number) => <Yuan>{value}</Yuan>}
    alias={{
      y: 'value',
    }}
  />
);

export default Page;
