import { Avatar, List } from 'antd';

import React from 'react';
import classNames from 'classnames';
import { NoticeIconData, NoticeIconTabProps } from './interface';
import './index.less';

const NoticeList: React.SFC<NoticeIconTabProps> = ({
  data = [],
  onClick,
  onClear,
  title,
  onViewMore,
  emptyText,
  showClear = true,
  clearText,
  viewMoreText,
  showViewMore = false,
}) => {
  if (!data || data.length === 0) {
    return (
      <div className="atom-not-found">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
          alt="not found"
        />
        <div>{emptyText}</div>
      </div>
    );
  }
  return (
    <div>
      <List<NoticeIconData>
        className="atom-list"
        dataSource={data}
        renderItem={(item, i) => {
          const itemCls = classNames('atom-item', {
            ['atom-read']: item.read,
          });
          // eslint-disable-next-line no-nested-ternary
          const leftIcon = item.avatar ? (
            typeof item.avatar === 'string' ? (
              <Avatar className="atom-avatar" src={item.avatar} />
            ) : (
              <span className="atom-icon-element">{item.avatar}</span>
            )
          ) : null;

          return (
            <List.Item
              className={itemCls}
              key={item.key || i}
              onClick={() => onClick && onClick(item)}
            >
              <List.Item.Meta
                className="atom-meta"
                avatar={leftIcon}
                title={
                  <div className="atom-title">
                    {item.title}
                    <div className={'atom-extra'}>{item.extra}</div>
                  </div>
                }
                description={
                  <div>
                    <div className="atom-description">{item.description}</div>
                    <div className="atom-datetime">{item.datetime}</div>
                  </div>
                }
              />
            </List.Item>
          );
        }}
      />
      <div className="atom-bottom-bar">
        {showClear ? (
          <div onClick={onClear}>
            {clearText} {title}
          </div>
        ) : null}
        {showViewMore ? (
          <div
            onClick={e => {
              if (onViewMore) {
                onViewMore(e);
              }
            }}
          >
            {viewMoreText}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default NoticeList;
