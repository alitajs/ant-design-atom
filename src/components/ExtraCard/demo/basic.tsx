/**
 * title: 基本
 * desc: 封装卡片
 */

import React, { FC } from 'react';
import { ExtraCard, Pie, Yuan } from 'ant-design-atom';

const data = [
  { x: '家用电器', value: 4544 },
  { x: '食用酒水', value: 3321 },
  { x: '个护健康', value: 3113 },
  { x: '服饰箱包', value: 2341 },
  { x: '母婴产品', value: 1231 },
  { x: '其他', value: 1231 },
];

const Page: FC = () => (
  <div
    style={{ background: 'rgb(241, 242, 245)', padding: '30px 30px 30px 30px' }}
  >
    <ExtraCard
      title="销售额类别占比"
      radioGroup={[
        { label: '全部渠道', value: 'all' },
        { label: '线上', value: 'online' },
        { label: '门店', value: 'stores' },
      ]}
      radioGroupChange={(e: string | number) => {
        console.log(e);
      }}
      menuList={['操作一', '操作二', '操作三']}
      menuChange={(e: string) => {
        console.log(e);
      }}
    >
      <Pie
        data={data}
        hasLegend
        height={248}
        subTitle="销售额"
        total={() => (
          <Yuan>{data.reduce((pre, now) => now.value + pre, 0)}</Yuan>
        )}
        lineWidth={4}
        valueFormat={(value: number) => <Yuan>{value}</Yuan>}
        alias={{
          y: 'value',
        }}
      />
    </ExtraCard>
  </div>
);

export default Page;
