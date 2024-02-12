import React, {
    Fragment,
} from "react";
import {
    IconsProps,
} from "../@types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Icons = (props: IconsProps) => {
    return (
        <Fragment>
            <FontAwesomeIcon {...props} />
        </Fragment>
    );
};
