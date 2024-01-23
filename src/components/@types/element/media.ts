import {
    AudioHTMLAttributes,
    EmbedHTMLAttributes,
    HTMLAttributes,
    ObjectHTMLAttributes,
    ReactNode,
    SourceHTMLAttributes, VideoHTMLAttributes,
} from "react";
import {
    CommonDatasetType, ControlsListTypes,
    CrossOriginTypes,
    DecodingTypes,
    FetchPolicyTypes,
    LoadingTypes, PreloadTypes,
    ReferrerPolicyTypes
} from "../index";

/** Type definition of property for media */
export type MediaProps = AudioProps
    | EmbedProps
    | ImageProps
    | ObjectProps
    | PictureProps
    | VideoProps;
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
    elementtiming?: string;
    fetchpolicy?: FetchPolicyTypes;
    ismap?: '';
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
    data: string;
    type: string;
    children?: ReactNode;
    form?: string;
    width?: number;
    height?: number;
    useMap?: string;
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
/** Type definition of property for source */
export type SourceProps = SourceSrcProps | SourceSrcsetProps;
/** Type definition of common property for source */
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
/** Type definition for property for source which is used for audio/video */
export type SourceSrcProps = SourceCommonProps & {
    src: string;
};
/** Type definition for property for source which is used for picture */
export type SourceSrcsetProps = SourceCommonProps & {
    srcSet: string;
    sizes?: number|string;
};
/** Type definition of property for common audio/video */
export type AudioVideoCommonProps = {
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
/** Type definition of property for audio */
export type AudioProps = AudioVideoCommonProps & {
    element: 'audio',
    classes?: string[];
    attributes?: AudioHTMLAttributes<HTMLAudioElement>;
    datasets?: CommonDatasetType;
};
/** Type definition of property for video */
export type VideoProps = AudioVideoCommonProps & {
    element: 'video';
    width?: number;
    height?: number;
    disablePictureInPicture?: boolean;
    poster?: string;
    classes?: string[];
    attributes?: VideoHTMLAttributes<HTMLVideoElement>;
    datasets?: CommonDatasetType;
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
