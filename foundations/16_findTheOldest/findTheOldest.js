const findTheOldest = function (peopleArr) {
    const currentYear = new Date().getFullYear();
    const length = peopleArr.length;

    // using sort
    return peopleArr
        .map(function (people) {
            return {
                name: people.name,
                yearOfBirth: people.yearOfBirth,
                yearOfDeath: people.yearOfDeath,
                age:
                    people.yearOfDeath === undefined
                        ? currentYear - people.yearOfBirth
                        : people.yearOfDeath - people.yearOfBirth,
            };
        })
        .toSorted((a, b) => a.age - b.age)[length - 1];
};

// console.log(
//     findTheOldest([
//         {
//             name: "Carly",
//             yearOfBirth: 1066,
//         },
//         {
//             name: "Ray",
//             yearOfBirth: 1962,
//             yearOfDeath: 2011,
//         },
//         {
//             name: "Jane",
//             yearOfBirth: 1912,
//             yearOfDeath: 1941,
//         },
//     ])
// );

// Do not edit below this line
module.exports = findTheOldest;
