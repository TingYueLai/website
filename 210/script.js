let sendButton = document.getElementById("button");
let sendB = document.getElementById("button123");
var text = document.getElementById("text");
var date = document.getElementById("date");
let id= "c_88jdq4kcod9hhsr3o1u67h4j18@group.calendar.google.com";
function send() {
  alert("已收到填報");
  let name = text.value;
  let phone = date.value;
  document.getElementById("text").value = "";
  document.getElementById("date").value = "";
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
  alert("已發出");
  let name = 123;
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxZ_kCSvV94sHHRGY7W5d0hm0_FiylZc29UH_zBLzf4wtwDZAlBz_LzFbCB8hxL8Qbu/exec",
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


