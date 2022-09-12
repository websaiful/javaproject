var stName = document.getElementById('name');
var roll = document.getElementById('roll');
var dept = document.getElementById('dept');
var cgpa = document.getElementById('gpa');
var btn = document.getElementById('btn');

btn.addEventListener('click',function(pera){
    pera.preventDefault();
    // console.log(stName)   for testing
    if(stName.value==''){
alert('pls fill up student name');
    }else if(roll.value==''){
        alert('pls fill up student id');
    }else if(dept.value==''){
        alert('pls fill up student dept');
    }else if(gpa.value==''){
        alert('pls fill up students cgpa');
    }
    else{
        var tbody = document.getElementById('tbody');
        var tr = document.createElement('tr');
        var td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = stName.value;
       

        var td1 = document.createElement('td');
        tr.appendChild(td1);
        td1.innerHTML = roll.value;

        var td2 = document.createElement('td');
        tr.appendChild(td2);
        td2.innerHTML = dept.value;

        var td3 = document.createElement('td');
        tr.appendChild(td3);
        td3.innerHTML = gpa.value;

         tbody.appendChild(tr);

        
        
    }

});