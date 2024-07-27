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
}
person.prototype.UpdateAge = function(age){
    this.age=age;
}
let me = new person("yogesh",23);
me.greet();

me.UpdateAge(14);
me.greet()
class student extends person{
    studentid;
    constructor(studentid,name,age){
        super(name,age)
        this.studentid = studentid
    }
    getId(){
        console.log(this.studentid);
    }
}

let newstudent = new student(1,"jhon",15);
newstudent.greet();
newstudent.getId();

student.prototype.greet = function(){
    console.log(`hello ${this.name} your age is ${this.age} and you are a student`);
}

newstudent.greet()

person.staticgreet = function(){
    console.log("hello nice to meet you");
}

person.staticgreet()
