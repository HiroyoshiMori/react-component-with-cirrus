import {
    AbbrProps, AddressProps, AProps, ArticleProps, AsideProps, AudioProps,
    BdiProps, BdoProps, BlockQuoteProps, BProps, BrProps, ButtonProps,
    CiteProps, DataProps, DelProps, DfnProps, DivProps,
    EmbedProps, EmProps,
    FooterProps,
    HeaderProps, HrProps,
    ImgProps,
    InsProps, IProps,
    KbdProps,
    MainProps, MarkProps,
    NavProps,
    ObjectProps,
    PictureProps, PreProps,
    QProps,
    SampProps, SectionProps, SmallProps, SpanProps, SProps, StrongProps, SubProps, SummaryProps, SupProps,
    TimeProps,
    UProps,
    VarProps, VideoProps,
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
    | MainProps
    | NavProps
    | PreProps
    | SectionProps
    | SummaryProps;
/** Type definition of property for inline containers */
export type TypeInlineContainer = SpanProps
    | AProps
    | AbbrProps
    | BProps
    | BdoProps
    | BdiProps
    | CiteProps
    | DataProps
    | DelProps
    | DfnProps
    | EmProps
    | IProps
    | InsProps
    | KbdProps
    | MarkProps
    | QProps
    | SProps
    | SampProps
    | SmallProps
    | StrongProps
    | SubProps
    | SupProps
    | TimeProps
    | UProps
    | VarProps;
/** Type definition of property for media */
export type TypeMedia = AudioProps
    | EmbedProps
    | ImgProps
    | ObjectProps
    | PictureProps
    | VideoProps;
