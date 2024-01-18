import {
    BlockquoteHTMLAttributes,
    HTMLAttributes,
    ReactNode,
} from "react";
import {
    CommonDatasetType,
} from "../index";

/** Type definition of property for container */
export type ContainerProps = InlineProps
    | SpanProps
    | AbbrProps
    | BdoProps
    | DelProps
    | InsProps
    | QuoteProps
    | BlockProps
    | BlockQuoteProps;

/** Type definition of common property for container */
export type ContainerCommonProps = {
    id?: string;
    children?: ReactNode;
    classes?: string[];
    datasets?: CommonDatasetType;
};

// ----------------------------------------------------
// Type definitions for inline
// ----------------------------------------------------
/** Type definition of property for inline containers */
export type InlineProps = ContainerCommonProps & {
    inline?: true;
    element?: 'b'|'bdi'|'cite'|'code'|'em'
        |'i'|'kbd'|'mark'|'s'|'samp'|'small'|'strong'
        |'sub'|'sup'|'u'|'var';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for span */
export type SpanProps = ContainerCommonProps & {
    inline?: true;
    element: 'span';
    attributes?: HTMLAttributes<HTMLSpanElement>;
};
/** Type definition of property for abbr/dfn */
export type AbbrProps = ContainerCommonProps & {
    inline?: true;
    element: 'abbr'|'dfn';
    additionalProps?: {
        title?: string;
    };
    attributes?: HTMLAttributes<HTMLLabelElement>;
};
/** Type definition of property for bdo */
export type BdoProps = ContainerCommonProps & {
    inline?: true;
    element: 'bdo';
    additionalProps?: {
        dir?: 'ltr' | 'rtl';
    };
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for del */
export type DelProps = ContainerCommonProps & {
    inline?: true;
    element: 'del';
    additionalProps?: {
        cite?: string;
    };
    attributes?: HTMLAttributes<HTMLModElement>;
};
/** Type definition of property for ins */
export type InsProps = ContainerCommonProps & {
    inline?: true;
    element: 'ins';
    additionalProps?: {
        cite?: string;
        datetime?: string;
    };
    attributes?: HTMLAttributes<HTMLModElement>;
};
/** Type definition of property for q */
export type QuoteProps = ContainerCommonProps & {
    inline?: true;
    element: 'q';
    additionalProps?: {
        cite?: string;
    };
    attributes?: HTMLAttributes<HTMLQuoteElement>;
};

// ----------------------------------------------------
// Type definitions for blocks
// ----------------------------------------------------
/** Type definition of property for div */
export type BlockProps = ContainerCommonProps & {
    inline?: false;
    element?: 'div'|'address'|'article'|'aside'
        |'footer'|'header'|'main'|'nav'
        |'pre'|'section';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for blockquote */
export type BlockQuoteProps = ContainerCommonProps & {
    inline?: false;
    element: 'blockquote';
    additionalProps?: {
        cite?: string;
    };
    attributes?: BlockquoteHTMLAttributes<HTMLQuoteElement>;
};
