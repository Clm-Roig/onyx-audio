class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const year = new Date().getFullYear();
    this.innerHTML = `
    <footer class="dark">
      <div class="links">
        <a href="mailto:onyx-audio-location@protonmail.com">onyx-audio-location@protonmail.com</a> 
        <a href="tel:+33643503596">06 43 50 35 96</a> 
        <div class="social-links">
          <a class="social-link" href="https://www.facebook.com/onyx.audio.location/"><img src="images/facebook_icon.png" alt="Facebook icon"/></a> 
          <a class="social-link" href="https://www.instagram.com/onyx.audio.location/"><img src="images/instagram_icon.png" alt="Instagram icon"/></a>
        </div>
      </div>
      <img src="images/logo.png" alt="Onyx Audio logo" class="onyxAudioLogo"/>
	    <p>&copy;
		  ${year} Onyx Audio
	    </p>
    </footer>`;
  }
}

customElements.define("footer-component", Footer);
