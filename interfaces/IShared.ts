export interface routeProps {
  route: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export interface buttonProps {
  text: string;
  aria: string;
  onClick: () => void;
}
