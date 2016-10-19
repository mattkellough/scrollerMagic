// init controller
var controller = new ScrollMagic.Controller();

var controller = new ScrollMagic.Controller();

// define movement of panels
var wipeAnimation = new TimelineMax()
.to("#slideContainer", 1,   {x: "-75%"})

// create scene to pin and link animation
new ScrollMagic.Scene({
  triggerElement: "#pinContainer",
  triggerHook: "onLeave",
  duration: "500%"
})
.setPin("#pinContainer")
.setTween(wipeAnimation)
.addIndicators()
.addTo(controller);
