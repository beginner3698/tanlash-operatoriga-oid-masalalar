function chiqar() {
    let k = prompt("Bahoni kiriting")

    if (k <= 5 && k >= 1) {
        switch (k) {
            case 1:
                console.log("yomon")
                break
            case 2:
                console.log("qoniqarsiz")
                break
            case 3:
                console.log("qoniqarli")
                break
            case 4:
                console.log("yaxshi")
                break
            case 5:
                console.log("a'lo")
                break
        }
    }
    else {
        console.log("Xato");
    }
}


chiqar()