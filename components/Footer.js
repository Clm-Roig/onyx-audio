class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <footer>
      <img src="images/logo.png" alt="Onyx Audio logo"/>
	    <p>&copy;
		  ${year} Onyx Audio
	    </p>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
