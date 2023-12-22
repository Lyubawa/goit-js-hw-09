"use strict"

const feedbackForm = document.querySelector(".feedback-form");
const textareaMessage = feedbackForm.querySelector("textarea");
const inputEmail = feedbackForm.querySelector("email");
const localStorageKey = "feedback-form-state";

try {
    const initialFormData = JSON.parse(localStorage.getItem(feedbackForm));
    Array.from(form.elements).forEach(element => {
        const valueStorage = initialFormData[element.name];
        if (valueStorage) {
            element.value = valueStorage;
}
    })
} catch (error) {
    console.error("PARSE ERROR");
}
feedbackForm.addEventListener("input", event => {
    const formData = new FormData(feedbackForm);
    const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value.trim();
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




// const userForm = {
//     email: "",
//     message: "",
//   };

// if (localStorage.getItem(localStorageKey)) {
//     const initialFormData = JSON.parse(localStorage.getItem(localStorageKey));
//     inputEmail.value = initialFormData.email;
//     textareaMessage.value = initialFormData.message;
//     userForm.email = initialFormData.email;
//     userForm.message = initialFormData.message;
// };