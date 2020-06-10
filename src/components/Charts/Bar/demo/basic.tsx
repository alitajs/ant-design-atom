/**
 * title: 基础
 * desc: 柱状图
 */
import React, { FC } from 'react';
import { Bar } from 'ant-design-atom';

const data = [
  { month: '1月', value: 813 },
  { month: '2月', value: 885 },
  { month: '3月', value: 262 },
  { month: '4月', value: 679 },
  { month: '5月', value: 697 },
  { month: '6月', value: 769 },
  { month: '7月', value: 792 },
  { month: '8月', value: 492 },
  { month: '9月', value: 514 },
  { month: '10月', value: 1199 },
  { month: '11月', value: 876 },
  { month: '12月', value: 541 },
];

const Page: FC = () => (
  <Bar
    height={292}
    title="销售趋势"
    data={data}
    alias={{ x: 'month', y: 'value' }}
  />
);

export default Page;
