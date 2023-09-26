let otpcontainer = document.querySelector('.otp-container')
function otpfieldgenerate(){
  let otpinputs=[];
  for(let i=0;i<5;i++){
     let otpinput = document.createElement('input')
     otpinput.setAttribute('class','otpfield')
     otpinput.setAttribute('type','number')
     otpinput.setAttribute('maxlength', '1'); 
     otpinput.setAttribute('min', '0'); // Set the minimum allowed value to 0
     otpinput.setAttribute('max', '9');
     otpinputs.push(otpinput)  
     
  }
  otpcontainer.append(...otpinputs)
}
function validatesingledigit(input){
  if(!/^[0-9]$/.test(input)){
    return false;    
  }
  return true
}
function validateotp(e){
let target =e.target;

if(!validatesingledigit(target.value)){
  target.value=""
}
let nextsibling = target.nextElementSibling;
let prevsibling = target.previousElementSibling;
if(nextsibling){
  nextsibling.focus()
}
if(prevsibling&&!prevsibling.value){

  target.blur();
  target.value=''
  prevsibling.focus()
}
}
function deletefields(e){
  let target =e.target;
  if(e.key=="Backspace"){
  let prevsibling = target.previousElementSibling;
  if(prevsibling){
    prevsibling.focus()
  }
}
}
document.addEventListener('input',validateotp)
document.addEventListener('keyup',deletefields)
otpfieldgenerate()