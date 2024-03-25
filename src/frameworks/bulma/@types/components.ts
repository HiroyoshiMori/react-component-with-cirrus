import {
    LiHTMLAttributes,
    ReactNode,
} from "react";
import {CommonComponentProps, TypeAlignment} from "./index";
import {
    AProps, ArticleProps, AsideProps,
    ButtonProps, ButtonsProps,
    DivProps, FooterProps,
    HeaderProps, HrProps,
    IconsProps,
    ImgProps, LabelledCheckboxProps,
    NavProps,
    PProps, SectionProps,
    SpanProps, UlProps
} from "../index";

// -------------------------------------------------------------------
// Type definitions of common properties for components for bulma
// -------------------------------------------------------------------
// list of alternative separators for breadcrumb
export const ALTERNATIVE_SEPARATORS = [
    'arrow', 'bullet', 'dot', 'succeeds',
];
/** Type of alternative separators */
export type TypeAlternativeSeparators = typeof ALTERNATIVE_SEPARATORS[number];

/** Type definitions of properties for breadcrumb */
export type BreadcrumbProps = {
    component?: 'breadcrumb';
    element: 'nav';
    items: BreadcrumbItemProps | BreadcrumbItemProps[];
    commonClassesInItems?: string[];
    children?: ReactNode;
    alignment?: TypeAlignment;
    separators?: TypeAlternativeSeparators;
} & CommonComponentProps<NavProps>;
/** Type definitions of properties for breadcrumb item */
export type BreadcrumbItemProps = {
    component?: 'breadcrumb-item',
    element: 'a';
    children?: ReactNode;
    icon?: IconsProps;
} & CommonComponentProps<AProps>;

/** Type definitions of properties for card */
export type CardProps = {
    component?: 'card';
    element: 'article';
    header?: CardHeaderProps;
    image?: CardImageProps;
    content?: ReactNode;
    footer?: CardFooterProps;
} & CommonComponentProps<ArticleProps>;
/** Type definitions of properties for card-header */
export type CardHeaderProps = {
    component?: 'card-header';
    element: 'header';
    title?: PProps;
    button?: Omit<ButtonProps, 'children'>;
} & CommonComponentProps<HeaderProps>;
/** Type definitions of properties for card-image */
export type CardImageProps = {
    component?: 'card-image';
    element: 'div';
    image: ImgProps;
} & CommonComponentProps<DivProps>;
/** Type definitions of properties for card-footer */
export type CardFooterProps = {
    component?: 'card-footer';
    element: 'footer';
    items: (AProps | PProps) | (AProps | PProps)[];
} & CommonComponentProps<Omit<FooterProps, 'children'>>;

/** Type definitions of properties for dropdown */
export type DropdownProps = {
    component?: 'dropdown';
    element: 'div';
    trigger: DropdownTriggerProps;
    menus: DropdownMenuProps;
    isUp?: boolean;
} & CommonComponentProps<DivProps>;
/** Type definitions of properties for dropdown-trigger */
export type DropdownTriggerProps = {
    component?: 'dropdown-trigger';
    element: 'div';
    menuId?: string;
    button?: Omit<ButtonProps, 'children'>;
    title: SpanProps;
    icons?: IconsProps;
    isUp?: boolean;
} & CommonComponentProps<DivProps>;
/** Type definitions of properties for dropdown-menu */
export type DropdownMenuProps = {
    component?: 'dropdown-menu';
    element: 'div';
    content: DropdownContentProps;
} & CommonComponentProps<DivProps>;
/** Type definitions of properties for dropdown-content */
export type DropdownContentProps = {
    component?: 'dropdown-content';
    element: 'div';
    items: DropdownItemProps
        | (DropdownItemProps | DropdownDividerProps)[];
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for dropdown-item */
export type DropdownItemProps = {
    component?: 'dropdown-item';
    isActive?: boolean;
} & CommonComponentProps<(AProps | DivProps)>;
/** Type definitions of properties for dropdown-divider */
export type DropdownDividerProps = {
    component: 'dropdown-divider';
} & CommonComponentProps<HrProps>;

/** Type definitions of properties for menu */
export type MenusProps = {
    component?: 'menu';
    element?: 'aside';
    items: MenusLabelListProps | MenusLabelListProps[];
} & CommonComponentProps<AsideProps>;
/** Type definitions of properties for menu-label & menu-list */
export type MenusLabelListProps = {
    label: MenusLabelProps;
    list: MenusListProps;
}
/** Type definitions of properties for menu-label */
export type MenusLabelProps = {
    component?: 'menu-label';
} & CommonComponentProps<PProps>;
/** Type definitions of properties for menu-list */
export type MenusListProps = {
    component?: 'menu-list';
    items: MenusListItemProps | MenusListItemProps[];
    commonClassesInItem?: string[];
} & CommonComponentProps<Omit<UlProps, 'items'>>;
/** Type definitions of properties for items of menu-list */
export type MenusListItemProps = {
    component?: 'menu-item';
    label: AProps;
    subLevel?: UlProps;
};

/** Type definitions of properties for message */
export type MessageProps = {
    component?: 'message';
    element: 'article';
    header?: MessageHeaderProps;
    body: MessageBodyProps;
} & CommonComponentProps<ArticleProps>;
/** Type definitions of properties for message-header */
export type MessageHeaderProps = {
    component?: 'message-header';
    element: 'div';
    label: PProps;
    close: Omit<ButtonProps, 'children'>;
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for message-body */
export type MessageBodyProps = {
    component?: 'message-body';
    element: 'div';
} & CommonComponentProps<DivProps>;

/** Type definitions of properties for modal */
export type ModalProps = {
    component?: 'modal';
    element: 'div';
    children?: ReactNode;
} & CommonComponentProps<Omit<DivProps, 'children'>> & ({
    content: ModalContentProps;
    card?: never;
} | {
    content?: never;
    card: ModalCardProps
});
/** Type definitions of properties for modal-content */
export type ModalContentProps = {
    component?: 'modal-content';
    element: 'div';
    close?: Omit<ButtonProps, 'children'>;
} & CommonComponentProps<DivProps>;
/** Type definitions of properties for modal-card */
export type ModalCardProps = {
    component?: 'modal-card';
    element: 'div';
    head: ModalCardHeadProps;
    body: ModalCardBodyProps;
    foot?: ModalCardFootProps;
    children?: ReactNode;
} & CommonComponentProps<DivProps>;
/** Type definitions of properties for modal-card-head */
export type ModalCardHeadProps = {
    component?: 'modal-card-head';
    element: 'div';
    title: PProps;
    close?: Omit<ButtonProps, 'children'>;
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for modal-card-body */
export type ModalCardBodyProps = {
    component?: 'modal-card-body';
    element: 'section';
    children?: ReactNode;
} & CommonComponentProps<SectionProps>;
/** Type definitions of properties for modal-card-foot */
export type ModalCardFootProps = {
    component?: 'modal-card-foot';
    element: 'footer';
    ok?: ButtonProps & {children: ReactNode;};
    cancel?: ButtonProps & {children: ReactNode;};
} & CommonComponentProps<Omit<FooterProps, 'children'>>;

/** Type definitions of properties for navbar */
export type NavbarProps = {
    component?: 'navbar';
    element: 'nav';
    brand?: NavbarBrandProps;
    menu?: NavbarMenuProps;
} & CommonComponentProps<Omit<NavProps, 'children'>>;
/** Type definitions of properties for navbar-brand */
export type NavbarBrandProps = {
    component?: 'navbar-brand';
    element: 'div';
    item?: Omit<AProps, 'children'> & {children: ImgProps};
    burger?: ButtonProps;
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for navbar-menu */
export type NavbarMenuProps = {
    component?: 'navbar-menu';
    element: 'div';
    start?: NavbarItemProps | NavbarItemProps[];
    end?: NavbarItemProps | NavbarItemProps[];
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for navbar-item */
export type NavbarItemProps = {
    component?: 'navbar-item';
} & CommonComponentProps<AProps | NavbarDropdownProps | ButtonsProps>;
/** Type definitions of properties for navbar-dropdown */
export type NavbarDropdownProps = {
    hasDropdown: true;
    children?: never;
    label: AProps;
    items?: (AProps | NavbarDividerProps) | (AProps | NavbarDividerProps)[];
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for navbar-divider */
export type NavbarDividerProps = HrProps;

/** Type definitions of properties for pagination */
export type PaginationProps = {
    component?: 'pagination';
    element: 'div';
    currentPage?: number;
    total?: number;
    link?: string;
    itemInPage?: number;
    hasPrevNext?: boolean;
    prevLabel?: AProps | SpanProps;
    nextLabel?: AProps | SpanProps;
    ellipsis?: string;
} & CommonComponentProps<Omit<DivProps, 'children'>>;

/** Type definitions of properties for panel */
export type PanelProps = {
    component?: 'panel';
    element: 'div';
    heading?: PanelHeadingProps;
    contents?: (PanelBlockProps | PanelTabsProps) | (PanelBlockProps | PanelTabsProps)[];
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for panel-heading */
export type PanelHeadingProps = {
    component?: 'panel-heading';
    element: 'p';
} & CommonComponentProps<PProps>;
/** Type definitions of properties for panel content */
export type PanelContentProps = {
    items: (PanelBlockProps | PanelTabsProps) | (PanelBlockProps | PanelTabsProps)[];
};
/** Type definitions of properties for panel-tabs */
export type PanelTabsProps = {
    component?: 'panel-tabs';
    element: 'p';
    items: PanelTabItemProps | PanelTabItemProps[];
} & CommonComponentProps<Omit<PProps, 'children'>>;
/** Type definitions of properties for item of panel-tabs */
export type PanelTabItemProps = {
    component?: 'panel-tab-item';
    element: 'a';
    isActive?: boolean;
} & CommonComponentProps<AProps>;
/** Type definitions of properties for panel-block */
export type PanelBlockProps = {
    component?: 'panel-block';
} & (PanelBlockDivProps | PanelBlockAProps | PanelBlockLabelledCheckBoxProps);
/** Type definitions of properties for panel-block with div */
export type PanelBlockDivProps = {
    element: 'div';
} & CommonComponentProps<DivProps>;
/** Type definitions of properties for panel-block with a */
export type PanelBlockAProps = {
    element: 'a';
    label: ReactNode;
    icon?: IconsProps;
} & CommonComponentProps<Omit<AProps, 'children'>>;
/** Type definitions of properties for panel-block with labelled checkbox */
export type PanelBlockLabelledCheckBoxProps = LabelledCheckboxProps & {
    element: 'label';
};

/** Type definitions of properties for tabs */
export type TabsProps = {
    component?: 'tabs';
    element: 'div';
    items: TabItemProps | TabItemProps[];
    commonListItemClasses?: string[];
    commonListItemAttributes?: LiHTMLAttributes<HTMLLIElement>;
} & CommonComponentProps<Omit<DivProps, 'children'>>;
/** Type definitions of properties for tab item */
export type TabItemProps = {
    component?: 'tab-item';
    element: 'a';
    isActive?: boolean;
    listItemCLasses?: string[];
    listItemAttributes?: LiHTMLAttributes<HTMLLIElement>;
} & CommonComponentProps<AProps>;
