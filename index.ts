/**
 * 封装
 *
 * */



//父类
class Person {
    name
    age
    protected weight // 对子类开放
    constructor(name, age) {
        this.name = name
        this.age = age
        this.weight = 120
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
class Students extends Person {
    number
    private girlfriend  // 不可以对外使用
    constructor(name, age, number) {
        super(name, age)
        this.number = number
        this.girlfriend = 'bobo'
    }

    getWeight() {
        alert(`${this.weight}`)
    }
}
let s1 = new Students('haha', 10, 'A1')
s1.getWeight()


/**
 *多态
 *
 */

class Man {
    name
    age
    constructor(name) {
        this.name = name
    }
    saySomething() {
        alert(`我是${this.name}`)
    }
}
class A extends Man {
    constructor(name) {
        super(name)
    }
}
class B extends Man {
    constructor(name) {
        super(name)
    }
}

let a = new A("a")
a.saySomething()
let b = new B("b")
b.saySomething()
