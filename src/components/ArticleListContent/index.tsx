import { Avatar } from 'antd';
import React from 'react';
import moment from 'moment';
import './index.less';

export interface ApplicationsProps {
  data: {
    content?: string;
    updatedAt?: any;
    avatar?: string;
    owner?: string;
    href?: string;
  };
}
const ArticleListContent: React.FC<ApplicationsProps> = ({
  data: { content, updatedAt, avatar, owner, href },
}) => (
  <div className="atom-list-content">
    <div className="atom-description">{content}</div>
    <div className="atom-extra">
      <Avatar src={avatar} size="small" />
      <a href={href}>{owner}</a> 发布在 <a href={href}>{href}</a>
      <em>{moment(updatedAt).format('YYYY-MM-DD HH:mm')}</em>
    </div>
  </div>
);

export default ArticleListContent;
