import React, { FC, useEffect, useState } from 'react';
import { Card, Radio, Dropdown, Menu } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import { IExtraCardProps } from './interface';
import './index.less';

const ExtraCard: FC<IExtraCardProps> = props => {
  const [radioValue, setRadioValue] = useState<string | number>('');

  const {
    loading = false,
    title,
    children,
    radioGroup = [],
    radioGroupChange,
    menuList = [],
    menuChange,
    extra = '',
  } = props;

  useEffect(() => {
    if (radioGroup.length) {
      setRadioValue(radioGroup[0].value);
    }
  }, [radioGroup]);

  const radioClick = (e: string | number) => {
    if (radioGroupChange && e !== radioValue) radioGroupChange(e);
    setRadioValue(e);
  };

  return (
    <Card
      loading={loading}
      className="atom-ecard"
      bordered={false}
      title={title}
      style={{
        height: '100%',
      }}
      extra={
        <div className="atom-ecard-extra">
          {extra}
          {radioGroup && radioGroup.length > 0 && (
            <div className="atom-ecard-radio">
              <Radio.Group value={radioValue} onChange={() => {}}>
                {radioGroup.map(item => (
                  <Radio.Button
                    onClick={() => {
                      radioClick(item.value);
                    }}
                    key={item.value}
                    value={item.value}
                  >
                    {item.label}
                  </Radio.Button>
                ))}
              </Radio.Group>
            </div>
          )}
          {menuList && menuList.length > 0 && (
            <div className="atom-ecard-dropdown">
              <Dropdown
                overlay={
                  <Menu>
                    {menuList.map(item => (
                      <Menu.Item
                        onClick={() => {
                          if (menuChange) menuChange(item);
                        }}
                        key={item}
                      >
                        {item}
                      </Menu.Item>
                    ))}
                  </Menu>
                }
                placement="bottomRight"
              >
                <EllipsisOutlined />
              </Dropdown>
            </div>
          )}
        </div>
      }
    >
      {children}
    </Card>
  );
};

export default ExtraCard;
