// List of responsive breaks
import {HTMLAttributes} from "react";

export const RESPONSIVE = [];
// List of columns
export const COLUMNS = [];
// List of colors
export const COLORS = [];
// list of size
export const ELEMENT_SIZES = [];
// list of alternative sizes
export const ALTERNATIVE_SIZES = [];
// list of absolutes
export const ABSOLUTES = [];
// list of border radius
export const BORDER_RADIUS = [];
// list of border width
export const BORDER_WIDTHS = [];
// list of box shadows
export const BOX_SHADOWS = [];
// list of clearfixes
export const CLEARFIXES = [];
// list content
export const CONTENT = [];
// list of display
export const DISPLAYS = [];
// list of filters
export const FILTERS = [];
// list of flexbox
export const FLEXBOXES = [];
// list of fontsize
export const FONT_SIZES = [];
// list of font weight
export const FONT_WEIGHTS = [];
// list of gaps for flexbox and grid items
export const GAPS = [];
// list of grid column span
export const GRID_COLSPANS = [];
// list of grid gap
export const GRID_GAPS = [];
// list of grid row span
export const GRID_ROWSPANS = [];
// list of headlines
export const HEADLINES = [];
// list of heights
export const HEIGHTS = [];
// list of letter spacing
export const LETTER_SPACINGS = [];
// list of line height
export const LINE_HEIGHTS = [];
// list of margins
export const MARGINS = [];
// list of max-height
export const MAX_HEIGHTS = [];
// list of max-width
export const MAX_WIDTHS = [];
// list of min-height
export const MIN_HEIGHTS = [];
// list of min-widths
export const MIN_WIDTHS = [];
// List of opacity
export const OPACITIES = [];
// list of overflow behaviors
export const OVERFLOW_BEHAVIORS = [];
// list of padding
export const PADDINGS = [];
// list of positions
export const POSITIONS = [];
// list of spaces
export const SPACES = [];
// list of transition durations
export const TRANSITION_DURATIONS = [];
// list of vertical align
export const VERTICAL_ALIGNS = [];
// list of widths
export const WIDTHS = [];
// list of z-index
export const ZINDEXES = [];
// list of Misc
export const MISC = [];

// list of input sizes
export const INPUT_SIZES = [];

/**
 * Get default style classes for type of element
 * @param type
 * @param element
 * @param subType
 */
export const getDefaultStyleClass = (type: string, element: string | undefined = '', subType: string | undefined = undefined) => {
    return [];
};

/**
 * Get prefix for style class when using "type" element
 * @param type
 */
export const getStylePrefix = (type: string|undefined) => {
    return '';
};

/**
 * Get aria-label for type specified
 * @param type
 * @param subType
 * @param element
 */
export const getDefaultAdditionalAttributes = (
    type?: string, element?: string, subType?: string
): Map<keyof HTMLAttributes<HTMLElement>, string> => {
    return new Map();
};
