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
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
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
console.log(genderNeutral)