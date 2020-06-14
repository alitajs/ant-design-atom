/**
 * title: 基本
 * desc: 柱状小图
 */

import React, { FC } from 'react';
import { MiniBar } from 'ant-design-atom';

const data = [
  { x: '2020-04-18', value: 15 },
  { x: '2020-04-19', value: 35 },
  { x: '2020-04-20', value: 20 },
  { x: '2020-04-21', value: 20 },
  { x: '2020-04-22', value: 14 },
  { x: '2020-04-23', value: 16 },
  { x: '2020-04-24', value: 31 },
  { x: '2020-04-25', value: 30 },
  { x: '2020-04-26', value: 15 },
  { x: '2020-04-27', value: 33 },
  { x: '2020-04-28', value: 22 },
  { x: '2020-04-29', value: 31 },
  { x: '2020-04-30', value: 25 },
  { x: '2020-05-01', value: 35 },
  { x: '2020-05-02', value: 20 },
  { x: '2020-05-03', value: 37 },
  { x: '2020-05-04', value: 16 },
  { x: '2020-05-05', value: 28 },
  { x: '2020-05-06', value: 37 },
  { x: '2020-05-07', value: 31 },
  { x: '2020-05-08', value: 14 },
  { x: '2020-05-09', value: 30 },
];

const Page: FC = () => <MiniBar data={data} alias={{ y: 'value' }} />;

export default Page;
