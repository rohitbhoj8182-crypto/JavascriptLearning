// // // // // // // // // //Most Most Most Important Section 
//event listner and time out
// // // // // // // // // //event -> doing anything {action} in Browser 


// // // // // // // // // //1-> Select the element
// // // // // // // // // let h1 = document.querySelector("h1");


// // // // // // // // // //2-> Set Event Listner
// // // // // // // // // h1.addEventListener("dblclick", function () {

// // // // // // // // //     //Task
// // // // // // // // //    h1.style.color = "red";
// // // // // // // // //    h1.style.fontSize= "7rem";
// // // // // // // // // });

// // // // // // // // // //remove event listner
// // // // // // // // // h1.removeEventListener("dblclick",name {

// // // // // // // // //     //Task
   
// // // // // // // // // });

// // // // // // // // //input
// // // // // // // // let input = document.querySelector("input");

// // // // // // // // input.addEventListener("input",function(e){
// // // // // // // //     console.log(e.data)
// // // // // // // // });

// // // // // // // //change event -> tab chalta hai jab apka input select or text area mai koi cahnge hojae

// // // // // // // let option = document.querySelector("select")
// // // // // // // let h3  = document.querySelector("h3");
// // // // // // // option.addEventListener("change",(val)=>{
// // // // // // //     console.log(val.target.value);
// // // // // // //     console.log(val);
// // // // // // //     h3.textContent = "selected device "+val.target.value;
// // // // // // // });
// // // // // // //

// // // // // // //screen type
// // // // // // window.addEventListener("keydown",(eve)=>{
   
// // // // // //     document.querySelector("h1").textContent = eve.key;
// // // // // // })

// // // // // let card = document.querySelector(".card");

// // // // //lorem*5


// // // // // window.addEventListener("mousemove",(data)=>{
// // // // //     console.log(data.clientX,data.clientY);
// // // // //     card.style.top = data.clientY + "px";
// // // // //     card.style.left= data.clientX + "px";
// // // // // })

// // // // //eventOBJ-> (inside the event )


// // // // //eventBubling -> event nhi mila tho vo parent mai jump karega

// // // // //eventCapturing -> event rub there parent event jump to there parents Listner / hamesha face 1 pahle hoti tha 2nd than. 3rd


// // // // let span = document.querySelector("span");
// // // // let input = document.querySelector("input");

// // // // input.addEventListener("input",(eve) =>{
// // // //     let len = eve.target.value.length;
// // // //     if(20 - len< 0) {
// // // //         span.textContent = 20 -len;
// // // //         span.style.color='red';

// // // //     } else{
// // // //         span.textContent = 20-len ;
// // // //         span.style.color = "green";
// // // //     }
// // // // })



// // // //form Validation

// // // let nm= document.querySelector("#name");
// // // let form = document.querySelector("form");

// // // form.addEventListener("submit", (e) => {
// // //     e.preventDefault();

// // //     if (nm.value.length < 2) {
// // //         document.querySelector("#hide").style.display = "initial";
// // //     } else{
// // //     document.querySelector("#hide").style.display = "none";
// // //     }
// // // }); 

// // // //rgex -> use to check vlidation


// // let email =document.querySelector("#email");
// // let pass = document.querySelector("#pass");

// // let form  = document.querySelector("form");


// // form.addEventListener("submit",(eve)=>{
// //     eve.preventDefault();
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     const passwordRegex = /^.{6,}$/;

// //    let emailans= emailRegex.test(email.value);
// //    let passans = passwordRegex.test(pass.value);

// //    if(!emailans){
// //         document.querySelector("#emailerr").textContent = "email is incoorect";
// //    } 
   
// //    if(!passans){
// //         document.querySelector("#passerr").textContent = "pass is incorrect";
// //    }
// // });

// let email = document.querySelector("#email");
// let pass = document.querySelector("#pass");

// let emailErr = document.querySelector("#emailerr");
// let passErr = document.querySelector("#passerr");

// let form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

    
//     emailErr.textContent = "";
//     passErr.textContent = "";

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     const passwordRegex = /^.{6,}$/;

//     let emailAns = emailRegex.test(email.value);
//     let passAns = passwordRegex.test(pass.value);

//     if (!emailAns) {
//         emailErr.textContent = "Email is incorrect ";
//     }

//     if (!passAns) {
//         passErr.textContent = "Password must be at least 6 characters ";
//     }

//     if (emailAns && passAns) {
//         alert("Form submitted successfully ");
//         form.reset();
//     }
// });


//Time Interval 

//setimeout clear time out

// let count = 10;
// let interval = 1000;
// let pro =setInterval(() => {

//     if(count > 0) {
//        console.log(count--); 
//     } else{
//         clearInterval(pro);
//     }
    
    
// }, interval);


// //simple download process with js
// let bar =document.querySelector(".progress-bar");
// let per =document.querySelector("#percentage");
// const btn = document.querySelector("#downloadBtn");

// let count = 0;
// //i want to complete it in 5 sec
// // setInterval(()=>{
// //     if(count <99){
// //         count++;
// //         bar.style.width = count+"%";
// //     }
// // },30)

// //work in downlod button
// btn.addEventListener("click", () => {
//     let tm = setInterval(() => {
//         if (count <= 99) {
//             count++;
//             bar.style.width = count + "%";
//             per.textContent = count + "%";
//         } else {
//             clearInterval(tm);
//             per.textContent = "Download Complete ";
//         }
//     }, 30);
// });
