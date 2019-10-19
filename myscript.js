function addListMember()
{ 
    let newLi = newEl.value;
    if(newLi!="")
    {
        let ul = document.querySelector("ul#mylist");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(newLi));
        ul.appendChild(li);
    }
    
}

let newEl = document.querySelector("#newEl");
let el = document.querySelector("#newElement");
el.addEventListener("click", addListMember);