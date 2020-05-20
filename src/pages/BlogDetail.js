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
            <div className="App container-fluid">
                <p>Title={this.props.location.state.blogDetailValues.title}</p>
                <p>contentSummary={parse(this.props.location.state.blogDetailValues.content_of_blog)}</p>
                <p>DatePublished={this.props.location.state.blogDetailValues.created_at}</p>
                <p> ReadingTimeInterval={this.props.location.state.blogDetailValues.read_interval_in_minutes}</p>

            </div>
        );
    }
}

