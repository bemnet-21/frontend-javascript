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

console.log(printTeacher("John", "Doe"))