import {
    ALIGNMENTS,
    ALTERNATIVE_SEPARATORS,
    Breadcrumb,
} from "../../../../frameworks/bulma";
import {icon} from "@fortawesome/fontawesome-svg-core/import.macro";
import {deIndent, linkInStoryBook} from "../../../../utils";

/**
 * The Bulma <b>breadcrumb</b> is a simple navigation component that only requires a <code>breadcrumb</code> container
 * and a <code>ul</code> list. The dividers are automatically created in the content of the <code>::before</code>
 * pseudo-element of <code>li</code> tags.
 *
 * You can inform the current page using the <code>is-active</code> modifier in a <code>li</code> tag. It will disable
 * the navigation of inner links.
 *
 * See: https://bulma.io/documentation/components/breadcrumb/
 */
export default {
    title: 'React Component/CSS Framework/Bulma/Component/Breadcrumb',
    component: Breadcrumb,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'A simple breadcrumb component to improve your navigation experience',
    },
    argTypes: {
        component: {
            control: 'none',
            description: 'Switcher for <code>Breadcrumb</code> component to render this component',
            table: {
                type: {
                    summary: '"breadcrumb"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        element: {
            control: 'none',
            type: {
                required: true,
            },
            description: deIndent(`
                            Element type which is extended for this component
                            👉 See:&nbsp;
                        `)
                + linkInStoryBook(
                    'NavProps', 'React Component/Element/Container/Block/Nav'
                ),
            table: {
                type: {
                    summary: '"nav"',
                },
            },
        },
        items: {
            control: 'object',
            type: {
                required: true,
            },
            description: 'Items of breadcrumb',
            table: {
                type: {
                    summary: 'BreadcrumbItemProps | BreadcrumbItemProps[]',
                    detail: deIndent(`
                                {
                                    component?: 'breadcrumb-item',
                                    element?: 'a',
                                    children?: ReactNode,
                                    icon?: IconsProps,
                                    classes?: string[],
                                    attributes?: AnchorHTMLAttributes<HTMLAnchorElement>,
                                    datasets?: Map<string, string>,
                                } as BreadcrumbItemProps<br />
                                👉 See: IconsProps in "React Component/Element/Icons"
                            `),
                },
            },
        },
        commonClassesInItems: {
            control: 'object',
            description: 'Common style classes for li element in child items',
            table: {
                type: {
                    summary: 'string[]',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        children: {
            control: 'object',
            description: 'Contents shown after breadcrumb if necessary',
            table: {
                type: {
                    summary: 'ReactNode',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        alignment: {
            control: 'select',
            options: ['Default'].concat(ALIGNMENTS),
            mapping: {
                Default: undefined,
            },
            description: 'Alignment where breadcrumb will be placed',
            table: {
                type: {
                    summary: '"' + ALIGNMENTS.join('"|"') + '"',
                },
                defaultValue: {
                    summary: 'undefined',
                },
            },
        },
        separators: {
            control: 'select',
            options: ['Default'].concat(ALTERNATIVE_SEPARATORS),
            mapping: {
                Default: undefined,
            },
            description: 'Separators which is placed between items',
            table: {
                type: {
                    summary: '"' + ALTERNATIVE_SEPARATORS.join('"|"') + '"',
                },
            },
        },
    },
};
/** Default breadcrumb */
export const Default = {
    render: (args: any) => <Breadcrumb
        items={[
            {element: 'a', children: 'React Component'},
            {element: 'a', children: 'Bulma'},
            {element: 'a', children: 'Components'},
            {element: 'a', children: 'Breadcrumb'},
        ]}
        {...args}
    />,
};
/** Breadcrumb with common style classes */
export const BreadcrumbWithCommonStyleClasses = {
    ...Default,
    args: {
        commonClassesInItems: ['test-class1'],
    },
};
/** Breadcrumb with icon */
export const BreadcrumbWithIcon = {
    ...Default,
    args: {
        items: [
            {element: 'a', children: 'React Component', icon: {icon: icon({name: 'check'})}},
            {element: 'a', children: 'Bulma', icon: {icon: icon({name: 'envelope'})}},
            {element: 'a', children: 'Components', icon: {icon: icon({name: 'arrows'})}},
            {element: 'a', children: 'Breadcrumb', icon: {icon: icon({name: 'code'})}},
        ],
    },
};
/** Breadcrumb at aligned */
export const BreadcrumbAligned = {
    ...Default,
    args: {
        alignment: 'centered',
    },
};
/** Breadcrumb with other separators */
export const BreadcrumbWithOtherSeparators = {
    ...Default,
    args: {
        separators: 'bullet',
    },
};
