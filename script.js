var    trigger:"#page h1",
        scroller:"body",
        // markers:true crsr=document.querySelector("#cursor")
var cursr=document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function (dets) {
    console.log("Hey.y");
    crsr.style.left =dets.x+30+"px"
    crsr.style.top=dets.y+"px" 
    cursr.style.left =dets.x-190+"px"
    cursr.style.top=dets.y-190+"px"
})

document.querySelectorALL("#nav h4")
    h4all.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            crsr.style.scale=3
            crsr.style.border="1px solid #fff"
            crsr.style.backgroundColor="transparent"

        })
        elem.addEventListener("mouseleave",function(){
            crsr.style.scale= 1
            crsr.style.border="0px solid #95C11E"
            crsr.style.backgroundColor="transparent"

        })
    })


gsap.to("#nav", {
    backgroundColor : "#000",
    height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        markers:true,
        stat:"top -30%",
        end:"top -80%",
        scrub:2,
    }
})

gsap.from("#about-us img,#about-us-in"{
    y:90,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        // scroller:"body"
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top55%",
        scrub:3,

    }

}) 
gsap.from(".carding",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".carding",
        // scroller:"body"
        scroller:"body",
        markers:true,
        start:"top 70%",
        end:"top65%",
        scrub:1,

    }

})
gsap.from("colon1",{

    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:4,

    }
})
gsap.from("colon2",{

    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon2",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"top 45%",
        scrub:4,

    }
})

gsap.from("#page4 h1",{

    y:50,
    
    scrollTrigger:{
    
        start:"top 60%",
        end:"top 45%",
        scrub:3,
    
    }

})
