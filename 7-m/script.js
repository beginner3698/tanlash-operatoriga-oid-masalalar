function chiqar() {
    let a = +prompt()
    let result = +prompt("Ifodalashni tanlang")

    switch (result) {
        case 1:
            result = a = a
            break
        case 2:
            result = a / 1000000
            break
        case 3:
            result = a / 1000
            break
        case 4:
            result = a * 1000
            break
        case 5:
            result = a * 100
            break
    }

    console.log(result)
}


chiqar()