import * as React from "react"
import { Link } from "gatsby"
import AboutImg from "../images/multi-picture.png"
import InstaImg from "../images/insta-imgs.png"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let intro

  if (isRootPath) {
    header = (
      <nav className="navbar">
        <div><Link to="/" className="logo">{title}</Link></div>
        <div className="nav-link-container">
          <Link to="/" className="active">Home</Link>
          <Link to="/">Photography</Link>
          <Link to="/">Travel</Link>
          <Link to="/">Lifestyle</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="social-media">
          <Link to="/"><span className="material-icons">call</span></Link>
          <Link to="/"><span className="material-icons">notifications</span></Link>
          <Link to="/"><span className="material-icons">facebook</span></Link>
        </div>
      </nav>

    )

    intro = (
      <section className="intro-text">
        <h1>Great <span className="highlighted-text">Photography</span> Made With Love</h1>
        <p className="intro-text">Photography is the art, application, and practice of creating durable images by recording light, either electronically or by hand.</p>
        <Link to="/" className="text-link">READ ARTICLE</Link>
      </section>
    )

    return (
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <header className="home-header">
          {header}
          <section>{intro}</section>
        </header>
  
        <main>
          <section className="featured-article">
            <h2>Featured Articles</h2>
            {children}
          </section>
          <section className="about-blog">
            <div className="about-blog-text">
              <small>welcome! <span>this is photoblog</span></small>
              <h2>Dealing with the dynamics of <span className="highlighted-text">photography</span></h2>
              <p>The style of life reflects the individual's unique, unconcious, and repetitive way of responding to (or avoiding) the main tasks of living: friendship,love, and work. This style, rooted ina childhood prototype, remains consistent throughout life.</p>
              <p>The style of life reflects the individual's unique, unconcious, and repetitive way of responding to (or avoiding) the main tasks of living.</p>
              <Link to="/" className="text-link">READ MORE</Link>
            </div>
            <div className="about-blog-img">
              <img src={AboutImg} alt="girl-photogrphs" />
            </div>
          </section>
          <section className="all-articles">
            <h2>Our Articles</h2>
            {/* <input type="search" name="find" placeholder="Search..." className="search" /> */}
            {children}
          </section>
          <section className="instagram-imgs">
            <h2>Follow Me On <span>@photoBlog</span></h2>
            <div className="image-gallery">
              <img src={InstaImg} alt="" />
            </div>
          </section>
        </main>
        <footer>
          <div className="footer-subscribe">
            <h2>Subscribe to My Blog</h2>
            <p>Subscribe to my blog and receive the latest articles and my most recent photography ideas.</p>
            <input type="email" name="email" placeholder="Your Email..." className="email" />
            <input type="submit" name="subscribe" className="submit" value="SUBSCRIBE" />
          </div>
          <div className="footer-nav">
            <h2>PhotoBlog</h2>
            <ul>
              <li><Link to="/" className="active">Home</Link></li>
              <li><Link to="/">Photography</Link></li>
              <li><Link to="/">Travel</Link></li>
              <li><Link to="/">Lifestyle</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>
            <hr></hr>
            <div className="footer-copyright">
              <p>Copyright © {new Date().getFullYear()} PhotoBlog, All Rights Reserved</p>
              <div className="social-media">
                <Link to="/"><span className="material-icons">call</span></Link>
                <Link to="/"><span className="material-icons">notifications</span></Link>
                <Link to="/"><span className="material-icons">facebook</span></Link>
              </div>
  
            </div>
          </div>
  
        </footer>
      </div>
    )

  } 
  else {
    header = (
      <nav className="navbar">
        <div><Link to="/" className="logo">{title}</Link></div>
        <div className="nav-link-container">
          <Link to="/" >Home</Link>
          <Link to="/">Photography</Link>
          <Link to="/">Travel</Link>
          <Link to="/">Lifestyle</Link>
          <Link to="/" className="active">About</Link>
        </div>
        <div className="social-media">
          <Link to="/"><span className="material-icons">call</span></Link>
          <Link to="/"><span className="material-icons">notifications</span></Link>
          <Link to="/"><span className="material-icons">facebook</span></Link>
        </div>
      </nav>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header about-header">
        {header}
        <section className="intro-text">
        <h1>{title}</h1>
        <p className="intro-text">Photography is the art, application, and practice of creating durable images by recording light, either electronically or by hand.</p>
      </section>
      </header>

      <main>
        {children}
        <section className="instagram-imgs">
            <h2>Follow Me On <span>@photoBlog</span></h2>
            <div className="image-gallery">
              <img src={InstaImg} alt="" />
            </div>
          </section>
      </main>
      <footer>
        <div className="footer-subscribe">
          <h2>Subscribe to My Blog</h2>
          <p>Subscribe to my blog and receive the latest articles and my most recent photography ideas.</p>
          <input type="email" name="email" placeholder="Your Email..." className="email" />
          <input type="submit" name="subscribe" className="submit" value="SUBSCRIBE" />
        </div>
        <div className="footer-nav">
          <h2>PhotoBlog</h2>
          <ul>
            <li><Link to="/" className="active">Home</Link></li>
            <li><Link to="/">Photography</Link></li>
            <li><Link to="/">Travel</Link></li>
            <li><Link to="/">Lifestyle</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <hr></hr>
          <div className="footer-copyright">
            <p>Copyright © {new Date().getFullYear()} PhotoBlog, All Rights Reserved</p>
            <div className="social-media">
              <Link to="/"><span className="material-icons">call</span></Link>
              <Link to="/"><span className="material-icons">notifications</span></Link>
              <Link to="/"><span className="material-icons">facebook</span></Link>
            </div>

          </div>
        </div>

      </footer>
    </div>
  )
}

export default Layout
