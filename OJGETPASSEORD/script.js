let sendButton = document.getElementById("button");
var text = document.getElementById("text");
function send() {
  
  alert("已送出可以去“學校”信箱看看");
  let name = text.value;
  console.log(name);
  document.getElementById("text").value = "";
  //let phone = password.value;
  $.ajax({
    type: 'POST',
    url: "https://script.google.com/macros/s/AKfycbykoQM6E4P61rXlBsid6nJLtB3rvGAf6lJ2fCoyKZHJumOL8Q_Qu4A0zH36toMHZPY5/exec",
    data: {
        "name": name,
    },
    success: function(response) {
      if(response == "成功"){
      
      }
    },
  });
}
sendButton.addEventListener('click', send);


