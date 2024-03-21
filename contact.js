const btn = document.querySelector("#contact__submit")
const form = document.querySelector("#contact__form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get the values from the form

    let name = document.querySelector("#input__name").value
    let email = document.querySelector("#input__email").value
    let message = document.querySelector("#input__textarea").value

    console.log("Sending email with JS")

    // sendEmailWithJS(name, email, message)

})


function sendEmailWithJS(name, email, message) {

    emailjs.init("iRJwAP62u_zS5BmEN")

    btn.innerHTML = "Sending ..."

    var templateParams = {
        from_name: name,
        email: email,
        message: message
    };
     
    emailjs.send('service_9ms1d98', 'template_tl2panp', templateParams)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text)
           form.reset()
           btn.innerHTML = "Message Sent"
            setTimeout(() => {
                btn.innerHTML = 'Send <i class="fa-solid fa-arrow-right" style="margin-left: 10px;"></i>'
            }, 3000);
        }, function(error) {
           console.log('FAILED...', error)
        });

}