function chiqar() {
    let a = +prompt()
    let b = +prompt()
    let result = +prompt("qiymatni tanlang")

    switch (result) {
        case 1:
            result = a + b
            break
        case 2:
            result = a - b
            break
        case 3:
            result = a / b
            break
        case 4:
            result = a * b
            break
        default:
            console.log("error")

            return;
    }

    console.log(result)
}


chiqar()