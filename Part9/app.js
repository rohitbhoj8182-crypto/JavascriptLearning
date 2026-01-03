// // // //Dom manipulation -> is body
// // // //1. select element from html
// // // //2. make chanes html css attribute


// // // //Slecting Element
// // // let head = document.getElementById("head");
// // // console.log(head)

// // // let trap = document.getElementsByClassName("tope");
// // // console.log(trap[1])

// // // //query selector

// // // let que = document.querySelector("#head");
// // // console.log(que)

// // // //query selector all 

// // let name = document.querySelectorAll(".name");


// // //maniuplation Start From here
// // console.dir(name);

// // name[0].textContent = "hi Rohit kaisa hai";
// // name[1].textContent = "hi Rohit kaisa hai";
// // name[2].textContent = "hi Rohit kaisa hai";



// // //innerhtml innertext innercontent


// // //change attribute
// // let a = document.querySelector("a");
// // console.log(a.href)

// // //attribute setting
// // a.setAttribute("href","#");

// // //getAttributes


// // console.log(a.getAttribute("href"));
// // //remove attribute
// // a.removeAttribute("href");


// //Dynamic Dom maniuplation

// //1. Creating Element 
// let h1 = document.createElement("h1");
// h1.textContent="Hi Rohit";

// //appending in screen
// document.body.appendChild(h1);

// //prepend -> baad mai add karna first element
// let img  = document.createElement("img");
// img.setAttribute("src","https://imgs.search.brave.com/98iAqFQu5_ixzIms9nnOi2CZLhA5eDkyekT62JuIH5A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9wbGF5/LWxoLmdvb2dsZXVz/ZXJjb250ZW50LmNv/bS90ekFTVmdRRXBD/bEw4NzNUWno4am1M/MnpjYXhIYkdkTVJY/NnNEZnMxMGpGTlJQ/LUFBYjZlRTNPd3d6/UmlGUzg5elZwcT13/NTI2LWgyOTYtcnc");
// document.body.prepend(img);

// //remove child

// document.body.removeChild(img);


// //updating style -> changing css using js

// h1.style.color = "red";


// //.add -> use to add classlist
// //.toogle -> agar nhi hai laga do agar hai tho hata do

// let arr = document.querySelectorAll("li");

// for(let i  = 0 ; i< arr.length ; i++){
//     console.log(arr[i].innerText);
// }

// arr.forEach(function (val) {
//     console.log(val.innerHTML);

//     // create div
//     let div = document.createElement("div");
//     div.classList.add("box"); // safe class name
//     div.style.backgroundColor = "yellow";
//     div.style.height = "200px";
//     div.style.width = "200px";

//     // create h1
//     let h1 = document.createElement("h1");
//     h1.textContent = val.innerText;

//     // append h1 inside div
//     div.appendChild(h1);

//     // append div to body
//     document.body.appendChild(div);
// });
