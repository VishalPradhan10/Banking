document.getElementById("log_btn").addEventListener("click",log_btn);
var main_body=document.getElementById("main");
main_body.style.display="none";

function log_btn()
{
var log_boxs =document.getElementById("log_box");
var userN =document.getElementById("user_in").value;
var userPass = document.getElementById("pass_in").value;

if(userN==""){
alert("Invalid UserName");
}
else if(userPass==""){
alert("Invalid Password");
}
else{
log_boxs.style.display="none";
main_body.style.display="block";
}
}

//deposit
document.getElementById("deposit-btn").addEventListener("click",deposit_fn);
function deposit_fn(){

    var input_amt= parseFloat(document.getElementById("input-deposit").value);

    var deposit_number=parseFloat(document.getElementById("deposit-number").innerHTML);

    var total=deposit_number+input_amt;

  document.getElementById("deposit-number").innerHTML=total;

  var depoam=parseFloat(document.getElementById("depo-am").innerHTML);
var total_depo= depoam +  input_amt;
document.getElementById("depo-am").innerHTML= total_depo;
//balance

var balance= parseFloat(document.getElementById("balance-amt").innerHTML);
var total_balance=balance + input_amt;
document.getElementById("balance-amt").innerHTML=total_balance;

}

//withdraw
document.getElementById("withdraw-btn").addEventListener("click",withdraw_fn);
function withdraw_fn(){
var withdraw_input=parseFloat(document.getElementById("withdraw-input").value);
 
var withdraw_amt=parseFloat(document.getElementById("withdraw-number").innerHTML);
var total_withdraw= withdraw_amt+withdraw_input;
document.getElementById("withdraw-number").innerHTML = total_withdraw;

//withdraw 2
var withdraw_no=parseFloat(document.getElementById("withdraw-no").innerHTML);
var totalwithdraw=withdraw_no+withdraw_input;
document.getElementById("withdraw-no").innerHTML=totalwithdraw;

//balance

var totalbl=document.getElementById("balance-amt").innerHTML;
var main_bal =totalbl-withdraw_input;
document.getElementById("balance-amt").innerHTML=main_bal;
}