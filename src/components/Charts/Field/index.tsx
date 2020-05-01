import React from 'react';
import './index.less';

export interface FieldProps {
  label: React.ReactNode;
  value: React.ReactNode;
  style?: React.CSSProperties;
}

const Field: React.FC<FieldProps> = ({ label, value, ...rest }) => (
  <div className="atom-field" {...rest}>
    <span className="atom-label">{label}</span>
    <span className="atom-number">{value}</span>
  </div>
);

export default Field;
