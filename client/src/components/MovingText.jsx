import React from 'react';
import TextLoop from "react-text-loop";

import './MovingText.scss';

export default function MovingText() {
    return (
        <h4 className="font-weight-light pt-2">
            An app for when you're feeling {" "}
            <TextLoop>
                <h4 className="color-main font-weight-light"> sad.</h4>
                <h4 className="color-main font-weight-light"> lonely.</h4>
                <h4 className="color-main font-weight-light"> depressed.</h4>
                <h4 className="color-main font-weight-light"> anxious.</h4>
            </TextLoop>
        </h4>
    )
}