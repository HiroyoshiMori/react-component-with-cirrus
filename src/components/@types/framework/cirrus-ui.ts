import {arrayCombine} from "../../../utils";

/**
 * Make types compatible to responsive (for Cirrus)
 */
export const responsiveCompatible = (arr: any[], connector = '-') => {
    return arrayCombine([arr, [''].concat(RESPONSIVE)], connector, 'string');
};

// List of responsive breaks
export const RESPONSIVE = [
    'xs', 'sm', 'md', 'lg', 'xl',
];
// List of columns
export const COLUMNS = [
    '', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
];
// List of colors
export const COLORS = [
    'primary', 'white', 'black', 'light', 'dark', 'link', 'link-dark',
    'info', 'success', 'warning', 'danger', 'transparent',
    'pink-100', 'pink-200', 'pink-300', 'pink-400', 'pink-500', 'pink-600', 'pink-700', 'pink-800', 'pink-900',
    'red-100', 'red-200', 'red-300', 'red-400', 'red-500', 'red-600', 'red-700', 'red-800', 'red-900',
    'orange-100', 'orange-200', 'orange-300', 'orange-400', 'orange-500',
    'orange-600', 'orange-700', 'orange-800', 'orange-900',
    'yellow-100', 'yellow-200', 'yellow-300', 'yellow-400', 'yellow-500',
    'yellow-600', 'yellow-700', 'yellow-800', 'yellow-900',
    'green-100', 'green-200', 'green-300', 'green-400', 'green-500',
    'green-600', 'green-700', 'green-800', 'green-900',
    'teal-100', 'teal-200', 'teal-300', 'teal-400', 'teal-500',
    'teal-600', 'teal-700', 'teal-800', 'teal-900',
    'blue-100', 'blue-200', 'blue-300', 'blue-400', 'blue-500',
    'blue-600', 'blue-700', 'blue-800', 'blue-900',
    'indigo-100', 'indigo-200', 'indigo-300', 'indigo-400', 'indigo-500',
    'indigo-600', 'indigo-700', 'indigo-800', 'indigo-900',
    'purple-100', 'purple-200', 'purple-300', 'purple-400', 'purple-500',
    'purple-600', 'purple-700', 'purple-800', 'purple-900',
    'gray-100', 'gray-200', 'gray-300', 'gray-400', 'gray-500',
    'gray-600', 'gray-700', 'gray-800', 'gray-900',
];
// list of size
export const ELEMENT_SIZES = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20, 24, 32,
];
// list of alternative sizes
export const ALTERNATIVE_SIZES = [
    'xs', 'sm', 'lg', 'xl',
];
// list of absolutes
export const ABSOLUTES = responsiveCompatible([
    'top-0', 'top-px', 'top-auto',
    'top-25p', 'top-50p', 'top-75p', 'top-100p',
    'top-n25p', 'top-n50p', 'top-n75p', 'top-n100p',
    'top-1', 'top-2', 'top-3', 'top-4', 'top-5', 'top-6', 'top-8',
    'top-n1', 'top-n2', 'top-n3', 'top-n4', 'top-n5', 'top-n6', 'top-n8',
    'left-0', 'left-px', 'left-auto',
    'left-25p', 'left-50p', 'left-75p', 'left-100p',
    'left-n25p', 'left-n50p', 'left-n75p', 'left-n100p',
    'left-1', 'left-2', 'left-3', 'left-4', 'left-5', 'left-6', 'left-8',
    'left-n1', 'left-n2', 'left-n3', 'left-n4', 'left-n5', 'left-n6', 'left-n8',
    'bottom-0', 'bottom-px', 'bottom-auto',
    'bottom-25p', 'bottom-50p', 'bottom-75p', 'bottom-100p',
    'bottom-n25p', 'bottom-n50p', 'bottom-n75p', 'bottom-n100p',
    'bottom-1', 'bottom-2', 'bottom-3', 'bottom-4', 'bottom-5', 'bottom-6', 'bottom-8',
    'bottom-n1', 'bottom-n2', 'bottom-n3', 'bottom-n4', 'bottom-n5', 'bottom-n6', 'bottom-n8',
    'right-0', 'right-px', 'right-auto',
    'right-25p', 'right-50p', 'right-75p', 'right-100p',
    'right-n25p', 'right-n50p', 'right-n75p', 'right-n100p',
    'right-1', 'right-2', 'right-3', 'right-4', 'right-5', 'right-6', 'right-8',
    'right-n1', 'right-n2', 'right-n3', 'right-n4', 'right-n5', 'right-n6', 'right-n8',
]);
// list of border radius
export const BORDER_RADIUS = [
    'none', 'xs', 'sm', 'md', 'lg', 'xl', 'full',
];
// list of border width
export const BORDER_WIDTHS = responsiveCompatible([
    0, 1, 2, 4, 8,
]);
// list of box shadows
export const BOX_SHADOWS = [
    'shadow-none', 'shadow-xs', 'shadow-sm', 'shadow-md', 'shadow-lg', 'shadow-xl', 'shadow-inset',
];
// list of clearfixes
export const CLEARFIXES = responsiveCompatible([
    'clear-left', 'clear-right', 'clear-both', 'clearfix',
]);
// list content
export const CONTENT = [
    'content',
];
// list of display
export const DISPLAYS = responsiveCompatible([
    'none', 'inline', 'inline-block', 'block',
    'table', 'table-row', 'table-cell',
]);
// list of filters
export const FILTERS = responsiveCompatible([
    'none', 'xs', 'sm', 'md', 'lg', 'xl',
]);
// list of flexbox
export const FLEXBOXES = responsiveCompatible([
    'flex', 'inline-flex', 'flex-row', 'flex-row-reverse', 'flex-column', 'flex-column-reverse', 'align-stretch',
    'align-flex-start', 'align-center', 'align-flex-end', 'align-baseline',
    'justify-flex-start', 'justify-center', 'justify-flex-end',
    'justify-space-between', 'justify-space-around', 'justify-space-evenly',
    'flex-grow-0', 'flex-grow-1', 'flex-shrink-0', 'flex-shrink-1',
    'basis-auto', 'basis-max-content', 'basis-min-content', 'basis-fit-content',
    'basis-content', 'basis-revert', 'basis-revert-layer',
]);
// list of fontsize
export const FONT_SIZES = [...RESPONSIVE];
// list of font weight
export const FONT_WEIGHTS = [
    'extrathin', 'thin', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold',
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
    'u-pull-left', 'u-pull-right',
    'u-text-ellipsis', 'u-text-break',
    'u-center', 'u-center-all',
    'u-overlay', 'u-text-justify', 'u-text-left', 'u-text-right', 'u-text-center',
    'u-disabled', 'u-unselectable', 'u-round-xs', 'u-round-full', 'u-no-outline', 'u-shadow',
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
export const getDefaultStyleClass = (type: string, element: string | undefined = '', subType: string | undefined = undefined) => {
    switch (type.toLowerCase()) {
        case 'block':
            switch (element.toLowerCase()) {
                case 'a':
                    return ['u-block'];
            }
            break;
        case 'box':
            return [];
        case 'breadcrumb':
            return [];
        case 'button':
            switch (element.toLowerCase()) {
                case 'a':
                    return ['btn'];
                case 'div':
                    return ['btn'];
            }
            break;
        case 'column':
            switch (subType?.toLowerCase()) {
                case 'multiple':
                    return ['columns'];
                default:
                    return ['column'];
            }
        case 'content':
            return [];
        case 'checkbox':
        case 'radio':
            switch (element.toLowerCase()) {
                case 'container':
                    return [
                        getStylePrefix(subType) + 'control',
                        getStylePrefix(subType) + type,
                    ];
                case 'footnote':
                    return ['info'];
                case 'label':
                    return [getStylePrefix(subType) + 'label'];
                default:
                    return [getStylePrefix(subType) + 'input'];
            }
        case 'delete':
            return [];
        case 'divider':
            switch (subType?.toLowerCase()) {
                case 'vertical':
                    return ['divider--v'];
                default:
                    return ['divider'];
            }
        case 'dropdown':
            return ['list-dropdown'];
        case 'fieldset':
            return ['form-group'];
        case 'figure':
            return ['fig'];
        case 'heading':
            switch (element.toLowerCase()) {
                case 'h1':
                    return ['headline-1'];
                case 'h2':
                    return ['headline-2'];
                case 'h4':
                    return ['headline-4'];
                case 'h5':
                    return ['headline-5'];
                case 'h6':
                    return ['headline-6'];
                case 'h3':
                default:
                    return ['headline-3'];
            }
        case 'icon':
            return ['icon'];
        case 'image':
            return [];
        case 'menu':
            switch (subType?.toLowerCase()) {
                case 'item':
                    return ['menu-item'];
                default:
                    return ['menu'];
            }
        case 'message':
            switch (subType?.toLowerCase()) {
                case 'header':
                    return [];
                case 'body':
                    return [];
                default:
                    return ['toast'];
            }
        case 'modal':
            switch (subType?.toLowerCase()) {
                case 'content':
                    return ['modal-content'];
                case 'header':
                    return ['modal-header'];
                case 'body':
                    return ['modal-body'];
                case 'footer':
                    return ['modal-footer'];
                case 'overlay':
                    return ['modal-overlay', 'close-btn'];
                default:
                    return ['modal', 'modal--visible'];
            }
        case 'notification':
            return [];
        case 'pagination':
            switch (subType) {
                case 'list':
                    return [];
                case 'item':
                    return ['pagination-item'];
                case 'item-subtitle':
                    return ['pagination-item-subtitle'];
                case 'link':
                    return [];
                case 'ellipsis':
                    return [];
                case 'prev':
                    return ['pagination-item', 'pagination-prev'];
                case 'next':
                    return ['pagination-item', 'pagination-next'];
                default:
                    return ['pagination'];
            }
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
            return [];
        case 'table':
            return [];
        case 'tag':
            return ['tag'];
        case 'title':
            return [];
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
            return 'bg-';
        case 'border':
            return 'border-';
        case 'border-radius':
            return 'u-round-';
        case 'border-width':
            return 'u-border-';
        case 'box-shadow':
            return 'u-shadow-';
        case 'button':
            return 'btn--';
        case 'column':
            return 'col-';
        case 'filter':
            return 'u-blur-';
        case 'font-weight':
            return 'font-';
        case 'form':
            return 'form-ext-';
        case 'grid':
            return 'grid-gap-';
        case 'height':
            return 'h-';
        case 'letter-spacing':
            return 'tracking-';
        case 'line-height':
            return 'leading-';
        case 'margin':
            return 'm-';
        case 'max-height':
            return 'max-h-';
        case 'max-width':
            return 'max-w-';
        case 'min-height':
            return 'min-h-';
        case 'min-width':
            return 'min-w-';
        case 'overflow':
            return 'u-overflow-';
        case 'padding':
            return 'p-';
        case 'progress':
            return 'progress--';
        case 'span':
            return 'grid-c-';
        case 'transition-duration':
            return 'u-duration-';
        case 'text':
            return 'text-';
        case 'vertical-align':
            return 'u-align-';
        case 'width':
            return 'w-';
        case 'z-index':
            return 'u-z-';
        case 'absolute':
        case 'clearfix':
        case 'display':
        case 'flexbox':
        case 'gap':
        case 'misc':
        case 'opacity':
        case 'position':
        default:
            return 'u-';
    }
};

/**
 * Get aria-label for type specified
 * @param type
 * @param subType
 */
export const getDefaultAdditionalAttributes = (
    type?: string, subType?: string
): Array<{[key: string]: string|number|boolean}> => {
    if (type !== undefined) {
        // Nothing to do at this moment
    }
    return [];
};
