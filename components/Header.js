class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <div><img src="images/logo.png" alt="Onyx Audio logo" /></div>
      <div>
        <h1>ONYX AUDIO</h1>
        <nav>
          <ul>
            <li><a href="./">Accueil</a></li>
            <li><a href="location.html">Location</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div><img src="images/logo.png" alt="Onyx Audio logo" /></div>
    </header>`;
  }
}

customElements.define("header-component", Header);
