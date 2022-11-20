console.log('Getting_started_for_Array_Session')
const mdArry = [
    ['Noman',20,'male','S/W Engg'],
    ['yash',23,'male','Data_Analyst'],
    ['Anu',25,'female','B-tech'],
    ['DX',34,'Male','Black_Developer']
]
// console.log((mdArry.push(['John',90,'male','Engg'])))// add element inside an array
// console.log(mdArry.pop())
// console.log(mdArry[0].push('Mumbai')) // add elements to inside array
// console.log(mdArry[0].pop())
// console.log(mdArry[0].length) // Find length of inside array present in it.
// console.log(mdArry[0])// accessing elements of an array
// console.log(mdArry[0][0]) // accessing elements within an array
// console.log(mdArry[0][0][2]) // accessing elements within an array heere we can access further more because its a string
// console.log(mdArry[0][1][1]) // we can't access the inner element in case of number because its a number and number can't be further sub divided
// console.log(mdArry.shift())
// console.log(mdArry.unshift(['Noman',20,'male','S/W Engg']))
let a =mdArry[2]=['Shru',22,'female','Js S/W Developer']
// let a =mdArry[0][3]='Js S/W Engg'
// console.log(mdArry)
// delete mdArry[2] // it will give the deleted memory as undefined
// console.log(mdArry[0])
// let b = mdArry[1][0].slice(1,2) // Slice creates a new array it does not manipulates the source array
// console.log(mdArry[1][0]='Yash_Jain')
// console.log(mdArry)
// let c = "Mihir"
// let d = Array.from(c)

// console.log(d)
// console.log(d.splice(2,1))
// const e = d.toString()
// const f = e.replace(/,/g,"") // in this our case the regex exp on replace method will this is firrst arg in replace (first arg " /, " find " , " in above string " /g " and /g will do it globally) and than  2nd arg in replace method(3rd arg "") will replace willnothing (”) in our case.
// console.log(f)
// for (let i = 0; i < mdArry.length; i++) {
//     const element = mdArry[i];
//     // console.log(i)
//     // console.log(element)// printing array elements 

//     for (let j = 0; j < mdArry[i].length; j++) {
//         const element = mdArry[i][j];
//         // console.log(j) // indexing each elements within an array
//         // console.log(element) // printing eleemts within an array
//     }
// }

// console.log(mdArry[3].indexOf('Male'))
// console.log(mdArry[3])
// console.log(mdArry[2])
// console.log(mdArry)
// const index = (id,arr)=>{
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[i][j]===id)
//             {return i}
//         }
        
//     }
//     return -1
// }
// console.log(index('Data_Analyst',mdArry))

const myInt = 3248732;

// 1st Method to convert Numebr into an Array

// const myFunc = num => Number(num);

// const conNumToStr = myInt.toString()
// console.log(conNumToStr)
 
// const intArr = Array.from(conNumToStr, myFunc);// first parameter is to convert number into string 
//                                                // now 2nd parameter is will convert string into number and Than into an Array of Numbers
// // Print the result array
// console.log(intArr);

// 2nd using Map function

const intArr = String(myInt).split('').map((num)=>{
    return Number(num)
})
// console.log(intArr)

// 3rd using reduce function
const temp = ''+myInt // converted into number into string
// console.log(temp)

// spread operator (...)with array name
// expand an array into individual array elements

const myRedArr = [...temp].reduce((acc,n)=>acc.concat(+n),[])
// console.log(myRedArr)

// 3 ways to convert number into String
const num = 564546
// const srtNum = num.toString()
// const strNum = ''+num
// const srtNum2 = String(num)
// console.log(srtNum)
// console.log(strNum)
// console.log(srtNum2)