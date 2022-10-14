function myfun(){
    var search = document.getElementById('search');
    var image = document.querySelectorAll('.single-img');
    var title = document.querySelectorAll('.title');
    // console.log(image.length);

    for (var i=0; i<image.length; i++){
        image[i].style.display = 'none';
        title[i].style.display = 'none';
       
    }

    for (var j=0; j<image.length; j++){
        var shironam = image[j].getAttribute('data-title');

        if (search.value==shironam){
            image[j].style.display = 'block';
        }
    }
}