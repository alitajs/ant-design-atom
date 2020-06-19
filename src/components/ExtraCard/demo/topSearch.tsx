/**
 * title: 基本
 * desc: 封装卡片
 */
import React, { FC } from 'react';
import { Space, Tooltip, Row, Col, Table } from 'antd';
import {
  ExtraCard,
  MiniArea,
  MiniBar,
  MiniProgress,
  ChartCard,
  Trend,
} from 'ant-design-atom';
import { InfoCircleOutlined } from '@ant-design/icons';

const spanProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 24 },
};

const data = [
  { date: '2020-04-18', y: 50, range: 30, name: '用户-1' },
  { date: '2020-04-19', y: 35, range: 70, name: '用户-2' },
  { date: '2020-04-20', y: 20, range: 89, name: '用户-3' },
  { date: '2020-04-21', y: 20, range: 60, name: '用户-4' },
  { date: '2020-04-22', y: 14, range: 20, name: '用户-5' },
  { date: '2020-04-23', y: 16, range: 50, name: '用户-6' },
  { date: '2020-04-24', y: 31, range: 50, name: '用户-7' },
  { date: '2020-04-25', y: 30, range: 50, name: '用户-8' },
  { date: '2020-04-26', y: 50, range: 50, name: '用户-9' },
  { date: '2020-04-27', y: 33, range: 50, name: '用户-10' },
  { date: '2020-04-28', y: 22, range: 50, name: '用户-11' },
  { date: '2020-04-29', y: 31, range: 50, name: '用户-12' },
  { date: '2020-04-30', y: 25, range: 50, name: '用户-13' },
  { date: '2020-05-01', y: 35, range: 50, name: '用户-14' },
  { date: '2020-05-02', y: 20, range: 50, name: '用户-15' },
  { date: '2020-05-03', y: 37, range: 50, name: '用户-16' },
  { date: '2020-05-04', y: 16, range: 50, name: '用户-17' },
  { date: '2020-05-05', y: 28, range: 50, name: '用户-18' },
  { date: '2020-05-06', y: 37, range: 50, name: '用户-19' },
  { date: '2020-05-07', y: 31, range: 50, name: '用户-20' },
  { date: '2020-05-08', y: 14, range: 50, name: '用户-21' },
  { date: '2020-05-09', y: 30, range: 50, name: '用户-22' },
];

const Page: FC = () => {
  const action = () => (
    <Tooltip title="指标说明">
      <InfoCircleOutlined />
    </Tooltip>
  );

  const columns = [
    {
      title: '日期',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: '用户名',
      dataIndex: 'name',
      key: 'name',
      render: (text: React.ReactNode) => <a href="">{text}</a>,
    },
    {
      title: '用户数',
      dataIndex: 'y',
      key: 'y',
      sorter: (a: { y: number }, b: { y: number }) => a.y - b.y,
    },
    {
      title: '百分比',
      dataIndex: 'range',
      key: 'range',
      sorter: (a: { range: number }, b: { range: number }) => a.range - b.range,
      render: (text: React.ReactNode, record: { range: number }) => (
        <Trend flag={record.range < 50 ? 'down' : 'up'}>
          <span style={{ marginRight: 4 }}>{text}%</span>
        </Trend>
      ),
    },
  ];

  return (
    <div
      style={{
        background: 'rgb(241, 242, 245)',
        padding: '30px 30px 30px 30px',
      }}
    >
      <ExtraCard
        title="线上热门搜索"
        menuList={['操作一', '操作二', '操作三']}
        menuChange={(e: string) => {
          console.log(e);
        }}
      >
        <Space size="large" style={{ width: '100%' }} direction="vertical">
          <Row gutter={24} type="flex">
            <Col {...spanProps}>
              <ChartCard title="总销售额" action={action()} height={46}>
                <MiniArea data={data} color="#975FE4" alias={{ x: 'date' }} />
              </ChartCard>
            </Col>
            <Col {...spanProps}>
              <ChartCard title="支付笔数" action={action()} height={46}>
                <MiniBar data={data} alias={{ x: 'date' }} />
              </ChartCard>
            </Col>
            <Col {...spanProps}>
              <ChartCard title="运营活动效果" action={action()} height={46}>
                <MiniProgress percent={78} target={90} color="#13C2C2" />
              </ChartCard>
            </Col>
          </Row>
          <Table<any>
            rowKey="date"
            size="small"
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 5,
            }}
          />
        </Space>
      </ExtraCard>
    </div>
  );
};

export default Page;
