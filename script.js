document.getElementById('formsubmit').addEventListener('submit',submitform);
function submitform(e){
    e.preventDefault();
    console.log(1);
    let userId = getId("emailId");
    fetch(`https://gmail.googleapis.com/gmail/v1/users/${userId}/profile`,{method:'GET'})
    .then(data=>data.json())
    .then(x=>console.log(x))
}
function getId(id){
    return document.getElementById(id).value;
}