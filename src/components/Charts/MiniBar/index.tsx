import { Chart, Geom, Tooltip } from 'bizcharts';

import React from 'react';
import '../index.less';

export interface MiniBarProps {
  color?: string;
  height?: number;
  data: {
    x: number | string;
    y: number;
  }[];
  forceFit?: boolean;
  style?: React.CSSProperties;
  alias?: { x: string; y: string };
}

const MiniBar: React.FC<MiniBarProps> = props => {
  const {
    height = 0,
    forceFit = true,
    color = '#1890FF',
    data = [],
    alias = {
      x: 'x',
      y: 'y',
    },
  } = props;

  const scale = {
    [alias.x || 'x']: {
      type: 'cat',
    },
    [alias.y || 'y']: {
      min: 0,
    },
  };

  const padding: [number, number, number, number] = [36, 5, 30, 5];

  const tooltip: [
    string,
    (...args: any[]) => { name?: string; value: string },
  ] = [
    `${alias.x || 'x'}*${alias.y || 'y'}`,
    (x: string, y: string) => ({
      name: x,
      value: y,
    }),
  ];

  // for tooltip not to be hide
  const chartHeight = height + 54;

  return (
    <div className="atom-mini-chart" style={{ height }}>
      <div className="atom-mini-chart-content">
        <Chart
          scale={scale}
          height={chartHeight}
          forceFit={forceFit}
          data={data}
          padding={padding}
        >
          <Tooltip showTitle={false} crosshairs={false} />
          <Geom
            type="interval"
            position={`${alias.x || 'x'}*${alias.y || 'y'}`}
            color={color}
            tooltip={tooltip}
          />
        </Chart>
      </div>
    </div>
  );
};
export default MiniBar;
