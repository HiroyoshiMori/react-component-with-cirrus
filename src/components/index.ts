import * as Dummy from './@types/framework/dummy';
import * as Bulma from '../frameworks/bulma/@types/index';
import * as CirrusUi from './@types/framework/cirrus-ui';
import {checkCaller} from "../utils";

let currentFramework: string|undefined;
export const setCssFramework = (name: string | undefined) => {
    if (currentFramework !== name) {
        console.debug('currentFramework:' + currentFramework + ' -> ' + name);
        checkCaller();
        currentFramework = name;
    }
}
export const getCssFramework = () => {
    let styleCss;
    const meta = document.querySelector('meta[itemprop=css-framework-used]') as HTMLMetaElement;
    if (meta) {
        setCssFramework(
            meta.content ?? undefined
        );
    }
    console.debug('currentFramework:' + currentFramework);
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
