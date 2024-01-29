import {
    capitalizeFirstLetter,
} from "../../utils";
import * as Cirrus from '../@types/css_framework/cirrus';

const framework = capitalizeFirstLetter(
    process.env.css_framework || 'Cirrus'
);
let styleClasses;
switch (framework) {
    case 'Cirrus':
    default:
        styleClasses = Cirrus;
}
/** Framework to use several functions */
// @ts-ignore
export const cssFramework = styleClasses;

/** Type definition for columns */
export type ColumnTypes = typeof cssFramework.COLUMNS[number];
/** Type definition for colors */
export type ColorTypes = typeof cssFramework.COLORS[number];
/** Type definition for element sizes */
export type ElementSizeTypes = typeof cssFramework.ELEMENT_SIZES[number];
/** Type definition for alternative sizes */
export type AlternativeSizeTypes = typeof cssFramework.ALTERNATIVE_SIZES[number];
/** Type definition for absolutes */
export type AbsoluteTypes = typeof cssFramework.ABSOLUTES[number];
/** Type definition for border radius */
export type BorderRadiusTypes = typeof cssFramework.BORDER_RADIUS[number];
/** Type definition for border width */
export type BorderWidthTypes = typeof cssFramework.BORDER_WIDTHS[number];
/** Type definition for box shadows */
export type BoxShadowTypes = typeof cssFramework.BOX_SHADOWS[number];
/** Type definition for clearfix */
export type ClearfixTypes = typeof cssFramework.CLEARFIXES[number];
/** Type definition for content */
export type ContentTypes = typeof cssFramework.CONTENT[number];
/** Type definition for display */
export type DisplayTypes = typeof cssFramework.DISPLAYS[number];
/** Type definition for filters */
export type FilterTypes = typeof cssFramework.FILTERS[number];
/** Type definition for flexbox */
export type FlexboxTypes = typeof cssFramework.FLEXBOXES[number];
/** Type definition for fontsize */
export type FontSizeTypes = typeof cssFramework.FONT_SIZES[number];
/** Type definition for font weight */
export type FontWeightTypes = typeof cssFramework.FONT_WEIGHTS[number];
/** Type definition for gaps */
export type GapTypes = typeof cssFramework.GAPS[number];
/** Type definition for grid column span */
export type GridColumnSpanTypes = typeof cssFramework.GRID_COLSPANS[number];
/** Type definition for grid gaps */
export type GridGapTypes = typeof cssFramework.GRID_GAPS[number];
/** Type definition for grid row span */
export type GridRowSpanTypes = typeof cssFramework.GRID_ROWSPANS[number];
/** Type definition for headline */
export type HeadlineTypes = typeof cssFramework.HEADLINES[number];
/** Type definition for heights */
export type HeightTypes = typeof cssFramework.HEIGHTS[number];
/** Type definition for letter spacing */
export type LetterSpacingTypes = typeof cssFramework.LETTER_SPACINGS[number];
/** Type definition for line height */
export type LineHeightTypes = typeof cssFramework.LINE_HEIGHTS[number];
/** Type definition for margins */
export type MarginTypes = typeof cssFramework.MARGINS[number];
/** Type definition for max-heights */
export type MaxHeightTypes = typeof cssFramework.MAX_HEIGHTS[number];
/** type definition for max-widths */
export type MaxWidthTypes = typeof cssFramework.MAX_WIDTHS[number];
/** Type definition for min-heights */
export type MinHeightTypes = typeof cssFramework.MIN_HEIGHTS[number];
/** type definition for min-widths */
export type MinWidthTypes = typeof cssFramework.MIN_WIDTHS[number];
/** Type definition for opacities */
export type OpacityTypes = typeof cssFramework.OPACITIES[number];
/** Type definition for overflow behaviors */
export type OverflowTypes = typeof cssFramework.OVERFLOW_BEHAVIORS[number];
/** Type definition for paddings */
export type PaddingTypes = typeof cssFramework.PADDINGS[number];
/** Type definition for positions */
export type PositionTypes = typeof cssFramework.POSITIONS[number];
/** Type definition for spaces */
export type SpaceTypes = typeof cssFramework.SPACES[number];
/** Type definition for transition duration */
export type TransitionDurationTypes = typeof cssFramework.TRANSITION_DURATIONS[number];
/** Type definition for vertical align */
export type VerticalAlignTypes = typeof cssFramework.VERTICAL_ALIGNS[number];
/** Type definition for widths */
export type WidthTypes = typeof cssFramework.WIDTHS[number];
/** Type definition for z-index */
export type zIndexTypes = typeof cssFramework.ZINDEXES[number];
/** Type definition for misc */
export type MiscTypes = typeof cssFramework.MISC[number];
/** Type definition for element size of input/select */
export type InputSizeTypes = typeof cssFramework.INPUT_SIZES[number];

// ----------------------------------------------------------------------
// Global type/variable definition for general tags
// ----------------------------------------------------------------------
// list of autocomplete
export const AUTOCOMPLETES = [
    'off', 'on',
    'name', 'honorific-prefix', 'given-name', 'additional-name', 'family-name', 'honorific-suffix', 'nickname',
    'email', 'username', 'new-password', 'current-password', 'one-time-code',
    'organization-title', 'organization',
    'street-address', 'address-line1', 'address-line2', 'address-line3',
    'address-level4', 'address-level3', 'address-level2', 'address-level1',
    'country', 'country-name', 'postal-code',
    'cc-name', 'cc-given-name', 'cc-additional-name', 'cc-family-name',
    'cc-number', 'cc-exp', 'cc-exp-month', 'cc-exp-year', 'cc-csc', 'cc-type',
    'transaction-currency', 'transaction-amount', 'language',
    'bday', 'bday-day', 'bday-month', 'bday-year',
    'sex',
    'tel', 'tel-country-code', 'tel-national', 'tel-area-code', 'tel-local', 'tel-extension',
    'impp', 'url', 'photo',
];
// list of input modes
export const INPUT_MODES = [
    'none', 'text', 'tel', 'url', 'email', 'numeric', 'decimal', 'search',
];
// list of text wraps
export const TEXT_WRAPS = [
    'hard', 'soft', 'off',
];

/** Type definition for autocomplete */
export type AutoCompleteTypes = typeof AUTOCOMPLETES[number];
/** Type definition for input modes */
export type InputModeTypes = typeof INPUT_MODES[number];
/** Type definition for text wrap */
export type TextWrapTypes = typeof TEXT_WRAPS[number];

// list of cross origin
export const CROSS_ORIGINS = [
    'anonymous', 'use-credentials',
];
// list of decoding
export const DECODINGS = [
    'auto', 'sync', 'async',
];
// list of fetch policy
export const FETCH_POLICIES = [
    'auto', 'high', 'low',
];
// list of loading
export const LOADINGS = [
    'eager', 'lazy',
];
// list of sandbox
export const SANDBOXES = [
    'allow-download', 'allow-downloads-without-user-activation', 'allow-forms', 'allow-modals',
    'allow-orientation-lock', 'allow-pointer-lock', 'allow-popups', 'allow-popups-to-escape-sandobox',
    'allow-presentation', 'allow-same-origin', 'allow-scripts', 'allow-storage-access-by-user-activation',
    'allow-top-navigation', 'allow-top-navigation-by-user-activation', 'allow-top-navigation-to-custom-protocols',
];
// list of link as
export const LINK_AS = [
    'audio', 'document', 'embed', 'fetch', 'font', 'image', 'object', 'script', 'style', 'track', 'video', 'worker',
];

/** Type definition for cross origin */
export type CrossOriginTypes = typeof CROSS_ORIGINS[number];
/** Type definition for decoding */
export type DecodingTypes = typeof DECODINGS[number];
/** Type definition for fetch policy */
export type FetchPolicyTypes = typeof FETCH_POLICIES[number];
/** Type definition for loading */
export type LoadingTypes = typeof LOADINGS[number];
/** Type definition for sandbox */
export type SandboxTypes = typeof SANDBOXES[number];
/** Type definition for link as */
export type LinkAsTypes = typeof LINK_AS[number];

// ----------------------------------------------------------------------
// Global type/variable definition for input
// ----------------------------------------------------------------------
// list of input[type=text] types
export const INPUT_TEXT_TYPES = [
    'text', 'search', 'email', 'url', 'tel', 'password', 'number',
];
// list of input types
export const INPUT_TYPES = INPUT_TEXT_TYPES || [
    'checkbox', 'radio',
    'date', 'time',
    'color', 'file',
    'range',
];
// List of input states
export const INPUT_STATES = [
    'focused', 'disabled', 'success', 'error',
];
// list of form enctypes
export const FORM_ENCTYPES = [
    'application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain',
];
// list of form methods
export const FORM_METHODS = [
    'get', 'post', 'dialog',
];
// list of targets
export const TARGETS = [
    '_self', '_blank', '_parent', '_top',
];
// list of autocapitalizes
export const AUTOCAPITALIZES = [
    'none', 'off', 'sentences', 'on', 'words',
];
// list of preload
export const PRELOADS = [
    'none', 'metadata', 'auto', '',
];
// list of controlslist
export const CONTROLS_LIST = [
    'nofullscreen', 'nodownload', 'noremoteplayback',
    'play', 'timeline', 'volume',

];

/** Type definition for field types of input[type=text] */
export type InputTextTypes = typeof INPUT_TEXT_TYPES[number];
/** Type definition for field types of input */
export type InputTypes = typeof INPUT_TYPES[number];
/** Type definition for element states of input */
export type InputStateTypes = typeof INPUT_STATES[number];
/** Type definition for form enctype */
export type FormEnctypeTypes = typeof FORM_ENCTYPES[number];
/** Type definition for form methods */
export type FormMethodTypes = typeof FORM_METHODS[number];
/** Type definition for targets */
export type TargetTypes = typeof TARGETS[number] | string;
/** Type definition for autocapitalize */
export type AutoCapitalizeTypes = typeof AUTOCAPITALIZES[number];
/** Type definition for preload */
export type PreloadTypes = typeof PRELOADS[number];
/** Type definition for controlslist */
export type ControlsListTypes = typeof CONTROLS_LIST[number];

// ----------------------------------------------------------------------
// Global common type/variable definition
// ----------------------------------------------------------------------
/** Type definition for common datasets */
export type CommonDatasetType = Map<string, string>;

// ----------------------------------------------------------------------
// Exports sub folders
// ----------------------------------------------------------------------
export * from './element';
export * from './form';
export * from './layout';
