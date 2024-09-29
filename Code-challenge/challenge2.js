function speedDetector(speed){
    let speedlimit = 70
    let speedlimitBarrier = 5
if (speed < speedlimit){
    console.log('Ok')
} else {
     let extraSpeed = speed - speedlimit
     let demeritPoints = Math.floor(extraSpeed / speedlimitBarrier)
     if (demeritPoints > 12) {
        console.log("License suspended");
    } else {
        console.log(`Demerit Points: ${demeritPoints}`);
    }
  }
}