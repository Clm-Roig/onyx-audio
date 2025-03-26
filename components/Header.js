class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <div><img src="/images/osl_logo.png" alt="Onyx Sono Location logo" /></div>
      <div>
        <h1>Onyx Sono Location</h1>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="tarifs.html">Tarifs</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </nav>
      </div>
      <div><img src="/images/osl_logo.png" alt="Onyx Sono Location logo" /></div>
    </header>`;
  }
}

customElements.define("header-component", Header);
