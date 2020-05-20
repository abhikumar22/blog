import React from 'react';
import '../css/theme-8.css';
import { STRINGS, SOCIAL_URL, SOCIAL_ICONS, URLS, APIS } from '../utils/constants'
import BlogInListComponent from '../components/BlogInListComponent'
import SocialComponent from '../components/SocialComponent'
import parse from 'html-react-parser';
import history from '../routes/history';




export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogArray: []
    };
    // this.clickToPush = this.clickToPush.bind(this);
  }

  componentDidMount() {
    fetch(URLS.HEROKU + APIS.GET_ALL_BLOG, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({
        username: "11",
      })
    })
      .then(response => response.json())
      .then(res => {
        // console.log(json)
        this.setState({ blogArray: res }, () => {
          console.log("ll", this.state.blogArray)
        })
        // history.push('/AllUserScreen', { uid: res.uid })

      })
      .catch(error => console.log('Authorization failed : ' + error.message));
  }

  // clickToPush=(data)=> {
  //   // console.log("pppp",data)
  //   history.push('/BlogDetail', { blogDetailValues:data })
  // }


  render() {
    return (
      <div className="App">
        <div className="header text-center">
          <h1 className="blog-name pt-lg-4 mb-0"><a href="index.html">{STRINGS.NAME}</a></h1>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
              aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div id="navigation" className="collapse navbar-collapse flex-column">
              <div className="profile-section pt-3 pt-lg-0">
                <img className="profile-image mb-3 rounded-circle mx-auto"
                  src={require("../images/pp.jpeg")} />
                <div className="bio mb-3">
                  {STRINGS.PERSONAL_SUMMARY}
                </div>
                <div className="bio mb-3">
                  <a
                  // href="about.html"
                  >{STRINGS.KNOW_MORE_ABOUT_ME}</a>
                </div>
                <ul className="social-list list-inline py-3 mx-auto">
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
                </ul>
              </div>
              {/* <ul className="navbar-nav flex-column text-left">
              <li className="nav-item active">
                <a className="nav-link" href="index.html"><i className="fas fa-home fa-fw mr-2"></i>Blog Home <span
                  className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="blog-post.html"><i className="fas fa-bookmark fa-fw mr-2"></i>Blog
            Post</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="about.html"><i className="fas fa-user fa-fw mr-2"></i>About Me</a>
              </li>
            </ul> */}
              <div className="my-2 my-md-3">
                <a className="btn btn-primary"
                  data-toggle="modal" data-target="#myModal"
                //  onClick={() => {
                //   alert("hello")
                // }}
                >{STRINGS.GET_IN_TOUCH}</a>
              </div>
            </div>
          </nav>
        </div>
        <div className="main-wrapper">

          <div className="cta-section theme-bg-light py-5">
            <div className="container text-center">
              <h2 className="heading">{STRINGS.HEADLINE}</h2>
              <div className="intro">{STRINGS.SUBSCRIBE_MESSAGE}</div>
              <form className="signup-form form-inline justify-content-center pt-3">
                <div className="form-group">
                  <label className="sr-only"
                  // for="semail"
                  >Your email</label>
                  <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail"
                    placeholder="Enter email" />
                </div>
              </form>
              <button onClick={() => {
                history.push('/addpost', {
                })
              }} type="submit" className="btn btn-primary mt-3">Subscribe</button>
            </div>
          </div>

          <div className="blog-list px-3 py-5 p-md-5">
            <div className="container">


              {this.state.blogArray.map((data,index) => {
                return (
                    <BlogInListComponent
                      ImageSrc={require("../images/blog/blog-post-thumb-1.jpg")}
                      Title={data.title}
                      ReadingTimeInterval={data.read_interval_in_minutes}
                      NoOfComments={"5"}
                      ContentSummary={parse(data.content_of_blog)}
                      DatePublished={data.created_at}
                      // ClickHandler={()=>this.clickToPush(data)}
                      dataCurr={data}
                    />
                  )
                })}
                

              

              {/* <nav className="blog-nav nav nav-justified my-5">
              <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="blog-list.html">Previous<i
                className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
              <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i
                className="arrow-next fas fa-long-arrow-alt-right"></i></a>
            </nav> */}
            </div>
            </div>
            {/* <footer className="footer text-center py-2 theme-bg-dark">
          <small className="copyright">Designed with <i className="fas fa-heart" style={{ backgroundColor: "#fb866a" }}></i> by <a
            href="http://themes.3rdwavemedia.com">Xiaoying Riley</a> for developers</small>
        </footer> */}
          </div>
          {/* The Modal */}
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">

                {/* <!-- Modal Header --> */}
                <div className="modal-header text-center d-flex justify-content-center align-items-center">
                  <h3 className="modal-title">CONTACT</h3>
                  {/* <p className="">I'd Love To Hear From You</p> */}
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                </div>

                {/* <!-- Modal body --> */}
                <div className="modal-body">
                  <form
                    action="https://formspree.io/abhi.ckp1002@gmail.com"
                    method="POST"
                  >
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        id="email"
                        name="From"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                        id="subject"
                        name="subject"
                        required
                      />
                    </div>
                    <div className="form-group w-100">
                      <textarea
                        className="input1"
                        style={{ width: '100%' }}
                        name="Message"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="w-100 bg-warning justify-content-center">
                      <button type="submit" className="btn btn-primary w-100">Submit</button>

                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

