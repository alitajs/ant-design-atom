import { Card } from 'antd';
import { CardProps } from 'antd/es/card';
import React from 'react';
import classNames from 'classnames';
import './index.less';

type totalType = () => React.ReactNode;

const renderTotal = (total?: number | totalType | React.ReactNode) => {
  if (!total && total !== 0) {
    return null;
  }
  let totalDom;
  switch (typeof total) {
    case 'undefined':
      totalDom = null;
      break;
    case 'function':
      totalDom = <div className="atom-total">{total()}</div>;
      break;
    default:
      totalDom = <div className="atom-total">{total}</div>;
  }
  return totalDom;
};

export interface ChartCardProps extends CardProps {
  title: React.ReactNode;
  action?: React.ReactNode;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
  footer?: React.ReactNode;
  height?: number;
  avatar?: React.ReactNode;
  style?: React.CSSProperties;
}

class ChartCard extends React.Component<ChartCardProps> {
  renderContent = () => {
    const {
      height,
      title,
      avatar,
      action,
      total,
      footer,
      children,
      loading,
    } = this.props;
    if (loading) {
      return false;
    }
    return (
      <div className="atom-chart-card">
        <div
          className={classNames('atom-chart-top', {
            ['atom-chart-top-margin']: !children && !footer,
          })}
        >
          <div className="atom-avatar">{avatar}</div>
          <div className="atom-meta-wrap">
            <div className="atom-meta">
              <span className="title">{title}</span>
              <span className="action">{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (
          <div className="atom-content" style={{ height: height || 'auto' }}>
            <div className={height && 'atom-content-fixed'}>{children}</div>
          </div>
        )}
        {footer && (
          <div
            className={classNames('atom-footer', {
              ['atom-footer-margin']: !children,
            })}
          >
            {footer}
          </div>
        )}
      </div>
    );
  };

  render() {
    const {
      loading = false,
      height = 1,
      title,
      avatar,
      action,
      total,
      footer,
      children,
      ...rest
    } = this.props;
    return (
      <Card
        loading={loading}
        bodyStyle={{ padding: '20px 24px 8px 24px' }}
        {...rest}
      >
        {this.renderContent()}
      </Card>
    );
  }
}

export default ChartCard;
