var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.displayRole = function () {
        console.log("".concat(this.name, " is a Person"));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name) {
        var _this = _super.call(this, name) || this;
        _this.borrowCourses = [];
        return _this;
    }
    Student.prototype.displayRole = function () {
        console.log("".concat(this.name, " is a Student"));
    };
    Student.prototype.borrowCourse = function (Course) {
        this.borrowCourses.push(Course);
        console.log("the ".concat(Course.title, " Course has been borrow by ").concat(this.name));
    };
    return Student;
}(Person));
var Instructors = /** @class */ (function (_super) {
    __extends(Instructors, _super);
    function Instructors(name) {
        return _super.call(this, name) || this;
    }
    Instructors.prototype.displayRole = function () {
        console.log("".concat(this.name, " is a Instructors"));
    };
    return Instructors;
}(Person));
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name) {
        var _this = _super.call(this, name) || this;
        _this.course = [];
        return _this;
    }
    Admin.prototype.displayRole = function () {
        console.log("".concat(this.name, " is a Admin"));
    };
    Admin.prototype.addCourses = function (courses) {
        this.course.push(courses);
        console.log("\"".concat(courses.title, "\" by ").concat(courses.Instructor, " has been added to the library."));
    };
    Admin.prototype.displayCourses = function () {
        console.log('Courses that are avialaible are:');
        this.course.forEach(function (course) {
            console.log("- \"".concat(course.title, "\" by ").concat(course.Instructor));
        });
    };
    return Admin;
}(Person));
var Courses = /** @class */ (function () {
    function Courses(title, description, Instructor) {
        this.title = title;
        this.description = description;
        this.Instructor = Instructor;
    }
    return Courses;
}());
var admin = new Admin('arshad');
admin.displayRole();
var Instructor = new Instructors('yadhu');
Instructor.displayRole();
var student1 = new Student("Albin");
student1.displayRole();
var course1 = new Courses('Title', 'edscription of the book', 'yadhu');
admin.addCourses(course1);
admin.displayCourses();
student1.borrowCourse(course1);
