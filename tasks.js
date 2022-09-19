const btn = document.querySelector('#addbtn')
const ta = document.querySelector('#ta')
const inp1 = document.querySelector('#inp1')
let tasklist = [];
let constant = [];
let dates = [];
function ea(){
    for(i=0; i<tasklist.length; i++){
        select(i);
        focusout(i);
    }
    function select(i){
        if(document.querySelector('.tname'+i)!=null){
            document.querySelector('.tname' + i).addEventListener('click',function(e){
                document.querySelector('.tname' + i).style.backgroundColor='#00cc99';
                document.querySelector('.tname' + i).classList.add('willdelete');
                document.querySelector('.tconstant' + i).classList.add('willdelete');
                document.querySelector('.tdate' + i).classList.add('willdelete');
            })     
        }
         
    }
    function focusout(i){
        if(document.querySelector('.tname' + i)!=null){
            document.querySelector('.tname' + i).addEventListener('dblclick',function(e){
                document.querySelector('.tname' + i).style.backgroundColor='white';
                document.querySelector('.tname' + i).classList.remove("willdelete");
                document.querySelector('.tconstant'+ i).classList.remove('willdelete');
                document.querySelector('.tdate' + i).classList.remove('willdelete');
            })
        }
    
    }
}
if(localStorage.getItem('tasklistjs')==null){

    }else{
        tasklist = JSON.parse(localStorage.getItem('tasklistjs'));   
        constant = JSON.parse(localStorage.getItem('constantjs'));   
        dates = JSON.parse(localStorage.getItem('datesjs'));   
       
    }
let a =0;
btn.addEventListener('click', function(e){
if(ta.value !=''&& inp1.value !=''){
let code = '<div class="newitem tname'+a+'"><p>' + inp1.value+ '</p></div>';
document.querySelector('.tasknames').innerHTML = document.querySelector('.tasknames').innerHTML+code;
let code2 = '<div class="newitem tconstant'+a+'"><p>' + ta.value+ '</p></div>';
document.querySelector('.taskcontents').innerHTML = document.querySelector('.taskcontents').innerHTML + code2;
let currentDate = new Date();
let cDay = currentDate.getDate();
let cMonth = currentDate.getMonth() + 1;
let cYear = currentDate.getFullYear();
let code3 = '<div class="newitem tdate'+a+'"><p>' +cDay+'/'+ + cMonth+'/'+cYear+ '</p></div>';
document.querySelector('.addeddate').innerHTML = document.querySelector('.addeddate').innerHTML + code3;
tasklist.push(inp1.value);
constant.push(ta.value);
dates.push(cDay+'/'+ + cMonth+'/'+cYear);
localStorage.setItem('tasklistjs',JSON.stringify(tasklist));
localStorage.setItem('constantjs',JSON.stringify(constant));
localStorage.setItem('datesjs',JSON.stringify(dates));
a++;
ta.value = "";
inp1.value = "";
ea()
}
})
window.addEventListener('load',function(e){
    for(c=0;c<tasklist.length;c++){
if(tasklist[c]!=null){
let name = tasklist[c]
let code = '<div class="newitem tname'+c+'"><p>' + tasklist[c]+ '</p></div>';
document.querySelector('.tasknames').innerHTML = document.querySelector('.tasknames').innerHTML+code;
}
    } for(c=0;c<tasklist.length;c++){
        if(tasklist[c]!=null){
            let cnst = constant[c]
            let code = '<div class="newitem tconstant'+c+'"><p>' + constant[c]+ '</p></div>';
            document.querySelector('.taskcontents').innerHTML = document.querySelector('.taskcontents').innerHTML+code;    
    } 
    }
   
   
  for(c=0;c<tasklist.length;c++){
   if(tasklist[c]!=null){
    let dt = dates[c]
    let code = '<div class="newitem tdate'+c+'"><p>' + dates[c]+ '</p></div>';
    document.querySelector('.addeddate').innerHTML = document.querySelector('.addeddate').innerHTML+code;   
    }
    }

    

 ea();
})
let nonulltasklist=[];
let nonullconstant=[];
let nonulldates=[];
document.querySelector('#dellbtn').addEventListener('click',function(e){
    for(i=0; i<tasklist.length*3; i++){
    if(document.querySelector('.willdelete')!=null){
        if(document.querySelector('.willdelete.tname' + i)!=null){
            delete constant[tasklist.indexOf(document.querySelector('.willdelete.tname' + i).textContent)] 
        }
        if(document.querySelector('.willdelete.tname' + i)!=null){
            delete dates[tasklist.indexOf(document.querySelector('.willdelete.tname' + i).textContent)] 
        }
        if(document.querySelector('.willdelete.tname' + i)!=null){
            delete tasklist[tasklist.indexOf(document.querySelector('.willdelete.tname' + i).textContent)] 
        }
     
      
       document.querySelector('.willdelete').remove();
       console.log(tasklist)
       console.log(constant)
       console.log(dates)
       localStorage.removeItem('tasklistjs')
       localStorage.removeItem('constantjs')
       localStorage.removeItem('datesjs')
       for(m=0;m<tasklist.length;m++){
        if(tasklist[m]!=null){
nonulltasklist.push(tasklist[m]);
nonullconstant.push(constant[m]);
nonulldates.push(dates[m]);
        }
       }
       localStorage.setItem('tasklistjs',JSON.stringify(nonulltasklist));
localStorage.setItem('constantjs',JSON.stringify(nonullconstant));
localStorage.setItem('datesjs',JSON.stringify(nonulldates));
nonulltasklist=[];
nonullconstant=[];
nonulldates=[];
    }
    }
  
    })