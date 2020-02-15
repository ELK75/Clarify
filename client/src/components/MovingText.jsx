import React from 'react';
import TextLoop from "react-text-loop";

import './MovingText.scss';

export default function MovingText() {
    return (
        <h4 className="font-weight-light pt-2">
            A perfect app for any {" "}
            <TextLoop>
                <h4 className="color-main font-weight-light"> lecture.</h4>
                <h4 className="color-main font-weight-light"> meeting.</h4>
                <h4 className="color-main font-weight-light"> town hall.</h4>
                <h4 className="color-main font-weight-light"> Q&amp;A.</h4>
            </TextLoop>
        </h4>
    )
}