window.addEventListener(
  "deviceorientation",
  orientationChanged,
  true
);

const acl = new Accelerometer({ frequency: 60 });
acl.addEventListener("reading", () => {
  console.log(`Acceleration along the X-axis ${acl.x}`);
  document.getElementById("x").textContent = acl.x;
  console.log(`Acceleration along the Y-axis ${acl.y}`);
  document.getElementById("y").textContent = acl.y;
  console.log(`Acceleration along the Z-axis ${acl.z}`);
  document.getElementById("z").textContent = acl.z;
});
acl.start();
