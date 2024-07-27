class person{
    name;
    age;
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log("hello ",this.name,"your age is",this.age);
    }
    updategae(age){
        this.age=age;
    }
}

class student extends person{
    studentid;
    static noOfStudent = 0;

    constructor(studentid,name,age){
        super(name,age)
        this.studentid = studentid
        student.noOfStudent++;
    }
    getId(){
        console.log(this.studentid);
    }
    greet(){
        console.log(`hello ${this.name} your age is ${this.age} your id is ${this.studentid} and you are a student`);
    }
    static getNoOfStudent(){
        console.log(student.noOfStudent)
    }
}

let s1= new student(student.noOfStudent,"s1",12)
let s2= new student(student.noOfStudent,"s2",12)
let s3= new student(student.noOfStudent,"s3",12)
s1.greet()
s2.greet()
s3.greet()
student.getNoOfStudent()

