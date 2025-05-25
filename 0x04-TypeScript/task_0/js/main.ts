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

const studentList: Student[] = [student1, student2]

const table = document.createElement("table")
table.style.border = "1 solid black"

studentList.forEach((student: Student) => {
    const row = document.createElement("tr")

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName

    const locationCell = document.createElement("td")
    nameCell.textContent = student.location

    row.appendChild(nameCell)
    row.appendChild(locationCell)

    table.appendChild(row)
})

document.body.appendChild(table)
