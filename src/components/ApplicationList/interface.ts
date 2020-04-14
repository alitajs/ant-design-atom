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
  id: string;
  title?: string;
  avatar?: string;
  dropdownItem?: string[] | [];
  data?: DataProps[];
  actions?: string;
}

export interface IApplicationsProps {
  list: ListItemDataType[];
  bottomClick?: (id: string | number, value: string) => void;
  cardClick?: (id: string) => void;
}
