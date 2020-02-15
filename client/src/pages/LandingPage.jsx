import React from 'react'

import './LandingPage.css'
import MovingText from '../components/MovingText';
import Icon from '../assets/faq.svg';

import Header from '../components/Header';

export default function LandingPage() {
    return (
        <div>
            {/* <Header /> */}

            <div>
                <div className="row h-100">
                    <div className="col-md-6 text-header vh-100">
                        <h1 className="text-white pt-5 pl-5 font-weight-light header-text">Welcome to Clarafi.</h1>
                        <h3 className="text-white pl-5 font-weight-light sub-header-text">Never leave a question unanswered.</h3>
                        <h4 className="text-white pl-5 font-weight-light pt-5 text-wrap w-75">Clarafi allows you to pose questions anonymously in real-time which can be answered by someone hosting a session.</h4>
                        <div className="mx-auto">
                            <div className="card w-70 ml-5 mt-5">
                                <div className="card-header">
                                    <MovingText />
                                </div>
                                <div className="card-body">
                                    <h4 className="font-weight-light">With Clarafi, getting important information in a timely manner has never been easier. Just join a session and ask away!</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <div className="image-conatiner">
                            <div className="image-header">
                                <div className="mx-auto w-70">
                                    <img src={Icon} height={250} alt="Main Icon" />
                                    <h4 className="font-weight-light pt-4 text-center">Sign into Google to join a session or start hosting your own.</h4>
                                    <button type="button" className="btn btn-outline-success google-button mt-4 mb-5">Login with Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}