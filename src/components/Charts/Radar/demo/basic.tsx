/**
 * title: 基础
 * desc: 雷达图
 */

import React, { FC } from 'react';
import { Radar } from 'ant-design-atom';

const data = [
  { name: '个人', label: '引用', value: 10 },
  { name: '个人', label: '口碑', value: 8 },
  { name: '个人', label: '产量', value: 4 },
  { name: '个人', label: '贡献', value: 5 },
  { name: '个人', label: '热度', value: 7 },
  { name: '团队', label: '引用', value: 3 },
  { name: '团队', label: '口碑', value: 9 },
  { name: '团队', label: '产量', value: 6 },
  { name: '团队', label: '贡献', value: 3 },
  { name: '团队', label: '热度', value: 1 },
  { name: '部门', label: '引用', value: 4 },
  { name: '部门', label: '口碑', value: 1 },
  { name: '部门', label: '产量', value: 6 },
  { name: '部门', label: '贡献', value: 5 },
  { name: '部门', label: '热度', value: 7 },
];

const Page: FC = () => <Radar data={data} hasLegend height={343} />;

export default Page;
