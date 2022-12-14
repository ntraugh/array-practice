const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '203',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '151',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// get all characters over 100 mass
const bigBois = characters.filter(char => char.mass > 100)
// console.log(bigBois)

// height less than 200
const shortKings = characters.filter(char => char.height < 200)
// console.log(shortKings)

// get male characters
const genderNeutral = characters.filter(char => char.gender === "male")
// console.log(genderNeutral)


//  get heights that are even
const evenHeight = characters.filter(char => (char.height % 2 == 0 ))
// console.log(evenHeight)

// filter where the name ends in r by using endsWith
const endsR = characters.filter(char => char.name.endsWith("a"))
console.log(endsR)

// map method to get all of the characters first names by splitting them by a space and slicing the array by the first index
const names = characters.map((char) => char.name.split(" ").slice(0,1))
console.log(names)