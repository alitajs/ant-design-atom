/**
 * title: 基础
 * desc: 柱状图
 */
import React, { FC } from 'react';
import { Bar } from 'ant-design-atom';

const data = [
  { x: '1月', value: 813 },
  { x: '2月', value: 885 },
  { x: '3月', value: 262 },
  { x: '4月', value: 679 },
  { x: '5月', value: 697 },
  { x: '6月', value: 769 },
  { x: '7月', value: 792 },
  { x: '8月', value: 492 },
  { x: '9月', value: 514 },
  { x: '10月', value: 1199 },
  { x: '11月', value: 876 },
  { x: '12月', value: 541 },
];

const Page: FC = () => (
  <Bar height={292} title="销售趋势" data={data} alias={{ y: 'value' }} />
);

export default Page;
