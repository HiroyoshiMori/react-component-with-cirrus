// ----------------------------------------------------------------------
// Global type/variable definition of components for bulma framework
// ----------------------------------------------------------------------

// -------------------------------------------------------------------
// Type definitions of common properties for several components for bulma
// -------------------------------------------------------------------
/**
 * Type definitions of common properties of components for Bulma
 */
export type CommonComponentProps<T, U> = {
    id?: string;
    additionalProps?: Omit<T, 'id'|'classes'|'attributes'|'datasets'>;
    classes?: string[];
    attributes?: U;
    datasets?: Map<string, string>;
};

export * from './columns';
export * from './components';
export * from './elements';
