function worldRecord(input){
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let secondsPerMeter = Number(input.shift());
   
    let swimTime = distance*secondsPerMeter;
    let timeAdd = Math.floor(distance / 15) * 12.5;
    let allTime = swimTime + timeAdd;
 
   
    if (record > allTime){
    console.log(`Yes, he succeeded! The new world record is ${allTime.toFixed(2)} seconds.`)
  } else {
    let neededTime = allTime - record;
    console.log(`No, he failed! He was ${neededTime.toFixed(2)} seconds slower.`)
  }
  }
timePlus([
    1,
    46
    


 
])