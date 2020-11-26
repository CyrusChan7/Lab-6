const courseList = [
    {code: "ACIT 1620", name: "Web Fundamental Technologies", id: 1620},
    {code: "MATH 1310", name: "Technical Math for IT", id: 1310},
    {code: "ACIT 1515", name: "Scripting for IT", id: 1515}
]


let userDigits = prompt("Please enter a 4-digit number:");

for (let i = 0; i < courseList.length; i++) {
    if (userDigits == courseList[i].id) {
        console.log("Yes I am taking the course: " + courseList[i].code + " - " + courseList[i].name);
        break;
    } else {
        courseList.push( {code: userDigits, name: null, id: userDigits} );
        console.log("New entry added successfully.");
        break;
    }
}


// Comment out when not debugging
console.log("Debug");
for (let i = 0; i < courseList.length; i++) {
    console.log(courseList[i]);
}
