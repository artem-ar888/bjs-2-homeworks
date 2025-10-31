"use strict"

function parseCount(number) {
    let decimalNumber = parseFloat(number);
    if (Number.isNaN(decimalNumber)) {
        throw new Error('Невалидное значение');
    }
    return decimalNumber;
}

function validateCount(number) {
    try {
        const decimalNumber = parseCount(number);
        return decimalNumber;
    } catch(error) {
        return error;
    }
}


class Triangle {
    constructor(sideA, sideB, sideC) {
        // const sortedSides = [sideA, sideB, sideC].sort((a,b) => a-b);
        // if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
        //     throw new Error('Треугольник с такими сторонами не существует');
        // }
        if((sideA + sideB <= sideC) || (sideA + sideC <= sideB) || (sideB + sideC <= sideA)) {
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
        return +Math.sqrt(semiP * (semiP - this.sideA) * (semiP - this.sideB) * (semiP - this.sideC)).toFixed(3);
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


function getTriangle(sideA, sideB, sideC) {
    try {
        let triangle = new Triangle(sideA, sideB, sideC);
        return triangle;
    } catch(error) {
        return {
            get area() {
                return 'Ошибка! Треугольник не существует';
            },
            get perimeter() {
                return 'Ошибка! Треугольник не существует';
            }
        };
    }
}
