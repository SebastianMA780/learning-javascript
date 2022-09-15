/* 
	Mechanism that allows to access methods and properties
	defined with the reserved word 'static' reserve word
	without an instance of the object.
*/

class Course {
	static mainCourse = 'Learn!!';
	static getMainCourse() {
		return 'Learn is the best!!';
	}
}

console.log(Course.mainCourse);
console.log(Course.getMainCourse());
