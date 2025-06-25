"use client";

import InstallPrompt from "@/components/InstalPrompt";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then(
        (reg) => console.log("[SW] Registered:", reg),
        (err) => console.error("[SW] Register failed:", err)
      );
    }
  }, []);

  return (
    <div className="site-content">
      <InstallPrompt />
      <header id="top-navbar" className="top-navbar">
        <div className="container">
          <div className="top-navbar_full">
            <div className="back-btn">
              <a href="#offcanvasExample" data-bs-toggle="offcanvas">
                <img src="assets/svg/setting-icon.svg" alt="setting-icon" />
              </a>
            </div>
            <div className="top-navbar-title">
              <p>Zoop Store</p>
            </div>
            <div className="skip_btn notification-badge-btn">
              <a href="notification.html">
                <img
                  src="assets/svg/notification-icon.svg"
                  alt="notification-icon"
                />
                <div className="notification-badge"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="navbar-boder"></div>
      </header>
      <section id="homescreen1-deatils-page" className="homescreen1-main">
        <div className="homescreen1-deatils-page-full">
          <div className="homescreen-first-sec mt-32">
            <div className="container">
              <div className="homescreen-first-wrapper">
                <h1 className="home1-txt1">Hey, Jesica</h1>
                <p className="home1-txt2">
                  Find your best products at your finger
                </p>
              </div>
            </div>
          </div>
          <div className="homescreen-second-sec mt-32">
            <div className="homescreen-second-wrapper">
              <div className="container">
                <div className="homescreen-second-wrapper-top">
                  <div className="categories-first">
                    <h2 className="home1-txt3">Categories</h2>
                    <h3 className="d-none">Hidden</h3>
                  </div>
                  <div className="view-all-second">
                    <a href="category-page.html">
                      <p className="view-all-txt">
                        View all
                        <span>
                          <img
                            src="assets/svg/right-icon.svg"
                            alt="right-arrow"
                          />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-16">
                <div className="d-flex">
                  <div className="category-slide">
                    <img
                      src="assets/images/homescreen-1/category-1.png"
                      alt="category-img"
                    />
                    <div className="category-slide-content">
                      <h4>Clothes</h4>
                      <h5>1856 Items</h5>
                    </div>
                  </div>
                  <div className="category-slide">
                    <img
                      src="assets/images/homescreen-1/category-2.png"
                      alt="category-img"
                    />
                    <div className="category-slide-content">
                      <h4>Electronics</h4>
                      <h5>845 Items</h5>
                    </div>
                  </div>
                  <div className="category-slide">
                    <img
                      src="assets/images/homescreen-1/category-3.png"
                      alt="category-img"
                    />
                    <div className="category-slide-content">
                      <h4>Cosmetics</h4>
                      <h5>286 Items</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-32">
            <div className="container">
              <div className="homescreen-third-wrapper">
                <h3>Spring Discounts Up To 30% Off</h3>
                <p>
                  Get a discount for every course order! Only valid for today!
                </p>
                <div className="home1-shop-now-btn mt-32">
                  <a href="offer-screen.html">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
          <div className="homescreen-fourth-sec mt-32">
            <div className="homescreen-fourth-wrapper">
              <div className="container">
                <div className="homescreen-second-wrapper-top">
                  <div className="categories-first">
                    <h2 className="home1-txt3">Best Sellers</h2>
                  </div>
                  <div className="view-all-second">
                    <a href="best-seller-screen.html">
                      <p className="view-all-txt">
                        View all
                        <span>
                          <img
                            src="assets/svg/right-icon.svg"
                            alt="right-arrow"
                          />
                        </span>
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="homescreen-fourth-wrapper-bottom mt-16">
                <div className="">
                  <div className="seller-slide">
                    <div className="seller-slide-top-content">
                      <img
                        src="assets/images/homescreen-1/seller-1.png"
                        alt="seller-img"
                      />
                      <div className="home-page-favourite">
                        <a
                          href="javascript:void(0);"
                          className="item-bookmark active "
                        >
                          <img
                            src="assets/svg/unfill-heart.svg"
                            alt="unfill-heart"
                          />
                        </a>
                      </div>
                      <div className="seller-txt-sec">
                        <p className="sale-txt">Sale</p>
                      </div>
                    </div>
                    <div className="seller-slide-bottom-content">
                      <h3 className="seller-name">Shor summer dress</h3>
                      <div className="seller-bottom-price">
                        <div className="seller-bottom-price1">
                          <span className="seller-price-txt1">$680.00</span>
                          <span className="seller-price-txt2">$800.00</span>
                        </div>
                        <div className="seller-bottom-price1">
                          <span className="seller-star">
                            <img
                              src="assets/svg/orange-star16.svg"
                              alt="star-img"
                            />
                          </span>
                          <span className="seller-price-txt3">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="seller-slide">
                    <div className="seller-slide-top-content">
                      <img
                        src="assets/images/homescreen-1/seller-2.png"
                        alt="seller-img"
                      />
                      <div className="home-page-favourite">
                        <a href="javascript:void(0);" className="item-bookmark">
                          <img
                            src="assets/svg/unfill-heart.svg"
                            alt="unfill-heart"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="seller-slide-bottom-content">
                      <h3 className="seller-name">Bluetooth Speakers</h3>
                      <div className="seller-bottom-price">
                        <div className="seller-bottom-price1">
                          <span className="seller-price-txt1">$80.00</span>
                        </div>
                        <div className="seller-bottom-price1">
                          <span className="seller-star">
                            <img
                              src="assets/svg/orange-star16.svg"
                              alt="star-img"
                            />
                          </span>
                          <span className="seller-price-txt3">5.0</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
