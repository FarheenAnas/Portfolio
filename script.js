
/*--------------------menu open and close-----------------------------*/
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
/*---------------------------google form ---------------------------*/
const scriptURL = 'https://script.google.com/macros/s/AKfycbzrQXSCc1N6-dR2z3BDtG_Aj2w_xRvtrGU42DG2uNMR7x54nXSFn_cf6g2fd-bDlR9R/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent sucessfully"
                    setTimeout(function(){
                        msg.innerHTML = ""
                    },5000)
                    form.reset()
                })
                .catch(error => console.error('Error!', error.message))
        })

        