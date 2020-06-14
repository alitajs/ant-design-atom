import { Axis, Chart, Geom, Tooltip, AxisProps } from 'bizcharts';

import React from 'react';
import '../index.less';

export interface MiniAreaProps {
  color?: string;
  height?: number;
  borderColor?: string;
  line?: boolean;
  animate?: boolean;
  xAxis?: AxisProps;
  forceFit?: boolean;
  scale?: {
    x?: {
      tickCount: number;
    };
    y?: {
      tickCount: number;
    };
  };
  yAxis?: Partial<AxisProps>;
  borderWidth?: number;
  data: {
    x: number | string;
    y: number;
  }[];
  alias?: { x: string; y: string };
}

const MiniArea: React.FC<MiniAreaProps> = props => {
  const {
    height = 1,
    data = [],
    forceFit = true,
    color = 'rgba(24, 144, 255, 1)',
    borderColor = '#1089ff',
    scale = { x: {}, y: {} },
    borderWidth = 2,
    line,
    xAxis,
    yAxis,
    animate = true,
    alias = {
      x: 'x',
      y: 'y',
    },
  } = props;

  const padding: [number, number, number, number] = [36, 5, 30, 5];

  const scaleProps = {
    [alias.x || 'x']: {
      type: 'cat',
      range: [0, 1],
      ...scale.x,
    },
    [alias.y || 'y']: {
      min: 0,
      ...scale.y,
    },
  };

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

  const chartHeight = height + 54;

  return (
    <div className="atom-mini-chart" style={{ height }}>
      <div className="atom-mini-chart-content">
        {height > 0 && (
          <Chart
            animate={animate}
            scale={scaleProps}
            height={chartHeight}
            forceFit={forceFit}
            data={data}
            padding={padding}
          >
            <Axis
              key="axis-x"
              name={alias.x || 'x'}
              label={null}
              line={null}
              tickLine={null}
              grid={null}
              {...xAxis}
            />
            <Axis
              key="axis-y"
              name={alias.y || 'y'}
              label={null}
              line={null}
              tickLine={null}
              grid={null}
              {...yAxis}
            />
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom
              type="area"
              position={`${alias.x || 'x'}*${alias.y || 'y'}`}
              color={color}
              tooltip={tooltip}
              shape="smooth"
              style={{
                fillOpacity: 1,
              }}
            />
            {line ? (
              <Geom
                type="line"
                position="x*y"
                shape="smooth"
                color={borderColor}
                size={borderWidth}
                tooltip={false}
              />
            ) : (
              <span style={{ display: 'none' }} />
            )}
          </Chart>
        )}
      </div>
    </div>
  );
};

export default MiniArea;
