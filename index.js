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
    document.getElementById("x").textContent = int(beta);
    document.getElementById("y").textContent = int(gamma);
    document.getElementById("z").textContent = int(alpha);
}

