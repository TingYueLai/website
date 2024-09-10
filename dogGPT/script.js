var chat=document.getElementById("input");
var btn= document.getElementById("btn");
var list=document.getElementById("chat");
var po=1;
var x=Math.floor(Math.random()*7)+3;
var finial = ['!', '.', '?'];
btn.addEventListener("click",function(){
    var detect=list.innerText;
    console.log(list.innerHTML);
    list.innerHTML = list.innerHTML+`
    <div class="chat-bubble-container user-bubble-container">
        <div class="profile-picture"><img src="man.png" height="100%" /></div>
            <div class="chat-bubble chat-gpt-bubble">
               ${chat.value}
    </div>
    `;
    chat.value="";
    var x=Math.floor(Math.random()*15);
    var y=Math.floor(Math.random()*3);
    var z=Math.floor(Math.random()*2);
    var text="Woof";
    if(z==1)text=text+',';
    for(var i=0;i<x;i++){
        text=text+" woof";
    }
    text=text+finial[y];
    if(po=== 3){
        setTimeout(() => ppp(), 1000);
    }else{
        setTimeout(() => produce(text), 1000);
    }
    
    



})
function produce(x){
    list.innerHTML = list.innerHTML+`
    <div class="chat-bubble-container chat-gpt-bubble-container">
        <div class="profile-picture"><img src="dog.png" height="100%" /></div>
            <div class="chat-bubble chat-gpt-bubble">
                <div id="typed-strings${po}">
                    <p>${x}</p>
                </div>
                <span id="typed${po}"></span>
    </div>
    `;
    var typed = new Typed('#typed'+po, {
        stringsElement: '#typed-strings'+po,
        typeSpeed: 60,
        showCursor: false
      });
    po=po+1;
    location='#a1'
    
}
function ppp(){
    var x="你有什麼毛病？？"
    list.innerHTML = list.innerHTML+`
    <div class="chat-bubble-container chat-gpt-bubble-container">
        <div class="profile-picture"><img src="dog.png" height="100%" /></div>
            <div class="chat-bubble chat-gpt-bubble">
                <div id="typed-strings${po}">
                    <p>${x}</p>
                </div>
                <span id="typed${po}"></span>
    </div>
    `;
    var typed = new Typed('#typed'+po, {
        stringsElement: '#typed-strings'+po,
        typeSpeed: 60,
        showCursor: false
      });
    po=po+1;
    location='#a1'
    
}