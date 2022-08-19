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

// ********MAP*************

// get array of all names
characters.map((char) => console.log(char.name)
)
// get array of all heights
characters.map((char) => console.log(char.height))

// get array for names with heights
characters.map((char) => console.log(char.name + " " + char.height))

// get array of objects with name and height
const nameHeight = characters.map((char) => ({name: char.name, height: char.height}))
console.log(nameHeight)

// get array of all first names using the split method on our name string
const first = characters.map((char) => char.name.split(" ")[0])
console.log(first)

// chaining a filter and map method, getting the gender of the characters above 180 in height
const tallGender = characters.filter(char => char.height > 180).map(char => ({gender: char.gender, name: char.name, height: char.height}))
console.log(tallGender)

const doubleNumber = (arr) => arr.map(num => num * 2)


console.log(doubleNumber([2, 5, 100]))