let sendButton = document.getElementById("button");
var text = document.getElementById("text");
var date = document.getElementById("date");
let sendB = document.getElementById("b");
function send() {
  alert("已收到填報");
  let name = text.value;
  let phone = date.value;
  let id= "c_rdovn5gmhnocsmr6tmg5f0rc5c@group.calendar.google.com";
  //let phone = password.value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbw1v18cuqzJlx1_R4qGoSa66-_l_voJ6KtpZ92cNGizdUnjTOtwV3fz_le56DuqSDviTw/exec",
    data: {
        "name": name,
        "phone": phone,
        "id":id
    },
    success: function(response) {
      if(response == "成功"){
      
      }
    },
  });
};
function send123() {
  alert("就跟你說不要按");
  let name = 123;
  //let phone = password.value;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyw5DxA9jJKWFgtu-rjIGld5XGoShdv8HeDvcZLJRVAzexu93syf15F-wfxqft1iCNa/exec",
    data: {
        "name": name
    },
    success: function(response) {
      if(response == "成功"){
      
      }
    },
  });
};
sendButton.addEventListener('click', send);
sendB.addEventListener('click', send123);
