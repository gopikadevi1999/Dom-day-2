/*const button= document.createElement("button")
button.setAttribute("type", "button")
button.id="btn"
button.classList.add("btn","btn-danger")
button.innerText="Click here to Wish"
button.addEventListener("click",()=>{
    alert("Good Morning")
})
document.body.append(button)
*/
/*const div = document.getElementById("div1")
div.addEventListener("click",()=>div.style.backgroundColor="red")
div.addEventListener("dblclick",()=>div.style.backgroundColor="black")
*/

// const div = document.getElementById("click");
// div.addEventListener("click",()=>div.style.backgroundColor="red");
// div.addEventListener("dblclick",()=>div.style.backgroundColor="green");
// div.addEventListener("mouseout",()=>div.style.backgroundColor="black");

//form

// function createLabel(tagname, content, attrname, attrvalue) {
//     let label = document.createElement(tagname);
//     label.innerText = content;
//     label.setAttribute(attrname, attrvalue);
//     return label;
// }

// const label1 = createLabel("label", "Email", "for", "email");
// const label2 = createLabel("input", "enter your email", "id", "email");
// const label3 = createLabel("button", "submit", "type", "submit");
// document.body.append(label1, label2, label3);
// label3.addEventListener("click", () => {
//     let res = document.getElementById("email").value
//     console.log(res);
// })

//!Use prompt to read a value from user and display it in the span element.
//*prompt
const button = document.createElement("button");
const span = document.createElement("span");
button.innerText = "Click here";
button.className = "btn";
document.body.append(button, span);
button.addEventListener("click", foo);
function foo() {
  const element = prompt("Enter your value");
  span.innerText = element;
}
