var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
menuicon.addEventListener("click",function(){
    sidenav.style.right=0
})

var close=document.getElementById("close")
close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})


//search function 

    
var search=document.getElementById("search")
var productcontainer=document.getElementById("productcontainer")
var productlist=productcontainer.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredvalue=event.target.value.toUpperCase()
    for(var count=0;count<productlist.length;count=count+1)
    {
        var productname=productlist[count].querySelector("h1").textContent
        if(productname.toUpperCase().indexOf(enteredvalue)==-1)
        {
            productlist[count].style.display="none"
        }
        else
        {
            productlist[count].style.display="block"
        }
    }
})