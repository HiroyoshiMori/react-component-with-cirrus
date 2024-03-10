import {
    DivProps,
    IconsProps, InputFileProps,
    LabelProps,
    PProps,
    RequiredFields, SelectProps, TypeAlignment, TypeColors,
    TypeElementSize, TypeElementState,
} from "../index";

// -------------------------------------------------------------------
// Type definitions of common properties for form for bulma
// -------------------------------------------------------------------
/** Type definitions of properties for form field */
export type FormFieldProps = Omit<DivProps, 'children'> & {
    component?: 'form-field';
    isGrouped?: boolean;
    groupedMultiline?: boolean;
    hasAddon?: boolean;
    position?: TypeAlignment;
    label?: LabelProps;
    elementSize?: TypeElementSize;
    items: FormControlProps | FormControlProps[];
};
/** TYpe definitions of properties for form control */
export type FormControlProps = FormControlItemProps & {
    component?: 'form-control';
    leftIcon?: IconsProps;
    rightIcon?: IconsProps;
    elementSize?: TypeElementSize;
    isExpanded?: boolean;
};
/** Type definitions of properties for item for form control */
export type FormControlItemProps = RequiredFields<DivProps, 'element'> | RequiredFields<PProps, 'element'>;

/** Type definitions of properties for select */
export type FormSelectProps = RequiredFields<DivProps, 'element'> & {
    component?: 'form-select';
    select: SelectProps;
    elementSize?: TypeElementSize;
    elementState?: TypeElementState;
    elementColor?: TypeColors;
    selectedValue?: string;
    multiple?: boolean;
    size?: number;
};

/** Type definitions of properties for file */
export type FormFileProps = RequiredFields<DivProps, 'element'> & {
    component?: 'form-file',
    label: string;
    file: InputFileProps;
    icon?: IconsProps;
    isBoxed?: boolean;
    isExpanded?: boolean;
    fileName?: string;
    elementColor?: TypeColors;
};
