// Top 50 Interview Programs -> 1. Fibonacci series

series = (range) => {
    let num1 = 0, num2 = 1, num3;
    console.log(num1, ` `, num2)

	for (let index = 2; index < range; index++){
        num3 = num1 + num2
		console.log(` `, num3)
		num1 = num2
		num2 = num3
    }
}

series(8)