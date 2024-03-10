import {Dropdown} from "../../../../frameworks/bulma";
import React from "react";

export default {
    component: Dropdown,
    tags: ['autodocs'],
};
/** Default dropdown */
export const Default = {
    render: (args: any) => <Dropdown
        component={'dropdown'}
        trigger={{
            title: {
                element: 'span',
                inline: true,
                children: 'Dropdown Title',
            },
            button: {
                element: 'button',
            },
        }}
        menus={{
            content: {
                items: {
                    element: 'a',
                    inline: true,
                    children: 'Dropdown Menu',
                },
            },
        }}
    />,
};
