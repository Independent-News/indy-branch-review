import { FormInputProps } from '../Input.types';
type SelectOption = {
    label: string;
    value: string;
};
export interface SelectProps extends FormInputProps<HTMLSelectElement> {
    /**
     * A list of options to display in the select
     */
    options: SelectOption[];
    /**
     * Style guide: If it is likely that pre-selecting an option will
     * save the majority of users time, then we should pre-select the
     * default option
     */
    defaultValue?: string | number;
}
export {};
//# sourceMappingURL=SelectInput.types.d.ts.map