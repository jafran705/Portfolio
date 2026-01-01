// DARK / LIGHT TOGGLE
function toggleMode(){
  document.body.classList.toggle("light");
}

// TYPING EFFECT
const text = "Student | Aspiring Developer";
let idx = 0;
function typing(){
  document.querySelector(".typing").textContent = text.slice(0,idx++);
  if(idx>text.length) idx=0;
}
setInterval(typing,120);

// SCROLL REVEAL
window.addEventListener("scroll",()=>{
  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// PARTICLES JS CONFIG
particlesJS("particles-js", {
  particles: {
    number:{value:60, density:{enable:true,value_area:800}},
    color:{value:"#7bd4ff"},
    shape:{type:"circle"},
    opacity:{value:0.5,random:true},
    size:{value:4,random:true},
    line_linked:{enable:true,distance:150,color:"#7bd4ff",opacity:0.4,width:1},
    move:{enable:true,speed:2,direction:"none",random:false,straight:false,out_mode:"out"}
  },
  interactivity:{
    detect_on:"canvas",
    events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},
    modes:{grab:{distance:200,line_linked:{opacity:0.5}},push:{particles_nb:4}}
  },
  retina_detect:true
});
