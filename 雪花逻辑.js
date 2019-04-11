function flack() {
    var f = document.createElement('img');
    f.src = 'hart.png';
    var h = document.documentElement.clientHeight;
    var w = document.documentElement.clientWidth;
    var top=Math.random()*h;
    var left=Math.random()*w;
    f.style.position='absolute';
    f.style.left=left+'px';
    f.style.top=top+'px';
    var s=Math.random();
    if(s<0.3){
        s+=0.12
    }
    if(s<0.22)
    s+=0.32;
    console.log(s);
    f.style.transform='scale('+s+')';
    document.body.appendChild(f);
    var x=parseInt(Math.random()*3+2)/3+0.11;
    var y=parseInt(Math.random()*3+2)/5+0.11;
    function down(){
        // top+=parseInt(Math.random()*5)/4+0.11;
        top+=x;
        // console.log();
        left+=y;
        // left+=parseInt(Math.random()*5)/4+0.1;
        f.style.top=top+'px';
        f.style.left=left+'px';
        if(top>h){
            top=-100;
        }
        if(left>w){
            left=-100;
        }

    }
    setInterval(down,1);

}
for(var i=0;i<100;i++){
    flack();
}
