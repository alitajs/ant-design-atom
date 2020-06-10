import { Axis, Chart, Geom, Tooltip } from 'bizcharts';
import React, { Component } from 'react';

import Debounce from 'lodash.debounce';
import styles from '../index.less';

export interface BarProps {
  title: React.ReactNode;
  color?: string;
  padding?: [number, number, number, number];
  height?: number;
  data: {
    x: string;
    y: number;
  }[];
  forceFit?: boolean;
  autoLabel?: boolean;
  style?: React.CSSProperties;
  alias?: { x: string; y: string };
}

class Bar extends Component<
  BarProps,
  {
    autoHideXLabels: boolean;
  }
> {
  state = {
    autoHideXLabels: false,
  };

  root: HTMLDivElement | undefined = undefined;

  node: HTMLDivElement | undefined = undefined;

  resize = Debounce(() => {
    if (!this.node || !this.node.parentNode) {
      return;
    }
    const canvasWidth = (this.node.parentNode as HTMLDivElement).clientWidth;
    const { data = [], autoLabel = true } = this.props;
    if (!autoLabel) {
      return;
    }
    const minWidth = data.length * 30;
    const { autoHideXLabels } = this.state;

    if (canvasWidth <= minWidth) {
      if (!autoHideXLabels) {
        this.setState({
          autoHideXLabels: true,
        });
      }
    } else if (autoHideXLabels) {
      this.setState({
        autoHideXLabels: false,
      });
    }
  }, 500);

  componentDidMount() {
    window.addEventListener('resize', this.resize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  handleRoot = (n: HTMLDivElement) => {
    this.root = n;
  };

  handleRef = (n: HTMLDivElement) => {
    this.node = n;
  };

  render() {
    const {
      height = 1,
      title,
      forceFit = true,
      data,
      color = 'rgba(24, 144, 255, 0.85)',
      padding,
      alias = {
        x: 'x',
        y: 'y',
      },
    } = this.props;

    const { autoHideXLabels } = this.state;

    const scale = {
      [alias.x]: {
        type: 'cat',
      },
      [alias.y]: {
        min: 0,
      },
    };

    const tooltip: [
      string,
      (...args: any[]) => { name?: string; value: string },
    ] = [
      `${alias.x}*${alias.y}`,
      (x: string, y: string) => ({
        name: x,
        value: y,
      }),
    ];

    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <Chart
            scale={scale}
            height={title ? height - 41 : height}
            forceFit={forceFit}
            data={data}
            padding={padding || 'auto'}
          >
            <Axis
              name={alias.x}
              title={false}
              label={autoHideXLabels ? undefined : {}}
              tickLine={autoHideXLabels ? undefined : {}}
            />
            <Axis name={alias.y} min={0} />
            <Tooltip showTitle={false} crosshairs={false} />
            <Geom
              type="interval"
              position={`${alias.x}*${alias.y}`}
              color={color}
              tooltip={tooltip}
            />
          </Chart>
        </div>
      </div>
    );
  }
}

export default Bar;
