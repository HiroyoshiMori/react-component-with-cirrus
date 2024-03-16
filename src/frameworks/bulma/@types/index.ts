// ----------------------------------------------------------------------
// Global type/variable definition of components for bulma framework
// ----------------------------------------------------------------------

// -------------------------------------------------------------------
// Type definitions of common properties for several components for bulma
// -------------------------------------------------------------------

import {ElementBaseProps} from "../../../components";

/**
 * Type definitions of common properties of components for Bulma
 */
export type CommonComponentProps<T extends ElementBaseProps> = {
    component?: string;
} & T;

export * from './columns';
export * from './components';
export * from './elements';
export * from './form';

// list of alignment
export const ALIGNMENTS = [
    'centered', 'right'
];
// list of colors
export const COLORS = [
    'primary', 'link', 'info', 'success', 'warning', 'danger',
];
// list of element sizes
export const ELEMENT_SIZES = [
    'small', 'normal', 'medium', 'large',
];
// list of element states
export const ELEMENT_STATES = [
    'hover', 'focus', 'active',
];

/** Type of alignment */
export type TypeAlignment = typeof ALIGNMENTS[number];
/** Type of colors */
export type TypeColors = typeof COLORS[number];
/** Type of element sizes */
export type TypeElementSize = typeof ELEMENT_SIZES[number];
/** Type of element states */
export type TypeElementState = typeof ELEMENT_STATES[number];
