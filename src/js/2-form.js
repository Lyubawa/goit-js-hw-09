"use strict"

const feedbackForm = document.querySelector(".feedback-form");
const textareaMessage = feedbackForm.querySelector("textarea");
const inputEmail = feedbackForm.querySelector("email");
const localStorageKey = "feedback-form-state";

const userForm = {
    email: "",
    message: "",
  };

if (localStorage.getItem(localStorageKey)) {
    const initialFormData = JSON.parse(localStorage.getItem(localStorageKey));
    inputEmail.value = initialFormData.email;
    textareaMessage.value = initialFormData.message;
    userForm.email = initialFormData.email;
    userForm.message = initialFormData.message;
};


feedbackForm.addEventListener("input", event => {
    const formData = new FormData(feedbackForm);
        formData.forEach((value, key) => {
            userForm.email[key] = value.trim();
            userForm.message[key] = value.trim();
    })
    localStorage.setItem(localStorageKey, JSON.stringify(formObject));
    console.log(formObject);
})
feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    localStorage.removeItem(localStorageKey);

    feedbackForm.reset();
    console.log(initialFormData);
})
