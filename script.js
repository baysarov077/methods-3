const man = {
    name: 'Adam',
    lastname: 'Baysarov',
    age: 19,
    heigth: 1.9,
    weigth: 90,
    login: 'baysarov077',
    password: 'intocode123',
    money: 100000,
    getIMT() {
        return this.weigth / (this.heigth **2)
    },
    imtResult(getIMT) {
        if(getIMT <= 18) {
            return 'Недостаточный вес'
            
        } else if (getIMT >= 18 && getIMT <= 25) {
            return 'Вес в норме'

        } else if (getIMT >= 25 && getIMT <= 29) {
            return 'Избыточный вес'

        } else return 'Ожирение'
        
    },
    giveMoney(number) {
        if (number > (man.money / 2)) {
            return 'Делахь, сайгахь дац са оццал ахч'
        } else if (number < (man.money / 2)) {
           let mon = this.money - number
           this.money = mon
            return `Хьаэца хьай ${number}. Соьгахь диснаг х1ар ду ${mon}. Сих хьадалахь!`
        }
    }
}
man.address = {
    city: 'Grozny',
    street: 'Pavlova',
    house: 27
}
let truePassword = ''
if(truePassword === man.password) {
    console.log(`Добро пожаловать ${man.name} ${man.lastname}. Ваш логин ${man.login} `)
} else {
    console.log(`Указанный пароль ${truePassword} не верен. Попробуйте еще раз`)
}

man.lotteryNumber = 6
let lottery = Math.round(Math.random() * 10)
const funct = () => {
    if(man.lotteryNumber === lottery) {
        alert('Поздравляем вы выиграли!')
    } else {
        console.log('попробуйте еще раз')
    }
}
console.log(man)


console.log(man.getIMT())
console.log(man.imtResult(man.getIMT))
console.log(man.giveMoney(31000))
console.log(man.money)
funct()