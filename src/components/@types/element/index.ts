import {
    AbbrProps,
    AddressProps,
    ArticleProps,
    AsideProps,
    AudioProps,
    BdiProps,
    BdoProps,
    BlockQuoteProps,
    BProps,
    BrProps,
    ButtonProps,
    CiteProps,
    DataProps,
    DelProps,
    DfnProps,
    DivProps,
    DlProps,
    EmbedProps,
    EmProps,
    FooterProps,
    HeaderProps,
    HrProps,
    ImgProps,
    InsProps,
    IProps,
    KbdProps,
    LegendProps,
    MainProps,
    MarkProps,
    MenuProps,
    MeterProps,
    NavProps,
    NoScriptProps,
    ObjectProps,
    OlProps,
    PictureProps,
    PreProps,
    QProps,
    SampProps,
    SearchProps,
    SectionProps,
    SlotProps,
    SmallProps,
    SpanProps,
    SProps,
    StrongProps,
    SubProps,
    SummaryProps,
    SupProps, TemplateProps,
    TimeProps,
    UlProps,
    UProps,
    VarProps,
    VideoProps,
    WbrProps
} from "./html_element";
import {
    AButtonProps,
    DivButtonProps,
} from "../layout";

export * from './html_element';
export * from './icons';

/** Type definition of property for breaks */
export type TypeBreak = HrProps | BrProps | WbrProps;
/** Type definition of property for button */
export type TypeButton = ButtonProps | AButtonProps | DivButtonProps;
/** Type definition of property for container */
export type TypeContainer = TypeInlineContainer | TypeBlockContainer;
/** Type definition of property for block containers */
export type TypeBlockContainer = DivProps
    | AddressProps
    | ArticleProps
    | AsideProps
    | BlockQuoteProps
    | FooterProps
    | HeaderProps
    | LegendProps
    | MainProps
    | NavProps
    | NoScriptProps
    | PreProps
    | SearchProps
    | SectionProps
    | SummaryProps
    | TemplateProps;
/** Type definition of property for inline containers */
export type TypeInlineContainer = SpanProps
    | AbbrProps
    | BProps
    | BdiProps
    | BdoProps
    | CiteProps
    | DataProps
    | DelProps
    | DfnProps
    | EmProps
    | IProps
    | InsProps
    | KbdProps
    | MarkProps
    | MeterProps
    | QProps
    | SProps
    | SampProps
    | SlotProps
    | SmallProps
    | StrongProps
    | SubProps
    | SupProps
    | TimeProps
    | UProps
    | VarProps;
/** Type definition of property for list */
export type TypeList = DlProps | MenuProps | OlProps | UlProps;
/** Type definition of property for media */
export type TypeMedia = AudioProps
    | EmbedProps
    | ImgProps
    | ObjectProps
    | PictureProps
    | VideoProps;
