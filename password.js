let week = document.getElementById("weeks")
let strong = document.getElementById("strongs")
let mysuper = document.getElementById("supers")
let upper = document.getElementById("up")
let lower = document.getElementById("low")
let specials = document.getElementById("special")
let numbers = document.getElementById("number")
let ui = document.getElementById("p")
let button = document.getElementById("btn")

//For generating four types of characters

class password {
    getupper() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }
    getlower() {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    getspecial() {
        const s = "!£$%^&*(){}[]:@;'<,>.?/#~"
        return s[Math.floor(Math.random() * s.length)]
    }
    getnumbers() {
        return Math.floor(Math.random() * 10)
    }
}

//For gettin different type of password

class generate extends password {
    getweek() {
        const w = [4, 5, 6]
        const w1 = w[Math.floor(Math.random() * w.length)]
        let a = ""
        let b = 1
        while(true){
            if(!upper.checked && !lower.checked && !specials.checked && !numbers.checked){
                break
            }
            if(upper.checked && b <= w1){
                a += super.getupper()
                b++
            }
            if(lower.checked && b <= w1){
               a += super.getlower()
               b++
            }
            if(specials.checked && b <= w1){
                a += super.getspecial()
                b++
             }
             if(numbers.checked && b <= w1){
                a += super.getnumbers()
                b++
             }
             if(b > w1){
                break
             }
        }
        ui.value = a
    }
    getstrong() {
        const w = [7, 8, 9, 10]
        const w1 = w[Math.floor(Math.random() * w.length)]
        let a = ""
        let b = 1
        while(true){
            if(!upper.checked && !lower.checked && !specials.checked && !numbers.checked){
                break
            }
            if(upper.checked && b <= w1){
                a += super.getupper()
                b++
            }
            if(lower.checked && b <= w1){
               a += super.getlower()
               b++
            }
            if(specials.checked && b <= w1){
                a += super.getspecial()
                b++
             }
             if(numbers.checked && b <= w1){
                a += super.getnumbers()
                b++
             }
             if(b > w1){
                break
             }
        }
        ui.value = a
    }
    getsuper() {
        const w = [11, 12, 13, 14]
        const w1 = w[Math.floor(Math.random() * w.length)]
        let a = ""
        let b = 1
        while(true){
            if(!upper.checked && !lower.checked && !specials.checked && !numbers.checked){
                break
            }
            if(upper.checked && b <= w1){
                a += super.getupper()
                b++
            }
            if(lower.checked && b <= w1){
               a += super.getlower()
               b++
            }
            if(specials.checked && b <= w1){
                a += super.getspecial()
                b++
             }
             if(numbers.checked && b <= w1){
                a += super.getnumbers()
                b++
             }
             if(b > w1){
                break
             }
        }
        ui.value = a
    }
}
let a = new generate()

//for checking which password user want

const show = function(){
    if(week.checked){
        a.getweek()
    }
    if(strong.checked){
        a.getstrong()
    }
    if(mysuper.checked){
        a.getsuper()
    }
}

//Button Listener for Generating Password
button.addEventListener('click', show)
window.onload = function(){
    ui.value = ""
    week.checked = false
    strong.checked = false
    mysuper.checked = false
    upper.checked = false
    lower.checked = false
    specials.checked = false
    numbers.checked = false
}


