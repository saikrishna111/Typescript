class Employee{
	public empno = 5;
	public ename = "sai";
	public salary = "20000";
	public course = "Anjular";
	
	
	/* constructor(){
		
	}  */
	
 	constructor(id:number, name:string){
		this.empno = id;
		this.ename = name;
	}
	
	public show(){
		var str:string = `EmployeeNumber:${this.empno}, EmployeeName:${this.ename}`;
		console.log(str);
	}

}
//var v1 =new Employee();
//console.log(v1.empno);

var obj = new Employee(123, "krishna");
var obj1 = new Employee(124, "sai");
obj.show();
console.log(obj.salary);

obj1.show();