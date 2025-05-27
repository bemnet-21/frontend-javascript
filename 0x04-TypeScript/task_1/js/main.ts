interface Teacher {
    readonly firstName: string
    readonly lastName: string
    fullTimeEmployee: boolean
    yearsOfExperience?: number
    location: string
    [key: string]: any
}

interface Directors extends Teacher {
    numberofReports: number
}

interface printTeacherFunction {
    (firstName:string, lastName:string): string
}

const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => `${firstName[0]}. ${lastName}`


interface Student {
    firstName: string
    lastName: string
    displayName(): string
    workOnHomework(): string
}

class StudentClass implements Student {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(){
        return "Currently Working"
    }
    displayName() {
        return this.firstName
    }
}
