"use client";
import React from "react";
import "./styles.css";
export default function Sourecefile() {
  return (
    <div>
      <header className="header-area">
        <div className="top-header-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="top-header-content d-flex align-items-center justify-content-between">
                  <div className="top-header-meta">
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="infodeercreative@gmail.com"
                    >
                      <i className="fa fa-envelope-o" aria-hidden="true"></i>{" "}
                      <span>Email: infodeercreative@gmail.com</span>
                    </a>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title="+1 234 122 122"
                    >
                      <i className="fa fa-phone" aria-hidden="true"></i>{" "}
                      <span>Call Us: +1 234 122 122</span>
                    </a>
                  </div>

                  <div className="top-header-meta d-flex">
                    <div className="language-dropdown">
                      <div className="dropdown">
                        <button
                          className="btn btn-secondary dropdown-toggle mr-30"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Language
                        </button>
                        <div
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <a className="dropdown-item" href="#">
                            USA
                          </a>
                          <a className="dropdown-item" href="#">
                            UK
                          </a>
                          <a className="dropdown-item" href="#">
                            Bangla
                          </a>
                          <a className="dropdown-item" href="#">
                            Hindi
                          </a>
                          <a className="dropdown-item" href="#">
                            Spanish
                          </a>
                          <a className="dropdown-item" href="#">
                            Latin
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="login">
                      <a href="#">
                        <i className="fa fa-user" aria-hidden="true"></i>{" "}
                        <span>Login</span>
                      </a>
                    </div>
                    <div className="cart">
                      <a href="#">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>{" "}
                        <span>
                          Cart <span className="cart-quantity">(1)</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="alazea-main-menu">
          <div className="classNamey-nav-container breakpoint-off">
            <div className="container">
              <nav
                className="classNamey-navbar justify-content-between"
                id="alazeaNav"
              >
                <a href="index.html" className="nav-brand">
                  <img src="img/core-img/logo.png" alt="" />
                </a>

                <div className="classNamey-navbar-toggler">
                  <span className="navbarToggler">
                    <span></span>
                    <span></span>
                    <span></span>
                  </span>
                </div>

                <div className="classNamey-menu">
                  <div className="classNameycloseIcon">
                    <div className="cross-wrap">
                      <span className="top"></span>
                      <span className="bottom"></span>
                    </div>
                  </div>

                  <div className="classNameynav">
                    <ul>
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>
                        <a href="about.html">About</a>
                      </li>
                      <li>
                        <a href="#">Pages</a>
                        <ul className="dropdown">
                          <li>
                            <a href="index.html">Home</a>
                          </li>
                          <li>
                            <a href="about.html">About</a>
                          </li>
                          <li>
                            <a href="shop.html">Shop</a>
                            <ul className="dropdown">
                              <li>
                                <a href="shop.html">Shop</a>
                              </li>
                              <li>
                                <a href="shop-details.html">Shop Details</a>
                              </li>
                              <li>
                                <a href="cart.html">Shopping Cart</a>
                              </li>
                              <li>
                                <a href="checkout.html">Checkout</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="portfolio.html">Portfolio</a>
                            <ul className="dropdown">
                              <li>
                                <a href="portfolio.html">Portfolio</a>
                              </li>
                              <li>
                                <a href="single-portfolio.html">
                                  Portfolio Details
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blog.html">Blog</a>
                            <ul className="dropdown">
                              <li>
                                <a href="blog.html">Blog</a>
                              </li>
                              <li>
                                <a href="single-post.html">Blog Details</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="contact.html">Contact</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="portfolio.html">Portfolio</a>
                      </li>
                      <li>
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>

                    <div id="searchIcon">
                      <i className="fa fa-search" aria-hidden="true"></i>
                    </div>
                  </div>
                </div>
              </nav>

              <div className="search-form">
                <form action="#" method="get">
                  <input
                    type="search"
                    name="search"
                    id="search"
                    placeholder="Type keywords &amp; press enter..."
                  />
                  <button type="submit" className="d-none"></button>
                </form>
                <div className="closeIcon">
                  <i className="fa fa-times" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="breadcrumb-area">
        <div
          className="top-breadcrumb-area bg-img bg-overlay d-flex align-items-center justify-content-center"
          style={{ backgroundImage: 'url(img/bg-img/24.jpg)' }}
        >
          <h2>Contact US</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="fa fa-home"></i> Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area-info section-padding-0-100">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-md-6">
              <div className="contact--thumbnail">
                <img src="img/bg-img/25.jpg" alt="" />
              </div>
            </div>

            <div className="col-12 col-md-5">
              <div className="section-heading">
                <h2>CONTACT US</h2>
                <p>We are improving our services to serve you better.</p>
              </div>
              <div className="contact-information">
                <p>
                  <span>Address:</span> 505 Silk Rd, New York
                </p>
                <p>
                  <span>Phone:</span> +1 234 122 122
                </p>
                <p>
                  <span>Email:</span> info.deercreative@gmail.com
                </p>
                <p>
                  <span>Open hours:</span> Mon - Sun: 8 AM to 9 PM
                </p>
                <p>
                  <span>Happy hours:</span> Sat: 2 PM to 4 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="contact-area">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-12 col-lg-5">
              <div className="section-heading">
                <h2>GET IN TOUCH</h2>
                <p>Send us a message, we will call back later</p>
              </div>
              <div className="contact-form-area mb-100">
                <form action="#" method="post">
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="contact-name"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="contact-email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="contact-subject"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          cols="30"
                          rows="10"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn alazea-btn mt-15">
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="map-area mb-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22236.40558254599!2d-118.25292394686001!3d34.057682914027104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c75ddc27da13%3A0xe22fdf6f254608f4!2z4Kay4Ka4IOCmj-CmnuCnjeCmnOCnh-CmsuCnh-CmuCwg4KaV4KeN4Kav4Ka-4Kay4Ka_4Kar4KeL4Kaw4KeN4Kao4Ka_4Kav4Ka84Ka-LCDgpq7gpr7gprDgp43gppXgpr_gpqgg4Kav4KeB4KaV4KeN4Kak4Kaw4Ka-4Ka34KeN4Kaf4KeN4Kaw!5e0!3m2!1sbn!2sbd!4v1532328708137"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer
        className="footer-area bg-img"
        style={{ backgroundImage: "url('img/bg-img/3.jpg')" }}
      >
        <div className="main-footer-area">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="footer-logo mb-30">
                    <a href="#">
                      <img src="img/core-img/logo.png" alt="" />
                    </a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit samet, consectetur adipiscing elit.
                    India situs atione mantor
                  </p>
                  <div className="social-info">
                    <a href="#">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-google-plus" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>QUICK LINK</h5>
                  </div>
                  <nav className="widget-nav">
                    <ul>
                      <li>
                        <a href="#">Purchase</a>
                      </li>
                      <li>
                        <a href="#">FAQs</a>
                      </li>
                      <li>
                        <a href="#">Payment</a>
                      </li>
                      <li>
                        <a href="#">News</a>
                      </li>
                      <li>
                        <a href="#">Return</a>
                      </li>
                      <li>
                        <a href="#">Advertise</a>
                      </li>
                      <li>
                        <a href="#">Shipping</a>
                      </li>
                      <li>
                        <a href="#">Career</a>
                      </li>
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <a href="#">Policities</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>BEST SELLER</h5>
                  </div>

                  <div className="single-best-seller-product d-flex align-items-center">
                    <div className="product-thumbnail">
                      <a href="shop-details.html">
                        <img src="img/bg-img/4.jpg" alt="" />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="shop-details.html">Cactus Flower</a>
                      <p>$10.99</p>
                    </div>
                  </div>

                  <div className="single-best-seller-product d-flex align-items-center">
                    <div className="product-thumbnail">
                      <a href="shop-details.html">
                        <img src="img/bg-img/5.jpg" alt="" />
                      </a>
                    </div>
                    <div className="product-info">
                      <a href="shop-details.html">Tulip Flower</a>
                      <p>$11.99</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-3">
                <div className="single-footer-widget">
                  <div className="widget-title">
                    <h5>CONTACT</h5>
                  </div>

                  <div className="contact-information">
                    <p>
                      <span>Address:</span> 505 Silk Rd, New York
                    </p>
                    <p>
                      <span>Phone:</span> +1 234 122 122
                    </p>
                    <p>
                      <span>Email:</span> info.deercreative@gmail.com
                    </p>
                    <p>
                      <span>Open hours:</span> Mon - Sun: 8 AM to 9 PM
                    </p>
                    <p>
                      <span>Happy hours:</span> Sat: 2 PM to 4 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="border-line"></div>
              </div>
              <div className="col-12 col-md-6">
                <div className="copywrite-text">
                  <p>
                    &copy; Copyright &copy;
                    <script>document.write(new Date().getFullYear());</script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="footer-nav">
                  <nav>
                    <ul>
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Service</a>
                      </li>
                      <li>
                        <a href="#">Portfolio</a>
                      </li>
                      <li>
                        <a href="#">Blog</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
