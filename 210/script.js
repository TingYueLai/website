let sendButton = document.getElementById("button");
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
sendButton.addEventListener('click', send);


