import {
  DownloadOutlined,
  EditOutlined,
  EllipsisOutlined,
  ShareAltOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Avatar, Card, Dropdown, List, Menu, Tooltip } from 'antd';
import React from 'react';
import { ICardListProps, ListItemDataType } from './interface';
import './index.less';

const CardList: React.FC<ICardListProps> = props => {
  const { list, bottomClick, cardClick } = props;
  const itemMenu = (id: string | number, dropdownItems: string[]) => (
    <Menu>
      {dropdownItems.map((ddItem: string) => (
        <Menu.Item
          onClick={() => {
            if (bottomClick) bottomClick(id, ddItem);
          }}
          key={ddItem}
        >
          {ddItem}
        </Menu.Item>
      ))}
    </Menu>
  );
  const CardInfo: React.FC<{
    data: any;
    id: any;
  }> = ({ id, data = [] }) => (
    <div
      className="atom-card-list-info"
      onClick={() => {
        if (cardClick) cardClick(id);
      }}
    >
      {data.map((val: { label: React.ReactNode; value: string }) => (
        <div key={val.value}>
          <p className="atom-card-list-label">{val.label}</p>
          <p className="atom-card-list-value">{val.value}</p>
        </div>
      ))}
    </div>
  );

  const actions = (item: ListItemDataType) => {
    const { dropdownItem = [], actions = [], id } = item;
    let actionsList = [];
    actions.map((action: string) => {
      switch (action) {
        case 'setting':
          actionsList.push(
            <Tooltip key="setting" title="设置">
              <SettingOutlined
                onClick={() => {
                  if (bottomClick) bottomClick(id, 'setting');
                }}
              />
            </Tooltip>,
          );
          break;
        case 'download':
          actionsList.push(
            <Tooltip key="download" title="下载">
              <DownloadOutlined
                onClick={() => {
                  if (bottomClick) bottomClick(id, 'download');
                }}
              />
            </Tooltip>,
          );
          break;
        case 'edit':
          actionsList.push(
            <Tooltip title="编辑" key="edit">
              <EditOutlined
                onClick={() => {
                  if (bottomClick) bottomClick(id, 'edit');
                }}
              />
            </Tooltip>,
          );
          break;
        case 'share':
          actionsList.push(
            <Tooltip title="分享" key="share">
              <ShareAltOutlined
                onClick={() => {
                  if (bottomClick) bottomClick(id, 'share');
                }}
              />
            </Tooltip>,
          );
          break;
      }
    });
    if (item.dropdownItem && item.dropdownItem.length) {
      actionsList.push(
        <Dropdown overlay={itemMenu(id, dropdownItem)} key="ellipsis">
          <EllipsisOutlined />
        </Dropdown>,
      );
    }
    return actionsList;
  };
  return (
    <List
      rowKey="id"
      className="atom-card-list"
      grid={{ gutter: 24, xxl: 3, xl: 2, lg: 2, md: 2, sm: 2, xs: 1 }}
      dataSource={list}
      renderItem={item => (
        <List.Item key={item.id}>
          <Card
            hoverable
            bodyStyle={{ paddingBottom: 20 }}
            actions={actions(item)}
          >
            <Card.Meta
              avatar={
                item.avatar && <Avatar size="default" src={item.avatar} />
              }
              title={item.title}
              onClick={() => {
                if (cardClick) cardClick(item.id);
              }}
            />
            <CardInfo data={item.data} id={item.id} />
          </Card>
        </List.Item>
      )}
    />
  );
};

export default CardList;
