let email = document.getElementById('email');
let password = document.getElementById('password');
let signinForm = document.getElementById('signin-form');
signinForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    email = email.value;
    password = password.value;
    for (let key in localStorage){
        if (localStorage.hasOwnProperty(key)){
            if (email == key){
                let userDetails = localStorage.getItem(key)
                userDetails =  JSON.parse(userDetails);
                for (let key in userDetails){
                    if (key == 'userPassword'){
                        if (password == userDetails.userPassword){
                            if ((email == 'obinna@gmail.com' && password == 12345) || (email == 'neche@gmail.com' && password == 1234)){
                                sessionStorage.setItem('userName', userDetails.userName);
                                sessionStorage.setItem('acctBalance', userDetails.acctBalance);
                                location.href = './adminDashboard.html'
                            }
                            else {
                            sessionStorage.setItem('userName', userDetails.userName);
                            sessionStorage.setItem('acctBalance', userDetails.acctBalance);
                            location.href = './dashboard.html'
                            
                            }
                        }
                    }
                }
            }

        }
        
    }
      
})

