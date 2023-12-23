"use strict"

const feedbackForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

const { email, message } = feedbackForm.elements;

let initialFormData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

try {
    if (initialFormData) {
        email.value = initialFormData.email || "";
        message.value = initialFormData.message || "";
    }
}
catch (error) {
    console.error("PARSE ERROR");
}

feedbackForm.addEventListener("input", event => {
    initialFormData[event.target.name] = event.target.value.trim();
    localStorage.setItem(localStorageKey, JSON.stringify(initialFormData));
});

feedbackForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!initialFormData.email || !initialFormData.message) { 
        alert("Fill all the fields");
        return;
    };
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
    console.log(initialFormData);
    initialFormData = {};
});
