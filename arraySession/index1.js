console.log('Getting_started_for_Array_Session_Day2')
const a = ["john", 'Doe',34,7800,]
b = a.push('Employed') // this will print the length of array after pushing elements into source array
// console.log(b)
// console.log(a)
// confirm whether it's an array or not because typeof gives type as object
// console.log(Array.isArray(a))
// console.log(a instanceof Array)

const obj = {
    name: 'Noman',
    age: 22
}
const arr = [...obj.name] // TypeError: object is not iterable (cannot read property Symbol(Symbol.iterator))
// console.log(arr) // easiest way to convert string into array (Convert into array of strings) now we can perform arrray operations onto that number

const app = arr.splice(2,1)
// console.log(app)
// console.log(arr) // now we have removed "m" from above string that is "Noman" now it's "Noan" to convert back it into string use toString() methid
const str = ''+arr
// console.log(str)

// let name = 'N,o,m,a,n'
// let newName = str.split(",").join("");
// console.log(newName)

// Convert first letter into UPPERCASE and rest into lowercase
// const letter = 'nomaan '
// const upp = letter[0].toUpperCase() + letter.slice(1)
// console.log(upp)


// Function to convert first letter of a string into capital letter
const capFirst = (str2)=>{
    return str2[0].toUpperCase()+ str2.slice(1).toLowerCase()
}
// console.log(capFirst('noman'))

// Step by step way to capitalize each word in a sentence

const sent = 'my name is shaikh noMan'
// const sent = 88787877

const words = sent.split(' ').map(capFirst);

// const capital = words.join(' ')

// console.log(sent)
// console.log(words)
// console.log(capital)

// Function to capitalize eacj=h word in a sentence

const capitalizeEach = (str1)=> str1.split(' ').map(capFirst).join(' ')
// console.log(capitalizeEach(sent))

const aa = new Array(5) // creates an Array length of 5
// console.log(aa.length)
bb=aa.push(09)
// console.log(bb)
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 
// The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.
