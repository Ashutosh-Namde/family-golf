var cursor = document.querySelector("#cursor")
var blur = document.querySelector("#cursorBlur")
document.addEventListener("mousemove",function(dets){
    cursor.style.left = dets.x + "px"
    cursor.style.top = dets.y + "px"
    blur.style.left = dets.x -250 + "px"
    blur.style.top = dets.y-250 + "px"
})


var allh4 = document.querySelectorAll(".nav h4")
   allh4.forEach(elem => {
       elem.addEventListener("mouseenter",function(){
          cursor.style.scale = 3
          cursor.style.border = "2px solid white",
          cursor.style.backgroundColor = "transparent"
          console.log("entered");
          
           
       })
       elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1,
        cursor.style.border = "0px solid",
        cursor.style.backgroundColor = " #95C11E"
         
     })
       
   });

gsap.to(".nav",{
    height:"90px",
    backgroundColor:"black",
    duration: 0.5,
    scrollTrigger:{
        trigger:".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end:"top -11%",
        scrub:3
    }
})
gsap.to(".main",{
    backgroundColor:"black",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers: true,
        start:"top -30%",
        end:"top -80%",
        scrub:2,
    }
})

gsap.from("#aboutus img,#aboutus #text",{
    y:60,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#aboutus",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
       
    }
})


gsap.from(".card",{
    y:60,
    scale:0.8,
    duration:1,
    // stagger:0.4,
    opacity:0,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 50%",
        scrub:3
       
    }
})

gsap.from("#page3 #colon1",{
    y:-70,
    x:-70,
    duration:2,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        // markers:true,
        scrub:5
    }
})

gsap.from("#page3 #colon2",{
    y:70,
    x:70,
    duration:2,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 40%",
        // markers:true,
        scrub:5
    }
})


gsap.from("#page4 h1",{
    y:60,
    duration:1,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        // markers:true,
        scrub:3
    }
})


var alltext = document.querySelectorAll(".textFooter h4")
   alltext.forEach(elem => {
       elem.addEventListener("mouseenter",function(){
          cursor.style.scale = 3
          cursor.style.border = "2px solid white",
          cursor.style.backgroundColor = "transparent"
           
       })
       elem.addEventListener("mouseleave",function(){
        cursor.style.scale = 1,
        cursor.style.border = "0px solid",
        cursor.style.backgroundColor = " #95C11E"
         
     })
       
   });