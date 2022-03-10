function show_list() {
    var code = document.querySelector(".code");
    

    if (code.style.display == "flex") {
        code.style.display = "none";
    } else {
        code.style.display = "flex";
    }
}
document.querySelector(".dmenu").addEventListener("click", function() {
   var show = document.querySelector(".logos-info");
//    console.log(s);
   show.classList.toggle("show");
   var c = document.getElementsByClassName("c");
   for(var i=0; i<c.length; i++)
   c[i].style.display='flex';
})