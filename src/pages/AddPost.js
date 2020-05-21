import React from 'react'
import ReactQuill from 'react-quill';
import '../../node_modules/react-quill/dist/quill.snow.css';
import parse from 'html-react-parser';
import { URLS, APIS } from '../utils/constants'
import history from '../routes/history';




export default class AddPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      theme: 'snow',
      value: '',
      events: [],
      title: '',
      time_interval: '',
    };
    this.onEditorChange = this.onEditorChange.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);

    this.modules = {
      toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        ['link', 'image'],
        ['clean']
      ],
    }

    this.formats = [
      'header',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image'
    ]
  }
  addPost(content, title) {
    let temp = JSON.stringify({
      title: title,
      content: content,
      timeInterval: this.state.time_interval,
      timeStamp: new Date() + '',
    })
    console.log("hi", temp)
    fetch(URLS.HEROKU + APIS.ADD_BLOG, {
      crossDomain:true,
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: temp
    })
      .then(response => response.json())
      .then(res => {
        alert("submitted")
        // window.location.reload(false);
        history.goBack()
      })
      .catch(error => console.log('Authorization failed : ' + error.message));
  }
  formatRange(range) {
    return range
      ? [range.index, range.index + range.length].join(',')
      : 'none';
  }

  onEditorChange = (value, delta, source, editor) => {
    this.setState({
      value: value,
      events: [`[${source}] text-change`, ...this.state.events],
    });
  }

  onEditorChangeSelection = (range, source) => {
    this.setState({
      selection: range,
      events: [
        `[${source}] selection-change(${this.formatRange(this.state.selection)} -> ${this.formatRange(range)})`,
        ...this.state.events,
      ]
    });
  }

  onEditorFocus = (range, source) => {
    this.setState({
      events: [
        `[${source}] focus(${this.formatRange(range)})`
      ].concat(this.state.events)
    });
  }

  onEditorBlur = (previousRange, source) => {
    this.setState({
      events: [
        `[${source}] blur(${this.formatRange(previousRange)})`
      ].concat(this.state.events)
    });
  }
  handleChange(event) {
    this.setState({ title: event.target.value }, () => {
      // console.log("title",this.state.title)
    });
  }

  handleChange2(event) {
    this.setState({ time_interval: event.target.value }, () => {
      // console.log("title",this.state.title)
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="mt-5 bg-secondary" style={{ width: '100%' }}>
          <div className="text-white p-3 col-12" >
            {parse(this.state.value)}
          </div>
        </div>
        <div className="mt-5">
          <input
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder={"enter title of the blog"}
          />
          <input
            type="text"
            value={this.state.time_interval}
            onChange={this.handleChange2}
            placeholder={"enter time interval in minutes"}
          />
          <ReactQuill
            modules={this.modules}
            formats={this.formats}
            theme={this.state.theme}
            value={this.state.value}
            onChange={this.onEditorChange}
            onChangeSelection={() => this.onEditorChangeSelection}
            onFocus={() => this.onEditorFocus}
            onBlur={() => this.onEditorBlur}
          />
          <div style={{ width: '100%' }} className="text-center">
            <button
              className="btn btn-warning mt-5 mx-auto mt-2 mb-2"
              onClick={() => {
                console.log("value",this.state.value)
                console.log("title",this.state.title)
                console.log("time",this.state.time_interval)

                if (this.state.value.length > 0 && this.state.title.length > 0 && this.state.time_interval.length > 0) {
                  this.addPost(this.state.value, this.state.title, this.state.time_interval)
                }
              }}>Upload</button>
          </div>
        </div>
      </div>
    );
  }
}