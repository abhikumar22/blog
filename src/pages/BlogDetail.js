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
                <div className="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6" style={{ margin: 'auto', marginTop: 30 }}>
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
                    <div
                        // className="text-center"
                    >
                        <ul className="social-list list-inline py-3 mx-auto row">
                            {/* <li className="list-inline-item"> */}
                            <div style={{ width: 50, height: 50, borderRadius: 30 }}>
                                <img className="profile-image mb-3 rounded-circle mx-auto"
                                    src={require("../images/pp.jpeg")}
                                    alt={"Pics"}
                                    style={{ width: 50, height: 50, borderRadius: 30 }}
                                />
                            </div>
                            <div className="ml-3">
                                <footer>
                                    <small>&copy; Copyright 2020 Abhishek Kumar</small>
                                </footer>
                                {/* </li> */}
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

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

