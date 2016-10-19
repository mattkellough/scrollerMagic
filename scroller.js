// function fadeIn(){
//   TweenMax.fromTo(".lorem.after", 3,{
//     autoAlpha: 0
//   },{
//     autoAlpha: 1,
//     yoyo:true,
//     repeat:-1
//   })
// }
// init
var controller = new ScrollMagic.Controller();

// add scene for pin
var scene = new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "312.5%",
  offset: -85
})
.setPin("#pinContainer")
.addIndicators()
.addTo(controller); // add indicators (requires plugin)

// add scenes for animations
new ScrollMagic.Scene({
  triggerElement: "#triggers #t1",
  triggerHook: "onLeave",
  duration: "30%"
})
.setTween(TweenMax.fromTo("section.panel.one", 1, {
  width: "100%"
}, {
  width: "0%",
  ease: Linear.easeNone
}))
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#triggers #t2",
  triggerHook: "onLeave",
  duration: "30%"
})
.setTween(new TimelineMax()
.to("section.panel .additionalContent", 1, {
  y: "-100%",
  ease: Linear.easeNone
}) // scroll Content
.fromTo("section.panel.two", 1, {
  width: "100%"
}, {
  width: "0%",
  ease: Linear.easeNone
}) // in from right
)
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


new ScrollMagic.Scene({
  triggerElement: "#triggers #t3",
  triggerHook: "onLeave",
  duration: "30%",
})
.setTween(TweenMax.fromTo("section.panel.three", 1, {
  width: "100%"
}, {
  width: "0%",
  ease: Linear.easeNone
}))
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


new ScrollMagic.Scene({
  triggerElement: "#triggers #t4",
  triggerHook: "onLeave",
  duration: "40%"
})
.setTween(TweenMax.fromTo(".lorem.after", 2.5,{
  autoAlpha: 0
},{
  autoAlpha: 1
}))
.addIndicators() // add indicators (requires plugin)
.addTo(controller);
