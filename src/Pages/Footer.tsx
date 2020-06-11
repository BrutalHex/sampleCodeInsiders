import React, { FunctionComponent } from 'react';

const Footer : FunctionComponent<any> = (props)  => 
(
            <div className={`section section-footer row`}>
                <div className="col-10 footer-wrapper center">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-3 col-lg-3 col-xl-3">
                            <div className="row footer-text text-justify-left">
                                    Insider
                             </div>
                            <div className="row footer-social d-flex justify-content-left">
                                <a href="#"> <img src={`${process.env.PUBLIC_URL}/social/facebook.svg`} /></a>
                                <a href="#" ><img src={`${process.env.PUBLIC_URL}/social/twitter.svg`} /></a>
                                <a href="#" ><img src={`${process.env.PUBLIC_URL}/social/reddit.svg`} /></a>
                                <a href="#" ><img src={`${process.env.PUBLIC_URL}/social/github.svg`} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 footer-copy-right text-center">
                    ©2020 Sample for SampleInsider
            </div>
            </div>
)


export default Footer;