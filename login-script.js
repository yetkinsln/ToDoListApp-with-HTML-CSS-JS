const btn1 = document.querySelector('#btn1');
const inp1 = document.querySelector('#inp1');
const inp2 = document.querySelector('#inp2')
btn1.addEventListener('click', function(e){
    if(localStorage.getItem('logstat') != 'true'){
        alert('Cannot find registered account, please create account.');
      
    }else{
if(inp1.value == localStorage.getItem('username')&& inp2.value ==localStorage.getItem('password')){
    window.location.href="tasks.html";
}else{
    alert('Wrong Username or Wrong Password');
}
    }
    e.preventDefault();})