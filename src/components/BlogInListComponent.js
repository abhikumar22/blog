import React from "react";
import { STRINGS } from '../utils/constants'

import history from '../routes/history';
import '../css/blgliststyle.css'
import { processedDate, extractContent } from '../utils/HelperFunctions';


export default class BlogInListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.clickToPush = this.clickToPush.bind(this);
    }
    clickToPush = () => {
        history.push('/BlogDetail', { blogDetailValues: this.props.dataCurr })
        // alert("hi"+this.props.dataCurr)
    }
    render() {
        return (
            <div className="item col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 m-0">
                <div className="media py-2">
                    <div style={{
                        width: 110,
                        height: 110,
                        backgroundColor: 'blue'
                    }} className={"mr-2 hideImage"}>
                        <img
                            alt={"Blog Pic"}
                            // className="mr-3 img-fluid post-thumb d-none d-md-flex"
                            style={{ width: 110, height: 110 }}
                            src={this.props.ImageSrc}
                        />
                    </div>
                    <div className="media-body col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 p-0 m-0">
                        <h3 className="title mb-1 cursorPointer text-primary"
                            onClick={this.clickToPush}
                        >
                            <span
                            >
                                {this.props.Title}
                            </span>
                        </h3>
                        <div className="meta mb-1">
                            <span className="date">{"Published " + processedDate(this.props.DatePublished)}</span>
                            <span className="time">{this.props.ReadingTimeInterval + STRINGS.MIN_READ}</span>
                            {/* <span className="comment">
                                <a href="#">{this.props.NoOfComments + STRINGS.COMMENTS}</a>
                            </span> */}
                        </div>
                        <div
                            style={{ width: '100%'}}
                        // className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10"
                        >
                            <p className="elipseEffect">{extractContent(this.props.ContentSummary)}</p>
                            {/* <span className="cursorPointer text-primary" onClick={this.clickToPush}><u>Read More</u></span> */}
                        </div>
                        {/* <div className="mt-0" style={{marginTop:-9}}>
                            <span className="cursorPointer text-primary" onClick={this.clickToPush}><u>Read More</u></span>
                        </div> */}
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}
