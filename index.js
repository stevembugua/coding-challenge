const calculate =document.querySelector(".Areaofinput")
const submitSpeed = document.querySelector(".submitWork")

submitSpeed.addEventListener("click",()=>{
  speedDetector(parseInt(calculate.value,10));
});

const speedDetector = (speed) => {
  if ((speed - 70) / 5 > 12) {
    alert("licence suspended");
  }
  if (speed < 70) {
    alert("ok");
  } else {
    alert("points: " + (speed - 70) / 5);
  }
};
