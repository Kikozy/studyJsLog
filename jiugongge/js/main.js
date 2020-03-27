    var next = true;
    var colorLoop;
    document.getElementById('btnStart').onclick = () => {
        next = true;
        if(colorLoop){
            clearInterval(colorLoop);
        }
        colorLoop = setInterval(()=>{
            if(next){
                var randomDom1 = Math.floor(Math.random()*9);//随机DOM1
                var randomDom2 = Math.floor(Math.random()*9);//随机DOM2
                var randomDom3 = Math.floor(Math.random()*9);//随机DOM3
                document.getElementsByClassName('item')[randomDom1].style.backgroundColor = randomColor();
                document.getElementsByClassName('item')[randomDom2].style.backgroundColor = randomColor();
                document.getElementsByClassName('item')[randomDom3].style.backgroundColor = randomColor();
                //复原
                setTimeout(()=>{
                    document.getElementsByClassName('item')[randomDom1].style.backgroundColor = `orange`;
                    document.getElementsByClassName('item')[randomDom2].style.backgroundColor = `orange`;
                    document.getElementsByClassName('item')[randomDom3].style.backgroundColor = `orange`;
                },500)
            }else{
                clearInterval(colorLoop)
            }
        },1000)
    }
    document.getElementById('btnEnd').onclick = () => {
        next = false;
        for (var i = 0,len = document.getElementsByClassName('item').length;i<len;i++){
            document.getElementsByClassName('item')[i].style.backgroundColor = `orange`;
        }
    }
    function randomColor() {
        return `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)}`;
    }
