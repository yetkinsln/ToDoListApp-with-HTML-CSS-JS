const inp1 = document.querySelector('#inp1');
const inp2 = document.querySelector('#inp2');
document.querySelector('#btn1').addEventListener('click', function(e){
if(localStorage.getItem('logstat')=='true'){
   alert('You already have an account, try resetting your password.') 
}else{
    if(document.querySelector('#inp1').value.toString() !='' &&  document.querySelector('#inp2').value.toString() !='')
    {
        localStorage.setItem('username',document.querySelector('#inp1').value );
        localStorage.setItem('password',document.querySelector('#inp2').value);
        localStorage.setItem('logstat','true');
        alert('You have successfully created an account.');
    }else{

        alert('Required fields cannot be left blank.');
        if(inp1.value ==''){
            document.querySelector('#inp1').style.borderColor = 'red';
        }
        if(inp2.value ==''){
            document.querySelector('#inp2').style.borderColor = 'red';
        }
    }
}
e.preventDefault();
})

