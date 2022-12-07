const employees = [
    {
        empId: 173824,
        name: "Vaibhav Sharma",
        title: "Programmer Analyst",
        companyName: "Cognizant",
        salary: 3426523,
        department: {
            depName: "AI",
            mgrId: 01
        },
        doj: new Date("2022-04-25"),
        getServiceYears: function () {
            let date = new Date()
            return (date.getFullYear() - this.doj.getFullYear())
        }
    },
    {
        empId: 4352234,
        name: "Archit Dhawan",
        title: "Software DEveloper",
        companyName: "Cognizant",
        salary: 987263,
        department: {
            depName: "R&D",
            mgrId: 02
        },
        doj: new Date("2012-04-25"),
        getServiceYears: function () {
            let date = new Date()
            return (date.getFullYear() - this.doj.getFullYear())
        }
    },
    {
        empId: 678573,
        name: "Arjun Verma",
        title: "DevOps",
        companyName: "Cognizant",
        salary: 439785,
        department: {
            depName: "IoT",
            mgrId: 03
        },
        doj: new Date("2021-02-20"),
        getServiceYears: function () {
            let date = new Date()
            return (date.getFullYear() - this.doj.getFullYear())
        }
    }
]

employees.forEach(emp => {
    console.log(emp)
    console.log(emp.getServiceYears())
})