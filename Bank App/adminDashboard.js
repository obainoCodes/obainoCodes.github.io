for (let x in localStorage){
    let y = localStorage.getItem(x);
    let z = JSON.parse(y);
    let data;
    data = `<tr>
   <td>${z.userName}</td>
   <td>${z.userEmail}</td>
   <td>${z.acctBalance}</td>
   </tr>`
   console.log(data);
   
   document.getElementById('body').innerHTML += data;

}