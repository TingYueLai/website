let sendButton = document.getElementById("button");
var text = document.getElementById("text");
var date = document.getElementById("date");
function send() {
  alert("已收到填報");
  let name = text.value;
  let phone = date.value;
  let id= "c_88jdq4kcod9hhsr3o1u67h4j18@group.calendar.google.com;
  document.getElementById("text").value = "";
  document.getElementById("date").value = "";
  //let phone = password.value;
   $.ajax({
    url: "https://script.google.com/macros/s/AKfycbxCSIRaHa6SX1MAvCt7N3HzTWMNYpUrRE5gCrnPznLa7bctKckVCddyZz7qW-BFwow3Pw/exec",
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
