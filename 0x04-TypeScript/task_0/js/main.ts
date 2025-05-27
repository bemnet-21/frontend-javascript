interface Student {
    firstName: string
    lastName: string
    age: number
    location: string
}

const student1: Student = {
    firstName: 'Bemnet',
    lastName: 'Abebe',
    age: 20,
    location: 'Adama'
}

const student2: Student = {
    firstName: 'Brad',
    lastName: 'Bellick',
    age: 25,
    location: 'Addis Ababa'
}
const student3: Student = {
    firstName: 'Brad',
    lastName: 'Bellick',
    age: 25,
    location: 'Hawassa'
}

const studentList: Student[] = [student1, student2]

const table = document.createElement("table")
table.style.border = "1px solid black"

const thead = table.createTHead()
const headerRow = thead.insertRow()

const th1 = document.createElement("th")
th1.textContent = "First Name"
th1.style.border = "1px solid black"
th1.style.padding = "5px"
headerRow.appendChild(th1)

const th2 = document.createElement("th")
th2.textContent = "Location"
th2.style.border = "1px solid black"
th2.style.padding = "5px"
headerRow.appendChild(th2)

const tbody = table.createTBody()

studentList.forEach((student: Student) => {
    const row = tbody.insertRow(); 

    const nameCell = row.insertCell();
    nameCell.textContent = student.firstName;
    nameCell.style.border = "1px solid black";
    nameCell.style.padding = "5px";

    const locationCell = row.insertCell(); 
    locationCell.textContent = student.location; 
    locationCell.style.border = "1px solid black";
    locationCell.style.padding = "5px";
})

document.body.appendChild(table)