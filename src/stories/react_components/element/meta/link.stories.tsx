import {Fragment} from "react";
import {
    Link,
} from "../../../../components";

export default {
    component: Link,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The External Resource Link element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is link &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
};
/** Default Link */
export const Default = {
    render: (args: any) => <Link
        element={'link'}
        itemProp={true}
        rel={'StyleSheet'}
        type={'text/css'}
        href={'/assets/test.css'}
        {...args}
    />,
};
/** Link with as and hreflang */
export const LinkWithAsAndHreflang = {
    ...Default,
    args: {
        as: 'style',
        hrefLang: 'en_US',
    },
};
/** Link with size/title */
export const LinkWithSizeAndTitle = {
    ...Default,
    args: {
        rel: 'apple-touch-icon',
        sizes: '114x114',
        href: '/assets/context.png',
        type: 'image/png',
        title: 'Touch Icon',
    },
};
/** Link with rel=preload and as=image for imageSize/imageSrcset */
export const LinkWithImageSizeAndImageSrcset = {
    ...Default,
    args: {
        rel: 'preload',
        as: 'image',
        type: undefined,  // no support when preload
        href: '/assets/file_example_PNG_1MB.png',
        imageSizes: '50vw',
        imageSrcset: [
            ['/assets/file_example_PNG_500kB.png', '320w'],
            ['/assets/file_example_PNG_2100kB.png', '1280w'],
        ],
    },
};
/** Link with media query */
export const LinkWithMediaQuery = {
    ...Default,
    args: {
        mediaQuery: ['min-width: 640px', 'max-width: 1280px'],
    },
};
/** Link with other attributes */
export const LinkWithOtherAttributes = {
    ...Default,
    args: {
        crossOrigin: 'anonymous',
        fetchpriority: 'auto',
        referrerPolicy: 'no-referrer',
        // openssl dgst -sha384 -binary /assets/test.css | openssl base64 -A
        integrity: 'sha384-HcA1xCFQhTIZK6joBGhcqaqVPjtfLrXrZUeFKLm+TEBZMoUlEp+ynByKupjVl3m7',
    },
};
/** Link with style classes */
export const LinkWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Link with additional attributes */
export const LinkWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Link Label',
            'aria-placeholder': 'Link Placeholder',
        },
    },
};
/** Link with datasets */
export const LinkWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-link-id'],
            ['name', 'Data Link Name'],
        ]),
    },
};
