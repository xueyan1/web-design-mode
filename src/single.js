//单列模式
class SingleObject {
    login() {
        console.log('login...')
    }
}
SingleObject.getInstance = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new SingleObject();
        }
        return instance
    }
})()

// 注意这里只能使用静态函数getInstance()，不能new SingleObject()!!!
let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log(obj1 === obj2) // 两个完全相等


/** 以下是模拟登录框 */
//登陆框
class LoginForm {
    constructor() {
        this.state = 'hide'
    }
    show() {
        if (this.state === 'show') {
            alert('已经显示')
            return
        }
        this.state = 'show'
        console.log('登录框已经显示')
    }
    hide() {
        if (this.state === 'hide') {
            alert('已经隐藏')
            return
        }
        this.state = 'hide'
        console.log('登录框已经隐藏')
    }
}
//登录框的单列
LoginForm.getInstance = (function () {
    let instance = null
    return function () {
        if (!instance) {
            instance = new LoginForm();
        }
        return instance
    }
})()

//实现
let login1 = LoginForm.getInstance()
login1.show()

let login2 = LoginForm.getInstance()
login2.hide()
console.log(login1 === login2)
