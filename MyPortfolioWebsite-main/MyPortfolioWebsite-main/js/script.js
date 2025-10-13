const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
window.addEventListener("load", function() {
    const loader = document.getElementById("loader");
    if (loader) loader.style.display = "none";
});
// For education page
var typed = new Typed(".course-work-auto-type", {
    strings: ["Software Development", "Web Development", "Object Oriented Programming", "Software testing", "Systems Development", "Database Development"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
})

// For Skills Page
var technicalSkillButton = document.getElementById("skill-type-technical")
var developmentButton = document.getElementById("skill-type-development")
var softSkillButton = document.getElementById("skill-type-soft")

technicalSkillButton.addEventListener("click", clickTechnicalSkillButton);
function clickTechnicalSkillButton() {
    technicalSkillButton.classList.add("skill-type-selector-active")
    softSkillButton.classList.remove("skill-type-selector-active")
    developmentButton.classList.remove("skill-type-selector-active")
    document.getElementById("technical-skills").classList.add("display-skills")
    document.getElementById("development-skills").classList.remove("display-skills")
    document.getElementById("soft-skills").classList.remove("display-skills")
}

developmentButton.addEventListener("click", clickDevelopmentButton);
function clickDevelopmentButton() {
    developmentButton.classList.add("skill-type-selector-active")
    softSkillButton.classList.remove("skill-type-selector-active")
    technicalSkillButton.classList.remove("skill-type-selector-active")
    document.getElementById("development-skills").classList.add("display-skills")
    document.getElementById("soft-skills").classList.remove("display-skills")
    document.getElementById("technical-skills").classList.remove("display-skills")
}

softSkillButton.addEventListener("click", clickSoftSkillButton);
function clickSoftSkillButton() {
    softSkillButton.classList.add("skill-type-selector-active")
    technicalSkillButton.classList.remove("skill-type-selector-active")
    developmentButton.classList.remove("skill-type-selector-active")
    document.getElementById("soft-skills").classList.add("display-skills")
    document.getElementById("technical-skills").classList.remove("display-skills")
    document.getElementById("development-skills").classList.remove("display-skills")
}

// For Contact Me page
// Function to validate the form fields
function validateForm(event) {
    event.preventDefault(); // Prevent the form from submitting if validation fails

    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const tel = document.getElementById('tel');
    const company = document.getElementById('company');
    const message = document.getElementById('message');
    const messageBox = document.getElementById('message-box');

    // Clear previous validation messages
    messageBox.classList.add('hide');

    let valid = true;

    // Basic validation checks
    if (name.value.trim() === '') {
        valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.value.trim() === '' || !emailPattern.test(email.value)) {
        valid = false;
    }

    const telPattern = /^[0-9]{10}$/; // Assuming a 10-digit phone number format
    if (tel.value.trim() === '' || !telPattern.test(tel.value)) {
        valid = false;
    }

    if (company.value.trim() === '') {
        valid = false;
    }

    if (message.value.trim() === '') {
        valid = false;
    }

    if (valid) {
        // If everything is valid, submit the form
        document.getElementById('contact-me-form').submit();
        document.getElementById('contact-me-form').reset();
    } else {
        messageBox.classList.remove('hide');
    }


}

// Attach the validation function to the form submit event
document.getElementById('contact-me-form').addEventListener('submit', validateForm);

// For footer
const date = new Date();
const footerYear = document.getElementById('footer-year');
footerYear.textContent = date.getFullYear();
