import React from 'react';
import history from '../routes/history';
import parse from 'html-react-parser';



export default class BlogDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
        console.log("hiii", this.props.location.state.blogDetailValues)
    }
    render() {
        return (
            <div style={{ width: '100%', height: '100%' }} className="App">

                <div className="mt-5" style={{ width: '70%', margin: 'auto' }}>
                    <div>
                        <h4><strong>abhikumar.xyz</strong></h4>
                        <div className="mt-2">Tech | Motivation | Part Time Chef</div>
                    </div>
                    <hr className="mt-5" />
                    <div className="mt-5">
                        <h2>Why Every Developer Should Have A Blog</h2>
                        <div>
                            <p className="text-muted">Published {3} months ago • {this.props.location.state.blogDetailValues.read_interval_in_minutes} min read</p>
                        </div>
                        <p className="mt-5" >{parse(this.props.location.state.blogDetailValues.content_of_blog)}</p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

