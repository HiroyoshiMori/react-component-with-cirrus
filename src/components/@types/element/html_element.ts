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
    DialogHTMLAttributes,
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
    TextWrapTypes,
} from "../index";

/** Type definition of property for a (in anchor component) */
export type AProps = ElementCommonProps & {
    element?: 'a';
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    children?: ReactNode;
    hrefLang?: string;
    download?: boolean;
    ping?: string[];
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    rel?: string[];
    target?: TargetTypes;
    type?: string;
    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
};
/** Type definition of property for abbr (in container component) */
export type AbbrProps = AbbrDfnProps & {
    element: 'abbr';
};
/** Type definition of property for address (in container component) */
export type AddressProps = BlockCommonProps & {
    element: 'address';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** TYpe definition of property for area (in area component) */
export type AreaProps = ElementCommonProps & {
    element?: 'area';
    alt: string;
    coords?: ([number, number][]) | [number, number, number];
    href?: string;
    download?: boolean;
    ping?: string[];
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    rel?: string[];
    shape?: 'rect' | 'circle' | 'poly' | 'default',
    target?: TargetTypes;
    attributes?: AreaHTMLAttributes<HTMLAreaElement>;
};
/** Type definition of property for article (in container component) */
export type ArticleProps = BlockCommonProps & {
    element: 'article';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for aside (in container component) */
export type AsideProps = BlockCommonProps & {
    element: 'aside';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for audio (in media component) */
export type AudioProps = AudioVideoCommonProps & {
    element: 'audio',
    track?: TrackProps;
    attributes?: AudioHTMLAttributes<HTMLAudioElement>;
};
/** Type definition of property for b (in container component) */
export type BProps = InlineCommonProps & {
    element: 'b';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for bdi (in container component) */
export type BdiProps = InlineCommonProps & {
    element: 'bdi';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for bdo (in container component) */
export type BdoProps = InlineCommonProps & {
    element: 'bdo';
    children?: ReactNode;
    dir?: 'ltr' | 'rtl';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for blockquote (in container component) */
export type BlockQuoteProps = BlockCommonProps & {
    element: 'blockquote';
    children?: ReactNode;
    cite?: string;
    attributes?: BlockquoteHTMLAttributes<HTMLQuoteElement>;
};
/** Type definition of property for line break (in break component) */
export type BrProps = ElementCommonProps & {
    element?: 'br';
    attributes?: HTMLAttributes<HTMLBRElement>;
};
/** Type definition of property for button(by <button>) (in button component) */
export type ButtonProps = ElementCommonProps & {
    element?: 'button';
    name?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement|HTMLDivElement>) => void;
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
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
};
/** Type definition of property for canvas (in canvas component) */
export type CanvasProps = ElementCommonProps & {
    element?: 'canvas';
    children?: ReactNode;
    width?: number;
    height?: number;
    attributes: CanvasHTMLAttributes<HTMLCanvasElement>;
};
/** Type definition of property for caption (used in table) */
export type CaptionProps = ElementCommonProps & {
    element?: 'caption';
    children?: ReactNode;
    attributes: HTMLAttributes<HTMLTableCaptionElement>;
};
/** Type definition of property for cite (in container component) */
export type CiteProps = InlineCommonProps & {
    element: 'cite';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for code (in code component) */
export type CodeProps = ElementCommonProps & {
    element?: 'code';
    children?: ReactNode;
    "data-lang"?: string;
    dark?: boolean;
    inline?: boolean;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for col (used in table) */
export type ColProps = ElementCommonProps & {
    element?: 'col';
    span?: number;
    attributes?: ColHTMLAttributes<HTMLTableColElement>;
};
/** Type definition of property for colgroup (used in table) */
export type ColGroupProps = ElementCommonProps & {
    element?: 'colgroup';
    span?: number;
    cols?: ColProps[];
    attributes?: ColgroupHTMLAttributes<HTMLTableColElement>;
};
/** Type definition of property for data (in container component) */
export type DataProps = InlineCommonProps & {
    element: 'data';
    value: string|number;
    children?: ReactNode;
    attributes?: DataHTMLAttributes<HTMLDataElement>;
}
/** Type definition of property for datalist (in datalist component) */
export type DataListProps = ElementCommonProps & {
    element?: 'datalist';
    children?: ReactNode;
    options?: OptionProps[];
    attributes?: HTMLAttributes<HTMLDataListElement>;
};
/** Type definition of property for dd (used in dl) */
export type DdProps = ElementCommonProps & {
    element?: 'dd';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
}
/** Type definition of property for del (in container component) */
export type DelProps = InsDelProps & {
    element: 'del';
};
/** Type definition of property for details (in details component) */
export type DetailsProps = ElementCommonProps & {
    element?: 'details';
    children?: ReactNode;
    open?: boolean;
    summary: SummaryProps;
    attributes?: DetailsHTMLAttributes<HTMLDetailsElement>;
};
/** Type definition of property for dfn (in container component) */
export type DfnProps = AbbrDfnProps & {
    element: 'dfn';
};
/** Type definition of property for dialog (in dialog component) */
export type DialogProps = ElementCommonProps & {
    element?: 'dialog';
    children?: ReactNode;
    open?: boolean;
    attributes?: DialogHTMLAttributes<HTMLDialogElement>;
}
/** Type definition of property for div (in container component) */
export type DivProps = BlockCommonProps & {
    element?: 'div';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLDivElement>;
}
/** Type definition of property for dl (in list component) */
export type DlProps = ElementCommonProps & {
    element?: 'dl';
    items?: DlItemProps[];
    attributes?: HTMLAttributes<HTMLDListElement>;
};
/** Type definition of property for dt (used in dl) */
export type DtProps = ElementCommonProps & {
    element?: 'dt';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
}
/** Type definition of property for em (in container component) */
export type EmProps = InlineCommonProps & {
    element: 'em';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for embed (in media component) */
export type EmbedProps = MediaCommonProps & {
    element: 'embed';
    src: string;
    type?: string;
    title?: string;
    width?: number;
    height?: number;
    attributes?: EmbedHTMLAttributes<HTMLEmbedElement>;
}
/** Type definition of property for fieldset (in fieldset component) */
export type FieldsetProps = ElementCommonProps & {
    element?: 'fieldset';
    caption?: LegendProps;
    children?: ReactNode;
    disabled?: boolean;
    form?: string;
    name?: string;
    attributes?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
};
/** Type definition of property for figcaption (used in figure) */
export type FigcaptionProps = ElementCommonProps & {
    element?: 'figcaption';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for figure (in figure component) */
export type FigureProps = ElementCommonProps & {
    element?: 'figure';
    children?: ReactNode;
    caption?: FigcaptionProps;
    captionPosition?: 'first'|'last';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for footer (in container component) */
export type FooterProps = BlockCommonProps & {
    element: 'footer';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for form (in form component) */
export type FormProps = ElementCommonProps & {
    element?: 'form';
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
    attributes?: FormHTMLAttributes<HTMLFormElement>;
};
/** Type definition of property for h1-h6 (in heading component) */
export type HeadingProps = ElementCommonProps & {
    element?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'heading';
    level: number;
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLHeadingElement>;
};
/** Type definition of property for header (in container component) */
export type HeaderProps = BlockCommonProps & {
    element: 'header';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for hgroup (in heading group component) */
export type HgroupProps = ElementCommonProps & {
    element?: 'hgroup' | 'heading-group';
    heading: HeadingProps;
    paragraphs: PProps[];
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for horizontal rule (in break component) */
export type HrProps = ElementCommonProps & {
    element: 'hr';
    attributes?: HTMLAttributes<HTMLHRElement>;
};
/** Type definition of property for i (in container component) */
export type IProps = InlineCommonProps & {
    element: 'i';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for iframe (in iframe component) */
export type IframeProps = ElementCommonProps & {
    element?: 'iframe';
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
    attributes?: IframeHTMLAttributes<HTMLIFrameElement>;
};
/** Type definition of property for img (in media component) */
export type ImgProps = MediaCommonProps & {
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
    attributes?: HTMLAttributes<HTMLImageElement>;
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
export type KbdProps = InlineCommonProps & {
    element: 'kbd';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for label (in label component) */
export type LabelProps = ElementCommonProps & {
    element?: 'label';
    children?: ReactNode;
    htmlFor?: string;
    attributes?: LabelHTMLAttributes<HTMLLabelElement>;
};
/** Type definition of property for legend (in container component / used in fieldset / in container component) */
export type LegendProps = BlockCommonProps & {
    element: 'legend';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLLegendElement>;
};
/** Type definition of property for li (used in menu/ol/ul) */
export type LiProps = ElementCommonProps & {
    element?: 'li';
    children?: ReactNode;
    value?: number;
    attributes?: LiHTMLAttributes<HTMLLIElement>;
};
/** Type definition of property for link with itemprop attribute (in link component) */
export type LinkProps = ElementCommonProps & {
    element?: 'link';
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
    attributes?: LinkHTMLAttributes<HTMLLinkElement>;
};
/** Type definition of property for main (in container component) */
export type MainProps = BlockCommonProps & {
    element: 'main';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for map (in maps container, due to conflict with Map()) */
export type ImageMapProps = ElementCommonProps & {
    element?: 'map';
    name: string;
    children?: ReactNode;
    areas?: AreaProps[];
    attributes?: MapHTMLAttributes<HTMLMapElement>;
};
/** Type definition of property for mark (in container component) */
export type MarkProps = InlineCommonProps & {
    element: 'mark';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for menu (in list component) */
export type MenuProps = ElementCommonProps & {
    element: 'menu';
    items?: LiProps[];
    attributes?: MenuHTMLAttributes<HTMLMenuElement>;
};
/** Type definition of property for meta with itemprop attribute (in meta component) */
export type MetaProps = ElementCommonProps & {
    element?: 'meta';
    itemProp: true;
    charSet?: string;
    content?: string;
    httpEquiv?: 'content-security-policy'|'content-type'|'default-style'|'x-ua-compatible'|'refresh';
    name?: string;
    attributes?: MetaHTMLAttributes<HTMLMetaElement>;
};
/** Type definition of property for meter (in container component) */
export type MeterProps = InlineCommonProps & {
    element: 'meter';
    children?: ReactNode;
    value?: number;
    min?: number;
    max?: number;
    low?: number;
    high?: number;
    optimum?: number;
    form?: string;
    attributes?: MeterHTMLAttributes<HTMLMeterElement>;
};
/** Type definition of property for nav (in container component) */
export type NavProps = BlockCommonProps & {
    element: 'nav';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for noscript (in container component) */
export type NoScriptProps = BlockCommonProps & {
    element: 'noscript';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for object (in media component) */
export type ObjectProps = MediaCommonProps & {
    element: 'object';
    name?: string;
    data: string;
    type: string;
    children?: ReactNode;
    form?: string;
    width?: number;
    height?: number;
    useMap?: string;
    attributes?: ObjectHTMLAttributes<HTMLObjectElement>;
};
/** Type definition of property for ol (in list component) */
export type OlProps = ElementCommonProps & {
    element: 'ol';
    items?: (
            LiProps
            | ScriptProps & {element: 'script'}
            | TemplateProps & {element: 'template'}
        )[];
    reversed?: boolean;
    start?: number;
    type?: 'a' | 'A' | 'i' | 'I' | '1';
    attributes?: OlHTMLAttributes<HTMLOListElement>;
};
/** Type definition of property for optgroup (used in select) */
export type OptGroupProps = ElementCommonProps & {
    element?: 'optgroup';
    is: 'optgroup';
    label: string;
    options: OptionProps[];
    disabled?: boolean;
    attributes?: OptgroupHTMLAttributes<HTMLOptGroupElement>;
};
/** Type definition of property for option (used in datalist/select) */
export type OptionProps = ElementCommonProps & {
    element?: 'option';
    name?: string;
    children: string;
    value?: string;
    label?: string;
    disabled?: boolean;
    attributes?: OptionHTMLAttributes<HTMLOptionElement>;
};
/** Type definition of property for output (in output component) */
export type OutputProps = ElementCommonProps & {
    element?: 'output';
    children?: ReactNode;
    htmlFor?: string[];
    form?: string;
    name?: string;
    attributes?: OutputHTMLAttributes<HTMLOutputElement>;
};
/** Type definition of property for p (in paragraph component) */
export type PProps = ElementCommonProps & {
    element?: 'p' | 'paragraph';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLParagraphElement>;
};
/** Type definition of property for picture (in media component) */
export type PictureProps = MediaCommonProps & {
    element: 'picture';
    img: ImgProps;
    source?: SourceSrcsetProps[];
    attributes?: HTMLAttributes<HTMLPictureElement>;
};
/** Type definition of property for pre (in container component) */
export type PreProps = BlockCommonProps & {
    element?: 'pre';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for progress (in progress component) */
export type ProgressProps = ElementCommonProps & {
    element?: 'progress';
    children?: ReactNode;
    value?: number;
    max: number;
    attributes?: ProgressHTMLAttributes<HTMLProgressElement>;
};
/** Type definition of property for q (in container component) */
export type QProps = InlineCommonProps & {
    element: 'q';
    children?: ReactNode;
    cite?: string;
    attributes?: HTMLAttributes<HTMLQuoteElement>;
};
/** Type definition of property for ruby fallback parenthesis (used in ruby) */
export type RpProps = ElementCommonProps & {
    element?: 'rp';
    children?: string;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition for property of each character in ruby (used in ruby) */
export type RtProps = ElementCommonProps & {
    element?: 'rt';
    label: string;
    children?: string;
    useRp?: boolean;
    preParenthesis?: RpProps;
    postParenthesis?: RpProps;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for ruby (in ruby component) */
export type RubyProps = ElementCommonProps & {
    element?: 'ruby';
    items: RtProps[];
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for s (in container component) */
export type SProps = InlineCommonProps & {
    element?: 's';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for samp (in container component) */
export type SampProps = InlineCommonProps & {
    element?: 'samp';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for script (in script component) */
export type ScriptProps = ElementCommonProps & {
    element?: 'script';
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
    attributes?: ScriptHTMLAttributes<HTMLScriptElement>;
};
/** Type definition of property for search (in container component) */
export type SearchProps = BlockCommonProps & {
    element?: 'search';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for section (in container component) */
export type SectionProps = BlockCommonProps & {
    element?: 'section';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for select (in select component) */
export type SelectProps = ElementCommonProps & {
    element?: 'select';
    name?: string;
    options?: (OptGroupProps|OptionProps|HrProps)[];
    selectedValue?: string;
    autoComplete?: AutoCompleteTypes;
    disabled?: boolean;
    form?: string;
    multiple?: boolean;
    required?: boolean;
    size?: number;
    attributes?: SelectHTMLAttributes<HTMLSelectElement>;
};
/** Type definition of property for slot (in container component) */
export type SlotProps = BlockCommonProps & {
    element?: 'slot';
    children?: ReactNode;
    attributes?: SlotHTMLAttributes<HTMLSlotElement>;
};
/** Type definition of property for small (in container component) */
export type SmallProps = InlineCommonProps & {
    element?: 'small';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for source (used in media) */
export type SourceProps = ElementCommonProps & {
    element?: 'source';
} & (SourceSrcProps | SourceSrcsetProps);
/** Type definition of property for span (in container component) */
export type SpanProps = InlineCommonProps & {
    element: 'span';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLSpanElement>;
};
/** Type definition of property for strong (in container component) */
export type StrongProps = InlineCommonProps & {
    element?: 'strong';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for style with scoped attribute */
export type StyleProps = ElementCommonProps & {
    element?: 'style';
    scoped: true;
    children?: string;
    mediaQuery?: string[];
    nonce?: string;
    title?: string;
    attributes?: StyleHTMLAttributes<HTMLStyleElement>;
};
/** Type definition of property for sub (in container component) */
export type SubProps = InlineCommonProps & {
    element?: 'sub';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for summary (used in details / in container component) */
export type SummaryProps = BlockCommonProps & {
    element?: 'summary';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for sup (in container component) */
export type SupProps = InlineCommonProps & {
    element?: 'sup';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
// TODO: make stories for SVG element
/** Type definition of property for svg (in svg component) */
export type SvgProps = ElementCommonProps & {
    element?: 'svg';
    children?: ReactNode;
    height?: number|`${number}%`;
    preserveAspectRatio?: `${'none'|'xMinYMin'|'xMidYMin'|'xMaxYMin'|'xMinYMid'|'xMidYMid'|'xMaxYMid'|'xMinYMax'|'xMidYMax'|'xMaxYMax'} ${'meet'|'slice'}`;
    viewBox?: 'none' | number[];
    width?: number|`${number}%`;
    x?: number|`${number}%`;
    y?: number|`${number}%`;
    attributes?: SVGAttributes<HTMLOrSVGElement>;
};
/** Type definition of property for table (in table component) */
export type TableProps = ElementCommonProps & {
    element?: 'table';
    caption?: CaptionProps;
    colgroup?: ColGroupProps[];
    thead?: TheadProps;
    tfoot?: TfootProps;
    tbody: TbodyProps | TbodyProps[] | TrProps | TrProps[];
    attributes?: TableHTMLAttributes<HTMLTableElement>;
};
/** Type definition of property for tbody (used in table) */
export type TbodyProps = ElementCommonProps & {
    element?: 'tbody';
    rows?: TrProps[];
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
};
/** Type definition of property for td (used in table) */
export type TdProps = TableCellProps & {
    element?: 'td';
};
/** Type definition of property for template (in container component) */
export type TemplateProps = BlockCommonProps & {
    element?: 'template';
    children?: ReactNode;
    shadowRootMode?: 'open' | 'closed';
    attributes?: HTMLAttributes<HTMLTemplateElement>;
};
/** Type definition of property for textarea (in textarea component) */
export type TextareaProps = ElementCommonProps & {
    element?: 'textarea';
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
    attributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
};
/** Type definition of property for tfoot (used in table) */
export type TfootProps = ElementCommonProps & {
    element: 'tfoot';
    rows?: TrProps[];
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
};
/** Type definition of property for th (used in table) */
export type ThProps = TableCellProps & {
    element: 'th';
    abbr?: string;
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
};
/** Type definition of property for thead (used in table) */
export type TheadProps = ElementCommonProps & {
    element: 'thead';
    rows: TheadRowProps[];
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
}
/** Type definition of property for tr only includes th (used in table) */
export type TheadRowProps = ElementCommonProps & {
    element?: 'tr';
    cells: ThProps[];
    attributes?: HTMLAttributes<HTMLTableRowElement>;
};
/** Type definition of property for time (in container component) */
export type TimeProps = InlineCommonProps & {
    element: 'time';
    children?: ReactNode;
    dateTime?: string;
    attributes?: TimeHTMLAttributes<HTMLTimeElement>;
};
/** Type definition of property for tr (used in table) */
export type TrProps = ElementCommonProps & {
    element?: 'tr';
    cells: (TdProps | ThProps)[];
    attributes?: HTMLAttributes<HTMLTableRowElement>;
};
/** Type definition of property for track (used in audio/video) */
export type TrackProps = BlockCommonProps & {
    element?: 'track';
    src: string;
    default?: boolean;
    kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
    label?: string;
    srcLang?: string;
    attributes?: TrackHTMLAttributes<HTMLTrackElement>;
};
/** Type definition of property for u (in container component) */
export type UProps = InlineCommonProps & {
    element?: 'u';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for ul (in list component) */
export type UlProps = ElementCommonProps & {
    element?: 'ul';
    items?: (
            LiProps
            | ScriptProps & {element: 'script'}
            | TemplateProps & {element: 'template'}
        )[];
    attributes?: HTMLAttributes<HTMLUListElement>;
};
/** Type definition of property for var (in container component) */
export type VarProps = InlineCommonProps & {
    element?: 'var';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for video (in media component) */
export type VideoProps = AudioVideoCommonProps & {
    element: 'video';
    width?: number;
    height?: number;
    disablePictureInPicture?: boolean;
    poster?: string;
    track?: TrackProps;
    attributes?: VideoHTMLAttributes<HTMLVideoElement>;
};
/** Type definition of property for line break opportunity (in break component) */
export type WbrProps = ElementCommonProps & {
    element: 'wbr';
    attributes?: HTMLAttributes<HTMLBRElement>;
};





// -------------------------------------------------------------------
// Type definitions of common properties for containers
// -------------------------------------------------------------------
/** Type definition of common property for element */
export type ElementCommonProps = {
    id?: string;
    lang?: string;
    popover?: 'auto'|'manual';
    classes?: string[];
    datasets?: CommonDatasetType;
};
/** Type definition of common property for container */
type ContainerCommonProps = ElementCommonProps & {
};
/** Common Type definition of property for media element */
type MediaCommonProps = ElementCommonProps;
/** Type definition of common property for audio/video */
export type AudioVideoCommonProps = MediaCommonProps & {
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
type BlockCommonProps = ContainerCommonProps & {
    inline?: false;
};
/** Common Type definition of property for several inline containers */
type InlineCommonProps = ContainerCommonProps & {
    inline: true;
};
/** Type definition of property for common input */
export type InputCommonProps = ElementCommonProps & {
    element?: 'input';
    name?: string;
    value?: string;
    disabled?: boolean;
    form?: string;
    inputmode?: InputModeTypes;
    tabindex?: number;
    title?: string;
    attributes?: InputHTMLAttributes<HTMLInputElement>;
};
/** Type definition of common property for source variations */
export type SourceCommonProps = MediaCommonProps & {
    type?: string;
    media?: string[];
    width?: number;
    height?: number;
    attributes?: SourceHTMLAttributes<HTMLSourceElement>;
};
/** Common Type definition of property for abbr/dfn */
export type AbbrDfnProps = InlineCommonProps & {
    children?: ReactNode;
    title?: string;
    attributes?: HTMLAttributes<HTMLLabelElement>;
};
/** Type definition of property for ins/del */
export type InsDelProps = InlineCommonProps & {
    children?: ReactNode;
    cite?: string;
    datetime?: string;
    attributes?: HTMLAttributes<HTMLModElement>;
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
export type TableCellProps = ElementCommonProps & {
    children?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    headers?: string[];
    attributes?: TdHTMLAttributes<HTMLTableCellElement>;
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
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
/** Type definition of property for input[type=checkbox] */
export type InputCheckboxProps = InputCommonProps & {
    type: 'checkbox';
    value?: string | number | boolean;
    checked?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=date,datetime-local,month,time,week] */
export type InputDateProps = InputCommonProps & {
    type: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
    defaultValue?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=radio] */
export type InputRadioProps = InputCommonProps & {
    type: 'radio';
    value?: string | number | boolean;
    checked?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=submit] */
export type InputSubmitProps = InputCommonProps & {
    type: 'submit';
    formAction?: string;
    formEncType?: FormEnctypeTypes;
    formMethod?: FormMethodTypes;
    formNoValidate?: boolean;
    formTarget?: TargetTypes;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
