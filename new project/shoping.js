function increament(incDec,prc,itm){
    var count = document.getElementById(incDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_amount = document.getElementById('pr_amount');
    var charge = document.getElementById('charge');
    var total = document.getElementById('total');
    
    if (count.value >=5){
        count.value = 5;
        alert('only five products allow')
    }else{
        count.value++
        var result = parseInt(price.innerHTML)+parseInt(item.innerHTML);
        item.innerHTML = result;
        var totalamount = parseInt(price.innerHTML)+parseInt( pr_amount.innerHTML);

        pr_amount.innerHTML = totalamount;
        var mainBalance = parseInt(charge.innerHTML)+ parseInt( pr_amount.innerHTML);
         total.innerHTML = mainBalance;

         var kupon_main_div = document.getElementById('kupon_main_div')

 if (total.innerHTML >=500){
    kupon_main_div.style.display = 'block';
 }

       
    }
}

function decreament(incDec,prc,itm){
    var count = document.getElementById(incDec);
    var price = document.getElementById(prc);
    var item = document.getElementById(itm);
    var pr_amount = document.getElementById('pr_amount');
    var total = document.getElementById('total');
    if (count.value <=0){
        count.value = 0;
        alert('minimum 1 products allow')
    }else{
        count.value--
        var result =parseInt(item.innerHTML)-parseInt(price.innerHTML);
        item.innerHTML = result; 
        var totalamount = parseInt( pr_amount.innerHTML)-parseInt(price.innerHTML);

        pr_amount.innerHTML = totalamount;
        var backBalnace = parseInt( total.innerHTML)-parseInt(price.innerHTML);

        total.innerHTML = backBalnace;
        

    }
};
var kupon_main_div = document.getElementById('kupon_main_div')
kupon_main_div.style.display = 'none';
var apply = document.getElementById('apply');
var kuponinput = document.getElementById('kuponinput');
var total = document.getElementById('total');
apply.addEventListener('click',function(){
        if(kuponinput.value == '937400'){
            var less = parseInt(total.innerHTML)-50;
            total.innerHTML = less;
            alert('congratolation');
            kupon_main_div.style.display = 'none';
        }else{
            alert('your kupon not match')
        }
});