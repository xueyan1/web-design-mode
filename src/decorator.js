/** 装饰器模式
 *
 */
class Circle {
    draw() {
        console.log('画一个圆形')
    }
}
//装饰器
class Decorator {
    constructor(circle) {
        this.circle = circle
    }
    draw() {
        this.circle.draw()
        this.setRedBorder(circle)
    }
    setRedBorder() {
        console.log("设置红色边框")
    }
}

//测试
let circle = new Circle()
circle.draw()
console.log("--------------------")
let decorator = new Decorator()
decorator.draw()


/** 场景 */
