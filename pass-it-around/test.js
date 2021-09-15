
const fibonacci = (num) => {
    const fibnum = (1+(Math.sqrt(5))) / 2
    const num1 = Math.pow(fibnum, num)
    const num2 = Math.pow((1 - fibnum), num)
    return(Math.round((num1 - num2) / Math.sqrt(5)))
}

console.log(fibonacci(1))
//iterate over sequential fibonacci numbers and returns if number is fibonacci number
const testfib = (num) => {
    let i = 1
    let fib = 0
    let limit = num

    while (fib < limit) {
        fib = fibonacci(i)
        i++
        if (fib == num) {
            console.log(fib + " is a fib")
            return true;
        } else {
            console.log(fib + " is not a fib")
        }
    }
}

// console.log(fibonacci(15))

console.log(typeof(testfib(20)))