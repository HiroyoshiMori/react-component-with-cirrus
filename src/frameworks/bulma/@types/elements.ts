import React, {
    AnchorHTMLAttributes,
    ButtonHTMLAttributes,
    FormHTMLAttributes,
    HTMLAttributes,
    ReactNode,
} from "react";
import {CommonComponentProps} from "./index";
import {
    AProps,
    ButtonProps,
    DivProps,
    FigureProps,
    FormProps,
    HeadingProps,
    ImgProps, PProps,
    SpanProps
} from "../index";

// -------------------------------------------------------------------
// Type definitions of common properties for elements for bulma
// -------------------------------------------------------------------
/** Type definition of properties for block */
export type BlockProps = {
    component?: 'block',
    element?: 'div';
    children: ReactNode;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;

/** Typ definition of properties for box */
export type BoxProps = (
    {
        component?: 'box';
        element?: 'div';
        children: ReactNode;
    } & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>
    ) | (
    {
        component?: 'box';
        element?: 'form';
        children: ReactNode;
    } & CommonComponentProps<FormProps, FormHTMLAttributes<HTMLFormElement>>
    );

/** Type definition of properties for content */
export type ContentProps = {
    component?: 'content';
    element?: 'div';
    children?: ReactNode;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;

/** Type definition of properties for delete button */
export type DeleteButtonProps = {
    component?: 'delete',
    element?: 'button',
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & CommonComponentProps<ButtonProps, ButtonHTMLAttributes<HTMLButtonElement>>;

/** Type definition of properties for image */
export type ImageProps = {
    component?: 'image';
    element?: 'figure';
    image?: ImgProps;
    children?: ReactNode;
} & CommonComponentProps<FigureProps, HTMLAttributes<HTMLElement>>;

/** Type definition of properties for notification */
export type NotificationProps = {
    component?: 'notification';
    element?: 'div';
    children?: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;

/** Type definitions of properties for tag */
export type TagProps = {
    component?: 'tag';
} & (TagSpanProps | TagAProps);
/** Type definitions of properties for tag with span */
export type TagSpanProps = {
    element: 'span';
    children: ReactNode;
} & CommonComponentProps<SpanProps, HTMLAttributes<HTMLSpanElement>>;
/** Type definitions of properties for tag with a */
export type TagAProps = {
    element: 'a';
    children: ReactNode;
} & CommonComponentProps<AProps, AnchorHTMLAttributes<HTMLAnchorElement>>;
/** Type definitions of properties for tags */
export type TagsProps = {
    component?: 'tags';
    element?: 'div';
    tags: TagProps | TagProps[];
    commonClassesInChild?: string[];
} & CommonComponentProps<DivProps, HTMLAttributes<HTMLDivElement>>;

/** Type definitions of properties for title */
export type TitleProps = {
    component?: 'title';
    isSub?: boolean;
} & (TitleHeadingProps | TitleParagraphProps);
/** Type definitions of properties for title with h1-h6 */
export type TitleHeadingProps = {
    element?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'heading';
    level?: number;
    children?: ReactNode;
} & CommonComponentProps<HeadingProps, HTMLAttributes<HTMLHeadingElement>>;
/** Type definitions of properties for title with p */
export type TitleParagraphProps = {
    element?: 'p'|'paragraph';
    level?: number;
    children?: ReactNode;
} & CommonComponentProps<PProps, HTMLAttributes<HTMLParagraphElement>>;
