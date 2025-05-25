var student1 = {
    firstName: 'Bemnet',
    lastName: 'Abebe',
    age: 20,
    location: 'Adama'
};
var student2 = {
    firstName: 'Brad',
    lastName: 'Bellick',
    age: 25,
    location: 'Addis Ababa'
};
var studentList = [student1, student2];
var table = document.createElement("table");
table.style.border = "1 solid black";
studentList.forEach(function (student) {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
    var locationCell = document.createElement("td");
    nameCell.textContent = student.location;
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});
document.body.appendChild(table);
//# sourceMappingURL=main.js.map