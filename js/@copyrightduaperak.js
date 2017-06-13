document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == ‘I’.charCodeAt(0)){
alert(‘@copyright Yourportfolio for your curiculum vitae , resume & your portfolio’)
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == ‘J’.charCodeAt(0)){
alert(‘@copyright Duaperak.id’)
return false;
}
if(e.ctrlKey && e.keyCode == ‘U’.charCodeAt(0)){
alert(‘@copyright Duaperak.id’)
return false;
}
}
