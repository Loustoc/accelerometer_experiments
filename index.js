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
// var beta = event.beta;
    // var gamma = event.gamma;

    // if(beta > 90)
    //     beta = 90;

    // if(beta < -90)
    //     beta = -90;

    // beta += 90;
    // gamma += 90;

    // body.style.backgroundPosition = (x + gamma - add/2) + 'px ' + (y + beta - add/2) + 'px';
var init=0;
var x_mem;
var y_mem;
var z_mem;

var bouteille = null;
var boisson = null;

function getelements(){
  bouteille = document.getElementById("bouteille").contentDocument;
  boisson = bouteille.getElementById("boisson");
}
window.addEventListener(
  "deviceorientation",
  orientationChanged,
  true
);
function orientationChanged(event)
{
  var absolute = event.absolute;
  var beta = event.beta; //x
  var gamma = event.gamma; //y
  var alpha = event.alpha; //z

    // if (!init==0){
    //   if (abs(x_mem - beta)>10){
    //     boisson.style.transform = "rotate(160deg)";
    //   }
  
    // }
    // else{
    //  init=1;
    // }
    x_mem = beta;
    y_mem = gamma;
    z_mem = alpha;
    document.getElementById("x").textContent = Math.round(beta);
    document.getElementById("y").textContent = Math.round(gamma);
    document.getElementById("z").textContent = Math.round(alpha);
  }

