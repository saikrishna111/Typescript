class Student
{
	public sid = 10;
	public sname = "Sai";
	
	/* 	public show(){
		public str:string = `StudentID:${this.sid},StudentName:${this.sname}`;
		console.log(str);
	} */
	
	public show(){
		let str:string = `StudentID:${this.sid},StudentName:${this.sname}`;
		console.log(str);
	}
	
}

var obj = new Student();
obj.show();
