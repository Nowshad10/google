const searchBtn = document.getElementById('submit-btn')

searchBtn.addEventListener('click', submit)
function submit() {
    document.getElementById('content').textContent = ""
    let val = document.getElementById('search-field').value
    let newElement = document.createElement('script');
    newElement.src = `https://www.googleapis.com/customserach/v1?key=AIzaSyCpYIvipKZbCoBwuRRL6QjKDOixJC1KAw0&cx=`
}
