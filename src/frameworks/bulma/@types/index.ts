// ----------------------------------------------------------------------
// Global type/variable definition of components for bulma framework
// ----------------------------------------------------------------------

// -------------------------------------------------------------------
// Type definitions of common properties for several components for bulma
// -------------------------------------------------------------------

import {ElementBaseProps} from "../../../components";
import {HTMLAttributes} from "react";

/**
 * Type definitions of common properties of components for Bulma
 */
export type CommonComponentProps<T extends ElementBaseProps> = {
    component?: string;
} & T;

export * from './columns';
export * from './components';
export * from './elements';
export * from './form';

// list of alignment
export const ALIGNMENTS = [
    'centered', 'right'
];
// list of alternative sizes
export const ALTERNATIVE_SIZES = [
    'small', 'default', 'normal', 'medium', 'large', 'fullwidth'
];
// list of colors
export const COLORS = [
    'primary', 'link', 'info', 'success', 'warning', 'danger',
    'white', 'black', 'light', 'dark',
    'black-bis', 'black-ter', 'grey-darker', 'grey-dark',
    'grey', 'grey-light', 'grey-lighter', 'white-ter', 'white-bis',
    'primary-light', 'link-light', 'info-light', 'success-light',
    'warning-light', 'danger-light', 'primary-dark', 'link-dark',
    'info-dark', 'success-dark', 'warning-dark', 'danger-dark',
];
// list of element sizes
export const ELEMENT_SIZES = [
    'small', 'normal', 'medium', 'large',
];
// list of element states
export const ELEMENT_STATES = [
    'hover', 'focus', 'active',
];

/** Type of alignment */
export type TypeAlignment = typeof ALIGNMENTS[number];
/** Type of colors */
export type TypeColors = typeof COLORS[number];
/** Type of element sizes */
export type TypeElementSize = typeof ELEMENT_SIZES[number];
/** Type of element states */
export type TypeElementState = typeof ELEMENT_STATES[number];

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
