/**
 * title: 基础
 * desc: 柱状图
 */
import React, { FC } from 'react';
import { Bar } from 'ant-design-atom';

const data = [
  { x: '1月', y: 813 },
  { x: '2月', y: 885 },
  { x: '3月', y: 262 },
  { x: '4月', y: 679 },
  { x: '5月', y: 697 },
  { x: '6月', y: 769 },
  { x: '7月', y: 792 },
  { x: '8月', y: 492 },
  { x: '9月', y: 514 },
  { x: '10月', y: 1199 },
  { x: '11月', y: 876 },
  { x: '12月', y: 541 },
];

const Page: FC = () => <Bar height={292} title="销售趋势" data={data} />;

export default Page;
