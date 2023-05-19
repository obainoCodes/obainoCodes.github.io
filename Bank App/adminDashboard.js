for (let user in localStorage){
    if (localStorage.hasOwnProperty(user)){
    let userDetials = localStorage.getItem(user);
    userDetials = JSON.parse(userDetials);
    let data = `<tr>
                    <td>${userDetials.userName}</td>
                    <td>${userDetials.userEmail}</td>
                    <td>${userDetials.acctBalance}</td>
                </tr>`

    document.getElementById('body').innerHTML += data;
    } 
    
}