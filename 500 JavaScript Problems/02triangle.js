/* 
2.  Write a function that takes the base and height of a triangle and returns its area
input -> area(3, 4)
output -> 6
*/
area = (base, height) => {
    let result = (base * height) / 2
    return result
}

console.log(area(3, 4))