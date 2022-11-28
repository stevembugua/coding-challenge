const calculate =document.querySelector(".Areaofinput")
const submitSpeed = document.querySelector(".submitWork")

submitSpeed.addEventListener("click",()=>{
  speedDetector(parseInt(calculate.value,10));
});

const speedDetector = (speed) => {
  if(!(speed<0)){
    //checks if speed is above 12points
  if ((speed - 70) / 5 > 12) {
    alert("licence suspended");
  }
  //checks if speed is less than 70
  if (speed < 70) {
    alert("ok");
    //returns a point is speed is above the required by 5km/h
  } else {
    alert("points: " + (speed - 70) / 5);
  }else{
    alert("Invalid speed.Input is from 0km/h")
};
