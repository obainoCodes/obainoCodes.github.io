const url = 'https://jsonplaceholder.typicode.com';



loadUsers();

function loadUsers(){
    let users = fetch(`${url}/users`);
    users
    .then((resp) => resp.json())
    .then((data) => {
        for (let x of data){
            console.log(data);
            let userDetails = 
            `<div class="col-3 my-3">
                <div class="card">
                    <div class="d-flex justify-content-center">
                        <img src="/img/client3.PNG" class="img" alt="Users picture">
                    </div>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item"><span class="fw-bold">Name</span>: ${x.name}</li>
                    <li class="list-group-item"><span class="fw-bold">Email</span>: ${x.email}</li>
                    <li class="list-group-item"><span class="fw-bold">Phone</span>: ${x.phone}</li>
                    </ul>

                    <div class="p-2 pt-4 d-flex justify-content-center">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModa${x.id}">
                        View More
                        </button>
                    </div>

                    <div class="modal fade" id="exampleModa${x.id}" tabindex="-1">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="" id="viewMore">
                                    <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><span class="fw-bold">Id</span>: ${x.id}</li>
                                        <li class="list-group-item"><span class="fw-bold">Username</span>: ${x.username}</li>
                                        <li class="list-group-item"><span class="fw-bold">Street</span>: ${x.address.street}</li>
                                        <li class="list-group-item"><span class="fw-bold">City</span>: ${x.address.city}</li>
                                        <li class="list-group-item"><span class="fw-bold">Website</span>: ${x.website}</li>
                                        <li class="list-group-item"><span class="fw-bold">Company's Name</span>: ${x.company.name}</li>
                                    </ul>
                                </div>

                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

            let user = document.getElementById("user");
            user.innerHTML += userDetails;
        }
    })

    .catch((err) => {
        console.log("error");
        console.log(err);
    })

    
}