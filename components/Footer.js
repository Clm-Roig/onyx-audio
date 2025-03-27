class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <footer>
	    <p>&copy;
		  ${year} Onyx Audio. Tous droits réservés.
	    </p>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
