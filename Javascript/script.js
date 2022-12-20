let menubar = document.querySelector(".menu-bar")
setInterval(()=>{
    // console.log(window.pageYOffset);
    if(window.pageYOffset>0 ){
        menubar.classList.add("show");
    }else{
        menubar.classList.remove("show");
    }
},50)
