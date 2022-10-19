class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../header and footer/header-style.css">
        <header id="navbar">
            <a href="../Menu-page/menu-talent.html">
                <img class="logo" src="../header and footer/pictures/ADoBO logo.jpg" alt="logo">
            </a>
            <nav>
                <ul> <i class="nav__links">
                    <li><a href="../Menu-page/menu-talent.html">Menu</a></li>
                    <li><a href="../Menu-page/status.html">Status</a></li>
                    <li><a href="../Home-page/home-page.html">Signout</a></li>
                </ul>
            </nav>
            <!--<a class="cta" href="../Promo-page/promo-page.html"><button>Promo</button></a>-->
        </header>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../header and footer/footer-style.css">
        <div class="footer">
        <div class="item">@2022 ADoBO. All rights reserved.</div>
        <div class="item-center">
          <br><br><br>
          ©Felix Banaga (FB)
        </div>
        <div class="item">
          <div id="social">
            <img src="../header and footer/pictures/facebook.svg" alt="">
          </div>
          <div id="social">
            <img src="../header and footer/pictures/twitter.svg" alt="">
          </div>
        </div>
    </div>
        `
    }
}

customElements.define('my-footer', MyFooter)