burger = document.querySelector('.burger')
navList = document.querySelector('.nav-list')
navbar = document.querySelector('.navbar')

burger.addEventListener('click', ()=>{
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-class-resp');

})





darkBtn = document.querySelector('.darkbtn')
darkmode = document.querySelector('.body') 
darkButton = document.getElementById('darkButton');

darkBtn.addEventListener('click', ()=>{
    darkmode.classList.toggle('body');
    if ( darkmode.classList.contains('body')) {
        darkButton.classList.add('fa-sun');
        darkButton.classList.remove('fa-moon');
        // alert("Enables Darkmode");
    } else {
        darkButton.classList.remove('fa-sun');
        darkButton.classList.add('fa-moon');
        // alert("Dark mode will be disabled");
    }
})


fullContent = document.querySelector('.fullContent')
pbox = document.querySelector('.pbox')

fullContent.addEventListener('click', ()=>{
    pbox.classList.toggle('pbox-full')
})
fullContentSec = document.querySelector('.fullContentSec')
pboxSec = document.querySelector('.pboxSec')

fullContentSec.addEventListener('click', ()=>{
    pboxSec.classList.toggle('pbox-fullSec')
})



fullContentBg = document.querySelector('.fullContentBig')
pboxBig = document.querySelector('.pbox-big')

fullContentBg.addEventListener('click', ()=>{
    pboxBig.classList.toggle('pbox-bgfull')
})
fullContentBgSec = document.querySelector('.fullContentBigSec')
pboxBigSec = document.querySelector('.pbox-bigSec')

fullContentBgSec.addEventListener('click', ()=>{
    pboxBigSec.classList.toggle('pbox-bgfullSec')
})





// var notification
// var interval
// document.addEventListener("visibilitychange", () =>{
//     if(document.visibilityState === "hidden"){
//         const leaveDate = new Date()
//         interval = setInterval(()=>{
//             notification = new Notification("Come Back Please", {
//                 body: `You have been gone for ${Math.round(
//                     (new Date() - leaveDate) /1000
//                 )} seconds`,
//                 tag: "Come Back",
//             })
//         }, 100)
//     }else{
//         if (interval) clearInterval(interval)
//         if (notification) notification.close()
//     }
// });


function emailSend() {

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let address = document.getElementById('address').value;
    let more = document.getElementById('more').value;

    let messageBody = "Name: " + name +
    "<br/> Email: " + email +
    "<br/> Phone Number: " + number +
    "<br/> Address: " + address +
    "<br/> Message: " + more ;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "cdharybibek@gmail.com",
        Password : "F1FBE1FDDD9E7244859883FCDE007A1349BA",
        To : 'cdharybibek@gmail.com',
        From : "cdharybibek@gmail.com",
        Subject : "Personal Portfolio new email found!!",
        Body : messageBody
    }).then(
      message => {
        if(message==='OK'){
            swal("Successful", "Form Submitted!", "success");
        }else{
            swal("Failed", "Some Error Occurred!", "error");
        }
      }
    );
}