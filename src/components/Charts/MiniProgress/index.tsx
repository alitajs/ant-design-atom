import React from 'react';
import { Tooltip } from 'antd';
import './index.less';

export interface MiniProgressProps {
  target?: number;
  targetLabel?: string;
  color?: string;
  strokeWidth?: number;
  percent: number;
  style?: React.CSSProperties;
}

const MiniProgress: React.FC<MiniProgressProps> = ({
  targetLabel,
  target = 100,
  color = '#1890FF',
  strokeWidth = 8,
  percent,
}) => (
  <div className="atom-mini-progress">
    <Tooltip title={targetLabel}>
      <div
        className="atom-mini-progress-target"
        style={{ left: target ? `${target}%` : undefined }}
      >
        <span style={{ backgroundColor: color || undefined }} />
        <span style={{ backgroundColor: color || undefined }} />
      </div>
    </Tooltip>
    <div className="atom-mini-progress-wrap">
      <div
        className="atom-mini-progress-line"
        style={{
          backgroundColor: color || undefined,
          width: percent ? `${percent}%` : undefined,
          height: strokeWidth || undefined,
        }}
      />
    </div>
  </div>
);

export default MiniProgress;
