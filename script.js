var menu= document.getElementById("menu")
var ss= document.getElementById("ss")
var symbol=document.getElementById("symbol")
var air=document.getElementById("air")

menu.addEventListener ("click",()=>{
    ss.classList.toggle("remove")
     if (symbol.classList.contains("remove")) {
        symbol.classList.remove("remove")
        symbol.classList.add("show")
        air.classList.add("remove")
        
     }else{
        symbol.classList.remove("show")
        symbol.classList.add("remove")
        air.classList.remove("remove")
     }

})


