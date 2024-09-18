export interface Option {
    name: string;
    value: string;
}
export interface FilterToggleProps {
    options: Option[];
    setSelected: (selected: string) => void;
    selected: string;
}
