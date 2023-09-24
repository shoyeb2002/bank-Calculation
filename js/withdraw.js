document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawField = document.getElementById('withdraw-input');
    
    const newWithdrawMoney =parseFloat( withdrawField.value);
    withdrawField.value = '';
    if(isNaN(newWithdrawMoney)){
        alert('please enter a valid number');
        return;
    }
    
    
    const withdrawMoneyElement = document.getElementById('withdraw-money');
    const previousWithdrawtMoney = parseFloat(withdrawMoneyElement.innerText);
    
    const balanceElement = document.getElementById('balance');
     const previousBalance = parseFloat(balanceElement.innerText);
    if(newWithdrawMoney > previousBalance){
        alert('eto taka nai');
        return;
    }
     const totalWithdrawAmount = previousWithdrawtMoney + newWithdrawMoney;
     withdrawMoneyElement.innerText = totalWithdrawAmount;
 
     // balance section------>
     
     
      const totalBalance = previousBalance - newWithdrawMoney;
      balanceElement.innerText = totalBalance;
    
 
 
     
 })