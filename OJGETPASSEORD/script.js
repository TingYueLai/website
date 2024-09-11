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
    url: "https://script.google.com/macros/s/AKfycbzp6W4q6pmO2gqlnu43V_vPJMXoAJBj8w8sWI_pBfQJ8h6SMYc1NCqhrCB-nmQX7zgf/exec",
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


