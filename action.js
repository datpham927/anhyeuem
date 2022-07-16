var Username=document.querySelector('#Username')
var Email=document.querySelector('#Email')
var Password=document.querySelector('#Password')
var Confirm=document.querySelector('#Confirm')
var form=document.querySelector('form')
function showError(input,message){
    let parent=input.parentElement;
    let Small=parent.querySelector('small')
   parent.classList.add('error');
   Small.innerText=message;
}
function showSuccess(input){
    let parent=input.parentElement;
    let Small=parent.querySelector('small')
    parent.classList.remove('error');
    Small.innerText='';
}
function checkError(input){
    input.forEach(index => {
        index.value=index.value.trim();
        if(!index.value){
            showError(index,'Không được để trống')
            return true;
        }else{
            showSuccess(index);
        }
    });
    return false;
}

function checkEmail(input){
    const regexEmail=
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    input.value=input.value.trim();
    if(!regexEmail.test(input.value)){
        showError(input,'Nhập lại gmail')
        return true;
    }else{
        showSuccess(input);
    }
     return false;
}

function checkLength(input,min,max){
    input.value=input.value.trim();
    if(input.value.length<min){
        showError(input,`Mật khẩu phải ít nhất ${min} kí tự`)
        return true;
    }
    if(input.value.length>max){
        showError(input,`Mật khẩu tối đa ${max} kí tự`)
        return true;

    }
    return false;
}

form.addEventListener('submit',function(a){
    a.preventDefault();
   var isEmptyError=checkError([Username,Email,Password,Confirm]);
   var isEmailError=checkEmail(Email);
   var isPasswordError=checkLength(Password,3,9);
   var isConfirmError=checkLength(Confirm,3,9);
  if(isPasswordError!==isConfirmError){
    showError(Confirm,'Sai mã xác nhận !')
  }
})
