/**
 * title: 基础
 * desc: 图表卡片
 */
import React, { FC } from 'react';
import { Tooltip, Row, Col } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import {
  Field,
  ChartCard,
  Trend,
  MiniArea,
  MiniBar,
  MiniProgress,
} from 'ant-design-atom';
import numeral from 'numeral';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 24 },
};
const data = [
  { x: '2020-04-18', y: 15 },
  { x: '2020-04-19', y: 35 },
  { x: '2020-04-20', y: 20 },
  { x: '2020-04-21', y: 20 },
  { x: '2020-04-22', y: 14 },
  { x: '2020-04-23', y: 16 },
  { x: '2020-04-24', y: 31 },
  { x: '2020-04-25', y: 30 },
  { x: '2020-04-26', y: 15 },
  { x: '2020-04-27', y: 33 },
  { x: '2020-04-28', y: 22 },
  { x: '2020-04-29', y: 31 },
  { x: '2020-04-30', y: 25 },
  { x: '2020-05-01', y: 35 },
  { x: '2020-05-02', y: 20 },
  { x: '2020-05-03', y: 37 },
  { x: '2020-05-04', y: 16 },
  { x: '2020-05-05', y: 28 },
  { x: '2020-05-06', y: 37 },
  { x: '2020-05-07', y: 31 },
  { x: '2020-05-08', y: 14 },
  { x: '2020-05-09', y: 30 },
];

const Page: FC = () => {
  const action = () => (
    <Tooltip title="指标说明">
      <InfoCircleOutlined />
    </Tooltip>
  );

  const footer = () => (
    <Field label="日销售额" value={`￥${numeral(12423).format('0,0')}`} />
  );
  return (
    <div
      style={{ background: 'rgb(241, 242, 245)', padding: '30px 30px 0 30px' }}
    >
      <Row gutter={24} type="flex">
        <Col {...topColResponsiveProps}>
          <ChartCard
            title="总销售额"
            action={action()}
            total={() => <>{`￥${numeral(12423).format('0,0')}`}</>}
            footer={footer()}
            height={46}
          >
            <Trend flag="up" style={{ marginRight: 16 }}>
              <span>12%</span>
            </Trend>
            <Trend flag="down">
              <span>11%</span>
            </Trend>
          </ChartCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ChartCard
            title="访问量"
            action={action()}
            footer={footer()}
            height={46}
            total={numeral(8846).format('0,0')}
          >
            <MiniArea data={data} color="#975FE4" />
          </ChartCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ChartCard
            title="支付笔数"
            action={action()}
            footer={footer()}
            height={46}
            total={numeral(5650).format('0,0')}
          >
            <MiniBar data={data} />
          </ChartCard>
        </Col>
        <Col {...topColResponsiveProps}>
          <ChartCard
            title="运营活动效果"
            action={action()}
            footer={footer()}
            height={46}
            total="78%"
          >
            <MiniProgress percent={78} target={90} color="#13C2C2" />
          </ChartCard>
        </Col>
      </Row>
    </div>
  );
};

export default Page;
