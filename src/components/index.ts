 import * as Dummy from './@types/framework/dummy';
import * as Bulma from './@types/framework/bulma';
import * as CirrusUi from './@types/framework/cirrus-ui';

let currentFramework: string|undefined;
currentFramework = process.env.CSS_FRAMEWORK ?? currentFramework;
export const setCssFramework = (name: string) => {
    currentFramework = name;
    process.env.CSS_FRAMEWORK = name;
}
export const getCssFramework = () => {
    let styleCss;
    switch (currentFramework) {
        case 'Bulma':
            styleCss = Bulma; break;
        case 'Cirrus-UI':
            styleCss = CirrusUi; break;
        default:
            styleCss = Dummy;
    }
    return styleCss;
}
/** Framework to use several functions */
export const cssFramework = getCssFramework();

/** Type definition for colors */
export type ColorTypes = typeof cssFramework.COLORS[number];
/** Type definition for alternative sizes */
export type AlternativeSizeTypes = typeof cssFramework.ALTERNATIVE_SIZES[number];

export * from './@types';
export * from './common';
export * from './element';
export * from './layout';
