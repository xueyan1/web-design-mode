
//基础类
class Product {
    constructor(name) {
        this.name = name
    }
    init() {

    }
    fun1() {

    }
    fun2() {

    }
}
//工厂类
class Creator {
    create(name) {
        return new Product(name)
    }
}

let creator = new Creator()
let p = creator.create("p1")
p.init()
p.fun1()



