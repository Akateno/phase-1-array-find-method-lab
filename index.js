//code your solution here


//function superbowlWin(winner){
    //return (winner.year === "W")}
//record.find(superbowlWin);

function superbowlWin(winner) {
    let winningYear = winner.find((winner) => winner.result === "W");
    if (winningYear) {
      return winningYear.year;
    }
  }
 





//function superbowlWin(winner) {
    //for (const records of winner) {
      //if (records.result === "W") {
       //return record.firstName;
     // }
   // }
  //}