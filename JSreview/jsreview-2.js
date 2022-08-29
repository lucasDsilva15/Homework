// JAVASCRIPT REVIEW PART 2


//SECTION 1 EASY GOING 


// for (let i = 1; i <= 20; i++){
//     console.log(i)
// }



//SECTION 2 GET EVEN


// for (let i = 0; i <= 200; i++){
//     if (i % 2 == 0){
//     console.log(i)
//     }
// }



//SECTION 3 FIZZBUZZ

// for (let i = 1; i <= 100; i++){
//     console.log((i%3?'':'fizz')+(i%5?'':'buzz')||i) 
// }
// //first statement checks if i evenly divides into 3 print fizz, second statement
// //checks if i evenly divides into 5 print buss, the or symbolizes if neither of these are true return i, the plus sign signifys,
// // if both statements are true concatenate fizz and buzz to fizzbuzz
// //thanks rixio office hours :D






//SECTION 4 WILD WILD LIFE


//1.
// plantee[2] = 5001

//2.
//wolfy[3] = 'Gotham City'

//3.
//dart[3] = "Upside Down, Hawkins"

//4.
//wofly[0] = 'Gameboy'



//SECTION 5 YELL AT THE NINJA TURTLES


//1.
// let ninjaTurtles = ['Donatello', 'leonardo', 'Raphael', 'Michaelangelo']

// //2.
// for (let element of ninjaTurtles){
//     console.log(element.toUpperCase())
// }



//SECTION 6 METHODS REVISTED



// const favMovies = ["jaws", "the fellowship of the ring", "howls moving castle", "django unchained"]

// //1
// favMovies.sort()

// // it alphabettically sorted the movies, it is now permanently altered as long as the code stays in.

// //2. 
// favMovies.pop()

// //3
// favMovies.push("guardians of the galaxy")


// //4
// favMovies.reverse()

// //5
// favMovies.shift()

// //6.
// favMovies.unshift('Up')
//unshift does not return anything unless specified in the parantheses such as "up"

//7.
// favMovies.splice(3, 1, 'avatar')

//8
// let half = favMovies.length/-2
// let x = favMovies.slice(0, half)
//slice does not change the array rather it creates a new array that we can save as a different variable

//9.
// console.log(x)
//By storing our new array as x we have created an array that is similar to the previous array but not the same
//slice does not alter the array but rather creates a copy.

//10.
// console.log(favMovies)

//11
// console.log(favMovies[4])
//we receive undefined for an index in an array that is no longer present in the array

//12.
//const does not allow us to reassign a varriable however it does not prevent it from being mutated.
//(after some research however developers will use const to signify to others that they dont want items in objects/arrays
//to be mutated. and let will be used if they want to reassign or mutate elements in their objects/arrays)



//SECTION 7 WHERE IS WALDO



// const whereIsWaldo = [["timmy", "frank"],
//                      "eggbert",
//                     ["lucinda", "jacc", "neff", "snoop"],
//                     ["petunia", ['baked goods', 'waldo']]];

// //1.
// whereIsWaldo.splice(1,1)

// //2.
// whereIsWaldo[1][2] = "no one"

// //3.
// console.log(whereIsWaldo[2][1][1])



//SECTION 8 EXCITED KITCHEN


//1. & 2.
// let i = 0
// while ( i < 20){
// let random = Math.ceil(Math.random()*3)
//     if ( i %2 === 0 ){
//         if (random === 1){
//             console.log("...human... why you taking pictures of me")
//         }
//             if ( random === 2){
//                 console.log("...the catnip made me do it...")
//             }
//                 if( random === 3){
//                     console.log("...why does the red dot always get away...")
//                 }
            
//     } else {
//         console.log("Love me, pet me! HSSSSSS!")
//     }
//     i++
// }



//SECTION 9 FIND THE MEDIAN



//1.
// const nums = [14,11,16,15,13,16,15,17,19,11,15,17,11,18,12,17,12,71,18,15,12]

// findMedian = (nums) => {
// nums.sort()
// median = Math.floor(nums.length/2)
// if (nums.length %2 === 0) {
//     median2 = Math.floor(nums.length/2 + 1)
//     let answer = (nums[median] + nums[median2])/2
//     return Math.floor(answer);
//     } else {
//     return Math.floor(nums[median])
//     }
// }
// console.log(findMedian(nums))



//SECTION 10 RETURN OF THE CLOSETS



//
// const kristynsCloset = [
//     'left shoe',
//     'cowboy boots',
//     'right sock',
//     'GA hoodie',
//     'green pants',
//     'yellow knit hat',
//     'mashmallow peeps',
// ]
// const thomsCloset = [
//     [
//         'grey button-up',
//         'dark grey button-up',
//         'light blue button-up',
//         'blue button-up'
//     ]
// ,
//     [
//         'grey jeans',
//         'jeans',
//         'PJs'
//     ]
// ,
//     [
//         'wool mittens',
//         'wool scraf',
//         'raybans'
//     ],
// ]

//1.
// let kristynsShoe = kristynsCloset.shift()
// thomsCloset[2].push(kristynsShoe)
//2.
// console.log(`kristyns first outfit will be ${kristynsCloset[ Math.floor(Math.random()*6)]}, with ${kristynsCloset[ Math.floor(Math.random()*6)]}`)
// console.log(`kristyns second outfit will be ${kristynsCloset[ Math.floor(Math.random()*6)]}, with some ${kristynsCloset[ Math.floor(Math.random()*6)]}`)
// console.log(`kristyns third outfit will be ${kristynsCloset[ Math.floor(Math.random()*6)]}, with some ${kristynsCloset[ Math.floor(Math.random()*6)]}`)

// console.log(`Thoms first outfit will be ${thomsCloset[0][Math.floor(Math.random()*4)]}, and ${thomsCloset[1][Math.floor(Math.random()*3)]} with ${thomsCloset[2][Math.floor(Math.random()*4)]}`)
// console.log(`Thoms second outfit will be ${thomsCloset[0][Math.floor(Math.random()*4)]}, and ${thomsCloset[1][Math.floor(Math.random()*3)]} with ${thomsCloset[2][Math.floor(Math.random()*4)]}`)
// console.log(`Thoms third outfit will be ${thomsCloset[0][Math.floor(Math.random()*4)]}, and ${thomsCloset[1][Math.floor(Math.random()*3)]} with ${thomsCloset[2][Math.floor(Math.random()*4)]}`)

//3.
// kristynsCloset.forEach((element) => console.log(`WHIRRR: Now washing ${element}`))

//4.
// console.log(thomsCloset[0])
// console.log(thomsCloset[1])
// console.log(thomsCloset[2])
    












