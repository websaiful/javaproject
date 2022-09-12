var len = document.querySelectorAll("button").length;
for ( var i = 0 ; i < len; i++ ){

    document.querySelectorAll('button')[i].addEventListener('click',function(){
    
        var babu = (this).innerHTML;
        document.querySelector('h1').innerHTML = babu + ' click';
    });
};


