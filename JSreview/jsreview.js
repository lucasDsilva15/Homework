// SECTION 1 VARIABLES AND DATA TYPES

//A. Q + A

//1. An assignment opperator ( Let,const,var = (your variable) )

//2. we can change variables in multiple ways using conditionals, arithmetic operators, and methods or simply writing a new variable 

//3. we can assign it similarly how we used assignment operators ex: (let newVar = oldVar)

//4. declare = to make the computer aware of a new variable being assigned 
//   assign = to give the variable a key word to call upon that variable later
//   define = define the data type that is being coded (function,object,variable etc)

//5. psuedocoding is processing the logic the computer needs to reach an end goal without actually coding. We use this to give us
// a blueprint of what needs to coded to reach our goal

//6. I believe its different for every problem, simple problems should be quick and can be done in your head, vs longer problems need
// more time to be planned out and define steps for each part of a problem


//B. Strings


//1.
// let firstVariable 

//2. 
// let firstVariable = 'Hello World'

//3.
// let firstVariable = 3

//4. 
// let secondVariable(3) = firstVariable(3)

//5. 
// let secondVariable = "Any String"

//6.
//let second variable(any string) = first Variable ()
// the value of first variable is  3  since firstVariable is = SecondVariable

//7.
// let yourName = "Lucas"
// let message = 'Hello, my name is ' + yourName


// C. BOOLEANS


//1. <
//2. >
//3. ==
//4. ||
//5. && x 4 || (at the end)
//6. ==
//7. ===
//8. < , && or + , ===
//9. * , ===
//10. ==


//D The farm


//1. animal = "cow"

//2. if (animal === "cow"){
//    console.log("mooooo")
//}

//3. 

// let animal = "chicken"
// if (animal === "cow"){
//     console.log("mooooo")
// } else {
//     console.log("Hey! your not a cow")
// }

//4. pushed


// Review E


//1.
// let age = 15

//2.
// if (age >= 16){
//     console.log("Here are the keys")
// } else if (age < 16){
//     console.log("sorry your too young")
// }



// SECTION 2 LOOPS

// A The Basics


//1. 
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }

//2. 
// for (let i = 10; i <= 400; i++){
//     console.log(i);
// }

//3. 
// for (let i = 12; i <= 4000; i+=3){
//     console.log(i)
// }


//B. Get Even


// 1. 
// for (let i = 1; i <= 100; i++){
//         console.log(i);
//}

//2.
// for (let i = 1; i <= 100; i++){
//      if (i %2 == 0){
//     console.log(i + "<-- this number is even");
// } else {
//     console.log(i)
// }
// }


//C. Give me Five


//1
// for (let i = 0; i <= 100; i++){
//      if (i %5 == 0){
//     console.log(" I found a " + i + " High five");
// } 
// }

//2
// for (let i = 0; i <= 100; i++){
//     if (i %5 == 0 && i %3 == 0){
//    console.log(" I found a " + i + " High five!");
//    console.log("I found a " + i + " Three is a crowd")
// } else if (i %3 == 0){
//    console.log("I found a " + i + " Three is a crowd")
// }
// }


//D. Savings Account


//1.
// let sum = 0
// for (i = 1; i <= 10; i++){
//     sum += i
// }
// console.log(sum)

//2.
// let sum = 0
// for (i = 1; i <= 100; i++){
//     sum += i
    
// }
// console.log(sum*2)


//SECTION 3 ARRAYS AND CONTROL FLOW

//A. Talk about it


// 1. Elements

// 2. Yes each item is assigned an index number that ORDERS the elements

// 3. 


//B. Easy Does It


//1. 
//let quotes = ["I love coding -Lucas", "Jade, Rixio, and Teo are the best teachers -Lucas", "Teo has the best backgrounds -Lucas"]


//C. Accessing elements


//1. 
//randomThings[0]

//2.
// randomThings[2] = "world"

//3.
// console.log(randomThings[2])


//D. Change Values


// 1. ourClass[2]

//2. ourClass[4] = "Octocat"

//3. ourClass.push("Cloud city")


//E. Mix it Up

//1.
// myArray.push("Aegon", "Cheese")

//2.
// myArray.shift()

//3.
// myArray.unshift("Bob Marley")

//4.
// myArray.splice(4, 1)

//5.
// myArray.reverse()
// Yes we mutated the area in every step by adding new elements or changing positions of elements. Mutating means to change the 
// original positions of a desired array that has been delcared. the reverse method will not return anything until it is 
// printed in the terminal using console.log() however the array is already mutated once the code is typed even if we dont see it.


//F.Biggie Smalls


//1. & 2.
// let Biggie = 4
//     if (Biggie < 100){
//         console.log("Little Number")
//     } else {
//         console.log("Big Number")
//     }


//G. Monkey in the Middle

//1. & 2. & 3.
// let num = 7
//     if (num < 5){
//         console.log('Little Number')
//     } else if (num > 10){
//         console.log('Big Number')
//     } else {
//         console.log('Monkey')
//     }


//H. Whats in Your Closet


//1. console.log('Kristyn is rocking that ' + kristynsCloset[2] + ' today!')

//2. kristynsCloset.splice(6, 0, 'raybans')

//3. kristynsCloset[2] = 'stained knit hat'

//4. thomsCloset[0][0]

//5. thomsCloset[1][1]

//6.thomsCloset[2][1]

//7.console.log('Thom is looking fierce in a ' + thomsCloset[0][0] + ', ' + thomsCloset[1][1] + ' and ' + thomsCloset[2][1])

//8.thomscloset[1][2] = 'footy pjs'



//SECTION 4 FUNCTIONS   



//1. 
// let printGreeting = function (name){
// return `hello there ${name}`
// }
// console.log(printGreeting('josh'))

//2.
// function printCool(name){
//     return `${name} is cool`
// }
// console.log(printCool('josh'))

//3.
// const calculateCube = num => num*num*num
// console.log(calculateCube(6))

//4.
// let isVowel = function (letter){
//     switch (letter.toLowerCase()){
//         case 'a': 
//             return 'is a vowel'
//         case 'e': 
//             return 'is a vowel'
//         case 'i': 
//             return 'is a vowel'
//         case 'o': 
//             return 'is a vowel'
//         case 'u': 
//             return 'is a vowel'
//         case 'y':
//             return 'sometimes'
//         default:
//             return 'Not a vowel'
//     } 
// }
// console.log(isVowel('Y'))

//5.
// function getTwoLengths (str1, str2){
//     let arr =[]
//     arr.push(str1.length, str2.length)
//     return arr
// }
// console.log(getTwoLengths('Hello', "brother"))

//6.
// const getMultipleLenghts = function (arr){
//     let arr2= []
//     for (let i = 0; i < arr.length; i++){
//         arr2.push(arr[i].length)
//     }
//     return arr2
// }  
// console.log(getMultipleLenghts(['hello', 'what','is', 'up', 'Brother']))

//7.
// function maxOfThree (num1,num2,num3){
//     if (num1 > num2 && num1 > num3){
//         return num1;
//     } else if (num1 < num2 && num2 > num3){
//         return num2;
//     } else {
//         return num3
//     }
// }
// console.log(maxOfThree(10,8,6))

//8.
// const printLongestWord = function (arr){
//     let longest = '';
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i].length > longest.length){
//             longest = arr[i]
//         }
//     }
//     return longest
// }
// console.log(printLongestWord(['BoJack', 'Princess', '8letword', 'Diane', 'word' ]))



//SECTION 5 OBJECTS



//1. & 2.
// let user = {
//     name: 'lucas',
//     email: 'lucasilva15@email.com',
//     age: 23,
//     purchased: []
// }

//3.
// user.email = 'lucasDsilva@email.com'
// user.age++

//4.
// user.location = 'New jersey'


//5.
// user.purchased.push('carbohydrates')
// user.purchased.push('peace of mind')
// user.purchased.push('Merino jodhpurs')
// console.log(user.purchased[2])



//SECTION 6 OBJECT-CEPTION

//1.
// user.friend = {
//     name: 'Garrett',
//     age: '22',
//     location: 'New jersey',
//     purchased: []
// }

//2.
// console.log(user.friend.name)

//3.
// console.log(user.friend.location)

//4.
// user.friend.age = 55

//5.
// user.friend.purchased.push('The One Ring')
// user.friend.purchased.push('A latte')
// console.log(user.friend.purchased[1])


//SECTION 7 LOOPS

//1.
// for (let item in user.friend.purchased){
//     console.log(user.purchased[item])
// }

//2.
// for (let item in user.friend.purchased){
//     console.log(user.friend.purchased[item])
// }



//SECTION 8 FUNCTIONS CAN OPERATE ON OBJECTS



//1.
// const updateUser = function(){
//     user.age++
//     user.name = user.name.toUpperCase()
//     console.log(user)
// }

// console.log(updateUser())

//2.
// const updateUser = function(person){
//     person.age++
//     person.name = person.name.toUpperCase()
//     console.log(person)
// }
// console.log(updateUser(user.friend))



//SECTION 9 CAT COMBINATOR


//1.
let cat1 = {
    name: 'lily',
    breed: 'Persian',
    age: 5
}
// console.log(cat1.name, cat1.breed)

//2.
// let cat2 = {
//     name: 'toby',
//     breed: 'Bengal cat',
//     age: 6
// }

//3.
// let combineCats = (cat1, cat2) => {
//     let catCombo = {
//     name: cat1.name + cat2.name,
//     breed: cat1.breed + '-' + cat2.breed,
//     age: 1
//     }  
//     return catCombo
// }
// console.log(combineCats(cat1, cat2))
// console.log(combineCats(combineCats(cat1 , cat2), combineCats(cat1 , cat2)))

//4.
// console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1,cat2))))

