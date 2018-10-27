var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = "";
        this.age = 0;
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, sid, course) {
        var _this = _super.call(this, name, age) || this;
        _this.sid = 0;
        _this.course = "";
        _this.sid = sid;
        _this.course = course;
        return _this;
    }
    Student.prototype.show = function () {
        var str = "Student Name:" + this.name + ",\n\t\t\t\t\t\tStudent Age:" + this.age + ",\n\t\t\t\t\t\tStudent sid:" + this.sid + ",\n\t\t\t\t\t\tStudent Course:" + this.course;
        console.log(str);
    };
    return Student;
}(Person));
var s1 = new Student("krishna", 25, 25689, "Angular");
var s2 = new Student("sai", 25, 25689, "Angular");
s1.show();
s2.show();
// console.log("student Name:" + s1.name);
// console.log("student age:" + s1.age);
// console.log("student id:" + s1.sid);
// console.log("student course:" + s1.course);
