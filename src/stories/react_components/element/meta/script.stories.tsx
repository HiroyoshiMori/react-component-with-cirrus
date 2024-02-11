import {Fragment} from "react";
import {
    Script,
} from "../../../../components";

export default {
    component: Script,
    tags: ['autodocs'],
    parameters: {
        componentSubtitle: 'The Script element',
    },
    decorators: [
        (Story: any) => (
            <Fragment>
                There is script &#x1f449;
                <Story />
                &#x1f448; element.
            </Fragment>
        ),
    ],
};
/** Default script */
export const Default = {
    render: (args: any) => <Script
        element={'script'}
        type={'text/javascript'}
        {...args}
    >
        console.log('This is message shown in console window.');
    </Script>,
};
/** Script with Async */
export const ScriptWithAsync = {
    ...Default,
    args: {
        async: true,
    },
};
/** Script with src/integrity */
export const ScriptWithSrcAndIntegrity = {
    ...Default,
    args: {
        src: '/assets/test.js',
        // openssl dgst -sha384 -binary /assets/test.js | openssl base64 -A
        integrity: 'sha384-MglQDwQHgBUybYG7BXgdYYCX6CRBfGUCCi0M/bu35dBDINHb77EIr7ShNMbSpcdf',
    },
};
/** Script with other attributes */
export const ScriptWithOtherAttributes = {
    ...Default,
    args: {
        crossOrigin: '*',
        defer: true,
        fetchpriority: 'low',
        noModule: true,
        referrerPolicy: 'no-referrer',
    },
};
/** Script with style classes */
export const ScriptWithStyleClasses = {
    ...Default,
    args: {
        classes: ['test-class1', 'test-class2'],
    },
};
/** Script with additional attributes */
export const ScriptWithAdditionalAttributes = {
    ...Default,
    args: {
        attributes: {
            'aria-label': 'Script Label',
            'aria-placeholder': 'Script Placeholder',
        },
    },
};
/** Script with datasets */
export const ScriptWithDatasets = {
    ...Default,
    args: {
        datasets: new Map([
            ['id', 'data-script-id'],
            ['name', 'Data Script Name'],
        ]),
    },
};
