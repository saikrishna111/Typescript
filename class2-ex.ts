class Person{
	public name = "";
	public age = 0;	
	
		constructor(name:string, age:number){
			this.name = name;
			this.age = age;
		}
}
class Student extends Person{
	public sid = 0;
	public course = "";
	
		constructor(name:string, age:number, sid:number, course:string){
			super(name,age);
				this.sid = sid;
				this.course = course;
		}
		public show(){
			let str = `Student Name:${this.name},
						Student Age:${this.age},
						Student sid:${this.sid},
						Student Course:${this.course}`;
			console.log(str);
		}
}

var s1 = new Student("krishna", 25, 25689, "Angular");
var s2 = new Student("sai", 25, 25689, "Angular");
s1.show();
s2.show();

// console.log("student Name:" + s1.name);
// console.log("student age:" + s1.age);
// console.log("student id:" + s1.sid);
// console.log("student course:" + s1.course);