/**
 * title: 基本
 * desc: 完整应用列表
 */
import React, { FC } from 'react';
import { CardList, formatWan } from 'ant-design-atom';
import numeral from 'numeral';

const list = [
  {
    id: 1,
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png',
    title: 'Alipay',
    data: [
      { label: '活跃用户', value: formatWan(166007) },
      { label: '新增用户', value: numeral('1949').format('0,0') },
    ],
    dropdownItem: ['操作一', '操作二', '操作三'],
    actions: ['setting', 'share', 'download', 'edit'],
  },
  {
    id: 2,
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png',
    title: 'Angular',
    data: [
      { label: '活跃用户', value: formatWan(185335) },
      { label: '新增用户', value: numeral('1922').format('0,0') },
    ],
    actions: ['setting', 'share', 'edit'],
  },
  {
    id: 3,
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png',
    title: 'Ant Design',
    data: [
      { label: '活跃用户', value: formatWan(161134) },
      { label: '新增用户', value: numeral('1647').format('0,0') },
    ],
    dropdownItem: ['操作一', '操作二', '操作三'],
  },
  {
    id: 4,
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png',
    title: 'Ant Design Pro',
    data: [
      { label: '活跃用户', value: formatWan(153923) },
      { label: '新增用户', value: numeral('1191').format('0,0') },
      { label: '完成度', value: '99%' },
    ],
  },
  {
    id: 5,
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png',
    title: 'Bootstrap',
    data: [
      { label: '活跃用户', value: formatWan(101165) },
      { label: '新增用户', value: numeral('1426').format('0,0') },
    ],
    dropdownItem: ['操作一', '操作二', '操作三'],
    actions: ['share', 'edit'],
  },
  {
    id: 6,
    avatar:
      'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png',
    title: 'React',
    data: [
      { label: '活跃用户', value: formatWan(149736) },
      { label: '新增用户', value: numeral('1392').format('0,0') },
    ],
    dropdownItem: ['操作一', '操作二', '操作三'],
    actions: ['share', 'edit'],
  },
];

const Page: FC = () => {
  return (
    <CardList
      list={list}
      bottomClick={(id: string, item: string) => console.log(id, item)}
      cardClick={(id: string) => console.log(id)}
    />
  );
};

export default Page;
