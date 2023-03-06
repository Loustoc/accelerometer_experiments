// var isChromium = window.chrome;
// var winNav = window.navigator;
// var vendorName = winNav.vendor;
// var isOpera = typeof window.opr !== "undefined";
// var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
// var isIOSChrome = winNav.userAgent.match("CriOS");

// checkbrowser: if (isIOSChrome) {
// break checkbrowser;
// } else if(
//   isChromium !== null &&
//   typeof isChromium !== "undefined" &&
//   vendorName === "Google Inc." &&
//   isOpera === false &&
//   isIEedge === false
// ) {
//   break checkbrowser;
// } else { 
//    alert("Please use Chrome, accelerometer functionality is disabled on a number of browsers") 
// }

window.addEventListener(
  "deviceorientation",
  orientationChanged,
  true
);
function orientationChanged(event)
{
    // var beta = event.beta;
    // var gamma = event.gamma;

    // if(beta > 90)
    //     beta = 90;

    // if(beta < -90)
    //     beta = -90;

    // beta += 90;
    // gamma += 90;

    // body.style.backgroundPosition = (x + gamma - add/2) + 'px ' + (y + beta - add/2) + 'px';
    var absolute = event.absolute;
    var alpha = event.alpha;
    var beta = event.beta;
    var gamma = event.gamma;
    document.getElementById("x").textContent = Math.round(beta);
    document.getElementById("y").textContent = Math.round(gamma);
    document.getElementById("z").textContent = Math.round(alpha);
  }
  window.navigator.vibrate(300);

