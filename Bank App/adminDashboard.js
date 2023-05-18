// console.log(localStorage);
for (let x in localStorage){
    // console.log(x);
    let y = localStorage.getItem(x);
    // console.log(y);
    let z = JSON.parse(y);
    // console.log(z);
    // console.log(z.userName);
    let data;
    data = `<tr>
   <td>${z.userName}</td>
   <td>${z.userEmail}</td>
   <td>${z.acctBalance}</td>
   </tr>`
   console.log(data);
   
   document.getElementById('body').innerHTML += data;

}