

let userFormDOM = document.querySelector('#userForm')
userFormDOM.addEventListener('submit' , formHandler)
let alertDOM =document.querySelector("#alert")

const  alert = (title , message, className="warning") =>`
<div class="alert alert-${className} alert-dismissible fade show" role="alert">
  <strong>${title}</strong> ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector("#username")
    const SCORE = document.querySelector("#score")

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value , score.value)
        USER_NAME.value = "" 
        score.value = ""
    } else {
        alertDOM.innerHTML = alert (
            "HATA!" ,
            "Eksik bilgi girdiniz" , 
            "danger"
            )
    }
    
}

let userListDOM = document.querySelector("#userList")
const addItem = (username , score) => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${username} 
    <span class="badge bg-primary rounded-pill">${score}</span>
    `
    liDOM.classList.add('list-group-item' , 'd-flex' , 'justify-content-between' , 'align-items-center')
    userListDOM.appendChild(liDOM)
}
