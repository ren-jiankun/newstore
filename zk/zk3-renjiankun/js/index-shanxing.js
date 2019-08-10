var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '1px solid #333';
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');
var deg = Math.PI / 180;
var colorArr = [];
//找value
var val = data.map(function (item) {
    return item.value
});
console.log(val)
//求和
var sum = val.reduce(function (prev, cur) {
    return prev + cur;
})
console.log(sum)
//每个占多少度
var deg1 = val.map(function(item){
    return item / sum * 360
})
console.log(deg1)


for(var i=0;i<data.length;i++){
    colorArr.push(data[i].color)
}

var startDeg = 0;

//扇形
for (var i = 0; i < data.length; i++) {
    ctx.save();
    var endDeg = deg1[i];
    ctx.beginPath();
    ctx.fillStyle = colorArr[i];
    ctx.moveTo(250, 250);
    ctx.arc(250,250,150,startDeg * deg,(startDeg + endDeg) * deg);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
    startDeg += endDeg;

}
//中空圆
ctx.save();
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(250,250,100,0,(startDeg + endDeg) * deg);
ctx.fill();
ctx.closePath();

// for(){

// }

//-------------------------------------------------------------------
//表情
var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 500;
canvas.style.border = '1px solid #333';
document.body.appendChild(canvas);

var ctx = canvas.getContext('2d');
var deg = Math.PI / 180;


ctx.save()
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.arc(250, 250, 150, 0, deg * 360);
ctx.fill();
// ctx.stroke();
ctx.restore();

ctx.save()
ctx.beginPath();
ctx.fillStyle = 'white';
ctx.arc(320, 180, 20, 0, deg * 360);
ctx.fill();
// ctx.stroke();
ctx.restore();

ctx.save()
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.arc(330, 185, 5, 0, deg * 360);
ctx.fill();
// ctx.stroke();
ctx.restore();


ctx.beginPath();
ctx.fillStyle = '#ccc';
ctx.rect(220,100,5,50);
ctx.rect(230,100,5,50);
ctx.rect(240,100,5,50);
ctx.rect(250,100,5,50);
ctx.rect(260,100,5,50);
ctx.rect(270,100,5,50);
ctx.rect(280,100,5,50);
ctx.fill()


ctx.save()
ctx.beginPath();
ctx.moveTo(250,250)
ctx.fillStyle = 'white';
ctx.arc(250, 250, 150, 0, (deg * 15),false);
ctx.fill();
ctx.closePath()
// ctx.stroke();
ctx.restore();










