var Bangla = document.getElementById('Bangla');
var english = document.getElementById('english');
var math = document.getElementById('math');
var science = document.getElementById('science');
var submit = document.getElementById('submit');

submit.addEventListener('click',function(){
 if(Bangla.value=='' || english.value==''|| math.value==''|| science.value==''){
    alert('please Enter marks');
 }else{
    var newBangla = parseInt(Bangla.value);
    var Newenglish = parseInt(english.value);
    var Newmath = parseInt(math.value);
    var Newscience = parseInt(science.value);
    var total_marks = newBangla+Newenglish+Newmath+Newscience;
    var marks = document.getElementById('marks');
    
    marks.innerHTML = total_marks;
    var avg = total_marks/4;
    var Avarage = document.getElementById('Avarage');
    Avarage.innerHTML = avg;
    
    var grade = document.getElementById('grade');
    if(avg>80 && avg<100 ){
        grade.innerHTML = 'A+';
    }
    else if(avg>70 && avg<80 ){
        grade.innerHTML = 'A';
    }
    else if(avg>60 && avg<70 ){
        grade.innerHTML = 'A-';
    }
    else if(avg>50 && avg<60 ){
        grade.innerHTML = 'B';
    }
    else if(avg>40 && avg<50 ){
        grade.innerHTML = 'c';
    }else{
        grade.innerHTML = 'F';
    }
    var pass_fail = document.getElementById('pass_fail');
    if(avg>40){
        pass_fail.innerHTML = 'You are pass';
        pass_fail.style.background = 'green';
    }else{
        pass_fail.innerHTML = 'You are Fail';
        pass_fail.style.background = 'red';
    }


    
 }

});
