class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <footer>
	    <p>&copy;
		  ${year} Onyx Sono Location. Tous droits réservés.
	    </p>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
