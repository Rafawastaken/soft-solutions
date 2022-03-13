let windownSize = window.innerWidth;

const sphere_span = document.querySelector(".content-sphere");

const myTags = [
  "Python",
  "HTML",
  "CSS",
  "BootStrap",
  "React",
  "Tailwind",
  "Django",
  "Flask",
  "Pandas",
  "NumPy",
  "Selenium",
  "BS4",
  "OpenCV",
  "Arduino",
  "Raspberry",
  "Espressif",
  "NodeJS",
  "MDB",
  "SqlLite",
  "Firebase",
  "TensorFlow",
];

function createSphere() {
  let size = 0;
  if (windownSize < 250) {
    size = 100;
  } else if (windownSize > 250 && windownSize <= 480) {
    size = 140;
  } else if (windownSize >= 500 && windownSize <= 1024) {
    size = 150;
  } else {
    size = 220;
  }

  var tagCloud = TagCloud(sphere_span, myTags, {
    radius: size,
    maxSpeed: "slow",
    initSpeed: "slow",
    direction: 135,
    keep: true,
  });

  return tagCloud;
}

createSphere();
