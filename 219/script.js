let sendButton = document.getElementById("button");
var text = document.getElementById("text");
var date = document.getElementById("date");
function send() {
  alert("已收到填報");
  let name = text.value;
  let phone = date.value;
  let id= "c_rdovn5gmhnocsmr6tmg5f0rc5c@group.calendar.google.com";
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
