import React from 'react';
import parse from 'html-react-parser';

import '../css/blgdetail.css'
import { processedDate } from '../utils/HelperFunctions';

import SocialComponent from '../components/SocialComponent'
import { STRINGS, SOCIAL_URL, SOCIAL_ICONS, URLS, APIS } from '../utils/constants'
import history from '../routes/history';




export default class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }} className="App">
                <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6" style={{ margin: 'auto', marginTop: 30 }}>
                    <div>
                        <h4 onClick={() => {
                            history.push('/')

                        }} className="cursorPointer" style={{ margin: 0, padding: 0, textAlign: 'justify' }}><strong>abhikumar.xyz</strong></h4>
                        <div style={{ textAlign: 'justify' }} className="">
                            <p style={{ margin: 0, padding: 0, fontSize: 14 }}>Tech | Motivation | Part Time Chef</p>
                        </div>
                    </div>
                    <hr style={{ marginTop: 20 }} />
                    <div style={{ marginTop: 20, margin: 0, padding: 0, }}>
                        <h2 style={{ margin: 0, padding: 0, }}>{this.props.location.state.blogDetailValues.title}</h2>
                        <div>
                            <p style={{ margin: 0, padding: 0, textAlign: 'justify' }} className="text-muted">Published {processedDate(this.props.location.state.blogDetailValues.created_at)} • {this.props.location.state.blogDetailValues.read_interval_in_minutes} min read</p>
                        </div>
                        <p style={{ marginTop: 20, textAlign: 'justify' }}>{parse(this.props.location.state.blogDetailValues.content_of_blog)}</p>

                    </div>
                    <hr />


                    <div className="py-3">
                        <div className="container text-center">
                            {/* <h2 className="heading">{STRINGS.HEADLINE}</h2> */}
                            <div className="intro"><strong>{STRINGS.SUBSCRIBE_MESSAGE}</strong></div>
                            <form
                                action="https://buttondown.email/api/emails/embed-subscribe/abhikumar22"
                                method="post"
                                target="popupwindow"
                                onsubmit="window.open('https://buttondown.email/abhikumar22', 'popupwindow')"
                            >
                                <div
                                    className="py-2"
                                >
                                    <div className="px-3" >
                                        <input className="py-2 col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10" placeholder="Your email (you@example.com)" type="email" name="email" id="bd-email" />
                                    </div>
                                    <div className="px-3 mt-4" >
                                        <button className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 btn btn-primary" type="submit" value="Subscribe" >Join</button>
                                    </div>
                                    {/* <input type="hidden" value="1" name="embed" /> */}
                                    {/* <p>
                                        <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
                                    </p> */}
                                </div>
                            </form>
                        </div>
                    </div>

                    <hr />
                    <div
                        // className="text-center col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 row"
                        style={{ width: '100%', margin: 0, padding: 0 }}
                        className="row mx-auto mb-3"
                    >
                        {/* <ul className="row bg-secondary"> */}
                        <div
                            className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 text-center "
                            style={{ justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}
                        >
                            <img className="profile-image rounded-circle mx-auto"
                                src={require("../images/pp.jpeg")}
                                alt={"Pics"}
                                style={{ width: 50, height: 50, borderRadius: 30, margin: 0, padding: 0 }}
                            />
                        </div>
                        <div
                            className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"
                            style={{ fontSize: 12, textAlign: 'justify', margin: 0, padding: 0 }}
                        >
                            <p
                                style={{ width: '98%', margin: 0, padding: 0 }}
                            >
                                {STRINGS.PERSONAL_NOTE}
                            </p>
                        </div>

                        <div className="social-list list-inline mt-3 mx-auto text-center pb-3">
                            <div className=" w-100">
                                <SocialComponent
                                    link={SOCIAL_URL.LINKEDIN}
                                    icons={SOCIAL_ICONS.LINKEDIN}
                                />
                                <SocialComponent
                                    link={SOCIAL_URL.GITHUB}
                                    icons={SOCIAL_ICONS.GITHUB}
                                />
                                <SocialComponent
                                    link={SOCIAL_URL.STACKOVERFLOW}
                                    icons={SOCIAL_ICONS.STACKOVERFLOW}
                                />
                                <SocialComponent
                                    link={SOCIAL_URL.FACEBOOK}
                                    icons={SOCIAL_ICONS.FACEBOOK}
                                />
                                <SocialComponent
                                    icons={SOCIAL_ICONS.INSTAGRAM}
                                    link={SOCIAL_URL.INSTAGRAM}
                                />
                                <SocialComponent
                                    icons={SOCIAL_ICONS.TWITTER}
                                    link={SOCIAL_URL.TWITTER}
                                />
                            </div>
                            <hr />
                            <footer>
                                <small>&copy; <strong>Copyright 2020 Abhishek Kumar</strong></small>
                            </footer>
                        </div>
                   
                    </div>
                </div>
            </div>
        );
    }
}

