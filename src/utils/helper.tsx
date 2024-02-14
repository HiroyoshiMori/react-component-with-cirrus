import React, {Fragment} from "react";
import ReactDOMServer from 'react-dom/server'
import {sprintf} from "sprintf-js";
import {navigate} from "@storybook/addon-links";

/**
 * Helper function to add Links to other stories in auto docs
 *
 * @param label Label for link
 * @param title Title of linked document
 * @param story Story of linked document / default: docs
 */
export function linkInStoryBook (label: string, title: string, story?: string): string {
    const baseUrl = title
        .replace(/\//g, '-')
        .replace(/ /g, '-')
        .toLowerCase()
    const Url = sprintf(
        '/?path=/docs/%s--%s', baseUrl, story ? story.toLowerCase() : 'docs'
    );

    // TODO: onClick may not work properly due to renderToString
    return ReactDOMServer.renderToString(
        <Fragment>
            <a href={Url} onClick={
                () => navigate({
                    title: title,
                    story: 'docs',
                })
            }>{label}</a>
        </Fragment>
    );
    // return sprintf(
    //     '<a href="%s">%s</a>', Url, label
    // );
}