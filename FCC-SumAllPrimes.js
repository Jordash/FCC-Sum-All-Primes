//Free Code Camp Bonfire - Sum All Primes
//function to check for primes
function isPrime(value) {
    for(var p = 2; p < value; p++) {
        if(value % p === 0) {
            return false;
        }
    }
    return value > 1;
}

function sumPrimes(num) {

  //create empty primes array
  var primes = [];

  //start loop at 3, loop by 2 to skip evens
  for (var i=2; i <= num; i++) {

        //add to array if isPrime returns true
        if( isPrime(i) ){
          primes.push(i);
        }//if isPrime(i)
  }//for i loop

  return num = primes.reduce(function(a,b){
    return a + b;
  });
}

sumPrimes(10);
