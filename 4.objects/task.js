"use strict"

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if (!this.marks) {
        console.log('The student has already been expelled');
        return;
    }
    if (!!marks.length) {
        this.marks.push(...marks);
        return;
    }
    return;
}

Student.prototype.getAverage = function () {
    if (!this.marks || !this.marks.length) {
        return 0;
    }
    return Number(
        this.marks.reduce((acc, item, index, arr) => {
            acc += item;
            if (index === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0)
    ).toFixed(2);
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.excluded = reason;
}
