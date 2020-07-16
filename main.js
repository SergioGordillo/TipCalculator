let tiparray=[];
let totalamountarray=[];


function calculator(){
    let bill=parseInt(document.getElementById("value").value);
    let messagetip=document.getElementById("messagetip"); 
    let messagetotalamount=document.getElementById("messagetotalamount"); 

    let tip=0;
    let totalamount=0;

    if(bill<50){
        tip=bill*0.2;
        tiparray.push(tip);

        messagetip.innerHTML="";
        messagetip.innerHTML="The tip you have to pay is " + tip + " €. Thanks."
        
        totalamount=tip+bill;
        totalamountarray.push(totalamount);

        messagetotalamount.innerHTML="";
        messagetotalamount.innerHTML="The total amount you have to pay is " + totalamount + " €. Thanks." ;

    } else if (bill>=50 && bill<=200) {
        tip=bill*0.15;
        tiparray.push(tip);

        messagetip.innerHTML="";
        messagetip.innerHTML="The tip you have to pay is " + tip + " €. Thanks."

        totalamount=tip+bill;
        totalamountarray.push(totalamount);

        messagetotalamount.innerHTML="";
        messagetotalamount.innerHTML="The total amount you have to pay is " + totalamount + " €. Thanks." ;
    } else if (bill>200){
        tip=bill*0.10;
        tiparray.push(tip);
        
        messagetip.innerHTML="";
        messagetip.innerHTML="The tip you have to pay is " + tip + " €. Thanks."

        totalamount=tip+bill;
        totalamountarray.push(totalamount);

        messagetotalamount.innerHTML="";
        messagetotalamount.innerHTML="The total amount you have to pay is " + totalamount + " €. Thanks." ;
    }

}