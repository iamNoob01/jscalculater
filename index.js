function display(value) {
     document.getElementById('textarea').value+=value;
}

function calculate(){
     var value1 = document.getElementById('textarea').value
     var answer = eval(value1)
     document.getElementById('textarea').value = answer
}
function clr() {
     document.getElementById('textarea').value = ''
}
