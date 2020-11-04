var allChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%*()1234567890-_=+[]{}|\:<>,./ "
function encode(){
  var output = "";
  var what = document.getElementById("encode").value;
  for (i=0;i<what.length;i++){
    num = allChars.indexOf(what[i]) + 10
    var output = output + num.toString();
  }
  document.getElementById("encodeRes").value = output;
  document.getElementById("encode").value = "";
}
function decode(){
  var output = ""
  var what = document.getElementById("decode").value;
  for (j=0;j<what.length;j+=2){
    num = what[j] + what[j+1]
    num = parseInt(num) - 10
    output = output + allChars[num]
  }
  document.getElementById("decodeRes").value = output;
  document.getElementById("decode").value = "";
}
