import {
    AnchorHTMLAttributes,
    HTMLAttributes,
    LiHTMLAttributes,
    ReactNode,
} from "react";
import {CommonComponentProps, TypeAlignment} from "./index";
import {
    AProps, ArticleProps, AsideProps,
    ButtonProps, ButtonsProps,
    DivProps, ElementCommonProps, FooterProps,
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
    element?: 'nav';
    items: BreadcrumbItemProps | BreadcrumbItemProps[];
    commonClassesInItems?: string[];
    children?: ReactNode;
    alignment?: TypeAlignment;
    separators?: TypeAlternativeSeparators;
} & CommonComponentProps<NavProps, HTMLAttributes<HTMLElement>>;
/** Type definitions of properties for breadcrumb item */
export type BreadcrumbItemProps = {
    component?: 'breadcrumb-item',
    element?: 'a';
    children?: ReactNode;
    icon?: IconsProps;
} & CommonComponentProps<AProps, AnchorHTMLAttributes<HTMLAnchorElement>>;

/** Type definitions of properties for card */
export type CardProps = {
    component?: 'card';
    element?: 'div';
    header?: CardHeaderProps;
    image?: CardImageProps;
    content?: ReactNode;
    footer?: CardFooterProps;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;
/** Type definitions of properties for card-header */
export type CardHeaderProps = {
    component?: 'card-header';
    element?: 'div';
    title?: PProps;
    button?: Omit<ButtonProps, 'children'>;
} & CommonComponentProps<HeaderProps, HTMLAttributes<HTMLHeadingElement>>;
/** Type definitions of properties for card-image */
export type CardImageProps = {
    component?: 'card-image';
    element?: 'div';
    image: ImgProps;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLElement>>;
/** Type definitions of properties for card-footer */
export type CardFooterProps = {
    component?: 'card-footer';
    element?: 'div';
    items: (AProps | PProps) | (AProps | PProps)[];
    children?: ReactNode;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;

/** Type definitions of properties for dropdown */
export type DropdownProps = {
    component?: 'dropdown';
    element?: 'div';
    trigger: DropdownTriggerProps;
    menus: DropdownMenuProps;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;
/** Type definitions of properties for dropdown-trigger */
export type DropdownTriggerProps = {
    component?: 'dropdown-trigger';
    element?: 'div';
    menuId?: string;
    button?: Omit<ButtonProps, 'children'>;
    title: SpanProps;
    icons?: IconsProps;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;
/** Type definitions of properties for dropdown-menu */
export type DropdownMenuProps = {
    component?: 'dropdown-menu';
    element?: 'div';
    content: DropdownContentProps;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;
/** Type definitions of properties for dropdown-content */
export type DropdownContentProps = {
    component?: 'dropdown-content';
    element?: 'div';
    items: DropdownItemProps
        | (DropdownItemProps | DropdownDividerProps)[];
    children?: ReactNode;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;
/** Type definitions of properties for dropdown-item */
export type DropdownItemProps = {
    component?: 'dropdown-item';
    isActive?: boolean;
} & (AProps | DivProps);
/** Type definitions of properties for dropdown-divider */
export type DropdownDividerProps = {
    component: 'dropdown-divider';
} & HrProps;

/** Type definitions of properties for menu */
export type MenusProps = {
    component?: 'menu';
    element?: 'aside';
    items: MenusLabelListProps | MenusLabelListProps[];
} & CommonComponentProps<AsideProps, HTMLAttributes<HTMLAnchorElement>>;
/** Type definitions of properties for menu-label & menu-list */
export type MenusLabelListProps = {
    label: MenusLabelProps;
    list: MenusListProps;
}
/** Type definitions of properties for menu-label */
export type MenusLabelProps = PProps & {
    component?: 'menu-label';
};
/** Type definitions of properties for menu-list */
export type MenusListProps = ElementCommonProps<HTMLUListElement, HTMLAttributes<HTMLUListElement>> & {
    component?: 'menu-list';
    element?: 'ul';
    items: MenusListItemProps | MenusListItemProps[];
};
/** Type definitions of properties for items of menu-list */
export type MenusListItemProps = {
    component?: 'menu-item';
    label: AProps;
    subLevel?: UlProps;
};

/** Type definitions of properties for message */
export type MessageProps = Omit<ArticleProps, 'children'> & {
    component?: 'message';
    header: MessageHeaderProps;
    body: MessageBodyProps;
};
/** Type definitions of properties for message-header */
export type MessageHeaderProps = Omit<DivProps, 'children'> & {
    component?: 'message-header';
    element?: 'div';
    label: PProps;
    close: Omit<ButtonProps, 'children'>;
};
/** Type definitions of properties for message-body */
export type MessageBodyProps = DivProps & {
    component?: 'message-body';
};

/** Type definitions of properties for modal */
export type ModalProps = Omit<DivProps, 'children'> & {
    component?: 'modal';
} & ({
    content: ModalContentProps; card?: never;
} | {
    content?: never; card: ModalCardProps
});
/** Type definitions of properties for modal-content */
export type ModalContentProps = DivProps & {
    component?: 'modal-content';
    close: Omit<ButtonProps, 'children'>;
};
/** Type definitions of properties for modal-card */
export type ModalCardProps = Omit<DivProps, 'children'> & {
    component?: 'modal-card';
    head: ModalCardHeadProps;
    body: ModalCardBodyProps;
    foot?: ModalCardFootProps;
};
/** Type definitions of properties for modal-card-head */
export type ModalCardHeadProps = Omit<DivProps, 'children'> & {
    component?: 'modal-card-header';
    title: PProps;
    close?: Omit<ButtonProps, 'children'>;
};
/** Type definitions of properties for modal-card-body */
export type ModalCardBodyProps = SectionProps & {
    component?: 'modal-card-body';
};
/** Type definitions of properties for modal-card-foot */
export type ModalCardFootProps = Omit<FooterProps, 'children'> & {
    component?: 'modal-card-footer';
    ok?: ButtonProps & {children: ReactNode;};
    cancel?: ButtonProps & {children: ReactNode;};
};

/** Type definitions of properties for navbar */
export type NavbarProps = Omit<NavProps, 'children'> & {
    component?: 'navbar';
    brand?: NavbarBrandProps;
    menu?: NavbarMenuProps;
};
/** Type definitions of properties for navbar-brand */
export type NavbarBrandProps = Omit<DivProps, 'children'> & {
    component?: 'navbar-brand';
    item?: Omit<AProps, 'children'> & {children: ImgProps};
    burger?: ButtonProps;
};
/** Type definitions of properties for navbar-menu */
export type NavbarMenuProps = Omit<DivProps, 'children'> & {
    component?: 'navbar-menu';
    start?: NavbarItemProps | NavbarItemProps[];
    end?: NavbarItemProps | NavbarItemProps[];
};
/** Type definitions of properties for navbar-item */
export type NavbarItemProps = {
    component?: 'navbar-item';
} & (AProps | NavbarDropdownProps | ButtonsProps);
/** Type definitions of properties for navbar-dropdown */
export type NavbarDropdownProps = Omit<DivProps, 'children'> & {
    component?: 'navbar-item';
    element: 'div',
    hasDropdown: true;
    label: AProps;
    items?: (AProps | NavbarDividerProps) | (AProps | NavbarDividerProps)[];
};
/** Type definitions of properties for navbar-divider */
export type NavbarDividerProps = HrProps;

/** Type definitions of properties for pagination */
export type PaginationProps = Omit<DivProps, 'children'> & {
    component?: 'pagination';
    element?: 'div';
    currentPage?: number;
    total?: number;
    link?: string;
    itemInPage?: number;
    hasPrevNext?: boolean;
    prevLabel?: AProps | SpanProps;
    nextLabel?: AProps | SpanProps;
    ellipsis?: string;
};

/** Type definitions of properties for panel */
export type PanelProps = Omit<DivProps, 'children'> & {
    component?: 'panel';
    element?: 'div';
    heading?: PanelHeadingProps;
    contents?: (PanelBlockProps | PanelTabsProps) | (PanelBlockProps | PanelTabsProps)[];
};
/** Type definitions of properties for panel-heading */
export type PanelHeadingProps = PProps & {
    component?: 'panel-heading';
};
/** Type definitions of properties for panel content */
export type PanelContentProps = {
    items: (PanelBlockProps | PanelTabsProps) | (PanelBlockProps | PanelTabsProps)[];
};
/** Type definitions of properties for panel-tabs */
export type PanelTabsProps = Omit<PProps, 'children'> & {
    component?: 'panel-tabs';
    element?: 'p';
    items: PanelTabItemProps | PanelTabItemProps[];
};
/** Type definitions of properties for item of panel-tabs */
export type PanelTabItemProps = AProps & {
    component?: 'panel-tab-item';
    isActive?: boolean;
};
/** Type definitions of properties for panel-block */
export type PanelBlockProps = {
    component?: 'panel-block';
} & (PanelBlockDivProps | PanelBlockAProps | PanelBlockLabelledCheckBoxProps);
/** Type definitions of properties for panel-block with div */
export type PanelBlockDivProps = DivProps & {
    element: 'div';
};
/** Type definitions of properties for panel-block with a */
export type PanelBlockAProps = Omit<AProps, 'children'> & {
    element: 'a';
    label: ReactNode;
    icon?: IconsProps;
};
/** Type definitions of properties for panel-block with labelled checkbox */
export type PanelBlockLabelledCheckBoxProps = LabelledCheckboxProps & {
    element: 'label';
};

/** Type definitions of properties for tabs */
export type TabsProps = Omit<DivProps, 'children'> & {
    component?: 'tabs';
    items: TabItemProps | TabItemProps[];
    commonListItemClasses?: string[];
    commonListItemAttributes?: LiHTMLAttributes<HTMLLIElement>;
};
/** Type definitions of properties for tab item */
export type TabItemProps = AProps & {
    component?: 'tab-item';
    isActive?: boolean;
    listItemCLasses?: string[];
    listItemAttributes?: LiHTMLAttributes<HTMLLIElement>;
};
