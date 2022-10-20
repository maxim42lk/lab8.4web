function calculation(){
  
var arr = ['Дима', 'Катя', 'Петр', 'Лена'];

var rand = Math.floor(Math.random() * arr.length);
document.getElementById('result').value = arr[rand];
  
  
}
