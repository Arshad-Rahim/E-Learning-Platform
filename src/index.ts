

class Person{
    constructor(public name:string){}

    displayRole(){
        console.log(`${this.name} is a Person`)
    }
}


class Student extends Person{
    borrowCourses:Courses[]=[];
    constructor(name:string){
        super(name)
    }

    displayRole(){
        console.log(`${this.name} is a Student`)
    }
    borrowCourse(course:Courses){
        if(this.borrowCourses.some(curr =>curr.title === course.title)){
            console.log(`${this.name} has already borrowed the course "${course.title}".`); 
        }else{
            this.borrowCourses.push(course);
            console.log(`the ${course.title} Course has been borrow by ${this.name}`)
        }
      
    }

}



class Instructors extends Person{
    constructor(name:string){
        super(name)
    }

    displayRole(){
        console.log(`${this.name} is a Instructors`)
    }

}

class Admin extends Person{
    constructor(name:string){
        super(name)
    }

    displayRole(){
        console.log(`${this.name} is a Admin`)
    }
    course:Courses[]=[]
    addCourses(course:Courses):void{
        this.course.push(course);
        console.log(`"${course.title}" by ${course.Instructor} has been added to the library.`)
    }

    displayCourses():void{
        console.log('Courses that are avialaible are:')
        this.course.forEach(course => {
            console.log(`- "${course.title}" by ${course.Instructor}`)
        });
    }

}

class Courses{
    constructor(public title:string, public description:string,public Instructor:string){}
}




const admin = new Admin('arshad');
admin.displayRole()
const Instructor = new Instructors('yadhu');
Instructor.displayRole()
const student1 = new Student("Albin");
student1.displayRole();

const course1 = new Courses('Title','edscription of the book','yadhu');
admin.addCourses(course1)

admin.displayCourses()


student1.borrowCourse(course1)
