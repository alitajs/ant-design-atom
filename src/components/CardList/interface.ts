export interface Member {
  avatar: string;
  name: string;
  id: string;
}

export interface DataProps {
  label: string | React.ReactNode;
  value: string | number;
}

export interface ListItemDataType {
  id: string | number;
  title?: string;
  avatar?: string;
  dropdownItem?: string[] | [];
  data?: DataProps[];
  actions?: string;
}

export interface ICardListProps {
  list: ListItemDataType[];
  bottomClick?: (id: string | number, value: string) => void;
  cardClick?: (id: string | number) => void;
}
