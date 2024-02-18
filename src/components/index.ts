import * as Dummy from './@types/framework/dummy';
import * as Bulma from './@types/framework/bulma';
import * as CirrusUi from './@types/framework/cirrus-ui';

export const getCssFramework = () => {
    let styleCss;
    switch (process.env.CSS_FRAMEWORK) {
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
export * from './form';
export * from './layout';
