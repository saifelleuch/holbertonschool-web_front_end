function countPrimeNumbers() {
    var primes = 0;
    var is_prime = true;
    for (var counter = 2; counter <= 100; counter = counter + 1) {
      is_prime = true;
      var limit = Math.round(Math.sqrt(counter));
      for (var mod = 2; mod <= limit; mod++) {
        if (counter % mod == 0) {
          is_prime = false;
          break;
        }
      }
      if (is_prime) {
        primes = primes + 1;
      }
    }
    return primes;
  }
  var inn = performance.now();
  for (var x = 1; x <= 100; x++) {
    countPrimeNumbers();
  }
  var out = performance.now();
  console.log(
    'Execution time of calculating prime numbers 100 times was ' +
      (out - inn) +
      ' milliseconds.'
  );