/* 
1. Remove space from a string
input -> Hello world
putput -> Helloworld
*/

RemoveSpace = (str) => {
  let removedSpaced = str.split(" ").join("")
  return removedSpaced
}

let str = `Hello world`
console.log(RemoveSpace(str))
