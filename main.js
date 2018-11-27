/*****************************************************************************************
* Part 2
****************************************************************************************/
var employees = [
        {first: "Amanda", last: "Byron", group: "Sales"},
        {first: "Ye", last: "Xia", group: "Receiving", nameOrder: "reverse"},
        {first: "Miltiades", last: "Crescens", group: "Sales"},
        /*...don't foget to account for other entries of the same form, but with different group names.....*/
    ];

// Part 2 Answer Here

const departmentSort = employees.reduce( (acc, employee) => {
    const { group, first, last } = employee
    const person = {
        name: `${first} ${last}`
    }

    if (!acc[group]) {
        acc[group] = [];
        acc[group].push(person)
    } else {
        acc[group].push(person);
    }

    return acc;
}, {})

console.log(departmentSort)

/*****************************************************************************************
* Bonus
****************************************************************************************/

// Bonus Anwser Here
