function emailValidation() {
    const form = document.getElementById('form');
    const eMailConfirmField = document.getElementById(`email_confirm`);
    const element = document.createElement(`p`);
    const message = document.createTextNode("Eメールが一致しません");
    const contentField = document.getElementById("content_field")
    element.appendChild(message);
    element.setAttribute("id", "alert");
    element.classList.add("alert_color")
    eMailConfirmField.addEventListener(`input`, e =>{
        if(form.email.value !== form.email_confirm.value){
            if(!document.getElementById('alert')){
                contentField.before(element);
                eMailConfirmField.classList.add("alert_bg");
            }
        } else{
            eMailConfirmField.classList.remove("alert_bg");
            element.parentNode.removeChild(element);
        }
    });
};
  window.onload = function(){
    emailValidation();
  }