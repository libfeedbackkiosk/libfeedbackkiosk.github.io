function tymsg() { 
  document.getElementById("thanku").style.opacity = "100";
  document.body.style.backgroundImage = 'linear-gradient(rgba(145, 250, 162,0) 85%, rgba(145, 250, 162,1))';
  setTimeout(() => {
    document.getElementById("thanku").style.opacity = "0";
    document.body.style.backgroundImage = 'linear-gradient(rgba(145, 250, 162,0) 85%, rgba(145, 250, 162,0))';
  }, 1000)
}
function rate(a) {
  var d = new Date();
  var day = d.getDate();
  var month = d.getMonth()+1;
  var year = d.getFullYear();
  var time = d.getHours();
  document.getElementById("dataform").reset();
  document.getElementById("FormDate").value= month+"/"+day+"/"+year;
  document.getElementById("FormYear").value= year;
  document.getElementById("FormTime").value= time+":00";
  document.getElementById("Rating").value=a;
  document.getElementById('submitbutton').click()
  tymsg();
}

window.addEventListener("load", function() {
  const form = document.getElementById('dataform');
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: 'POST',
      body: data,
    })
    .then(() => {
      
    })
  });
});
