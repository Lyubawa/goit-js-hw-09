import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector(".feedback-form");e.querySelector("textarea");e.querySelector("email");const a="feedback-form-state";try{const o=JSON.parse(localStorage.getItem(e));Array.from(form.elements).forEach(r=>{const t=o[r.name];t&&(r.value=t)})}catch{console.error("PARSE ERROR")}e.addEventListener("input",o=>{const r=new FormData(e),t={};r.forEach((c,l)=>{t[l]=c.trim()}),localStorage.setItem(a,JSON.stringify(t)),console.log(t)});e.addEventListener("submit",o=>{o.preventDefault(),localStorage.removeItem(a),e.reset(),console.log(initialFormData)});
//# sourceMappingURL=commonHelpers2.js.map
