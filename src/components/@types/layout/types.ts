import {ColorTypes} from '../../index';

/** Type definition of button color types */
export type ButtonColorTypes = ColorTypes | {
    outline: true;
    colorType: ColorTypes;
} | {
    background?: ColorTypes;
    border?: ColorTypes;
    text?: ColorTypes;
};
