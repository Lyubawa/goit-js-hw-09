import"./assets/modulepreload-polyfill-ec808ebb.js";const t=document.querySelector(".feedback-form"),s=t.querySelector("textarea"),l=t.querySelector("email"),a="feedback-form-state",o={email:"",message:""};if(localStorage.getItem(a)){const e=JSON.parse(localStorage.getItem(a));l.value=e.email,s.value=e.message,o.email=e.email,o.message=e.message}t.addEventListener("input",e=>{new FormData(t).forEach((r,m)=>{o.email[m]=r.trim(),o.message[m]=r.trim()}),localStorage.setItem(a,JSON.stringify(formObject)),console.log(formObject)});t.addEventListener("submit",e=>{e.preventDefault(),localStorage.removeItem(a),t.reset(),console.log(initialFormData)});
//# sourceMappingURL=commonHelpers2.js.map
