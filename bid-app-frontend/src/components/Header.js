import React from 'react';
// import './general.css';
// import './fonts/icomoon/style.css';

// import './css/bootstrap.min.css';
// import './css/jquery-ui.css';
// import './css/owl.carousel.min.css';
// import './css/owl.theme.default.min.css';

// import './css/jquery.fancybox.min.css';

// import './css/bootstrap-datepicker.css';

// import './fonts/flaticon/font/flaticon.css';

// // import './css/aos.css';

// import './css/style.css';

// import './style2.css';

const Header = () => {
  return (
    <div>
      <div classNameName="site-wrap">
        <div classNameName="site-mobile-menu site-navbar-target">
          <div classNameName="site-mobile-menu-header">
            <div classNameName="site-mobile-menu-close mt-3">
              <span classNameName="icon-close2 js-menu-toggle" />
            </div>
          </div>
          <div classNameName="site-mobile-menu-body" />
        </div>
      </div>
      <header
        className="site-navbar py-4 js-sticky-header site-navbar-target"
        role="banner"
        // style="background-color:#333333;"
      >
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <div>
              <img src={require('./images/logo.png')} alt="logo" />
            </div>

            <div className=" text-center">
              <nav
                className="site-navigation position-relative text-right"
                role="navigation"
              >
                <ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">
                  <li>
                    <a href="./index.html" className="nav-link">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="./products.html" className="nav-link">
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#programs-section" className="nav-link">
                      Programs
                    </a>
                  </li>
                  <li>
                    <a href="#teachers-section" className="nav-link">
                      Teachers
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
