let sendButton = document.getElementById("button");
var text = document.getElementById("text");
var date = document.getElementById("date");
function send() {
  let name = text.value;
  let phone = date.value;
  let id= "c_cegnqv6hos8ql7591u00oifj6k@group.calendar.google.com";
  axios.get('https://script.google.com/macros/s/AKfycbxCSIRaHa6SX1MAvCt7N3HzTWMNYpUrRE5gCrnPznLa7bctKckVCddyZz7qW-BFwow3Pw/exec', {
  params: {
    "name": name,
    "phone": phone,
    "id":id
  }
}).then(response => {
    console.log(response);
})
};
sendButton.addEventListener('click', send);
