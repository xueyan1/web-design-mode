//父类
class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
    eat() {
        alert(`${this.name}eat something`)
    }
    speak() {
        alert(`My name is ${this.name},age${this.age}`)
    }
}
// 子类继承父类
class Student extends People {
    constructor(name, age, number) {
        super(name, age)
        this.number = number
    }
    study() {
        alert(`${this.name}study,num is ${this.number}`)
    }
}



// let p = new Person("xueyan", 20)
// p.speak()
let s = new Student("zhangsan", 24, 80)
s.eat()
s.speak()
s.study()
