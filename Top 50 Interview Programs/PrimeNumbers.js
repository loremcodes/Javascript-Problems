isPrime = (integer) => {
	let flag = 0
    // By defination
	if (integer === 0 || integer === 1){
        return false
    }

	// for other integer
	for (let index = 2; index <= integer / 2; index++){
        if (integer % index === 0){
            flag++
        }
    }

	if (flag === 0)  return true;
}

let result = 4
console.log(isPrime(result))