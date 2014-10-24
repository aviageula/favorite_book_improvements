function Book(bookName, authorName, score) {
    this.bookName = bookName;
    this.authorName = authorName;
    this.score = score;
};


function reset() {
    document.getElementById('bookName').value = "";
    document.getElementById('authorName').value = "";
    document.getElementById('score').value = "";
}

function addBook() {
    var bookName = document.getElementById('bookName').value;
    var authorName = document.getElementById('authorName').value;
    var score = document.getElementById('score').value;
    var book = new Book(bookName, authorName, score);
    addToList(book);
    reset();
}

    function addToList(book) {
    var inputBook = document.getElementById("bookName");
    var inputAuthor = document.getElementById("authorName");
    var inputScore = document.getElementById("score");
            if (inputBook.value.trim().length == 0) {
        alert("נא להכניס שם ספר");
        inputBook.className = "validition";
            } else if (inputAuthor.value.trim().length == 0) {
        alert("נא להכניס שם מחבר");
        inputAuthor.className = "validition";
            } else if (!((inputScore.value >= 1) && (inputScore.value <=10))) {
        alert("נא להכניס מספר בין 1-10");
        inputScore.className = "validition";
            } else {
        var newElement = document.createElement("li");
        var bookNameDiv = document.createElement("div");
        bookNameDiv.innerHTML = book.bookName;
        bookNameDiv.className = "left";
        var authorNameDiv = document.createElement("div");
        authorNameDiv.innerHTML = book.authorName;
        authorNameDiv.className = "center";
        var scoreDiv = document.createElement("div");
        scoreDiv.innerHTML = book.score;
        scoreDiv.className = "right";
        var divDelete = document.createElement("div");
        divDelete.className = "divDeleteClass";
        divDelete.setAttribute("title", "מחק");
        var ex = document.createTextNode("x");
        divDelete.onclick = function () {
        newElement.remove();
        }
        divDelete.appendChild(ex);
        newElement.appendChild(bookNameDiv);
        newElement.appendChild(authorNameDiv);
        newElement.appendChild(scoreDiv);
        newElement.appendChild(divDelete);
        var ul = document.getElementById("bookList");
        if (ul.innerHTML == "") {
            var buttonResetList = document.createElement("button");
            buttonResetList.className = "theResetList";
            buttonResetList.innerHTML = "reset list";
            buttonResetList.onclick = function () {
            document.getElementById("bookList").innerHTML = "";
            }
        ul.appendChild(buttonResetList);   
        }
        ul.appendChild(newElement);
    }

}

