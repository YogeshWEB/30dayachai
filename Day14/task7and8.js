class person{
    firstname;
    lastname;
    constructor(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFullName(){
        console.log(this.firstname,this.lastname)
    }
    setName(firstname,lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let p1 = new person("Yogesh","Kumar")
p1.getFullName();
p1.setName("jhon","Doe");
p1.getFullName()