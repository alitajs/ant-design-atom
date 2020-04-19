/**
 * title: 基本
 * desc: 水波图
 */

import React, { FC } from 'react';
import { WaterWave } from 'ant-design-atom';

const Page: FC = () => (
  <div style={{ width: '100%', textAlign: 'center' }}>
    <WaterWave height={161} percent={34} />
  </div>
);

export default Page;
