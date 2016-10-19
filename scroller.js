// // init controller
// var controller = new ScrollMagic.Controller();
//
// // define movement of panels
// var wipeAnimation = new TimelineMax()
// .to("#slideContainer", 1,   {x: "-75%"})
//
// // create scene to pin and link animation
// new ScrollMagic.Scene({
//   triggerElement: "#pinContainer",
//   triggerHook: "onLeave",
//   duration: "500%"
// })
// .setPin("#pinContainer")
// .setTween(wipeAnimation)
// .addIndicators()
// .addTo(controller);
console.clear();
console.log("ScrollMagic v%s loaded", ScrollMagic.version);

// init
var controller = new ScrollMagic.Controller();

// add scene for pin
var scene = new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "300%"
})
.setPin("#pinContainer")
.addIndicators()
.addTo(controller); // add indicators (requires plugin)

// add scenes for animations
new ScrollMagic.Scene({
  triggerElement: "#triggers #t1",
  triggerHook: "onLeave",
  duration: "100%"
})
.setTween(TweenMax.fromTo("section.panel.two", 1, {
  x: "-100%"
}, {
  x: "0%",
  ease: Linear.easeNone
}))
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
  triggerElement: "#triggers #t2",
  triggerHook: "onLeave",
  duration: "100%"
})
.setTween(new TimelineMax()
.to("section.panel .additionalContent", 1, {
  y: "-100%",
  ease: Linear.easeNone
}) // scroll Content
.fromTo("section.panel.three", 1, {
  x: "100%"
}, {
  x: "0%",
  ease: Linear.easeNone
}) // in from right
)
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


new ScrollMagic.Scene({
  triggerElement: "#triggers #t3",
  triggerHook: "onLeave",
  duration: "100%"
})
.setTween(TweenMax.fromTo("section.panel.four", 1, {
  x: "100%"
}, {
  x: "0%",
  ease: Linear.easeNone
}))
.addIndicators() // add indicators (requires plugin)
.addTo(controller);
