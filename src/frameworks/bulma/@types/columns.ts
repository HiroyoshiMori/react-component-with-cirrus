import {CommonComponentProps} from "./index";
import {DivProps} from "../index";

// -------------------------------------------------------------------
// Type definitions of common properties for columns for bulma
// -------------------------------------------------------------------
/** Type definition of properties for column layout */
export type ColumnProps = {
    component?: 'column',
    element: 'div';
} & CommonComponentProps<DivProps>;
/** Type definition of properties for columns layout */
export type ColumnsProps = {
    component?: 'columns';
    element: 'div',
    columns: ColumnProps | ColumnProps[];
    commonClassesInChild?: string[];
} & CommonComponentProps<DivProps>;

