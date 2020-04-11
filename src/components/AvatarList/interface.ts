export declare type SizeType = number | 'small' | 'default' | 'large';

export interface AvatarItemProps {
  tips?: React.ReactNode;
  src: string;
  size?: SizeType;
  style?: React.CSSProperties;
  onClick?: (data: any) => void;
}

export interface AvatarListProps {
  Item?: React.ReactElement<AvatarItemProps>;
  size?: SizeType;
  maxLength?: number;
  itemStyle?: React.CSSProperties;
  style?: React.CSSProperties;
  onClick?: () => void;
  children:
    | React.ReactElement<AvatarItemProps>
    | React.ReactElement<AvatarItemProps>[];
}
