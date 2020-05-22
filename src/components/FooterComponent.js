import React from "react";
import SocialComponent from '../components/SocialComponent'
import { STRINGS, SOCIAL_URL, SOCIAL_ICONS } from '../utils/constants'
export default class FooterComponent extends React.Component {
    render() {
        return (
            <div>
                <div
                    style={{ width: '100%', margin: 0, padding: 0, }}
                    className="row mb-3 mt-3 justify-content-center aling-items-center"
                >
                    <div
                        className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 text-center"
                        style={{ fontSize: 12, margin: 0, padding: 0 }}
                    >
                        <p
                            style={{  margin: 0, padding: 0 }}
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
