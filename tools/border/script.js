document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', inputChanged)
  })
  
  function inputChanged(e) {
    document.documentElement.style.setProperty(
      `--${e.target.name}`,
      e.target.value
    )
  }

//   showing result
function topfunc(){
    var top = document.getElementById("top").value;
    var top_color = document.getElementById("top_color").value;
    var top_type = document.querySelector('input[name="top_type"]:checked').value;
    document.getElementById("top_result").innerHTML = "border-top: "+top+"px "+top_type+" "+top_color+";";//for final output
}
function bottomfunc(){
  var bottom = document.getElementById("bottom").value;
  var bottom_color = document.getElementById("bottom_color").value;
  var bottom_type = document.querySelector('input[name="bottom_type"]:checked').value;
  document.getElementById("bottom_result").innerHTML = "border-bottom: "+bottom+"px "+bottom_type+" "+bottom_color+";";//for final output
}
function leftfunc(){
  var left = document.getElementById("left").value;
  var left_color = document.getElementById("left_color").value;
  var left_type = document.querySelector('input[name="left_type"]:checked').value;
  document.getElementById("left_result").innerHTML = "border-left: "+left+"px "+left_type+" "+left_color+";";//for final output
}
function rightfunc(){
  var right = document.getElementById("right").value;
  var right_color = document.getElementById("right_color").value;
  var right_type = document.querySelector('input[name="right_type"]:checked').value;
  document.getElementById("right_result").innerHTML = "border-right: "+right+"px "+right_type+" "+right_color+";";//for final output
}
// copy to clipboard function 
function copyclipboard() {
    const cb = navigator.clipboard;
    const paragraph = document.querySelector('#result');
    cb.writeText(paragraph.innerText).then(() => swal({
                                                 title: "Copied :)",
                                                 text: "You Have Copied Code to Clipboard...Now Paste it to Your CSS...",
                                                 icon: "success",
                                                 button: "Okay",
                                                 }));
  }