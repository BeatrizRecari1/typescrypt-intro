

let name: string = "Beatriz"
let age: number = 35
let teaching: boolean = true

let classes: string[] = ["typescript", "c#", "presenting"]
// console.log(name, age, teaching)
// console.table(classes)

enum TaxesForms {
    StandardTaxes=1040,
    Child_Credit=677,
    Crypto_Credit=2055,
}

// console.log(TaxesForms.Crypto_Credit)

let code: string | number = "11"

code = 11

// console.log(code)

let cars: string[] = ["mustang", "Tesla", "accord", "kia"]


function findIndex(index: number, array: string[]) : string {
    console.log(array[index])

    return array[index]
}

// console.log(findIndex(1, cars)) 



// doesn't return anything (hence "void")
function findIndex2(index: number, array: string[]) : void {
    console.log(array[index])

    // return array[index]
}

console.log(findIndex2(1, cars)) 
// findIndex2(1, cars)

// let classroom : any = {
//     name: "typescript",
//     duration: "6 hours",
//     boring: false
// }


interface classroom {
    name: string,   // required
    duration: number,   // required
    boring: boolean,    // required
    room?: string // optional
}

let thisClassroom : classroom | null = {

    name: "typescript",
    duration: 6,
    boring: false,
    room: "boca code classroom"
}

// console.log(thisClassroom)

let thatClassroom: classroom = {
    name: "javascript 2.0",
    duration: 2,
    boring: true
}
