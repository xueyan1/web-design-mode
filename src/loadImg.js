
//  接口单一原则
function loadImg(src) {
    let promise = new Promise(function (revolve, reject) {
        let img = document.createElement('img')
        img.onload = function () {
            revolve(img)
        }
        img.onerror = function () {
            reject("图片加载失败")
        }
        img.src = src
    })
    return promise
}

let src = 'https://www.sass.hk/images/sass.png'
let reuslt = loadImg(src)

reuslt.then(function (img) {
    alert(`width:${img.width}`)
    return img
}).then(function (img) {
    alert(`height:${img.height}`)
    return img
}).then(function (img) {
    alert(`src:${img.src}`)
}).catch(function (error) {
    alert(error)
})
