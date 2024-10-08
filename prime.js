function* generatePrimes(limit) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    let number = 2; // Start checking from the first prime number
    while (number <= limit) {
        if (isPrime(number)) {
            yield number; // Yield prime number
        }
        number++;
    }
}

// Usage example
const primeGenerator = generatePrimes(50);

for (const prime of primeGenerator) {
    console.log(prime); // Logs prime numbers up to 50
}


