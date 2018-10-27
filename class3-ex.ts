interface iTest{
	fname:string;
	lname:string;
	showData():void;
}
class customer implements iTest{
	public fname = "krihsna";
	public lname = "chary";
	public age = 25;
	public showData():void{
		// console.log("First Name: "+ this.fname);
		// console.log("Last Name: "+ this.lname);
		// console.log("Age: "+ this.age);
		var s1 = `First Name: ${this.fname}, Last Name: ${this.lname}, Age: ${this.age}`;
		console.log(s1);
	}
}

	class Employee implements iTest{
		fname:string = "Sai";
		lname:string = "Krishna";
		
		showData(){
			console.log("From Employee Class: "+this.fname+" "+this.lname);
		}
		
	}

	class Students implements iTest{
		fname:string = "srinu";
		lname:string = "arun";
		sid:number = 123;
		
		showData(){
			console.log("From Students Class: "+ this.fname + " " + this.lname + " " + this.sid);
		}
	}

	var s1:iTest = new customer();
	var e1:iTest = new Employee();
	var s2:iTest = new Students();
	s2.showData();
	e1.showData();
	s1.showData();