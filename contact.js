// Submit form handler
const form = document.getElementById("contact-form");
var submitted = false;
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", async function (e) {
    const sendButton = document.getElementById("sendButton");
    // Display spinner
    const spinner = document.createElement("img");
    spinner.src = "images/spinner.gif";
    spinner.style.width = "24px";
    spinner.style.marginRight = "8px";
    spinner.alt = "Loading...";
    sendButton.innerHTML = "";
    sendButton.setAttribute("disabled", true);
    sendButton.appendChild(spinner);
    sendButton.appendChild(document.createTextNode(" Envoi du message..."));

    sleep(1500).then(() => {
      // Display success message
      const message = document.createElement("p");
      message.textContent =
        "Votre message a bien été envoyé, je vous recontacterai dès que possible, merci !";
      sendButton.style.transition = "opacity 1s";
      sendButton.style.opacity = 0;
      sendButton.replaceWith(message);
      form.reset();
    });
  });
});

// URL parsing
const params = new URLSearchParams(document.location.search);
const packName = params.get("pack");
if (!!packName) {
  const message = `Bonjour, je souhaiterais louer le pack ${packName}. Pouvez-vous me recontacter pour discuter des modalités de location ?`;
  document.getElementById("entry.132123013").value = message;
}
