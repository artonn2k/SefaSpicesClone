var user = document.querySelector('#user');
user.addEventListener('keyup', function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if(user.value.length == 0 || user.value.length < 6){
        user.style.border = '1px solid #db4320';
        u_times.style.display='block';
        u_check.style.display='none';
        return false;
    }else{
        user.style.border = '1px solid green';
        u_times.style.display='none';
        u_check.style.display='block';
    }

});

var password = document.querySelector('#user');
password.addEventListener('keyup', function(){
    var u_times = document.querySelector('.u_times');
    var u_check = document.querySelector('.u_check');
    if(password.value.length == 0 || password.value.length < 8){
        user.style.border = '1px solid #db4320';
        p_times.style.display='block';
        p_check.style.display='none';
        return false;
    }else{
        user.style.border = '1px solid green';
        p_times.style.display='none';
        p_check.style.display='block';
    }

});

function validate(){
    if(user.value == 0 || user.value.length < 6){
        document.getElementById('error').innerHTML = 'Please fill the required fields!';
        return false;
    }else if(password.value == 0 || password.value.length < 8){
        document.getElementById('error').innerHTML = 'Please fill the required fields!';
        return false;
    }else{
        alert('You have logged in successfully ')
    }
}