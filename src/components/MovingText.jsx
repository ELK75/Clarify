import React from 'react';
import TextLoop from "react-text-loop";

import './MovingText.scss';

export default function MovingText() {
    return (
        <h2 className="font-weight-light pt-2">
            A perfect app for any {" "}
            <TextLoop>
                <h2 className="color-main font-weight-light"> lecture.</h2>
                <h2 className="color-main font-weight-light"> meeting.</h2>
                <h2 className="color-main font-weight-light"> town hall.</h2>
                <h2 className="color-main font-weight-light"> Q&amp;A.</h2>
            </TextLoop>
        </h2>
    )
}