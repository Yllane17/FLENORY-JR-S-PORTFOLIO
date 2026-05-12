emailjs.init("nQpByAS1KpvSl5IIP");
const contactForm = document.getElementById("contact-form-area");
contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    emailjs.sendForm(
        "service_gfg5i6s",
        "template_q2c5l4h",
        this
    )
    .then(() => {
        alert("Email envoyé avec succès !");
        contactForm.reset();
    })
    .catch((error) => {
        console.log(error);
        alert("Une erreur s'est produite lors de l 'envoi de l'email.");
    });

});