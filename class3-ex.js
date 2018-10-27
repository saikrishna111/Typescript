var customer = /** @class */ (function () {
    function customer() {
        this.fname = "krihsna";
        this.lname = "chary";
        this.age = 25;
    }
    customer.prototype.showData = function () {
        // console.log("First Name: "+ this.fname);
        // console.log("Last Name: "+ this.lname);
        // console.log("Age: "+ this.age);
        var s1 = "First Name: " + this.fname + ", Last Name: " + this.lname + ", Age: " + this.age;
        console.log(s1);
    };
    return customer;
}());
var Employee = /** @class */ (function () {
    function Employee() {
        this.fname = "Sai";
        this.lname = "Krishna";
    }
    Employee.prototype.showData = function () {
        console.log("From Employee Class: " + this.fname + " " + this.lname);
    };
    return Employee;
}());
var Students = /** @class */ (function () {
    function Students() {
        this.fname = "srinu";
        this.lname = "arun";
        this.sid = 123;
    }
    Students.prototype.showData = function () {
        console.log("From Students Class: " + this.fname + " " + this.lname + " " + this.sid);
    };
    return Students;
}());
var s1 = new customer();
var e1 = new Employee();
var s2 = new Students();
s2.showData();
e1.showData();
s1.showData();
