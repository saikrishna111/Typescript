var Employee = /** @class */ (function () {
    /* constructor(){
        
    }  */
    function Employee(id, name) {
        this.empno = 5;
        this.ename = "sai";
        this.salary = "20000";
        this.course = "Anjular";
        this.empno = id;
        this.ename = name;
    }
    Employee.prototype.show = function () {
        var str = "EmployeeNumber:" + this.empno + ", EmployeeName:" + this.ename;
        console.log(str);
    };
    return Employee;
}());
//var v1 =new Employee();
//console.log(v1.empno);
var obj = new Employee(123, "krishna");
var obj1 = new Employee(124, "sai");
obj.show();
console.log(obj.salary);
obj1.show();
