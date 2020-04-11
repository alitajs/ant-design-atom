import { Avatar, Tooltip } from 'antd';

import React from 'react';
import classNames from 'classnames';
import { SizeType, AvatarItemProps, AvatarListProps } from './interface';
import './index.less';

const avatarSizeToClassName = (size?: SizeType | 'mini') =>
  classNames('atom-avatar-item', {
    ['atom-avatar-item-large']: size === 'large',
    ['atom-avatar-item-small']: size === 'small',
    ['atom-avatar-item-mini']: size === 'mini',
  });

const Item: React.FC<AvatarItemProps> = props => {
  const { src, size, tips, style, onClick, ...otherProps } = props;
  const cls = avatarSizeToClassName(size);

  return (
    <li
      className={cls}
      onClick={() => {
        if (onClick) onClick({ ...props });
      }}
    >
      {tips ? (
        <Tooltip title={tips}>
          <Avatar
            src={src}
            size={size}
            style={{ cursor: 'pointer', ...style }}
            {...otherProps}
          />
        </Tooltip>
      ) : (
        <Avatar src={src} size={size} />
      )}
    </li>
  );
};

const AvatarList: React.FC<AvatarListProps> & { Item: typeof Item } = ({
  children,
  size,
  maxLength = 5,
  itemStyle,
  onClick = () => {},
  ...other
}) => {
  const numOfChildren = React.Children.count(children);
  const numToShow = maxLength >= numOfChildren ? numOfChildren : maxLength;
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    AvatarItemProps
  >[];
  const childrenWithProps = childrenArray.slice(0, numToShow).map(child =>
    React.cloneElement(child, {
      size,
    }),
  );

  if (numToShow < numOfChildren) {
    const cls = avatarSizeToClassName(size);

    childrenWithProps.push(
      <li key="exceed" className={cls}>
        <Avatar size={size} style={itemStyle}>{`+${numOfChildren -
          maxLength}`}</Avatar>
      </li>,
    );
  }

  return (
    <div {...other} className="atom-avatar-list" onClick={onClick}>
      <ul> {childrenWithProps} </ul>
    </div>
  );
};

AvatarList.Item = Item;

export default AvatarList;
