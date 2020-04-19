/**
 * title: 基础
 * desc: 仪表盘
 */
import React, { FC } from 'react';
import { Gauge } from 'ant-design-atom';

const defaultFormatter = (val: string): string => {
  switch (val) {
    case '2':
      return '差';
    case '4':
      return '中';
    case '6':
      return '良';
    case '8':
      return '优';
    default:
      return '';
  }
};

const cols = {
  value: {
    type: 'linear',
    min: 0,
    max: 10,
    tickCount: 6,
    nice: true,
  },
};

const Page: FC = () => (
  <Gauge
    height={180}
    percent={87}
    title="通过率"
    formatter={defaultFormatter}
    cols={cols}
  />
);

export default Page;
