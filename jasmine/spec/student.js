export class Student {
    constructor(id, name, email) {
        this.id = id
        this.name = name
        this.email = email
    }
}

export class studentDao {
    findAll() {
        return null
    }
    deleteStudent(id) {
        return null
    }
}


export class studentService {
    constructor(stud) {
        this.stud = stud
    }
    findAllStudent() {
        return this.stud.findAll()
    }

    deleteStudentById(id) {
        return this.stud.deleteStudent(id)
    }
}

// module.exports = { Student, studentDao, studentService }