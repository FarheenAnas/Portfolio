
/*--------------------menu open and close-----------------------------*/
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-200px";
}
/*---------------------------google form ---------------------------*/
const scriptURL = 'https://docs.google.com/spreadsheets/d/1x_Y2FiPn2ITCHtIhU8k2JipF84iyKRMwhtTAkmaUJTI/edit?usp=drivesdk'
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

        
