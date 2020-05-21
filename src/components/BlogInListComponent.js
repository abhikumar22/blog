import React from "react";
import { STRINGS } from '../utils/constants'

import parse from 'html-react-parser';
import history from '../routes/history';
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
            <div className="item mb-5">
                <div className="media">
                    <div style={{
                        width: 110,
                        height: 110,
                        backgroundColor: 'blue'
                    }} className={"mr-2"}>
                        <img
                            // className="mr-3 img-fluid post-thumb d-none d-md-flex"
                            style={{ width: 110, height: 110 }}
                            src={this.props.ImageSrc}
                        />
                    </div>
                    <div className="media-body">
                        <h3 className="title mb-1">
                            <a href="blog-post.html">
                                {this.props.Title}
                            </a>
                        </h3>
                        <div className="meta mb-1">
                            <span className="date">{this.props.DatePublished}</span>
                            <span className="time">{this.props.ReadingTimeInterval + STRINGS.MIN_READ}</span>
                            {/* <span className="comment">
                                <a href="#">{this.props.NoOfComments + STRINGS.COMMENTS}</a>
                            </span> */}
                        </div>
                        <div className="intro">
                            {this.props.ContentSummary}
                        </div>
                        <div className="intro ">
                            <button className="btn btn-warning" onClick={this.clickToPush}>Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
