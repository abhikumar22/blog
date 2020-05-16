import React from 'react';
import '../css/theme-3.css';
import history from '../routes/history';
import {STRINGS} from '../utils/constants'

function App() {
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
                src={require("../images/profile.png")} />

              <div className="bio mb-3">
                {STRINGS.PERSONAL_SUMMARY}
        <a href="about.html">Find out more about me</a>
              </div>
              <ul className="social-list list-inline py-3 mx-auto">
                <li className="list-inline-item"><a href="#"><i className="fab fa-twitter fa-fw"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-linkedin-in fa-fw"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-github-alt fa-fw"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-stack-overflow fa-fw"></i></a></li>
                <li className="list-inline-item"><a href="#"><i className="fab fa-codepen fa-fw"></i></a></li>
              </ul>
            </div>

            <ul className="navbar-nav flex-column text-left">
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
            </ul>

            <div className="my-2 my-md-3">
              <a className="btn btn-primary" href="https://themes.3rdwavemedia.com/" target="_blank">Get in Touch</a>
            </div>
          </div>
        </nav>
      </div>

      <div className="main-wrapper">
        <div className="cta-section theme-bg-light py-5">
          <div className="container text-center">
            <h2 className="heading">DevBlog - A Blog Template Made For Developers</h2>
            <div className="intro">Welcome to my blog. Subscribe and get my latest blog post in your inbox.</div>
            <form className="signup-form form-inline justify-content-center pt-3">
              <div className="form-group">
                <label className="sr-only" for="semail">Your email</label>
                <input type="email" id="semail" name="semail1" className="form-control mr-md-1 semail"
                  placeholder="Enter email" />
              </div>
              
            </form>
            <button onClick={()=>{
              history.push('/addpost', {
              })
            }} type="submit" className="btn btn-primary mt-3">Subscribe</button>
          </div>
        </div>
        <div className="blog-list px-3 py-5 p-md-5">
          <div className="container">
            <div className="item mb-5">
              <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                  src={require("../images/blog/blog-post-thumb-1.jpg")} />
                <div className="media-body">
                  <h3 className="title mb-1"><a href="blog-post.html">Why Every Developer Should Have A Blog</a>
                  </h3>
                  <div className="meta mb-1"><span className="date">Published 2 days ago</span><span className="time">5
									min read</span><span className="comment"><a href="#">8 comments</a></span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                </div>
              </div>
            </div>
            <div className="item mb-5">
              <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                  src={require("../images/blog/blog-post-thumb-2.jpg")} />
                <div className="media-body">
                  <h3 className="title mb-1"><a href="blog-post.html">A Guide to Becoming a Full-Stack
									Developer</a></h3>
                  <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">3
									min read</span><span className="comment"><a href="#">26 comments</a></span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                </div>
              </div>
            </div>

            <div className="item mb-5">
              <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                  src={require("../images/blog/blog-post-thumb-3.jpg")} />
                <div className="media-body">
                  <h3 className="title mb-1"><a href="blog-post.html">High Performance JavaScript</a></h3>
                  <div className="meta mb-1"><span className="date">Published 1 month ago</span><span className="time">8
									min read</span><span className="comment"><a href="#">12 comments</a></span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                </div>
              </div>
            </div>
            <div className="item mb-5">
              <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                  src={require("../images/blog/blog-post-thumb-4.jpg")} />
                <div className="media-body">
                  <h3 className="title mb-1"><a href="blog-post.html">Top 5 JavaScript Frameworks</a></h3>
                  <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">15
									min read</span><span className="comment"><a href="#">3 comments</a></span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                </div>
              </div>
            </div>

            <div className="item mb-5">
              <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                  src={require("../images/blog/blog-post-thumb-5.jpg")} />
                <div className="media-body">
                  <h3 className="title mb-1"><a href="blog-post.html">Learn React in 24 Hours</a></h3>
                  <div className="meta mb-1"><span className="date">Published 2 months ago</span><span className="time">10
									min read</span><span className="comment"><a href="#">23 comments</a></span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="media">
                <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
                  src={require("../images/blog/blog-post-thumb-6.jpg")} />
                <div className="media-body">
                  <h3 className="title mb-1"><a href="blog-post.html">About Remote Working</a></h3>
                  <div className="meta mb-1"><span className="date">Published 3 months ago</span><span className="time">2
									min read</span><span className="comment"><a href="#">1 comment</a></span></div>
                  <div className="intro">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                  ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient
								montes, nascetur ridiculus mus. Donec quam felis, ultricies...</div>
                  <a className="more-link" href="blog-post.html">Read more &rarr;</a>
                </div>
              </div>
            </div>

            <nav className="blog-nav nav nav-justified my-5">
              <a className="nav-link-prev nav-item nav-link d-none rounded-left" href="#">Previous<i
                className="arrow-prev fas fa-long-arrow-alt-left"></i></a>
              <a className="nav-link-next nav-item nav-link rounded" href="blog-list.html">Next<i
                className="arrow-next fas fa-long-arrow-alt-right"></i></a>
            </nav>

          </div>
        </div>

        <footer className="footer text-center py-2 theme-bg-dark">


          <small className="copyright">Designed with <i className="fas fa-heart" style={{ backgroundColor: "#fb866a" }}></i> by <a
            href="http://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>

        </footer>

      </div>


    </div>
  );
}

export default App;
