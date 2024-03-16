import {
    Fragment,
} from "react";
import {
    AbbrProps, AddressProps, AProps, ArticleProps, AsideProps, AudioProps,
    BdiProps, BdoProps, BlockQuoteProps, BProps, BrProps, ButtonProps,
    CiteProps,
    DataProps, DelProps, DfnProps, DivProps, DlProps, ElementBaseProps,
    EmbedProps, EmProps,
    FooterProps,
    HeaderProps, HrProps,
    ImgProps, InsProps, IProps,
    KbdProps,
    LegendProps,
    MainProps, MarkProps, MenuProps, MeterProps,
    NavProps, NoScriptProps,
    ObjectProps, OlProps,
    PictureProps, PProps, PreProps,
    QProps,
    SampProps, SearchProps, SectionProps, SlotProps, SmallProps, SpanProps, SProps, StrongProps,
    SubProps, SummaryProps, SupProps,
    TemplateProps, TimeProps,
    UlProps, UProps,
    VarProps, VideoProps,
    WbrProps,
} from "./html_element";
import {
    AButtonProps,
    DivButtonProps,
} from "../layout";
import {
    Break,
    Button,
    Code,
    Container,
    DataList,
    Details,
    Dialog,
    Figure,
    Heading,
    HeadingGroup,
    Input,
    Label,
    List,
    Paragraph,
    Ruby,
    Select,
    Table,
    Textarea,
} from "../../element";

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
    | PProps
    | PreProps
    | SearchProps
    | SectionProps
    | SummaryProps
    | TemplateProps;
/** Type definition of property for inline containers */
export type TypeInlineContainer = SpanProps
    | AProps
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
export type TypeList<T extends TypeContainer | string = string> = DlProps | MenuProps<T> | OlProps<T> | UlProps<T>;
/** Type definition of property for media */
export type TypeMedia = AudioProps
    | EmbedProps
    | ImgProps
    | ObjectProps
    | PictureProps
    | VideoProps;

/**
 * Assume element from property "element" and return React Component
 * [note] only supported some elements because of this function uses lots of memory.
 * @param obj Object to assume element
 */
export const getElement = <T extends ElementBaseProps | unknown = unknown>(obj: T) => {
    if (obj !== null && (typeof obj === 'object')) {
        const element = Object.hasOwn(obj, 'element') ? (obj as any).element : undefined;
        if (element !== undefined) {
            switch (element.toLowerCase()) {
                case 'a':
                case 'abbr':
                case 'address':
                case 'article':
                case 'aside':
                case 'b':
                case 'bdi':
                case 'bdo':
                case 'blockquote':
                case 'cite':
                case 'data':
                case 'del':
                case 'dfn':
                case 'div':
                case 'em':
                case 'footer':
                case 'header':
                case 'i':
                case 'ins':
                case 'kbd':
                case 'legend':
                case 'main':
                case 'mark':
                case 'meter':
                case 'nav':
                case 'noscript':
                case 'pre':
                case 'q':
                case 's':
                case 'samp':
                case 'search':
                case 'selection':
                case 'slot':
                case 'small':
                case 'span':
                case 'strong':
                case 'sub':
                case 'sup':
                case 'template':
                case 'time':
                case 'track':
                case 'u':
                case 'var':
                    return Container;
                // case 'area':
                //     return Area;
                // case 'audio':
                // case 'embed':
                // case 'img':
                // case 'object':
                // case 'picture':
                // case 'video':
                //     return Media;
                case 'br':
                case 'hr':
                case 'wbr':
                    return Break;
                case 'button':
                    return Button;
                // case 'canvas':
                //     return Canvas;
                // case 'caption':
                //     return Caption;
                case 'code':
                    return Code;
                // case 'col':
                //     return Col;
                // case 'colgroup':
                //     return ColGroup;
                case 'datalist':
                    return DataList;
                // case 'dd':
                //     return DItem;
                case 'details':
                    return Details;
                case 'dialog':
                    return Dialog;
                case 'dl':
                case 'menu':
                case 'ol':
                case 'ul':
                    return List;
                // case 'dt':
                //     return DItem;
                // case 'fieldset':
                //     return Fieldset;
                // case 'figcaption':
                //     return FigCaption;
                case 'figure':
                    return Figure;
                // case 'form':
                //     return Form;
                case 'h1':
                case 'h2':
                case 'h3':
                case 'h4':
                case 'h5':
                case 'h6':
                case 'heading':
                    return Heading;
                case 'hgroup':
                case 'heading-group':
                    return HeadingGroup;
                // case 'iframe':
                //     return Iframe;
                case 'input':
                    return Input;
                case 'label':
                    return Label;
                // case 'li':
                //     return ListItem;
                // case 'link':
                //     return Link;
                // case 'map':
                //     return ImageMap;
                // case 'meta':
                //     return Meta;
                // case 'optgroup':
                //     return OptGroup;
                // case 'option':
                //     return Option;
                // case 'output':
                //     return Output;
                case 'p':
                case 'paragraph':
                    return Paragraph;
                // case 'progress':
                //     return Progress;
                // case 'rp':
                //     return Rp;
                // case 'rt':
                //     return Rt;
                case 'ruby':
                    return Ruby;
                // case 'script':
                //     return Script;
                case 'select':
                    return Select;
                // case 'source':
                //     return Source;
                // case 'style':
                //     return Style;
                // case 'svg':
                //     return Svg;
                case 'table':
                    return Table;
                // case 'tbody':
                //     return Tbody;
                // case 'td':
                //     return TableCell;
                case 'textarea':
                    return Textarea;
                // case 'tfoot':
                // case 'thead':
                //     return THeadFoot;
                // case 'th':
                //     return TableCell;
                // case 'tr':
                //     return TableRow;
            }
        }
    }
    return Fragment;
};

/**
 * Identify element is inline or not
 * @param element
 */
export const isInline = (element: string) => {
    switch (element.toLowerCase()) {
        case 'span':
        case 'a':
        case 'abbr':
        case 'b':
        case 'bdi':
        case 'bdo':
        case 'cite':
        case 'data':
        case 'del':
        case 'dfn':
        case 'em':
        case 'i':
        case 'ins':
        case 'kbd':
        case 'mark':
        case 'meter':
        case 'q':
        case 's':
        case 'samp':
        case 'slot':
        case 'small':
        case 'strong':
        case 'sub':
        case 'sup':
        case 'time':
        case 'u':
        case 'var':
            return true;
    }
    return false;
};
