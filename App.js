let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = input.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  delbtn.classList.add("delete");

  item.appendChild(delbtn);
  ul.appendChild(item);
  input.value = "";
})

ul.addEventListener("click", function (event) {
  if(event.target.nodeName == "BUTTON") {
    let listitem = event.target.parentElement;
    listitem.remove();
  }
})

// let delbtns = document.querySelectorAll(".delete");
// for (delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     par.remove();
//   })
// }