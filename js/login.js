document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    // password
    const passField = document.getElementById('user-pass');
    const pass = passField.value;

    if(email == 'sontan@baap.com' && pass == 'secret'){
        window.location.href='bank.html';
    }
    else{
        alert('please pass jaina nao')
    }
})