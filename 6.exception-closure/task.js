"use strict"

function parseCount(number) {
    let decimalNumber = parseFloat(number);
    if (Number.isNaN(decimalNumber)) {
        throw new Error('Невалидное значение');
    }
    return decimalNumber;
}

function validateCount(number) {
    let decimalNumber;
    try {
        decimalNumber = parseCount(number);
    } catch(error) {
        return error;
    }
    return decimalNumber;
}


class Triangle {
    constructor(sideA, sideB, sideC) {
        const sortedSides = [sideA, sideB, sideC].sort((a,b) => a-b);
        if (sortedSides[0] + sortedSides[1] < sortedSides[2]) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    get perimeter() {
        return (this.sideA + this.sideB + this.sideC);
    }

    get area() {
        let semiP = this.perimeter / 2;
        return Number(Math.sqrt(semiP * (semiP - this.sideA) * (semiP - this.sideB) * (semiP - this.sideC)).toFixed(3));
    }
}


// class wrongTriangle {
//     #area = 'Ошибка! Треугольник не существует';
//     #perimeter = 'Ошибка! Треугольник не существует';

//     get area() {
//         return this.#area;
//     }

//     get perimeter() {
//         return this.#perimeter;
//     }
// }


class wrongTriangle {
    get area() {
        return 'Ошибка! Треугольник не существует';
    }

    get perimeter() {
        return 'Ошибка! Треугольник не существует';
    }
}


function getTriangle(sideA, sideB, sideC) {
    try {var triangle = new Triangle(sideA, sideB, sideC)
    } catch(error) {
        return new wrongTriangle;
    }
    return triangle;
}
