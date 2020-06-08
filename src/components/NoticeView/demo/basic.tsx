/**
 * title: 基础
 * desc: 通知下拉菜单
 */

import React, { FC, useState } from 'react';
import { NoticeView } from 'ant-design-atom';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Header, Content, Sider } = Layout;

const data = {
  notification: [
    {
      id: '000000001',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '你收到了 14 份新周报',
      datetime: '3 年前',
      type: 'notification',
      key: '000000001',
    },
    {
      id: '000000002',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png',
      title: '你推荐的 曲妮妮 已通过第三轮面试',
      datetime: '3 年前',
      type: 'notification',
      key: '000000002',
    },
    {
      id: '000000003',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png',
      title: '这种模板可以区分多种通知类型',
      datetime: '3 年前',
      read: true,
      type: 'notification',
      key: '000000003',
    },
    {
      id: '000000004',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png',
      title: '左侧图标用于区分不同的类型',
      datetime: '3 年前',
      type: 'notification',
      key: '000000004',
    },
    {
      id: '000000005',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png',
      title: '内容不要超过两行字，超出时自动截断',
      datetime: '3 年前',
      type: 'notification',
      key: '000000005',
    },
  ],
  message: [
    {
      id: '000000006',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '曲丽丽 评论了你',
      description: '描述信息描述信息描述信息',
      datetime: '3 年前',
      type: 'message',
      clickClose: true,
      key: '000000006',
    },
    {
      id: '000000007',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '朱偏右 回复了你',
      description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
      datetime: '3 年前',
      type: 'message',
      clickClose: true,
      key: '000000007',
    },
    {
      id: '000000008',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '标题',
      description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
      datetime: '3 年前',
      type: 'message',
      clickClose: true,
      key: '000000008',
    },
  ],
  event: [
    {
      id: '000000006',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '曲丽丽 评论了你',
      description: '描述信息描述信息描述信息',
      datetime: '3 年前',
      type: 'message',
      clickClose: true,
      key: '000000006',
    },
    {
      id: '000000007',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '朱偏右 回复了你',
      description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
      datetime: '3 年前',
      type: 'message',
      clickClose: true,
      key: '000000007',
    },
    {
      id: '000000008',
      avatar:
        'https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg',
      title: '标题',
      description: '这种模板用于提醒谁与你发生了互动，左侧放『谁』的头像',
      datetime: '3 年前',
      type: 'message',
      clickClose: true,
      key: '000000008',
    },
  ],
};

const Page: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const toggle = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ background: 'rgba(255, 255, 255, 0.2)' }}>
          <Header style={{ padding: 0, background: '#fff' }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                style: {
                  fontSize: `18px`,
                  lineHeight: `64px`,
                  padding: `0 24px`,
                  cursor: `pointer`,
                  transition: `color 0.3s`,
                },
                onClick: toggle,
              },
            )}
            <NoticeView count={11}>
              <NoticeView.Tab
                tabKey="notification"
                list={data.notification}
                title="通知"
                emptyText="你已查看所有通知"
                showViewMore
              />
              <NoticeView.Tab
                tabKey="message"
                list={data.message}
                title="消息"
                emptyText="您已读完所有消息"
                showViewMore
              />
              <NoticeView.Tab
                tabKey="event"
                title="待办"
                emptyText="你已完成所有待办"
                list={data.event}
                showViewMore
              />
            </NoticeView>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: '#fff',
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default Page;
