document.getElementById('deposit-btn').addEventListener('click',function(){
   const depositField = document.getElementById('deposit-input');
   const newDepositMoney =parseFloat( depositField.value);
   depositField.value = '';
   if(isNaN(newDepositMoney)){
      alert('please enter a valid number');
      return;
   }
   
   const depositMoneyElement = document.getElementById('deposit-money');
   const previousDepositMoney = parseFloat(depositMoneyElement.innerText);
  

    const totalDepositAmount = newDepositMoney + previousDepositMoney;
    depositMoneyElement.innerText = totalDepositAmount;

    // balance section------>
    const balanceElement = document.getElementById('balance');
    const previousBalance = parseFloat(balanceElement.innerText);
     const totalBalance = previousBalance + newDepositMoney;
     balanceElement.innerText = totalBalance;


    
})
