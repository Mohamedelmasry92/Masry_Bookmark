var bookmarkName = document.getElementById('bookmarkName')
var websiteName = document.getElementById('website')


var bookmarkArr = []
if(localStorage.getItem('bookmarks') != null) {
    bookmarkArr = JSON.parse(localStorage.getItem('bookmarks'))
    displayBookmark()
}

function submitBook(){
    var bookmarkObject = {
        name: bookmarkName.value,
        web: "http://"+websiteName.value
    }
    bookmarkArr.push(bookmarkObject)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkArr))
    displayBookmark()
    clearInputs()
}

function displayBookmark () {
    var cartona =``
    for(var i = 0 ; i<bookmarkArr.length;i++){
        cartona += `
        <div class="container linear mt-3 p-5">
        <div  class="row">
            <div class="col-sm-10">
                <h2 class="fw-bold">${bookmarkArr[i].name}</h2>
            </div>
            <div class="col-sm-2">
                <a class="btn btn-primary" href="${bookmarkArr[i].web}" target="_blank">visit</a>
                <button onclick="deleteBook(${i})" class="btn btn-danger btndelete">Delete</button>
            </div>
        </div>
    </div>
        `
    }
    document.getElementById('contents').innerHTML = cartona
}

function clearInputs(){
    bookmarkName.value = '';
    websiteName.value = '';
}

function deleteBook(index){
    bookmarkArr.splice(index,1)
    localStorage.setItem('bookmarks', JSON.stringify(bookmarkArr))
    displayBookmark()
}