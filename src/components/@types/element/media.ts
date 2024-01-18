import {
    EmbedHTMLAttributes,
    HTMLAttributes,
    ObjectHTMLAttributes,
    ReactNode,
    SourceHTMLAttributes,
} from "react";
import {
    CommonDatasetType,
    CrossOriginTypes,
    DecodingTypes,
    FetchPolicyTypes,
    LoadingTypes,
    ReferrerPolicyTypes
} from "../index";

/** Type definition of property for media */
export type MediaProps = EmbedProps
    | ImageProps
    | ObjectProps
    | PictureProps;
/** Type definition of property for embed */
export type EmbedProps = {
    element: 'embed';
    id?: string;
    src: string;
    type?: string;
    title?: string;
    width?: number;
    height?: number;
    classes?: string[];
    attributes?: EmbedHTMLAttributes<HTMLEmbedElement>;
    datasets?: CommonDatasetType;
}
/** Type definition of property for image */
export type ImageProps = {
    element: 'img';
    id?: string;
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    imageSizes?: ImageSizesProps;
    crossOrigin?: CrossOriginTypes;
    decoding?: DecodingTypes;
    elementTiming?: string;
    fetchPolicy?: FetchPolicyTypes;
    isMap?: boolean;
    loading?: LoadingTypes;
    referrerPolicy?: ReferrerPolicyTypes;
    useMap?: string;
    classes?: string[];
    attributes?: HTMLAttributes<HTMLImageElement>;
    datasets?: CommonDatasetType;
};
/** Type definition of property for object */
export type ObjectProps = {
    element: 'object';
    name?: string;
    id?: string;
    data: DataTypeProps[];
    form?: string;
    width?: number;
    height?: number;
    useMap?: string;
    children?: ReactNode;
    classes?: string[];
    attributes?: ObjectHTMLAttributes<HTMLObjectElement>;
    datasets?: CommonDatasetType;
};
/** Type definition of property for picture */
export type PictureProps = {
    element: 'picture';
    id?: string;
    img: ImageProps;
    source?: SourceSrcsetProps[];
    classes?: string[];
    attributes?: HTMLAttributes<HTMLPictureElement>;
    datasets?: CommonDatasetType;
};
/** Type definition of property for picture */
export type SourceProps = SourceSrcProps | SourceSrcsetProps;
export type SourceCommonProps = {
    id?: string;
    type?: string;
    media?: string[];
    width?: number;
    height?: number;
    classes?: string[];
    attributes?: SourceHTMLAttributes<HTMLSourceElement>;
    datasets?: CommonDatasetType;
};
export type SourceSrcProps = SourceCommonProps & {
    src: string;
};
export type SourceSrcsetProps = SourceCommonProps & {
    srcSet: string;
    sizes?: number|string;
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
/** Type definition of data/type for object */
export type DataTypeProps = {
    data: string;
    type: string;
};
