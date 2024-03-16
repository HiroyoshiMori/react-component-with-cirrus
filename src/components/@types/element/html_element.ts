import React, {
    AnchorHTMLAttributes,
    AreaHTMLAttributes,
    AudioHTMLAttributes,
    BlockquoteHTMLAttributes,
    ButtonHTMLAttributes,
    CanvasHTMLAttributes,
    ColgroupHTMLAttributes,
    ColHTMLAttributes,
    DataHTMLAttributes,
    DetailsHTMLAttributes,
    DialogHTMLAttributes, DOMAttributes,
    EmbedHTMLAttributes,
    FieldsetHTMLAttributes,
    FormHTMLAttributes,
    HTMLAttributes,
    IframeHTMLAttributes,
    InputHTMLAttributes,
    LabelHTMLAttributes,
    LiHTMLAttributes, LinkHTMLAttributes,
    MapHTMLAttributes,
    MenuHTMLAttributes,
    MetaHTMLAttributes,
    MeterHTMLAttributes,
    ObjectHTMLAttributes,
    OlHTMLAttributes,
    OptgroupHTMLAttributes,
    OptionHTMLAttributes,
    OutputHTMLAttributes,
    ProgressHTMLAttributes,
    ReactNode,
    ScriptHTMLAttributes,
    SelectHTMLAttributes,
    SlotHTMLAttributes,
    SourceHTMLAttributes, StyleHTMLAttributes, SVGAttributes,
    TableHTMLAttributes,
    TdHTMLAttributes,
    TextareaHTMLAttributes,
    TimeHTMLAttributes,
    TrackHTMLAttributes,
    VideoHTMLAttributes,
} from "react";
import {
    AutoCapitalizeTypes,
    AutoCompleteTypes,
    CommonDatasetType,
    ControlsListTypes,
    CrossOriginTypes,
    DecodingTypes, FetchPolicyTypes,
    FormEnctypeTypes,
    FormMethodTypes, InputModeTypes, LinkAsTypes, LoadingTypes,
    PreloadTypes, SandboxTypes,
    TargetTypes,
    TextWrapTypes, TypeContainer,
} from "../index";

/**
 * Helper type
 * @see https://stackoverflow.com/questions/57528740/how-to-make-some-fields-in-object-required
 */
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

/** Type definition of property for a (in anchor component) */
export type AProps = InlineCommonProps<HTMLAnchorElement, AnchorHTMLAttributes<HTMLAnchorElement>> & {
    element: 'a';
    href?: string;
    children?: ReactNode;
    hrefLang?: string;
    download?: boolean;
    ping?: string[];
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    rel?: string[];
    target?: TargetTypes;
    type?: string;
};
/** Type definition of property for abbr (in container component) */
export type AbbrProps = AbbrDfnProps & {
    element: 'abbr';
};
/** Type definition of property for address (in container component) */
export type AddressProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'address';
    children?: ReactNode;
};
/** TYpe definition of property for area (in area component) */
export type AreaProps = ElementCommonProps<HTMLAreaElement, AreaHTMLAttributes<HTMLAreaElement>> & {
    element: 'area';
    alt: string;
    coords?: ([number, number][]) | [number, number, number];
    href?: string;
    download?: boolean;
    ping?: string[];
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    rel?: string[];
    shape?: 'rect' | 'circle' | 'poly' | 'default',
    target?: TargetTypes;
};
/** Type definition of property for article (in container component) */
export type ArticleProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'article';
    children?: ReactNode;
};
/** Type definition of property for aside (in container component) */
export type AsideProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'aside';
    children?: ReactNode;
};
/** Type definition of property for audio (in media component) */
export type AudioProps = AudioVideoCommonProps<HTMLAudioElement, AudioHTMLAttributes<HTMLAudioElement>> & {
    element: 'audio',
    track?: TrackProps;
};
/** Type definition of property for b (in container component) */
export type BProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'b';
    children?: ReactNode;
};
/** Type definition of property for bdi (in container component) */
export type BdiProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'bdi';
    children?: ReactNode;
};
/** Type definition of property for bdo (in container component) */
export type BdoProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'bdo';
    children?: ReactNode;
    dir?: 'ltr' | 'rtl';
};
/** Type definition of property for blockquote (in container component) */
export type BlockQuoteProps = BlockCommonProps<HTMLQuoteElement, BlockquoteHTMLAttributes<HTMLQuoteElement>> & {
    element: 'blockquote';
    children?: ReactNode;
    cite?: string;
};
/** Type definition of property for line break (in break component) */
export type BrProps = ElementCommonProps<HTMLBRElement, HTMLAttributes<HTMLBRElement>> & {
    element: 'br';
};
/** Type definition of property for button(by <button>) (in button component) */
export type ButtonProps = ElementCommonProps<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>> & {
    element: 'button';
    name?: string;
    children?: ReactNode;
    type?: 'submit'|'reset'|'button';
    value?: string | number | boolean;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEncType?: FormEnctypeTypes;
    formMethod?: FormMethodTypes;
    formNoValidate?: boolean;
    formTarget?: TargetTypes;
    popovertarget?: string;
    popovertargetaction?: 'hide'|'show'|'toggle';
};
/** Type definition of property for canvas (in canvas component) */
export type CanvasProps = ElementCommonProps<HTMLCanvasElement, CanvasHTMLAttributes<HTMLCanvasElement>> & {
    element: 'canvas';
    children?: ReactNode;
    width?: number;
    height?: number;
};
/** Type definition of property for caption (used in table) */
export type CaptionProps = ElementCommonProps<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>> & {
    element: 'caption';
    children?: ReactNode;
};
/** Type definition of property for cite (in container component) */
export type CiteProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'cite';
    children?: ReactNode;
};
/** Type definition of property for code (in code component) */
export type CodeProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'code';
    inline?: boolean;
    children?: ReactNode;
    "data-lang"?: string;
    dark?: boolean;
};
/** Type definition of property for col (used in table) */
export type ColProps = ElementCommonProps<HTMLTableColElement, ColHTMLAttributes<HTMLTableColElement>> & {
    element: 'col';
    span?: number;
};
/** Type definition of property for colgroup (used in table) */
export type ColGroupProps = ElementCommonProps<HTMLTableColElement, ColgroupHTMLAttributes<HTMLTableColElement>> & {
    element: 'colgroup';
    span?: number;
    cols?: ColProps[];
};
/** Type definition of property for data (in container component) */
export type DataProps = InlineCommonProps<HTMLDataElement, DataHTMLAttributes<HTMLDataElement>> & {
    element: 'data';
    value: string|number;
    children?: ReactNode;
}
/** Type definition of property for datalist (in datalist component) */
export type DataListProps = ElementCommonProps<HTMLDataListElement, HTMLAttributes<HTMLDataListElement>> & {
    element: 'datalist';
    children?: ReactNode;
    options?: OptionProps[];
};
/** Type definition of property for dd (used in dl) */
export type DdProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'dd';
    children?: ReactNode;
}
/** Type definition of property for del (in container component) */
export type DelProps = InsDelProps & {
    element: 'del';
};
/** Type definition of property for details (in details component) */
export type DetailsProps = ElementCommonProps<HTMLDetailsElement, DetailsHTMLAttributes<HTMLDetailsElement>> & {
    element: 'details';
    children?: ReactNode;
    open?: boolean;
    summary: SummaryProps;
};
/** Type definition of property for dfn (in container component) */
export type DfnProps = AbbrDfnProps & {
    element: 'dfn';
};
/** Type definition of property for dialog (in dialog component) */
export type DialogProps = ElementCommonProps<HTMLDialogElement, DialogHTMLAttributes<HTMLDialogElement>> & {
    element: 'dialog';
    children?: ReactNode;
    open?: boolean;
}
/** Type definition of property for div (in container component) */
export type DivProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLDivElement>> & {
    element: 'div';
    children?: ReactNode | TypeContainer;
}
/** Type definition of property for dl (in list component) */
export type DlProps = ElementCommonProps<HTMLDListElement, HTMLAttributes<HTMLDListElement>> & {
    element: 'dl';
    items?: DlItemProps[];
};
/** Type definition of property for dt (used in dl) */
export type DtProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'dt';
    children?: ReactNode;
}
/** Type definition of property for em (in container component) */
export type EmProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'em';
    children?: ReactNode;
};
/** Type definition of property for embed (in media component) */
export type EmbedProps = MediaCommonProps<HTMLEmbedElement, EmbedHTMLAttributes<HTMLEmbedElement>> & {
    element: 'embed';
    src: string;
    type?: string;
    title?: string;
    width?: number;
    height?: number;
}
/** Type definition of property for fieldset (in fieldset component) */
export type FieldsetProps = ElementCommonProps<HTMLFieldSetElement, FieldsetHTMLAttributes<HTMLFieldSetElement>> & {
    element: 'fieldset';
    caption?: LegendProps;
    children?: ReactNode;
    disabled?: boolean;
    form?: string;
    name?: string;
};
/** Type definition of property for figcaption (used in figure) */
export type FigcaptionProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'figcaption';
    children?: ReactNode;
};
/** Type definition of property for figure (in figure component) */
export type FigureProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'figure';
    children?: ReactNode;
    caption?: FigcaptionProps;
    captionPosition?: 'first'|'last';
};
/** Type definition of property for footer (in container component) */
export type FooterProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'footer';
    children?: ReactNode;
};
/** Type definition of property for form (in form component) */
export type FormProps = ElementCommonProps<HTMLFormElement, FormHTMLAttributes<HTMLFormElement>> & {
    element: 'form';
    name?: string;
    action?: string;
    method?: FormMethodTypes;
    children?: ReactNode;
    acceptCharset?: string;
    autoCapitalize?: boolean;
    autoComplete?: 'off' | 'on';
    rel?: 'external' | 'nofollow' | 'opener' | 'noopener' | 'noreferrer';
    encType?: FormEnctypeTypes;
    noValidate?: boolean;
    target?: TargetTypes;
};
/** Type definition of property for h1-h6 (in heading component) */
export type HeadingProps = ElementCommonProps<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>> & {
    element: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'heading';
    level: number;
    children?: ReactNode;
};
/** Type definition of property for header (in container component) */
export type HeaderProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'header';
    children?: ReactNode;
};
/** Type definition of property for hgroup (in heading group component) */
export type HgroupProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'hgroup' | 'heading-group';
    heading: HeadingProps;
    paragraphs: PProps[];
};
/** Type definition of property for horizontal rule (in break component) */
export type HrProps = ElementCommonProps<HTMLHRElement, HTMLAttributes<HTMLHRElement>> & {
    element: 'hr';
};
/** Type definition of property for i (in container component) */
export type IProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'i';
    children?: ReactNode;
};
/** Type definition of property for iframe (in iframe component) */
export type IframeProps = ElementCommonProps<HTMLIFrameElement, IframeHTMLAttributes<HTMLIFrameElement>> & {
    element: 'iframe';
    title: string;
    src?: string;
    width?: number;
    height?: number;
    allow?: '*'|'()'|'self'|'src'|string[];
    allowFullscreen?: boolean;
    loading?: 'eager'|'lazy';
    name?: string;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    sandbox?: SandboxTypes;
    srcDoc?: string;
};
/** Type definition of property for img (in media component) */
export type ImgProps = MediaCommonProps<HTMLImageElement, HTMLAttributes<HTMLImageElement>> & {
    element: 'img';
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    imageSizes?: ImageSizesProps;
    crossOrigin?: CrossOriginTypes;
    decoding?: DecodingTypes;
    elementtiming?: string;
    fetchpolicy?: FetchPolicyTypes;
    ismap?: '';
    loading?: LoadingTypes;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    useMap?: string;
};
/** Type definition of property for input (in input component) */
export type InputProps = InputButtonProps
    | InputCheckboxProps
    | InputColorProps
    | InputDateProps
    | InputEmailProps
    | InputFileProps
    | InputHiddenProps
    | InputImageProps
    | InputNumberProps
    | InputPasswordProps
    | InputRadioProps
    | InputRangeProps
    | InputSubmitProps
    | InputSearchProps
    | InputTelProps
    | InputTextProps
    | InputUrlProps;
/** Type definition of property for ins (in container component) */
export type InsProps = InsDelProps & {
    element: 'ins';
};
/** Type definition of property for kbd (in container component) */
export type KbdProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'kbd';
    children?: ReactNode;
};
/** Type definition of property for label (in label component) */
export type LabelProps = ElementCommonProps<HTMLLabelElement, LabelHTMLAttributes<HTMLLabelElement>> & {
    element: 'label';
    children?: ReactNode;
    htmlFor?: string;
};
/** Type definition of property for legend (in container component / used in fieldset / in container component) */
export type LegendProps = BlockCommonProps<HTMLLegendElement, HTMLAttributes<HTMLLegendElement>> & {
    element: 'legend';
    children?: ReactNode;
};
/** Type definition of property for li (used in menu/ol/ul) */
export type LiProps<T extends TypeContainer | string = string> = ElementCommonProps<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>> & {
    element: 'li';
    children?: T | ReactNode;
    value?: number;
};
/** Type definition of property for link with itemprop attribute (in link component) */
export type LinkProps = ElementCommonProps<HTMLLinkElement, LinkHTMLAttributes<HTMLLinkElement>> & {
    element: 'link';
    itemProp: true;
    rel?: string;
    type?: string;
    href?: string;
    as?: LinkAsTypes;
    crossOrigin?: CrossOriginTypes;
    fetchpriority?: 'high'|'low'|'auto';
    hrefLang?: string;
    imageSizes?: string;
    imageSrcset?: [string, string][];
    integrity?: string;
    mediaQuery?: string[];
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    sizes?: 'any'|[number, number];
    title?: string;
};
/** Type definition of property for main (in container component) */
export type MainProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'main';
    children?: ReactNode;
};
/** Type definition of property for map (in maps container, due to conflict with Map()) */
export type ImageMapProps = ElementCommonProps<HTMLMapElement, MapHTMLAttributes<HTMLMapElement>> & {
    element: 'map';
    name: string;
    children?: ReactNode;
    areas?: AreaProps[];
};
/** Type definition of property for mark (in container component) */
export type MarkProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'mark';
    children?: ReactNode;
};
/** Type definition of property for menu (in list component) */
export type MenuProps<T extends TypeContainer | string = string> = ElementCommonProps<HTMLMenuElement, MenuHTMLAttributes<HTMLMenuElement>> & {
    element: 'menu';
    items?: LiProps<T>[];
};
/** Type definition of property for meta with itemprop attribute (in meta component) */
export type MetaProps = ElementCommonProps<HTMLMetaElement, MetaHTMLAttributes<HTMLMetaElement>> & {
    element: 'meta';
    itemProp: true;
    charSet?: string;
    content?: string;
    httpEquiv?: 'content-security-policy'|'content-type'|'default-style'|'x-ua-compatible'|'refresh';
    name?: string;
};
/** Type definition of property for meter (in container component) */
export type MeterProps = InlineCommonProps<HTMLMeterElement, MeterHTMLAttributes<HTMLMeterElement>> & {
    element: 'meter';
    children?: ReactNode;
    value?: number;
    min?: number;
    max?: number;
    low?: number;
    high?: number;
    optimum?: number;
    form?: string;
};
/** Type definition of property for nav (in container component) */
export type NavProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'nav';
    children?: ReactNode;
};
/** Type definition of property for noscript (in container component) */
export type NoScriptProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'noscript';
    children?: ReactNode;
};
/** Type definition of property for object (in media component) */
export type ObjectProps = MediaCommonProps<HTMLObjectElement, ObjectHTMLAttributes<HTMLObjectElement>> & {
    element: 'object';
    name?: string;
    data: string;
    type: string;
    children?: ReactNode;
    form?: string;
    width?: number;
    height?: number;
    useMap?: string;
};
/** Type definition of property for ol (in list component) */
export type OlProps<T extends TypeContainer | string = string> = ElementCommonProps<HTMLOListElement, OlHTMLAttributes<HTMLOListElement>> & {
    element: 'ol';
    items?: ListItemProps<T>[];
    reversed?: boolean;
    start?: number;
    type?: 'a' | 'A' | 'i' | 'I' | '1';
};
/** Type definition of property for optgroup (used in select) */
export type OptGroupProps = ElementCommonProps<HTMLOptGroupElement, OptgroupHTMLAttributes<HTMLOptGroupElement>> & {
    element: 'optgroup';
    is: 'optgroup';
    label: string;
    options: OptionProps[];
    disabled?: boolean;
};
/** Type definition of property for option (used in datalist/select) */
export type OptionProps = ElementCommonProps<HTMLOptionElement, OptionHTMLAttributes<HTMLOptionElement>> & {
    element: 'option';
    name?: string;
    children: string;
    value?: string;
    label?: string;
    disabled?: boolean;
};
/** Type definition of property for output (in output component) */
export type OutputProps = ElementCommonProps<HTMLOutputElement, OutputHTMLAttributes<HTMLOutputElement>> & {
    element: 'output';
    children?: ReactNode;
    htmlFor?: string[];
    form?: string;
    name?: string;
};
/** Type definition of property for p (in paragraph component) */
export type PProps = BlockCommonProps<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>> & {
    element: 'p' | 'paragraph';
    children?: ReactNode | TypeContainer;
};
/** Type definition of property for picture (in media component) */
export type PictureProps = MediaCommonProps<HTMLPictureElement, HTMLAttributes<HTMLPictureElement>> & {
    element: 'picture';
    img: ImgProps;
    source?: SourceSrcsetProps[];
};
/** Type definition of property for pre (in container component) */
export type PreProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'pre';
    children?: ReactNode;
};
/** Type definition of property for progress (in progress component) */
export type ProgressProps = ElementCommonProps<HTMLProgressElement, ProgressHTMLAttributes<HTMLProgressElement>> & {
    element: 'progress';
    children?: ReactNode;
    value?: number;
    max: number;
};
/** Type definition of property for q (in container component) */
export type QProps = InlineCommonProps<HTMLQuoteElement, HTMLAttributes<HTMLQuoteElement>> & {
    element: 'q';
    children?: ReactNode;
    cite?: string;
};
/** Type definition of property for ruby fallback parenthesis (used in ruby) */
export type RpProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'rp';
    children?: string;
};
/** Type definition for property of each character in ruby (used in ruby) */
export type RtProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'rt';
    label: string;
    children?: string;
    useRp?: boolean;
    preParenthesis?: RpProps;
    postParenthesis?: RpProps;
};
/** Type definition of property for ruby (in ruby component) */
export type RubyProps = ElementCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'ruby';
    items: RtProps[];
};
/** Type definition of property for s (in container component) */
export type SProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 's';
    children?: ReactNode;
};
/** Type definition of property for samp (in container component) */
export type SampProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'samp';
    children?: ReactNode;
};
/** Type definition of property for script (in script component) */
export type ScriptProps = ElementCommonProps<HTMLScriptElement, ScriptHTMLAttributes<HTMLScriptElement>> & {
    element: 'script';
    children?: string;
    async?: boolean;
    crossOrigin?: CrossOriginTypes;
    defer?: boolean;
    fetchpriority: 'high' | 'low' | 'auto';
    integrity?: string;
    noModule?: boolean;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    src?: string;
    type?: undefined | 'importmap' | 'module' | 'speculationrules' | string;
};
/** Type definition of property for search (in container component) */
export type SearchProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'search';
    children?: ReactNode;
};
/** Type definition of property for section (in container component) */
export type SectionProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'section';
    children?: ReactNode;
};
/** Type definition of property for select (in select component) */
export type SelectProps = ElementCommonProps<HTMLSelectElement, SelectHTMLAttributes<HTMLSelectElement>> & {
    element: 'select';
    name?: string;
    options?: (OptGroupProps|OptionProps|HrProps)[];
    selectedValue?: string;
    autoComplete?: AutoCompleteTypes;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    required?: boolean;
    size?: number;
};
/** Type definition of property for slot (in container component) */
export type SlotProps = BlockCommonProps<HTMLSlotElement, SlotHTMLAttributes<HTMLSlotElement>> & {
    element: 'slot';
    children?: ReactNode;
};
/** Type definition of property for small (in container component) */
export type SmallProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'small';
    children?: ReactNode;
};
/** Type definition of property for source (used in media) */
export type SourceProps = {
    element: 'source';
} & (SourceSrcProps | SourceSrcsetProps);
/** Type definition of property for span (in container component) */
export type SpanProps = InlineCommonProps<HTMLSpanElement, HTMLAttributes<HTMLSpanElement>> & {
    element: 'span';
    children?: ReactNode;
};
/** Type definition of property for strong (in container component) */
export type StrongProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'strong';
    children?: ReactNode;
};
/** Type definition of property for style with scoped attribute */
export type StyleProps = ElementCommonProps<HTMLStyleElement, StyleHTMLAttributes<HTMLStyleElement>> & {
    element: 'style';
    scoped: true;
    children?: string;
    mediaQuery?: string[];
    nonce?: string;
    title?: string;
};
/** Type definition of property for sub (in container component) */
export type SubProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'sub';
    children?: ReactNode;
};
/** Type definition of property for summary (used in details / in container component) */
export type SummaryProps = BlockCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'summary';
    children?: ReactNode;
};
/** Type definition of property for sup (in container component) */
export type SupProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'sup';
    children?: ReactNode;
};
// TODO: make stories for SVG element
/** Type definition of property for svg (in svg component) */
export type SvgProps = ElementCommonProps<HTMLOrSVGElement, SVGAttributes<HTMLOrSVGElement>> & {
    element: 'svg';
    children?: ReactNode;
    height?: number|`${number}%`;
    preserveAspectRatio?: `${'none'|'xMinYMin'|'xMidYMin'|'xMaxYMin'|'xMinYMid'|'xMidYMid'|'xMaxYMid'|'xMinYMax'|'xMidYMax'|'xMaxYMax'} ${'meet'|'slice'}`;
    viewBox?: 'none' | number[];
    width?: number|`${number}%`;
    x?: number|`${number}%`;
    y?: number|`${number}%`;
};
/** Type definition of property for table (in table component) */
export type TableProps = ElementCommonProps<HTMLTableElement, TableHTMLAttributes<HTMLTableElement>> & {
    element: 'table';
    caption?: CaptionProps;
    colgroup?: ColGroupProps[];
    thead?: TheadProps;
    tfoot?: TfootProps;
    tbody: TbodyProps | TbodyProps[] | TrProps | TrProps[];
};
/** Type definition of property for tbody (used in table) */
export type TbodyProps = ElementCommonProps<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>> & {
    element: 'tbody';
    rows?: TrProps[];
};
/** Type definition of property for td (used in table) */
export type TdProps = TableCellProps & {
    element: 'td';
};
/** Type definition of property for template (in container component) */
export type TemplateProps<T extends ElementBaseProps | string = string> = BlockCommonProps<HTMLTemplateElement, HTMLAttributes<HTMLTemplateElement>> & {
    element: 'template';
    children?: T | ReactNode;
    shadowRootMode?: 'open' | 'closed';
};
/** Type definition of property for textarea (in textarea component) */
export type TextareaProps = ElementCommonProps<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>> & {
    element: 'textarea';
    name?: string;
    defaultValue?: string;
    cols?: number;
    rows?: number;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    disabled?: boolean;
    maxLength?: number;
    minLength?: number;
    autoCapitalize?: AutoCapitalizeTypes;
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirname?: string;
    form?: string;
    wrap?: TextWrapTypes;
};
/** Type definition of property for tfoot (used in table) */
export type TfootProps = ElementCommonProps<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>> & {
    element: 'tfoot';
    rows?: TrProps[];
};
/** Type definition of property for th (used in table) */
export type ThProps = TableCellProps & {
    element: 'th';
    abbr?: string;
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
};
/** Type definition of property for thead (used in table) */
export type TheadProps = ElementCommonProps<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>> & {
    element: 'thead';
    rows: TheadRowProps[];
}
/** Type definition of property for tr only includes th (used in table) */
export type TheadRowProps = ElementCommonProps<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>> & {
    element: 'tr';
    cells: ThProps[];
};
/** Type definition of property for time (in container component) */
export type TimeProps = InlineCommonProps<HTMLTimeElement, TimeHTMLAttributes<HTMLTimeElement>> & {
    element: 'time';
    children?: ReactNode;
    dateTime?: string;
};
/** Type definition of property for tr (used in table) */
export type TrProps = ElementCommonProps<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>> & {
    element: 'tr';
    cells: (TdProps | ThProps)[];
};
/** Type definition of property for track (used in audio/video) */
export type TrackProps = BlockCommonProps<HTMLTrackElement, TrackHTMLAttributes<HTMLTrackElement>> & {
    element: 'track';
    src: string;
    default?: boolean;
    kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
    label?: string;
    srcLang?: string;
};
/** Type definition of property for u (in container component) */
export type UProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'u';
    children?: ReactNode;
};
/** Type definition of property for ul (in list component) */
export type UlProps<T extends TypeContainer | string = string> = ElementCommonProps<HTMLUListElement, HTMLAttributes<HTMLUListElement>> & {
    element: 'ul';
    items?: ListItemProps<T>[];
};
/** Type definition of property for var (in container component) */
export type VarProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    element: 'var';
    children?: ReactNode;
};
/** Type definition of property for video (in media component) */
export type VideoProps = AudioVideoCommonProps<HTMLVideoElement, VideoHTMLAttributes<HTMLVideoElement>> & {
    element: 'video';
    width?: number;
    height?: number;
    disablePictureInPicture?: boolean;
    poster?: string;
    track?: TrackProps;
};
/** Type definition of property for line break opportunity (in break component) */
export type WbrProps = ElementCommonProps<HTMLBRElement, HTMLAttributes<HTMLBRElement>> & {
    element: 'wbr';
};





// -------------------------------------------------------------------
// Type definitions of common properties for containers
// -------------------------------------------------------------------
export type ElementBaseProps = {
    element: string;
    id?: string;
}
/** Type definition of common property for element */
export type ElementCommonProps<T extends HTMLElement|HTMLOrSVGElement, U extends HTMLAttributes<T>> = ElementBaseProps & {
    noDefaultClass?: boolean;
    classes?: string[];
    attributes?: U;
    datasets?: CommonDatasetType;
} & DOMAttributes<T>;
/** Type definition of common property for container */
type ContainerCommonProps<T extends HTMLElement, U extends HTMLAttributes<T>> = ElementCommonProps<T, U> & {
};
/** Common Type definition of property for media element */
type MediaCommonProps<T extends HTMLElement, U extends HTMLAttributes<T>> = ElementCommonProps<T, U>;
/** Type definition of common property for audio/video */
export type AudioVideoCommonProps<T extends HTMLElement, U extends HTMLAttributes<T>> = MediaCommonProps<T, U> & {
    src?: string;
    sources?: SourceSrcProps[];
    children?: ReactNode;
    autoPlay?: boolean;
    controls?: boolean;
    controlsList?: (ControlsListTypes|string)[];
    crossOrigin?: CrossOriginTypes;
    disableRemotePlayback?: boolean;
    loop?: boolean;
    muted?: boolean;
    playsInline?: boolean;
    preload?:PreloadTypes;
};
/** Common Type definition of property for several block containers */
type BlockCommonProps<T extends HTMLElement, U extends HTMLAttributes<T>> = ContainerCommonProps<T, U> & {
};
/** Common Type definition of property for several inline containers */
type InlineCommonProps<T extends HTMLElement, U extends HTMLAttributes<T>> = ContainerCommonProps<T, U> & {
};
/** Type definition of property for common input */
export type InputCommonProps = ElementCommonProps<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>> & {
    element: 'input';
    name?: string;
    value?: string;
    disabled?: boolean;
    form?: string;
    inputmode?: InputModeTypes;
    tabindex?: number;
    title?: string;
};
/** Type definition of common property for source variations */
export type SourceCommonProps = MediaCommonProps<HTMLSourceElement, SourceHTMLAttributes<HTMLSourceElement>> & {
    type?: string;
    media?: string[];
    width?: number;
    height?: number;
};
/** Common Type definition of property for abbr/dfn */
export type AbbrDfnProps = InlineCommonProps<HTMLElement, HTMLAttributes<HTMLElement>> & {
    children?: ReactNode;
    title?: string;
};
/** Type definition of property for ins/del */
export type InsDelProps = InlineCommonProps<HTMLModElement, HTMLAttributes<HTMLModElement>> & {
    children?: ReactNode;
    cite?: string;
    datetime?: string;
};
/** Type definition for property for source which is used for audio/video */
export type SourceSrcProps = SourceCommonProps & {
    src: string;
};
/** Type definition for property for source which is used for picture */
export type SourceSrcsetProps = SourceCommonProps & {
    srcSet: SrcSetInSourceProps[];
    sizes?: SourceSizesProps[];
    defaultSize?: number|string;
};
/** Type definition of property for table cell */
export type TableCellProps = ElementCommonProps<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>> & {
    children?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    headers?: string[];
};

/** Type definition of sizes/srcset for image */
export type ImageSizesProps = {
    srcSet?: ImageSrcSetProps[],
    defaultSize?: number|string;
};
/** Type definition of srcset for media */
export type ImageSrcSetProps = {
    mediaQuery?: string[];
    mediaSize?: number|string;
    src: string;
};
/** Type definition of srcset for source */
export type SrcSetInSourceProps = {
    mediaSize?: number|string;
    src: string;
};
/** Type definition of sizes for source */
export type SourceSizesProps = {
    mediaQuery: string[],
    size: number|string;
};
/** Type definition of item property for dl */
export type DlItemProps = [
    DtProps|DtProps[], DdProps|DdProps[],
];
/** Type definition of property for ul items */
export type ListItemProps<T extends TypeContainer | string = string> = LiProps<T>
    | TemplateProps<T>;




// -------------------------------------------------------
// Type definitions for each type attribute of input
// -------------------------------------------------------
/**
 *  Type definition of property for input[type=text]
 *  @see https://developer.mozilla.org/ja/docs/Web/API/Popover_API
 */
export type InputButtonProps = InputCommonProps & {
    type: 'button';
    popovertarget?: string;
    popovertargetaction?: 'hide' | 'show' | 'toggle';
};
/** Type definition of property for input[type=checkbox] */
export type InputCheckboxProps = InputCommonProps & {
    type: 'checkbox';
    value?: string | number | boolean;
    checked?: boolean;
    required?: boolean;
};
/**
 *  Type definition of property for input[type=color]
 *  @see https://developer.mozilla.org/ja/docs/Web/HTML/Element/datalist
 */
export type InputColorProps = InputCommonProps & {
    type: 'color';
    defaultValue?: string | number;
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
};
/** Type definition of property for input[type=date,datetime-local,month,time,week] */
export type InputDateProps = InputCommonProps & {
    type: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
    defaultValue?: string;
    autoComplete?: AutoCompleteTypes;
    max?: string;
    min?: string;
    pattern?: string;
    readOnly?: boolean;
    required?: boolean;
    step?: number|'any';
    list?: string;
    datalist?: string[];
};
/** Type definition of property for input[type=email] */
export type InputEmailProps = InputCommonProps & {
    type: 'email';
    defaultValue?: string;
    autoComplete?: AutoCompleteTypes;
    maxLength?: number;
    minLength?: number;
    multiple?: boolean;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
    list?: string;
    datalist?: string[];
};
/** Type definition of property for input[type=file] */
export type InputFileProps = InputCommonProps & {
    type: 'file';
    accept?: string[];
    capture?: 'user' | 'environment';
    multiple?: boolean;
    required?: boolean;
};
/** Type definition of property for input[type=hidden] */
export type InputHiddenProps = InputCommonProps & {
    type: 'hidden';
    autoComplete?: AutoCompleteTypes;
};
/** Type definition of property for input[type=image] */
export type InputImageProps = InputCommonProps & {
    type: 'image';
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
    formAction?: string;
    formEncType?: FormEnctypeTypes;
    formMethod?: FormMethodTypes;
    formNoValidate?: boolean;
    formTarget?: TargetTypes;
};
/** Type definition of property for input[type=number] */
export type InputNumberProps = InputCommonProps & {
    type: 'number';
    defaultValue?: number;
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    step?: number;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
};
/** Type definition of property for input[type=password] */
export type InputPasswordProps = InputCommonProps & {
    type: 'password';
    defaultValue?: string | number | boolean;
    autoComplete?: AutoCompleteTypes;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
};
/** Type definition of property for input[type=radio] */
export type InputRadioProps = InputCommonProps & {
    type: 'radio';
    value?: string | number | boolean;
    checked?: boolean;
    required?: boolean;
};
/** Type definition of property for input[type=range] */
export type InputRangeProps = InputCommonProps & {
    type: 'range';
    defaultValue?: string | number | boolean;
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    step?: number;
    readOnly?: boolean;
    required?: boolean;
};
/** Type definition of property for input[type=search] */
export type InputSearchProps = InputCommonProps & {
    type: 'search';
    defaultValue?: string | number | boolean;
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirname?: string;
    list?: string;
    datalist?: string[];
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number,
    spellCheck?: "true"|"false"|"";
};
/** Type definition of property for input[type=submit] */
export type InputSubmitProps = InputCommonProps & {
    type: 'submit';
    formAction?: string;
    formEncType?: FormEnctypeTypes;
    formMethod?: FormMethodTypes;
    formNoValidate?: boolean;
    formTarget?: TargetTypes;
};
/** Type definition of property for input[type=tel] */
export type InputTelProps = InputCommonProps & {
    type: 'tel';
    defaultValue?: string | number;
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
};
/** Type definition of property for input[type=text] */
export type InputTextProps = InputCommonProps & {
    type: 'text';
    defaultValue?: string | number | boolean;
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirname?: string;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    size?: number;
};
/** Type definition of property for input[type=url] */
export type InputUrlProps = InputCommonProps & {
    type: 'url';
    defaultValue?: string | number | boolean;
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirname?: string;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readOnly?: boolean;
    required?: boolean;
    spellCheck?: "true"|"false"|"";
};
