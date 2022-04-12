// implement an timer which will beep after a specified amount of time has passed
// The user can specify an unlimited number of timers using command line argements
// node timer1.js 10 3 5 15 9 

const arg = process.argv.slice(2);
//edge case1. no numbers provided, end 
if(arg.length === 0) {
  return;
}

//edge case 2, 3. negative or NaN
for(const second of arg) {
  if(Number(second) >= 0 && !isNaN(Number(second))){
  setTimeout( () => {
    return process.stdout.write('\007');
  }, Number(second)*1000)
}
}

/*
EDGE CASES
- No numbers are provided : no beep, end immediately
- an input is a negative number : skip the negative 
- an input is NaN : skip the NaN
*/