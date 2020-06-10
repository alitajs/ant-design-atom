/**
 * title: 基本
 * desc: 饼图
 */

import React, { FC } from 'react';
import { Pie, Yuan } from 'ant-design-atom';

const data = [
  { name: '家用电器', value: 4544 },
  { name: '食用酒水', value: 3321 },
  { name: '个护健康', value: 3113 },
  { name: '服饰箱包', value: 2341 },
  { name: '母婴产品', value: 1231 },
  { name: '其他', value: 1231 },
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
      x: 'name',
      y: 'value',
    }}
  />
);

export default Page;
