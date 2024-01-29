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
    LiHTMLAttributes,
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
    SourceHTMLAttributes, StyleHTMLAttributes,
    TableHTMLAttributes,
    TdHTMLAttributes,
    TextareaHTMLAttributes,
    TimeHTMLAttributes,
    TrackHTMLAttributes,
    VideoHTMLAttributes,
} from "react";
import {
    AlternativeSizeTypes,
    AutoCapitalizeTypes,
    AutoCompleteTypes,
    ColorTypes,
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

/** Type definition of property for a */
export type AProps = InlineCommonProps & {
    element: 'a';
    download?: boolean;
    href?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    hrefLang?: string;
    ping?: string[];
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    rel?: string;
    target?: TargetTypes;
    type?: string;
    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>;
};
/** Type definition of property for abbr */
export type AbbrProps = AbbrDfnProps & {
    element?: 'abbr';
};
/** Type definition of property for address */
export type AddressProps = BlockCommonProps & {
    element?: 'address';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** TYpe definition of property for area */
export type AreaProps = ElementCommonProps & {
    element?: 'area';
    alt: string;
    coords?: [number, number][];
    download?: boolean;
    href?: string;
    ping?: string[];
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    rel?: string;
    shape?: 'rect' | 'circle' | 'poly' | 'default',
    target?: TargetTypes;
    attributes?: AreaHTMLAttributes<HTMLAreaElement>;
};
/** Type definition of property for article */
export type ArticleProps = BlockCommonProps & {
    element?: 'article';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for aside */
export type AsideProps = BlockCommonProps & {
    element?: 'aside';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for audio */
export type AudioProps = AudioVideoCommonProps & {
    element: 'audio',
    attributes?: AudioHTMLAttributes<HTMLAudioElement>;
};
/** Type definition of property for b */
export type BProps = InlineCommonProps & {
    element?: 'b';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for bdi */
export type BdiProps = InlineCommonProps & {
    element?: 'bdi';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for bdo */
export type BdoProps = InlineCommonProps & {
    element?: 'bdo';
    dir?: 'ltr' | 'rtl';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for blockquote */
export type BlockQuoteProps = BlockCommonProps & {
    element?: 'blockquote';
    cite?: string;
    attributes?: BlockquoteHTMLAttributes<HTMLQuoteElement>;
};
/** Type definition of property for line break */
export type BrProps = ElementCommonProps & {
    element?: 'br';
    attributes?: HTMLAttributes<HTMLBRElement>;
};
/** Type definition of property for button(by <button>) */
export type ButtonProps = ElementCommonProps & {
    element?: 'button';
    name?: string;
    children: ReactNode;
    onClick?: (e: React.MouseEvent<HTMLButtonElement|HTMLAnchorElement|HTMLDivElement>) => void;
    colorType?: ButtonColorTypes;
    size?: AlternativeSizeTypes;
    type?: 'submit'|'rest'|'button';
    value?: string;
    disabled?: boolean;
    form?: string;
    formAction?: string;
    formEnctype?: FormEnctypeTypes;
    formMethod?: FormMethodTypes;
    formNovalidate?: boolean;
    formTarget?: TargetTypes;
    popoverTarget?: string;
    popoverTargetAction?: 'hide'|'show'|'toggle';
    attributes?: ButtonHTMLAttributes<HTMLButtonElement>;
};
/** Type definition of property for canvas */
export type CanvasProps = ElementCommonProps & {
    element?: 'canvas';
    children?: ReactNode;
    width?: number;
    height?: number;
    attributes: CanvasHTMLAttributes<HTMLCanvasElement>;
};
/** Type definition of property for caption */
export type CaptionProps = ElementCommonProps & {
    element?: 'caption';
    children?: ReactNode;
    attributes: HTMLAttributes<HTMLTableCaptionElement>;
};
/** Type definition of property for cite */
export type CiteProps = InlineCommonProps & {
    element?: 'cite';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for code */
export type CodeProps = ElementCommonProps & {
    element?: 'code';
    children?: ReactNode;
    "data-lang"?: string;
    dark?: boolean;
    inline?: boolean;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for col */
export type ColProps = ElementCommonProps & {
    element?: 'col';
    span?: number;
    attributes?: ColHTMLAttributes<HTMLTableColElement>;
};
/** Type definition of property for colgroup */
export type ColGroupProps = ElementCommonProps & {
    element?: 'colgroup';
    span?: number;
    cols?: ColProps[];
    attributes?: ColgroupHTMLAttributes<HTMLTableColElement>;
};
/** Type definition of property for data */
export type DataProps = InlineCommonProps & {
    element: 'data';
    value: string;
    attributes?: DataHTMLAttributes<HTMLDataElement>;
}
/** Type definition of property for datalist */
export type DataListProps = ElementCommonProps & {
    element?: 'datalist';
    children?: ReactNode;
    options?: OptionProps[];
    attributes?: HTMLAttributes<HTMLDataListElement>;
};
/** Type definition of property for dd */
export type DdProps = ElementCommonProps & {
    element?: 'dd';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
}
/** Type definition of property for del */
export type DelProps = InsDelProps & {
    element: 'del';
};
/** Type definition of property for details */
export type DetailsProps = ElementCommonProps & {
    children?: ReactNode;
    open?: boolean;
    summary: SummaryProps;
    attributes?: DetailsHTMLAttributes<HTMLDetailsElement>;
};
/** Type definition of property for dfn */
export type DfnProps = AbbrDfnProps & {
    element: 'dfn';
};
/** Type definition of property for dialog */
export type DialogProps = ElementCommonProps & {
    element?: 'dialog';
    children?: ReactNode;
    open?: boolean;
    attributes?: DialogHTMLAttributes<HTMLDialogElement>;
}
/** Type definition of property for div */
export type DivProps = BlockCommonProps & {
    element?: 'div';
    attributes?: HTMLAttributes<HTMLDivElement>;
}
/** Type definition of property for dl */
export type DlProps = ElementCommonProps & {
    element?: 'dl';
    items?: [DtProps|DtProps[], DdProps|DdProps[]][];
    attributes?: HTMLAttributes<HTMLDListElement>;
};
/** Type definition of property for dt */
export type DtProps = ElementCommonProps & {
    element?: 'dt';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
}
/** Type definition of property for em */
export type EmProps = InlineCommonProps & {
    element?: 'em';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for embed */
export type EmbedProps = MediaCommonProps & {
    element: 'embed';
    src: string;
    type?: string;
    title?: string;
    width?: number;
    height?: number;
    attributes?: EmbedHTMLAttributes<HTMLEmbedElement>;
}
/** Type definition of property for fieldset */
export type FieldsetProps = ElementCommonProps & {
    element?: 'fieldset';
    caption?: LegendProps;
    children?: ReactNode;
    disabled?: boolean;
    form?: string;
    name?: string;
    attributes?: FieldsetHTMLAttributes<HTMLFieldSetElement>;
};
/** Type definition of property for figcaption */
export type FigcaptionProps = ElementCommonProps & {
    element?: 'figcaption';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for figure */
export type FigureProps = ElementCommonProps & {
    element?: 'figure';
    children?: ReactNode;
    caption?: FigcaptionProps;
    captionPosition?: 'first'|'last';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for footer */
export type FooterProps = BlockCommonProps & {
    element?: 'footer';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for form */
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
/** Type definition of property for h1-h6 */
export type HeadingProps = ElementCommonProps & {
    element?: 'h1'|'h2'|'h3'|'h4'|'h5'|'h6'|'heading';
    level: number;
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLHeadingElement>;
};
/** Type definition of property for header */
export type HeaderProps = BlockCommonProps & {
    element?: 'header';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for hgroup */
export type HgroupProps = ElementCommonProps & {
    element?: 'hgroup' | 'heading-group';
    heading: HeadingProps;
    paragraphs: PProps[];
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for horizontal rule */
export type HrProps = ElementCommonProps & {
    element: 'hr';
    attributes?: HTMLAttributes<HTMLHRElement>;
};
/** Type definition of property for i */
export type IProps = InlineCommonProps & {
    element?: 'i';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for iframe */
export type IframeProps = ElementCommonProps & {
    element?: 'iframe';
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
/** Type definition of property for img */
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
/** Type definition of property for input */
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
/** Type definition of property for ins */
export type InsProps = InsDelProps & {
    element: 'ins';
};
/** Type definition of property for kbd */
export type KbdProps = InlineCommonProps & {
    element?: 'kbd';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for label */
export type LabelProps = ElementCommonProps & {
    element?: 'label';
    children?: ReactNode;
    htmlFor?: string;
    attributes?: LabelHTMLAttributes<HTMLLabelElement>;
};
/** Type definition of property for legend */
export type LegendProps = ElementCommonProps & {
    element?: 'legend';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLLegendElement>;
};
/** Type definition of property for li */
export type LiProps = ElementCommonProps & {
    element?: 'li';
    children?: ReactNode;
    value?: number;
    attributes?: LiHTMLAttributes<HTMLLIElement>;
};
/** Type definition of property for link with itemprop attribute */
export type LinkProps = ElementCommonProps & {
    element?: 'link';
    itemProp: true;
    rel?: string;
    type?: string;
    href?: string;
    as?: LinkAsTypes;
    crossOrigin?: CrossOriginTypes;
    fetchPriority?: 'high'|'low'|'auto';
    hrefLang?: string;
    imageSizes?: string;
    imageSrcset?: string;
    integrity?: string;
    media?: string;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    sizes?: string;
    title?: string;
};
/** Type definition of property for main */
export type MainProps = BlockCommonProps & {
    element?: 'main';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for map */
export type MapProps = ElementCommonProps & {
    element?: 'map';
    name?: string;
    children?: ReactNode;
    areas?: AreaProps[];
    attributes?: MapHTMLAttributes<HTMLMapElement>;
};
/** Type definition of property for mark */
export type MarkProps = InlineCommonProps & {
    element?: 'mark';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for menu */
export type MenuProps = ElementCommonProps & {
    element?: 'menu';
    items?: LiProps[];
    attributes?: MenuHTMLAttributes<HTMLMenuElement>;
};
/** Type definition of property for meta with itemprop attribute */
export type MetaProps = ElementCommonProps & {
    element?: 'meta';
    itemProp: true;
    charset?: string;
    content?: string;
    httpEquiv?: 'content-security-policy'|'content-type'|'default-style'|'x-ua-compatible'|'refresh';
    name?: string;
    attributes?: MetaHTMLAttributes<HTMLMetaElement>;
};
/** Type definition of property for meter */
export type MeterProps = ElementCommonProps & {
    element?: 'meter';
    children?: ReactNode;
    min?: number;
    max?: number;
    low?: number;
    high?: number;
    optimum?: number;
    form?: string;
    attributes?: MeterHTMLAttributes<HTMLMeterElement>;
};
/** Type definition of property for nav */
export type NavProps = BlockCommonProps & {
    element?: 'nav';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for noscript */
export type NoScriptProps = ElementCommonProps & {
    element?: 'noscript';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for object */
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
/** Type definition of property for ol */
export type OlProps = ElementCommonProps & {
    element?: 'ol';
    items?: (LiProps | ScriptProps | TemplateProps)[];
    reversed?: boolean;
    start?: number;
    type?: 'a' | 'A' | 'i' | 'I' | '1';
    attributes?: OlHTMLAttributes<HTMLOListElement>;
};
/** Type definition of property for optgroup */
export type OptGroupProps = ElementCommonProps & {
    element?: 'optgroup';
    is: 'optgroup';
    label: string;
    options: OptionProps[];
    selectedValue?: string;
    disabled?: boolean;
    attributes?: OptgroupHTMLAttributes<HTMLOptGroupElement>;
};
/** Type definition of property for option */
export type OptionProps = ElementCommonProps & {
    element?: 'option';
    name?: string;
    children: string;
    value?: string;
    label?: string;
    selected?: boolean;
    disabled?: boolean;
    attributes?: OptionHTMLAttributes<HTMLOptionElement>;
};
/** Type definition of property for output */
export type OutputProps = ElementCommonProps & {
    element?: 'output';
    children?: ReactNode;
    for?: string;
    form?: string;
    name?: string;
    attributes?: OutputHTMLAttributes<HTMLOutputElement>;
};
/** Type definition of property for p */
export type PProps = ElementCommonProps & {
    element?: 'p' | 'paragraph';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLParagraphElement>;
};
/** Type definition of property for picture */
export type PictureProps = MediaCommonProps & {
    element: 'picture';
    img: ImgProps;
    source?: SourceSrcsetProps[];
    attributes?: HTMLAttributes<HTMLPictureElement>;
};
/** Type definition of property for pre */
export type PreProps = BlockCommonProps & {
    element?: 'pre';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for progress */
export type ProgressProps = ElementCommonProps & {
    element?: 'progress';
    children?: ReactNode;
    value?: number;
    max: number;
    colorType?: ColorTypes;
    size?: AlternativeSizeTypes;
    attributes?: ProgressHTMLAttributes<HTMLProgressElement>;
};
/** Type definition of property for q */
export type QProps = InlineCommonProps & {
    element: 'q';
    cite?: string;
    attributes?: HTMLAttributes<HTMLQuoteElement>;
};
/** Type definition of property for ruby fallback parenthesis */
export type RpProps = ElementCommonProps & {
    element?: 'rp';
    children?: string;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition for property of each character */
export type RtProps = ElementCommonProps & {
    element?: 'rt';
    label: string;
    ruby?: string;
    useRp?: boolean;
    preParenthesis?: RpProps;
    postParenthesis?: RpProps;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for ruby */
export type RubyProps = ElementCommonProps & {
    element?: 'ruby';
    items: RtProps[];
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for s */
export type SProps = InlineCommonProps & {
    element?: 's';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for samp */
export type SampProps = InlineCommonProps & {
    element?: 'samp';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for script */
export type ScriptProps = ElementCommonProps & {
    element?: 'script';
    children?: string;
    async?: boolean;
    crossOrigin?: CrossOriginTypes;
    defer?: boolean;
    fetchPriority: 'high' | 'low' | 'auto';
    integrity?: string;
    noModule?: boolean;
    referrerPolicy?: React.HTMLAttributeReferrerPolicy;
    src?: string;
    type?: undefined | 'importmap' | 'module' | 'speculationrules' | string;
    attributes?: ScriptHTMLAttributes<HTMLScriptElement>;
};
/** Type definition of property for search */
export type SearchProps = ElementCommonProps & {
    element?: 'search';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for section */
export type SectionProps = BlockCommonProps & {
    element?: 'section';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for select */
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
// TODO: slot
/** Type definition of property for slot */
export type SlotProps = ElementCommonProps & {
    element?: 'slot';
    children?: ReactNode;
    attributes?: SlotHTMLAttributes<HTMLSlotElement>;
};
/** Type definition of property for small */
export type SmallProps = InlineCommonProps & {
    element?: 'small';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for source */
export type SourceProps = ElementCommonProps & {
    element?: 'source';
} & (SourceSrcProps | SourceSrcsetProps);
/** Type definition of property for span */
export type SpanProps = InlineCommonProps & {
    element: 'span';
    children?: ReactNode;
    attributes?: HTMLAttributes<HTMLSpanElement>;
};
/** Type definition of property for strong */
export type StrongProps = InlineCommonProps & {
    element?: 'strong';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for style with scoped attribute */
export type StyleProps = ElementCommonProps & {
    element?: 'style';
    scoped: true;
    children?: string;
    media?: string;
    nonce?: string;
    title?: string;
    attributes?: StyleHTMLAttributes<HTMLStyleElement>;
};
/** Type definition of property for sub */
export type SubProps = InlineCommonProps & {
    element?: 'sub';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for summary */
export type SummaryProps = BlockCommonProps & {
    element?: 'summary';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for sup */
export type SupProps = InlineCommonProps & {
    element?: 'sup';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for table */
export type TableProps = ElementCommonProps & {
    element?: 'table';
    caption?: CaptionProps;
    colgroup?: ColGroupProps[];
    thead?: TheadProps;
    tfoot?: TfootProps;
    tbody: TbodyProps[] | TrProps | TrProps[];
    attributes?: TableHTMLAttributes<HTMLTableElement>;
};
/** Type definition of property for tbody */
export type TbodyProps = ElementCommonProps & {
    element?: 'tbody';
    rows?: TrProps[];
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
};
/** Type definition of property for td */
export type TdProps = TableCellProps & {
    element?: 'td';
};
/** Type definition of property for template */
export type TemplateProps = ElementCommonProps & {
    element?: 'template';
    children?: ReactNode;
    shadowRootMode?: 'open' | 'closed';
    attributes?: HTMLAttributes<HTMLTemplateElement>;
};
/** Type definition of property for textarea */
export type TextareaProps = ElementCommonProps & {
    element?: 'textarea';
    name?: string;
    children?: string;
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
    dirName?: string;
    form?: string;
    wrap?: TextWrapTypes;
    attributes?: TextareaHTMLAttributes<HTMLTextAreaElement>;
};
/** Type definition of property for tfoot */
export type TfootProps = ElementCommonProps & {
    element?: 'tfoot';
    rows?: TrProps[];
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
};
/** Type definition of property for th */
export type ThProps = TableCellProps & {
    element: 'th';
    abbr?: string;
    scope?: 'row' | 'col' | 'rowgroup' | 'colgroup';
};
/** Type definition of property for thead */
export type TheadProps = ElementCommonProps & {
    element?: 'thead';
    rows: TheadRowProps[];
    attributes?: HTMLAttributes<HTMLTableSectionElement>;
}
/** Type definition of property for tr only includes th */
export type TheadRowProps = ElementCommonProps & {
    element?: 'tr';
    cells: ThProps[];
    attributes?: HTMLAttributes<HTMLTableRowElement>;
};
/** Type definition of property for time */
export type TimeProps = InlineCommonProps & {
    element: 'time';
    dateTime?: string;
    attributes?: TimeHTMLAttributes<HTMLTimeElement>;
};
/** Type definition of property for tr */
export type TrProps = ElementCommonProps & {
    element?: 'tr';
    cells: (TdProps | ThProps)[];
    attributes?: HTMLAttributes<HTMLTableRowElement>;
};
/** Type definition of property for track */
export type TrackProps = ElementCommonProps & {
    element?: 'track';
    default?: boolean;
    kind?: 'subtitles' | 'captions' | 'descriptions' | 'chapters' | 'metadata';
    label?: string;
    src?: string;
    srcLang?: string;
    attributes?: TrackHTMLAttributes<HTMLTrackElement>;
};
/** Type definition of property for u */
export type UProps = InlineCommonProps & {
    element?: 'u';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for ul */
export type UlProps = ElementCommonProps & {
    element?: 'ul';
    items?: (LiProps | ScriptProps | TemplateProps)[];
    attributes?: HTMLAttributes<HTMLUListElement>;
};
/** Type definition of property for var */
export type VarProps = InlineCommonProps & {
    element?: 'var';
    attributes?: HTMLAttributes<HTMLElement>;
};
/** Type definition of property for video */
export type VideoProps = AudioVideoCommonProps & {
    element: 'video';
    width?: number;
    height?: number;
    disablePictureInPicture?: boolean;
    poster?: string;
    attributes?: VideoHTMLAttributes<HTMLVideoElement>;
};
/** Type definition of property for line break opportunity */
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
    classes?: string[];
    datasets?: CommonDatasetType;
};
/** Type definition of common property for container */
type ContainerCommonProps = ElementCommonProps & {
    children?: ReactNode;
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
    inline: false;
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
    srcSet: string;
    sizes?: number|string;
};
/** Type definition of property for table cell */
export type TableCellProps = ElementCommonProps & {
    children?: ReactNode;
    colSpan?: number;
    rowSpan?: number;
    headers?: string[];
    attributes?: TdHTMLAttributes<HTMLTableCellElement>;
};

/** Type definition of button color types */
export type ButtonColorTypes = ColorTypes | {
    outline: true;
    colorType: ColorTypes;
} | {
    background?: ColorTypes;
    border?: ColorTypes;
    text?: ColorTypes;
};
/** Type definition of sizes/srcset for image */
export type ImageSizesProps = {
    srcSet?: ImageSrcSetProps[],
    defaultSize?: number|string;
};
/** Type definition of srcset for media */
export type ImageSrcSetProps = {
    mediaQuery: string[];
    mediaSize: number|string;
    src: string;
};





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
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
/** Type definition of property for input[type=checkbox] */
export type InputCheckboxProps = InputCommonProps & {
    type: 'checkbox';
    checked?: boolean;
    readonly?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/**
 *  Type definition of property for input[type=color]
 *  @see https://developer.mozilla.org/ja/docs/Web/HTML/Element/datalist
 */
export type InputColorProps = InputCommonProps & {
    type: 'color';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=date,datetime-local,month,time,week] */
export type InputDateProps = InputCommonProps & {
    type: 'date' | 'datetime-local' | 'month' | 'time' | 'week';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=email] */
export type InputEmailProps = InputCommonProps & {
    type: 'email';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    multiple?: boolean;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
    alt?: string;
    formaction?: string;
    formenctype?: FormEnctypeTypes;
    formmethod?: FormMethodTypes;
    formnovalidate?: boolean;
    formtarget?: TargetTypes;
    height?: number;
    src?: string;
    width?: number;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
/** Type definition of property for input[type=number] */
export type InputNumberProps = InputCommonProps & {
    type: 'number';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    step?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=password] */
export type InputPasswordProps = InputCommonProps & {
    type: 'password';
    autoComplete?: AutoCompleteTypes;
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=radio] */
export type InputRadioProps = InputCommonProps & {
    type: 'radio';
    checked?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=range] */
export type InputRangeProps = InputCommonProps & {
    type: 'range';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    max?: number;
    min?: number;
    step?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=search] */
export type InputSearchProps = InputCommonProps & {
    type: 'search';
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirName?: string;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=submit] */
export type InputSubmitProps = InputCommonProps & {
    type: 'submit';
    formaction?: string;
    formenctype?: FormEnctypeTypes;
    formmethod?: FormMethodTypes;
    formnovalidate?: boolean;
    formtarget?: TargetTypes;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
/** Type definition of property for input[type=tel] */
export type InputTelProps = InputCommonProps & {
    type: 'tel';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=text] */
export type InputTextProps = InputCommonProps & {
    type: 'text';
    autoComplete?: AutoCompleteTypes;
    dir?: 'auto'|'ltr'|'rtl';
    dirName?: string;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    size?: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
/** Type definition of property for input[type=url] */
export type InputUrlProps = InputCommonProps & {
    type: 'url';
    autoComplete?: AutoCompleteTypes;
    list?: string;
    datalist?: string[];
    maxlength?: number;
    minlength?: number;
    pattern?: string;
    placeholder?: string;
    readonly?: boolean;
    required?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
