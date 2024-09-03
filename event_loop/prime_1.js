function findPrime(num) {
  let i;
  let primes = [2, 3];
  let n = 5;

  function isPrime(n) {
    let i = 1;
    let p = primes[i];
    let limit = Math.ceil(Math.sqrt(n));

    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  }

  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }

  return primes[num - 1];
}

console.log("Calculating Sync Prime...");
const startTime = performance.now();

const nth = 2_000_000;
console.log("Sync Prime is", findPrime(nth));

const endTime = performance.now();
console.log(`Computation took ${endTime - startTime} milliseconds`);
console.log("------");

clearInterval(
  setInterval(() => {
    console.log("Event loop executed");
  }, 1)
);

/*
avoid event lopp blocking by 
long sync ops (streaming, file ops)
timers usage (setImmediate, setInterval, setTimeout, process.nextTick) e.g timers getting created but not destroyed
open sockets to many socket connection 
e.g creating new connection for new API request for intra communication => keep alive the header usage with max connections 
Database connection pool 
DNS queires e.g DNS TTL is to low and we need to refresh very frequently
long awating crypto functions 
compressing functions 
large json parse sync operations
lengthly regex operations
*/
