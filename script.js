var icon= document.querySelector('.container');
var love=document.querySelector('i');
var icon2= document.querySelector('.btn i' );
var lov=document.querySelector('.btn p');


var flag=0;


icon.addEventListener('dblclick',function(){

love.style.transform='translate(-50%,-50%) scale(1)';
love.style.opacity='0.8'
love.style.color="red";
console.log('hey');
setTimeout(function(){
    love.style.opacity='0'
},1000);

});


icon2.addEventListener('click',function(){
    if (flag==0){
    love.style.transform='translate(-50%,-50%) scale(1)';
    love.style.opacity='0.8'
    love.style.color="red";

    setTimeout(function(){
        love.style.opacity='0'
    },1000);
    lov.innerHTML="Liked"

    flag=1;
}
else{
    lov.innerHTML="Unliked"
    flag=0;
}
    });
    



