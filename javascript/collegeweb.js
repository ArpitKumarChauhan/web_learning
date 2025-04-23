let Data="Hello everyone";
class user{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    viewsData(){
        console.log("Website data : ",Data);
    }
}  
class admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        Data = "Do some work";
    }
}
let student = new user("Arpit","ak@gmail.com");
let admin1 = new admin("admin","admin@gmail.com");