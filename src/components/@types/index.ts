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
