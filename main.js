class MyHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header class="navbar navbar-expand-lg fixed-top bg-light">
        <div class="container">

          <!-- Navbar brand (Logo) -->
          <a class="navbar-brand pe-sm-3" href="/">
          <span class="text-primary flex-shrink-0 me-2">
            <!-- Replace this SVG with an img tag for your WebP logo -->
            <img src="/assets/img/logo.webp" alt="Logo" width="150px">
          </span>
        </a>
        

          <!-- Theme switcher -->
          <div class="form-check form-switch mode-switch order-lg-2 me-3 me-lg-4 ms-auto" data-bs-toggle="mode">
            <input class="form-check-input" type="checkbox" id="theme-mode">
            <label class="form-check-label" for="theme-mode">
              <i class="ai-sun fs-lg"></i>
            </label>
            <label class="form-check-label" for="theme-mode">
              <i class="ai-moon fs-lg"></i>
            </label>
          </div>

          <a class="btn btn-primary btn-sm fs-sm rounded-0 order-lg-3 d-none d-sm-inline-flex" href="/contact-quote/">
            Request a Quote
          </a>

          <!-- Mobile menu toggler (Hamburger) -->
          <button class="navbar-toggler ms-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- Navbar collapse (Main navigation) -->
          <nav class="collapse navbar-collapse rounded-0" id="navbarNav">
            <ul class="navbar-nav navbar-nav-scroll me-auto" style="--ar-scroll-height: 520px;">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">Commodities</a>
                <ul class="dropdown-menu rounded-0">
                  <li class="dropdown">
                    <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Oil Products</a>
                    <ul class="dropdown-menu rounded-0">
                      <li><a class="dropdown-item" href="/commodities/bitumen/">Bitumen 70/100</a></li>
                      <li><a class="dropdown-item" href="/commodities/bitumen/">Modified Bitumen</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a class="dropdown-item dropdown-toggle" href="" data-bs-toggle="dropdown" aria-expanded="false">Fertilizers</a>
                    <ul class="dropdown-menu rounded-0">
                      <li><a class="dropdown-item" href="/commodities/fertilizers/">Gas Granulated Sulphur</a></li>
                      <li><a class="dropdown-item" href="/commodities/fertilizers/">Sulphur Bentonite</a></li>
                    </ul>
                  </li>
                  <li class="dropdown">
                    <a class="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Wooden Panels</a>
                    <ul class="dropdown-menu rounded-0">
                      <li><a class="dropdown-item" href="/commodities/finnish-wooden-panels/">Finnish Wooden Panels</a></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/about-us/">About Us</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="/contact-quote/">Contact Us</a>
          </li>
            </ul>
            <div class="d-sm-none p-3 mt-n3">
              <a class="btn btn-primary w-100 rounded-0 mb-1" href="/contact-quote">
                Request a Quote
              </a>
            </div>
          </nav>
        </div>
      </header>
      `
    }
  }
  
  customElements.define('my-header', MyHeader)

  class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer bg-dark position-relative py-4 py-md-5">
            <div class="d-none d-dark-mode-block position-absolute top-0 start-0 w-100 h-100" style="background-color: rgba(255,255,255, .03);"></div>
            <div class="container position-relative z-2 pt-4 pt-md-2 pt-xl-4 pt-xxl-5" data-bs-theme="dark">
                <div class="row py-md-3 mb-4 mb-md-5">
                    <div class="col-md-7 col-lg-6 col-xxl-5 mb-sm-4 mb-md-0">
                        <h2 class="display-4 mb-4 mb-md-5">Get in touch to find out more</h2>
                        <div class="d-sm-flex align-items-center">
                            <a class="btn btn-lg btn-primary rounded-0 me-sm-3 me-lg-4" href="/contact-quote/">Contact Us</a>
                            <p class="text-body fs-sm py-3 py-sm-0 ps-sm-2 mb-0">Let's discuss your needs</p>
                        </div>
                    </div>
                    <div class="col-md-5 col-lg-6 col-xxl-7">
                        <div class="d-flex flex-column align-items-start align-items-md-end">
                            <div class="nav flex-column mb-3 mb-sm-4">
                                <a class="nav-link py-1 px-0" href="mailto:info@nordicelementtrade.com">info@nordicelementtrade.com</a>
                                <a class="nav-link py-1 px-0" href="tel:+15262200444">+ 1 526 220 0444</a>
                                <a class="nav-link py-1 px-0" href="tel:+15262200000">+ 1 526 220 0000</a>
                                <br>
                                <a class="btn btn-icon btn-sm btn-secondary btn-linkedin rounded-circle" href="#" aria-label="LinkedIn">
                                <i class="ai-linkedin"></i>
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="nav d-block d-md-flex align-items-center justify-content-between text-center text-md-start">
                    <p class="fs-sm mb-0">
                        <span class="text-body-secondary">&copy; All rights reserved.
                            <a class="text-decoration-none py-1 px-0" href="privacy-policy/">Privacy policy</a>
                        </span>
                    </p>          
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('my-footer', MyFooter);

