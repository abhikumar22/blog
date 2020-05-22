import React from "react";
import SocialComponent from '../components/SocialComponent'
import { STRINGS, SOCIAL_URL, SOCIAL_ICONS, URLS, APIS } from '../utils/constants'
export default class FooterComponent extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{ width: '100%', margin: 0, padding: 0, }}
                    className="row mx-auto mb-3 mt-3"
                >
                    <div
                        className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"
                        style={{ fontSize: 12, margin: 0, padding: 0, wordWrap: 'break-word' }}
                    >
                        <p
                            style={{ width: '98%', margin: 0, padding: 0, textAlign: 'justify' }}
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
        );
    }
}
