import {HTMLAttributes} from "react";
import {arrayCombine} from "../../../utils";

/**
 * Make types compatible to responsive (for Cirrus)
 */
export const responsiveCompatible = (arr: any[], connector = '-') => {
    return arrayCombine([arr, [''].concat(RESPONSIVE)], connector, 'string');
};

// List of responsive breaks
export const RESPONSIVE = [
    'mobile', 'tablet', 'desktop', 'widescreen', 'fullhd',
    'touch', 'tablet-only', 'desktop-only', 'widescreen-only',
];
// List of columns
export const COLUMNS = [
    '', 'three-quarters', 'two-thirds', 'half', 'one-third',
    'one-quarter', 'full',
    'four-fifths', 'three-fifths', 'two-fifths', 'one-fifth',
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];
// List of colors
export const COLORS = [
    'white', 'black', 'light', 'dark',
    'primary', 'link', 'info', 'success', 'warning', 'danger',
    'black-bis', 'black-ter', 'grey-darker', 'grey-dark',
    'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis',
    'primary-light', 'link-light', 'info-light', 'success-light',
    'warning-light', 'danger-light', 'primary-dark', 'link-dark',
    'info-dark', 'success-dark', 'warning-dark', 'danger-dark',
];
// list of size
export const ELEMENT_SIZES = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20, 24, 32,
];
// list of alternative sizes
export const ALTERNATIVE_SIZES = [
    'small', 'default', 'normal', 'medium', 'large', 'fullwidth'
];
// list of absolutes
export const ABSOLUTES = [
    '-auto', '-0', '-1', '-2', '-3', '-4', '-5', '-6', '-small', '-medium', '-large',
    't-auto', 't-0', 't-1', 't-2', 't-3', 't-4', 't-5', 't-6', 't-small', 't-medium', 't-large',
    'r-auto', 'r-0', 'r-1', 'r-2', 'r-3', 'r-4', 'r-5', 'r-6', 'r-small', 'r-medium', 'r-large',
    'b-auto', 'b-0', 'b-1', 'b-2', 'b-3', 'b-4', 'b-5', 'b-6', 'b-small', 'b-medium', 'b-large',
    'l-auto', 'l-0', 'l-1', 'l-2', 'l-3', 'l-4', 'l-5', 'l-6', 'l-small', 'l-medium', 'l-large',
    'x-auto', 'x-0', 'x-1', 'x-2', 'x-3', 'x-4', 'x-5', 'x-6', 'h-small', 'h-medium', 'h-large',
    'y-auto', 'y-0', 'y-1', 'y-2', 'y-3', 'y-4', 'y-5', 'y-6',
];
// list of clearfixes
export const CLEARFIXES = [
    'bulma-clearfix-mixin',
];
// list content
export const CONTENT = [
    'content',
];
// list of display
export const DISPLAYS = responsiveCompatible([
    'block', 'flex', 'inline', 'inline-block', 'inline-flex',
    'hidden', 'invisible', 'sr-only',
]);
// list of flexbox
export const FLEXBOXES = [
    'flex',
    'flex-direction-row', 'flex-direction-row-reverse', 'flex-direction-column', 'flex-direction-column-reverse',
    'flex-wrap-nowrap', 'flex-wrap-wrap', 'flex-wrap-wrap-reverse',
    'justify-content-flex-start', 'justify-content-flex-end', 'justify-content-center',
    'justify-content-space-between', 'justify-content-space-around', 'justify-content-space-evenly',
    'justify-content-start', 'justify-content-end', 'justify-content-left', 'justify-content-right',
    'align-content-flex-start', 'align-content-flex-end', 'align-content-center',
    'align-content-space-between', 'align-content-space-around', 'align-content-space-evenly',
    'align-content-stretch', 'align-content-start', 'align-content-end', 'align-content-baseline',
    'align-items-stretch', 'align-items-flex-start', 'align-items-flex-end', 'align-items-center',
    'align-items-baseline', 'align-items-start', 'align-items-end', 'align-items-self-start', 'align-items-self-end',
];
// list of fontsize
export const FONT_SIZES = responsiveCompatible([
    'size-1', 'size-2', 'size-3', 'size-4', 'size-5', 'size-6', 'size-7',
]);
// list of font weight
export const FONT_WEIGHTS = [
    'text-weight-light', 'text-weight-normal', 'text-weight-medium',
    'text-weight-semibold', 'text-weight-bold',
];
// list of gaps for flexbox and grid items
export const GAPS = responsiveCompatible([
    'gap-px', 'col-gap-px', 'row-gap-px',
    'gap-0', 'gap-1', 'gap-2', 'gap-3', 'gap-4', 'gap-5', 'gap-6', 'gap-8', 'gap-10',
    'gap-12', 'gap-16', 'gap-20', 'gap-24', 'gap-32', 'gap-48', 'gap-64',
    'col-gap-0', 'col-gap-1', 'col-gap-2', 'col-gap-3', 'col-gap-4', 'col-gap-5', 'col-gap-6', 'col-gap-8', 'col-gap-10',
    'col-gap-12', 'col-gap-16', 'col-gap-20', 'col-gap-24', 'col-gap-32', 'col-gap-48', 'col-gap-64',
    'row-gap-0', 'row-gap-1', 'row-gap-2', 'row-gap-3', 'row-gap-4', 'row-gap-5', 'row-gap-6', 'row-gap-8', 'row-gap-10',
    'row-gap-12', 'row-gap-16', 'row-gap-20', 'row-gap-24', 'row-gap-32', 'row-gap-48', 'row-gap-64',
]);
// list of grid column span
export const GRID_COLSPANS = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];
// list of grid gap
export const GRID_GAPS = [
    1, 2, 3, 4, 6, 8, 10, 16, 20, 24,
];
// list of grid row span
export const GRID_ROWSPANS = [
    1, 2, 3, 4, 5, 6,
];
// list of headlines
export const HEADLINES = [
    1, 2, 3, 4, 5, 6,
];
// list of heights
export const HEIGHTS = responsiveCompatible([
    0, 'px', 'auto', 'screen',
    '10p', '20p', '30p', '40p', '50p', '60p', '70p', '80p', '90p', '100p',
    1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64,
]);
// list of letter spacing
export const LETTER_SPACINGS = responsiveCompatible([
    'tightest', 'tighter', 'light', 'normal', 'loose', 'looser', 'loosest',
]);
// list of line height
export const LINE_HEIGHTS = responsiveCompatible([
    'none', 'tighter', 'tight', 'normal', 'loose', 'looser',
]);
// list of margins
export const MARGINS = responsiveCompatible([
    'm-px', 'm-0', 'm-1', 'm-2', 'm-3', 'm-4', 'm-5', 'm-6', 'm-8',
    'm-10', 'm-12', 'm-16', 'm-20', 'm-24', 'm-32', 'm-48', 'm-64',
    'mx-px', 'mx-0', 'mx-1', 'mx-2', 'mx-3', 'mx-4', 'mx-5', 'mx-6', 'mx-8',
    'mx-10', 'mx-12', 'mx-16', 'mx-20', 'mx-24', 'mx-32', 'mx-48', 'mx-64',
    'my-px', 'my-0', 'my-1', 'my-2', 'my-3', 'my-4', 'my-5', 'my-6', 'my-8',
    'my-10', 'my-12', 'my-16', 'my-20', 'my-24', 'my-32', 'my-48', 'my-64',
    'mt-px', 'mt-0', 'mt-1', 'mt-2', 'mt-3', 'mt-4', 'mt-5', 'mt-6', 'mt-8',
    'mt-10', 'mt-12', 'mt-16', 'mt-20', 'mt-24', 'mt-32', 'mt-48', 'mt-64',
    'mb-px', 'mb-0', 'mb-1', 'mb-2', 'mb-3', 'mb-4', 'mb-5', 'mb-6', 'mb-8',
    'mb-10', 'mb-12', 'mb-16', 'mb-20', 'mb-24', 'mb-32', 'mb-48', 'mb-64',
    'ml-px', 'ml-0', 'ml-1', 'ml-2', 'ml-3', 'ml-4', 'ml-5', 'ml-6', 'ml-8',
    'ml-10', 'ml-12', 'ml-16', 'ml-20', 'ml-24', 'ml-32', 'ml-48', 'ml-64',
    'mr-px', 'mr-0', 'mr-1', 'mr-2', 'mr-3', 'mr-4', 'mr-5', 'mr-6', 'mr-8',
    'mr-10', 'mr-12', 'mr-16', 'mr-20', 'mr-24', 'mr-32', 'mr-48', 'mr-64',
]);
// list of max-height
export const MAX_HEIGHTS = responsiveCompatible([
    'none',
    '10p', '20p', '30p', '40p', '50p', '60p', '70p', '80p', '90p', '100p',
    'screen',
]);
// list of max-width
export const MAX_WIDTHS = responsiveCompatible([
    'none', 'xs', 'sm', 'md', 'lg', 'xl',
    '10p', '20p', '30p', '40p', '50p', '60p', '70p', '80p', '90p', '100p',
    'screen',
]);
// list of min-height
export const MIN_HEIGHTS = responsiveCompatible([
    0,
    '10p', '20p', '30p', '40p', '50p', '60p', '70p', '80p', '90p', '100p',
    'screen',
]);
// list of min-widths
export const MIN_WIDTHS = responsiveCompatible([
    0, 'xs', 'sm', 'md', 'lg', 'xl',
    '10p', '20p', '30p', '40p', '50p', '60p', '70p', '80p', '90p', '100p',
    'screen',
]);
// List of opacity
export const OPACITIES = responsiveCompatible([
    'opacity-0', 'opacity-10', 'opacity-20', 'opacity-30', 'opacity-40', 'opacity-50',
    'opacity-60', 'opacity-70', 'opacity-80', 'opacity-90', 'opacity-100',
    'bg-opacity-0', 'bg-opacity-10', 'bg-opacity-20', 'bg-opacity-30', 'bg-opacity-40', 'bg-opacity-50',
    'bg-opacity-60', 'bg-opacity-70', 'bg-opacity-80', 'bg-opacity-90', 'bg-opacity-100',
    'color-opacity-0', 'color-opacity-10', 'color-opacity-20', 'color-opacity-30', 'color-opacity-40', 'color-opacity-50',
    'color-opacity-60', 'color-opacity-70', 'color-opacity-80', 'color-opacity-90', 'color-opacity-100',
    'border-opacity-0', 'border-opacity-10', 'border-opacity-20', 'border-opacity-30', 'border-opacity-40', 'border-opacity-50',
    'border-opacity-60', 'border-opacity-70', 'border-opacity-80', 'border-opacity-90', 'border-opacity-100',
]);
// list of overflow behaviors
export const OVERFLOW_BEHAVIORS = [
    'auto', 'hidden', 'visible', 'scroll',
    'x-auto', 'x-hidden', 'x-visible', 'x-scroll',
    'y-auto', 'y-hidden', 'y-visible', 'y-scroll',
];
// list of padding
export const PADDINGS = responsiveCompatible([
    'p-px', 'p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5', 'p-6', 'p-8',
    'p-10', 'p-12', 'p-16', 'p-20', 'p-24', 'p-32', 'p-48', 'p-64',
    'px-px', 'px-0', 'px-1', 'px-2', 'px-3', 'px-4', 'px-5', 'px-6', 'px-8',
    'px-10', 'px-12', 'px-16', 'px-20', 'px-24', 'px-32', 'px-48', 'px-64',
    'py-px', 'py-0', 'py-1', 'py-2', 'py-3', 'py-4', 'py-5', 'py-6', 'py-8',
    'py-10', 'py-12', 'py-16', 'py-20', 'py-24', 'py-32', 'py-48', 'py-64',
    'pt-px', 'pt-0', 'pt-1', 'pt-2', 'pt-3', 'pt-4', 'pt-5', 'pt-6', 'pt-8',
    'pt-10', 'pt-12', 'pt-16', 'pt-20', 'pt-24', 'pt-32', 'pt-48', 'pt-64',
    'pb-px', 'pb-0', 'pb-1', 'pb-2', 'pb-3', 'pb-4', 'pb-5', 'pb-6', 'pb-8',
    'pb-10', 'pb-12', 'pb-16', 'pb-20', 'pb-24', 'pb-32', 'pb-48', 'pb-64',
    'pl-px', 'pl-0', 'pl-1', 'pl-2', 'pl-3', 'pl-4', 'pl-5', 'pl-6', 'pl-8',
    'pl-10', 'pl-12', 'pl-16', 'pl-20', 'pl-24', 'pl-32', 'pl-48', 'pl-64',
    'pr-px', 'pr-0', 'pr-1', 'pr-2', 'pr-3', 'pr-4', 'pr-5', 'pr-6', 'pr-8',
    'pr-10', 'pr-12', 'pr-16', 'pr-20', 'pr-24', 'pr-32', 'pr-48', 'pr-64',
]);
// list of positions
export const POSITIONS = responsiveCompatible([
    'static', 'fixed', 'absolute', 'relative', 'sticky',
]);
// list of spaces
export const SPACES = responsiveCompatible([
    'space',
], '--');
// list of transition durations
export const TRANSITION_DURATIONS = responsiveCompatible([
    75, 100, 200, 300, 500, 700, 1000,
]);
// list of vertical align
export const VERTICAL_ALIGNS = responsiveCompatible([
    'baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super',
]);
// list of widths
export const WIDTHS = responsiveCompatible([
    0, 'px', 'auto', 'screen',
    '10p', '20p', '30p', '40p', '50p', '60p', '70p', '80p', '90p', '100p',
    1, 2, 3, 4, 5, 6, 8, 10, 12, 16, 20, 24, 32, 48, 64,
]);
// list of z-index
export const ZINDEXES = responsiveCompatible([
    0, 1, 10, 20, 30 ,40, 50, -1, 'auto',
]);
// list of Misc
export const MISC = [
    'pull-left', 'pull-right',
    'text-ellipsis', 'text-break',
    'center', 'center-all',
    'overlay',
    'has-text-centered', 'has-text-justified', 'has-text-left', 'has-text-right',
    'disabled', 'unselectable', 'round-xs', 'round-full', 'no-outline', 'shadow',
];

// list of input sizes
export const INPUT_SIZES = arrayCombine([[
    'input'
], RESPONSIVE], '--');

/**
 * Get default style classes for type of element
 * @param type
 * @param element
 * @param subType
 */
export const getDefaultStyleClass = (
    type: string, element: string = '', subType?: string
) => {
    switch (type.toLowerCase()) {
        case 'block':
            return ['block'];
        case 'box':
            return ['box'];
        case 'breadcrumb':
            switch (element?.toLowerCase()) {
                case 'li':
                    return [];
                default:
                    return ['breadcrumb'];
            }
        case 'breadcrumb-item':
            switch (element.toLowerCase()) {
                case 'icon':
                    switch (subType?.toLowerCase()) {
                        case 'span':
                            return ['icon', 'is-small'];
                    }
                    break;
            }
            break;
        case 'button':
            switch (subType?.toLowerCase()) {
                case 'delete':
                    return ['delete'];
                default:
                    return ['button'];
            }
        case 'buttons':
            return ['buttons'];
        case 'card':
            return ['card'];
        case 'card-header':
            return ['card-header'];
        case 'card-header-title':
            return ['card-header-title'];
        case 'card-header-icon':
            switch (element.toLowerCase()) {
                case 'span':
                    return ['icon'];
                case 'icons':
                    break;
                default:
                    return ['card-header-icon'];
            }
            break;
        case 'card-image':
            switch (element.toLowerCase()) {
                case 'figure':
                    return ['image'];
                case 'img':
                    break;
                default:
                    return ['card-image'];
            }
            break;
        case 'card-content':
            return ['card-content'];
        case 'card-footer':
            return ['card-footer'];
        case 'card-footer-item':
            return ['card-footer-item'];
        case 'columns':
            return ['columns'];
        case 'column':
            return ['column'];
        case 'content':
            return ['content'];
        case 'delete':
            return ['delete'];
        case 'divider':
            return [getStylePrefix(element) + 'divider'];
        case 'dropdown':
            switch (subType?.toLowerCase()) {
                case 'is-active':
                    return ['is-active'];
                case 'is-up':
                    return ['is-up'];
                default:
                    return ['dropdown'];
            }
        case 'dropdown-menu':
            return ['dropdown-menu'];
        case 'dropdown-trigger':
            switch (element.toLowerCase()) {
                case 'button':
                    return [];
                case 'span':
                    return ['icon'];
                case 'icons':
                    return [];
                default:
                    return ['dropdown-trigger'];
            }
        case 'dropdown-content':
            return ['dropdown-content'];
        case 'dropdown-item':
            switch (subType?.toLowerCase()) {
                case 'is-active':
                    return ['is-active'];
                default:
                    return ['dropdown-item'];
            }
        case 'dropdown-divider':
            return ['dropdown-divider'];
        case 'fieldset':
            return ['is-grouped'];
        case 'figure':
            return ['fig'];
        case 'form':
            switch (element.toLowerCase()) {
                case 'input':
                    switch (subType?.toLowerCase()) {
                        case 'checkbox':
                            return ['checkbox'];
                        case 'radio':
                            return ['radio'];
                        default:
                            return ['input'];
                    }
                case 'textarea':
                    return ['textarea'];
            }
            break;
        case 'form-field':
            switch (element.toLowerCase()) {
                case 'label':
                    return ['label'];
                default:
                    switch (subType?.toLowerCase()) {
                        case 'is-grouped':
                            return ['is-grouped'];
                        case 'is-grouped-multiline':
                            return ['is-grouped-multiline'];
                        case 'has-addons':
                            return ['has-addons'];
                        default:
                            return ['field'];
                    }
            }
        case 'form-control':
            switch (element.toLowerCase()) {
                case 'icons':
                    switch (subType?.toLowerCase()) {
                        case 'left':
                            return ['has-icons-left'];
                        case 'right':
                            return ['has-icons-right'];
                    }
                    break;
                case 'span':
                    switch (subType?.toLowerCase()) {
                        case 'left':
                            return ['icon', 'is-left'];
                        case 'right':
                            return ['icon', 'is-right'];
                    }
                    break;
                default:
                    switch (subType?.toLowerCase()) {
                        case 'is-expanded':
                            return ['is-expanded'];
                        default:
                            return ['control'];
                    }
            }
            break;
        case 'form-file':
            switch (element.toLowerCase()) {
                case 'label':
                    return ['file-label'];
                case 'input':
                    return ['file-input'];
                case 'span':
                    switch (subType?.toLowerCase()) {
                        case 'cta':
                            return ['file-cta'];
                        case 'icon':
                            return ['file-icon'];
                        case 'label':
                            return ['file-label'];
                        case 'filename':
                            return ['file-name'];
                    }
                    break;
                default:
                    switch (subType?.toLowerCase()) {
                        case 'has-filename':
                            return ['has-name'];
                        case 'is-boxed':
                            return ['is-boxed'];
                        case 'is-expanded':
                            return ['is-fullwidth'];
                        default:
                            return ['file'];
                    }
            }
            break;
        case 'form-select':
            switch (element.toLowerCase()) {
                default:
                    switch (subType?.toLowerCase()) {
                        case 'icon':
                            return ['icon', 'is-left'];
                        default:
                            return ['select'];
                    }
            }
        case 'heading':
            const results = [];
            switch (element.toLowerCase()) {
                case 'h1':
                    results.push('is-1'); break;
                case 'h2':
                    results.push('is-2'); break;
                case 'h4':
                    results.push('is-4'); break;
                case 'h5':
                    results.push('is-5'); break;
                case 'h6':
                    results.push('is-6'); break;
                case 'h3':
                default:
                    results.push('is-3'); break;
            }
            switch (subType?.toLowerCase()) {
                case 'sub': case 'subtitle':
                    results.push('subtitle'); break;
                default:
                    results.push('title');
            }
            return results;
        case 'icon':
            return ['icon'];
        case 'image':
            switch (element.toLowerCase()) {
                default:
                    return ['image'];
            }
        case 'labelled-checkbox':
        case 'labelled-radio':
            switch (element.toLowerCase()) {
                case 'container':
                    return ['control'];
                case 'footnote':
                    return ['help'];
                case 'label':
                    return subType ? [subType.toLowerCase()] : [];
                default:
                    return subType ? [subType.toLowerCase()] : [];
            }
        case 'list':
            switch (element.toLowerCase()) {
                case 'ol':
                    switch (subType?.toLowerCase()) {
                        case 'a':
                            return ['is-lower-alpha'];
                        case 'A':
                            return ['is-upper-alpha'];
                        case 'i':
                            return ['is-lower-roman'];
                        case 'I':
                            return ['is-upper-roman'];
                        default:
                            return [];
                    }
            }
            break;
        case 'menu':
            return ['menu'];
        case 'menu-label':
            return ['menu-label'];
        case 'menu-list':
            return ['menu-list'];
        case 'menu-item':
            switch (element.toLowerCase()) {
                case 'a':
                    switch (subType?.toLowerCase()) {
                        case 'is-active':
                            return ['is-active'];
                    }
            }
            return [];
        case 'message':
            return ['message'];
        case 'message-header':
            switch (element.toLowerCase()) {
                case 'button':
                    switch (subType?.toLowerCase()) {
                        case 'delete':
                            return ['delete'];
                    }
                    break;
                case 'p':
                    break;
                default:
                    return ['message-header'];
            }
            break;
        case 'message-body':
            return ['message-body'];
        case 'modal':
            switch (subType?.toLowerCase()) {
                case 'is-active':
                    return ['is-active'];
                default:
                    return ['modal', 'is-active'];
            }
        case 'modal-background':
            return ['modal-background'];
        case 'modal-close':
            return ['modal-close'];
        case 'modal-content':
            return ['modal-content'];
        case 'modal-card':
            return ['modal-card'];
        case 'modal-card-head':
            return ['modal-card-head'];
        case 'modal-card-body':
            return ['modal-card-body'];
        case 'modal-card-foot':
            switch (element.toLowerCase()) {
                case 'button':
                    switch (subType?.toLowerCase()) {
                        case 'ok':
                            return ['button', 'is-success'];
                        case 'cancel':
                            return ['button'];
                    }
                    break;
                default:
                    return ['modal-card-foot'];
            }
            break;
        case 'modal-overlay':
            return ['delete'];
        case 'navbar':
            return ['navbar'];
        case 'navbar-brand':
            switch (element.toLowerCase()) {
                case 'a':
                    switch (subType?.toLowerCase()) {
                        case 'item':
                            return ['navbar-item'];
                        case 'burger':
                            return ['navbar-burger'];
                    }
                    break;
                default:
                    return ['navbar-brand'];
            }
            break;
        case 'navbar-burger':
            return ['navbar-burger'];
        case 'navbar-dropdown':
            return ['navbar-dropdown'];
        case 'navbar-item':
            switch (element.toLowerCase()) {
                case 'button':
                    return ['navbar-item', 'button'];
                case 'div':
                    switch (subType?.toLowerCase()) {
                        case 'has-dropdown':
                            return ['navbar-item', 'has-dropdown', 'is-hoverable'];
                        default:
                            return ['navbar-item'];
                    }
                case 'hr':
                    return ['navbar-divider'];
                default:
                    return ['navbar-item'];
            }
        case 'navbar-link':
            switch (element.toLowerCase()) {
                case 'a':
                    return ['navbar-link'];
            }
            break;
        case 'navbar-menu':
            switch (element.toLowerCase()) {
                case 'div':
                    switch (subType?.toLowerCase()) {
                        case 'start':
                            return ['navbar-start'];
                        case 'end':
                            return ['navbar-end'];
                        default:
                            return ['navbar-menu'];
                    }
            }
            break;
        case 'notification':
            return ['notification'];
        case 'pagination':
            switch (subType) {
                case 'list':
                    return ['pagination-list'];
                case 'item':
                    return [];
                case 'current':
                    return ['is-current'];
                case 'item-subtitle':
                    return [];
                case 'link':
                    return ['pagination-link'];
                case 'ellipsis':
                    return ['pagination-ellipsis'];
                case 'prev':
                    return ['pagination-previous'];
                case 'prev:disabled':
                    return ['pagination-previous', 'is-disabled'];
                case 'next':
                    return ['pagination-next'];
                case 'next:disabled':
                    return ['pagination-next', 'is-disabled'];
                default:
                    return ['pagination'];
            }
        case 'panel':
            return ['panel'];
        case 'panel-heading':
            return ['panel-heading'];
        case 'panel-block':
            switch (element.toLowerCase()) {
                case 'a':
                    switch (subType?.toLowerCase()) {
                        case 'icon':
                            return ['icon'];
                        default:
                            return ['panel-block'];
                    }
                default:
                    return ['panel-block'];
            }
        case 'panel-tabs':
            return ['panel-tabs'];
        case 'panel-tab-item':
            switch (subType?.toLowerCase()) {
                case 'is-active':
                    return ['is-active'];
            }
            break;
        case 'panel-icon':
            return ['panel-icon'];
        case 'placeholder':
            switch (subType) {
                case 'icon':
                    return ['placeholder-icon'];
                case 'title':
                    return ['placeholder-title'];
                case 'subtitle':
                    return ['placeholder-subtitle'];
                case 'commands':
                    return ['placeholder-commands'];
                default:
                    return ['placeholder'];
            }
        case 'progress':
            return ['progress'];
        case 'table':
            return ['table'];
        case 'tabs':
            return ['tabs'];
        case 'tab-item':
            switch (element.toLowerCase()) {
                case 'li':
                    switch (subType?.toLowerCase()) {
                        case 'is-active':
                            return ['is-active'];
                    }
                    break;
            }
            break;
        case 'tags':
            return ['tags'];
        case 'tag':
            switch (element.toLowerCase()) {
                default:
                    return ['tag'];
            }
        case 'title':
            switch (subType) {
                case 'sub': case 'subtitle':
                    return ['subtitle'];
                default:
                    return ['title'];
            }
        case 'toast':
            return ['toast'];
        case 'tooltip':
            return ['tooltip'];
    }
    return [];
};

export const getStylePrefix = (type: string|undefined) => {
    if (type === undefined) {
        return '';
    }
    switch (type.toLowerCase()) {
        case 'background':
            return 'has-background-';
        case 'dropdown':
            return 'dropdown-';
        case 'progress':
            return 'is-';
        case 'text':
            return 'has-text-';
        default:
            return 'is-';
    }
};

/**
 * Get aria-label for type specified
 * @param type
 * @param element
 * @param subType
 */
export const getDefaultAdditionalAttributes = (
    type?: string, element?: string, subType?: string
): Map<keyof HTMLAttributes<HTMLElement>, string> => {
    if (type !== undefined) {
        switch (type.toLowerCase()) {
            case 'breadcrumb':
                return new Map([
                    ['aria-label', 'breadcrumbs'],
                ]);
            case 'card-header-icon':
                switch (element?.toLowerCase()) {
                    case 'button':
                        return new Map([
                            ['aria-label', 'more options'],
                        ]);
                    case 'icons':
                        return new Map([
                            ['aria-hidden', 'true'],
                        ]);
                }
                break;
            case 'dropdown-trigger':
                switch (element?.toLowerCase()) {
                    case 'button':
                        return new Map([
                            ['aria-haspopup', 'true'],
                            ['aria-controls', '%%DROPDOWN_MENU_ID%%'],
                        ]);
                    case 'icons':
                        return new Map([
                            ['aria-hidden', 'true'],
                        ]);
                }
                break;
            case 'dropdown-menu':
                return new Map([
                    ['role', 'menu'],
                ]);
            case 'message-header':
                switch (element?.toLowerCase()) {
                    case 'delete':
                        return new Map([
                            ['aria-label', 'delete'],
                        ]);
                }
                break;
            case 'modal-close':
                return new Map([
                    ['aria-label', 'close'],
                ]);
            case 'navbar':
                return new Map([
                    ['role', 'navigation'],
                    ['aria-label', 'navigation']
                ]);
            case 'navbar-brand':
                switch (element?.toLowerCase()) {
                    case 'a':
                        switch (subType?.toLowerCase()) {
                            case 'burger':
                                return new Map([
                                    ['role', 'button'],
                                    ['aria-label', 'menu'],
                                    ['aria-expanded', 'false'],
                                ]);
                        }
                        break;
                }
                break;
            case 'pagination':
                switch (subType) {
                    case 'list':
                    case 'item':
                    case 'current':
                    case 'item-subtitle':
                    case 'link':
                    case 'ellipsis':
                    case 'prev':
                    case 'prev-disabled':
                    case 'next':
                    case 'next-disabled':
                        break;
                    case 'link:current':
                        return new Map([
                            ['aria-current', 'page'],
                        ]);
                    default:
                        return new Map([
                            ['role', 'navigation'],
                        ]);
                }
                break;
            case 'pagination-link':
                switch (subType?.toLowerCase()) {
                    case 'current':
                        return new Map([
                            ['aria-current', 'page'],
                        ]);
                }
                break;
        }
    }
    return new Map();
};
