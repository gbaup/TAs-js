const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Joe",
        yearOfBirth: 1925,
        yearOfDeath: 1974,
    },
    {
        name: "John",
        yearOfBirth: 1988,
        yearOfDeath: 2011,
    },
    {
        name: "Alice",
        yearOfBirth: 1943,
        yearOfDeath: 1975,
    },
    {
        name: "Bob",
        yearOfBirth: 1942,
        yearOfDeath: 1999,
    },
    {
        name: "Eve",
        yearOfBirth: 1991,
        yearOfDeath: 2011,
    },
]

const findOldest = (personas) => {
    let oldest = personas[0]

    for (let i = 1; i < personas.length; i++) {
        const age = personas[i].yearOfDeath - personas[i].yearOfBirth
        if (age > oldest.yearOfDeath - oldest.yearOfBirth) oldest = personas[i]
    }


    return oldest
}

console.log(findOldest(people))
