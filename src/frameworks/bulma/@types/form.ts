import {
    CommonComponentProps,
    DivProps,
    IconsProps, InputFileProps,
    LabelProps,
    PProps,
    SelectProps, TypeAlignment, TypeColors,
    TypeElementSize, TypeElementState,
} from "../index";

// -------------------------------------------------------------------
// Type definitions of common properties for form for bulma
// -------------------------------------------------------------------
/** Type definitions of properties for form field */
export type FormFieldProps = {
    component?: 'form-field';
    element: 'div';
    isGrouped?: boolean;
    groupedMultiline?: boolean;
    hasAddon?: boolean;
    position?: TypeAlignment;
    label?: LabelProps;
    elementSize?: TypeElementSize;
    items: FormControlProps | FormControlProps[];
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** TYpe definitions of properties for form control */
export type FormControlProps = FormControlItemProps & {
    component?: 'form-control';
    leftIcon?: IconsProps;
    rightIcon?: IconsProps;
    elementSize?: TypeElementSize;
    isExpanded?: boolean;
};
/** Type definitions of properties for item for form control */
export type FormControlItemProps = DivProps | PProps;

/** Type definitions of properties for select */
export type FormSelectProps = {
    component?: 'form-select';
    element: 'div';
    select: SelectProps;
    elementSize?: TypeElementSize;
    elementState?: TypeElementState;
    elementColor?: TypeColors;
    selectedValue?: string;
    multiple?: boolean;
    size?: number;
} & CommonComponentProps<DivProps>;

/** Type definitions of properties for file */
export type FormFileProps = {
    component?: 'form-file',
    label: string;
    file: InputFileProps;
    icon?: IconsProps;
    isBoxed?: boolean;
    isExpanded?: boolean;
    fileName?: string;
    elementColor?: TypeColors;
} & CommonComponentProps<DivProps>;
