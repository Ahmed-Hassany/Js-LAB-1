/* function addListMember()
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
el.addEventListener("click", addListMember); */
/* 
let el1 =document.querySelector("#mylist li");
el1.addEventListener("click",function(){el1.selected.setAttribute("class","active");let haha = document.querySelector(".active");console.log(haha);});
 */

let el1 =document.querySelectorAll("#mylist li");
for (var i = 0; i < el1.length; i++) {
    el1[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
    
        
        if (current.length > 0) {
          current[0].className = current[0].className.replace("active", "");
        }
    
        this.className += " active";
    });
    }


let el2 =document.querySelectorAll("#yourlist li");
for (var i = 0; i < el2.length; i++) {
    el2[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        if (current.length > 0) {
          current[0].className = current[0].className.replace("active", "");
        }
    
        this.className += " active";
    });
    }

    

    let btn =document.querySelector("#btn");
    btn.addEventListener("click",function(){
        let a =document.querySelector("#mylist .active");
        //console.log(a);
        if(a!=null)
        {
            let ul = document.querySelector("ul#yourlist");
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(a.textContent));
            ul.appendChild(li);
            a.remove();
        }
        el2 =document.querySelectorAll("#yourlist li");
        
    })

    
    let btn2 =document.querySelector("#btn_remove");
    btn2.addEventListener("click",function(){
        let a =document.querySelector("#yourlist .active");
        if(a!=null)
        {
            let ul = document.querySelector("ul#mylist");
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(a.textContent));
            ul.appendChild(li);
            a.remove();
        }
        el1 =document.querySelectorAll("#mylist li");
    })

