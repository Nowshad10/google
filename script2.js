const searchBtn = document.getElementById('submit-btn')

searchBtn.addEventListener('click', submit)
function submit() {
    document.getElementById('content').textContent = ""
    let val = document.getElementById('search-field').value
    let newElement = document.createElement('script');
    newElement.src = `https://www.googleapis.com/customserach/v1?key=AIzaSyCpYIvipKZbCoBwuRRL6QjKDOixJC1KAw0&cx=3e7f3bd4638a6ce39&q=${val}&callback=hndlr`
    newElement.id = "mainscript"
    document.body.appendChild(newElement);
}
