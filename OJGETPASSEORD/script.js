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
    url: "https://script.google.com/macros/s/AKfycbwSbmObcaElcqS7bBDLZRQjAAsQbgVt4U9u26xbMLkhek5EEBVyb-nGS6CdXGpPHxMl/exec",
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


