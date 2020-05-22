import React from 'react';
import parse from 'html-react-parser';
import '../css/blgdetail.css'
import { processedDate } from '../utils/HelperFunctions';
import { STRINGS } from '../utils/constants'
import FooterComponent from '../components/FooterComponent';
import HeaderComponent from '../components/HeaderComponent';




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
                    <HeaderComponent />
                    <hr style={{ marginTop: 20 }} />
                    <div style={{ marginTop: 20, margin: 0, padding: 0, }}>
                        <h2 style={{ margin: 0, padding: 0, }}>{this.props.location.state.blogDetailValues.title}</h2>
                        <div>
                            <p style={{ margin: 0, padding: 0, textAlign: 'justify' }} className="text-muted">Published {processedDate(this.props.location.state.blogDetailValues.created_at)} • {this.props.location.state.blogDetailValues.read_interval_in_minutes} min read</p>
                        </div>
                        <p style={{ marginTop: 20 }}>{parse(this.props.location.state.blogDetailValues.content_of_blog)}</p>

                    </div>
                    <hr />


                    <div className="py-3 px-3 text-center">
                            <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-xl-10 mx-auto ">
                                <strong><h5>{STRINGS.SUBSCRIBE_MESSAGE}</h5></strong>
                            </div>
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
                                        <input
                                            className="py-2 col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"
                                            placeholder="Your email (you@example.com)"
                                            type="email"
                                            name="email"
                                            id="bd-email" />
                                    </div>
                                    <div className="px-3 mt-4" >
                                        <button
                                            className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 btn btn-primary"
                                            type="submit"
                                            value="Subscribe"
                                        >Join</button>
                                    </div>
                                    {/* <input type="hidden" value="1" name="embed" /> */}
                                    {/* <p>
                                        <a href="https://buttondown.email" target="_blank">Powered by Buttondown.</a>
                                    </p> */}
                                </div>
                            </form>
                        </div>

                    <hr />
                    <div
                        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-center"
                        style={{ justifyContent: 'center', alignItems: 'center', margin: 0, padding: 0 }}
                    >
                        <img className="profile-image rounded-circle mx-auto"
                            src={require("../images/pp.jpeg")}
                            alt={"Pics"}
                            style={{ width: 50, height: 50, borderRadius: 30, margin: 0, padding: 0 }}
                        />
                    </div>
                    <FooterComponent />
                </div>
            </div>
        );
    }
}

