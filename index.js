function register(){
    document.getElementById("after").style.visibility="visible"; 
    document.getElementById("before").style.visibility="hidden";

    var balance=document.getElementById("balance").value;
    var credit=document.getElementById("credit").value;
    var charge=document.getElementById("charge").value;
    var creditLimit=Number(balance)+Number(credit);
    var newbalance=creditLimit-Number(charge);
    document.getElementById("cl").innerHTML=creditLimit;
    document.getElementById("nb").innerHTML=newbalance;
    if(newbalance<0){
        document.getElementById("exceed").innerHTML="credit limit exceeded";
    }
    event.preventDefault();
}
