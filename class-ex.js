var Student = /** @class */ (function () {
    function Student() {
        this.sid = 10;
        this.sname = "Sai";
    }
    /* 	public show(){
        public str:string = `StudentID:${this.sid},StudentName:${this.sname}`;
        console.log(str);
    } */
    Student.prototype.show = function () {
        var str = "StudentID:" + this.sid + ",StudentName:" + this.sname;
        console.log(str);
    };
    return Student;
}());
var obj = new Student();
obj.show();
