import React from 'react';
import '../css/theme-8.css';
import BlogInListComponent from '../components/BlogInListComponent'
import SocialComponent from '../components/SocialComponent'
import { STRINGS, SOCIAL_URL, SOCIAL_ICONS, URLS, APIS } from '../utils/constants'
import HeaderComponent from '../components/HeaderComponent';
// import { BoxLoading } from "react-loadingg";


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogArray: [],
      loaded: true,
      errCaused: false
    };
    // this.clickToPush = this.clickToPush.bind(this);
  }

  componentDidMount() {
    fetch(URLS.HEROKU + APIS.GET_ALL_BLOG, {
      "Access-Control-Allow-Origin": '*',
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
        })
        this.setState({
          loaded: false,
          errCaused: false,
        });
        // history.push('/AllUserScreen', { uid: res.uid })

      })
      .catch(error => {
        this.setState({
          loaded: false,
          errCaused: true
        });
        console.log('Authorization failed : ' + error.message)
      });
  }

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
                  src={require("../images/pp.jpeg")}
                  alt={"Pics"}
                />
                <div className="bio mb-3">
                  {STRINGS.PERSONAL_SUMMARY}
                </div>
                <div className="bio mb-3">
                  <span
                  // href="about.html"

                  ><h5 className="text-white">{STRINGS.KNOW_MORE_ABOUT_ME}</h5></span>
                </div>
                <ul className="social-list list-inline pb-3 mx-auto">
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
                <span className="btn btn-primary"
                  data-toggle="modal" data-target="#myModal"
                //  onClick={() => {
                //   alert("hello")
                // }}
                >{STRINGS.GET_IN_TOUCH}</span>
              </div>
            </div>
          </nav>
        </div>
        <div className="main-wrapper">

          <div className="blog-list px-5 pt-3 pb-1">
            <div className="container mb-2">
              <HeaderComponent />
              <hr />
              {this.state.loaded === false ?
                this.state.blogArray.map((data, index) => {
                  return (
                    <BlogInListComponent
                      key={index}
                      ImageSrc={require("../images/blog/blog-post-thumb-1.jpg")}
                      Title={data.title}
                      ReadingTimeInterval={data.read_interval_in_minutes}
                      NoOfComments={"5"}
                      ContentSummary={data.content_of_blog}
                      DatePublished={data.created_at}
                      // ClickHandler={()=>this.clickToPush(data)}
                      dataCurr={data}
                    />
                  )
                })
                : <div
                  className="justify-content-center aling-items-center"
                  style={{ width: '100%', height: '100%' }}>
                  <div className="mx-auto"> <p><strong>Loading ....</strong></p></div>
                  {/* <BoxLoading className="mx-auto" color={"yellow"} /> */}
                </div>
              }




              {/* <nav className="blog-nav nav nav-justified my-5">
              <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="blog-list.html">Previous<i
                className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
              <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i
                className="arrow-next fas fa-long-arrow-alt-right"></i></a>
            </nav> */}
            </div>
            {/* <FooterComponent /> */}
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
                  <div className="w-100 justify-content-center">
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

