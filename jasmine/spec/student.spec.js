import { Student, studentDao, studentService } from './student.js'

let student1 = new Student(1, 'vaibhav', 'v@gmail.com')
let student2 = new Student(2, 'xyz', 'x@gmail.com')
let student3 = new Student(3, 'abc', 'y@gmail.com')

let starr = []
starr.push(student1)
starr.push(student2)
starr.push(student3)

describe('Student testing', () => {
    it('should return all the students', () => {
        let sDao = new studentDao()
        let sService = new studentService(sDao)
        spyOn(sDao, 'findAll').and.returnValue(starr)
        expect(sService.findAllStudent()).toEqual(starr)
    })
    it('should reduce the size of array by 1', () => {
        let size = starr.length
        let sDao = new studentDao()
        let sService = new studentService(sDao)
        spyOn(sDao, 'deleteStudent').and.callFake(function (id) {
            for (let i = 0; i < size; i++) {
                if (starr[i].id === id) {
                    starr.splice(i, 1)
                    break
                }
            }
            return starr.length
        })
        expect(sService.deleteStudentById(3)).toEqual(size - 1)
    })
})