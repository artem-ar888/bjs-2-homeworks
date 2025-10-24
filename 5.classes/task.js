"use strict"

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = null;
    }

    set state(passState) {
        if (passState < 0) {
            passState = 0;
        }
        if (passState > 100) {
            passState = 100;
        } 
        this._state = passState;
    }

    get state() {
        return this._state;
    }

    fix() {
        this.state = this.state * 1.5;
    }

}


class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}


class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
    }
}


class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'novel';
    }
}


class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'fantastic';
    }
}


class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = 'detective';
    }
}


class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        if (book !== null) {
            const index = this.books.indexOf(book);
            this.books.splice(index, 1);

        }
        return book;
    }
}


class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark  >= 2 && mark <= 5) {
            if (!this.marks.hasOwnProperty(subject)) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        if (
            !this.marks.hasOwnProperty(subject) ||
            !Array.isArray(this.marks[subject]) ||
            this.marks[subject].length === 0
        ) {
            return 0;
        }
        return Number(this.marks[subject].reduce((acc, item, index, arr) => {
            acc += item;
            if (index === arr.length - 1) {
                return acc / arr.length;
            }
            return acc;
        }, 0).toFixed(2));
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        let sumAverageBySubject = 0;
        if (subjects.length === 0) {
            return 0;
        }
        for (let subject of subjects) {
            sumAverageBySubject += this.getAverageBySubject(subject);
        }
        return Number((sumAverageBySubject / subjects.length).toFixed(2));
    }
}
