export interface IRadioGroupItem {
  label: string;
  value: string | number;
}

export interface IExtraCardProps {
  loading?: boolean;
  title: string | React.ReactNode;
  radioGroup?: IRadioGroupItem[];
  radioGroupChange?: (val: string | number) => void;
  menuList?: string[];
  menuChange?: (val: string) => void;
  extra?: string | React.ReactNode;
}
