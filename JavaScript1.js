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
    var inputBook = document.getElementById("bookName");
    var inputAuthor = document.getElementById("authorName");
    var inputScore = document.getElementById("score");
    if (inputBook.value.trim().length == 0) {
        alert("נא להכניס שם ספר");
        inputBook.className = "validition";
    } else if (inputAuthor.value.trim().length == 0) {
        alert("נא להכניס שם מחבר");
        inputAuthor.className = "validition";
    } else if (!((inputScore.value >= 1) && (inputScore.value <= 10))) {
        alert("נא להכניס מספר בין 1-10");
        inputScore.className = "validition";
    } else {
        addToList(book);
        reset();
    }
}

function addToList(book) {

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
    };
    divDelete.appendChild(ex);
    var edit = document.createElement("span");
    edit.innerHTML = "edit";
    edit.className = "editClass";
    var newInputBook = document.createElement("input");
    newInputBook.setAttribute("type", "text");
    newInputBook.className = "newInputBookClass";
    edit.onclick = function (e) {
        edit.style.display = "none";
        var editBook = document.createElement("div");
        editBook.innerHTML = "edit";
        editBook.className = "editBookClass"
        editBook.onclick = function (e) {
            var firstDiv = e.target.parentNode;
            editBook.remove();
            newInputBook.value = firstDiv.innerHTML;
            firstDiv.innerHTML = "";
            firstDiv.appendChild(newInputBook);
            newInputBook.onkeyup = function (e) {
                if (e.keyCode == 13) {
                    var newBook = e.target.value;
                    firstDiv.innerHTML = newBook;
                    firstDiv.appendChild(editBook);
                }
            };
        };
        var editAuthor = document.createElement("div");
        editAuthor.innerHTML = "edit";
        editAuthor.className = "editAuthorClass"
        var newInputAuthor = document.createElement("input");
        newInputAuthor.setAttribute("type", "text");
        newInputAuthor.className = "newInputBookClass";
        editAuthor.onclick = function (e) {
            var secondeDiv = e.target.parentNode;
            editAuthor.remove();
            newInputAuthor.value = secondeDiv.innerHTML;
            secondeDiv.innerHTML = "";
            secondeDiv.appendChild(newInputAuthor);
            newInputAuthor.onkeyup = function (e) {
                if (e.keyCode == 13) {
                    var newAuthor = e.target.value;
                    secondeDiv.innerHTML = newAuthor;
                    secondeDiv.appendChild(editAuthor);
                }
            };

        };
        var editScore = document.createElement("div");
        editScore.innerHTML = "edit";
        editScore.className = "editScoreClass"
        var newInputScore = document.createElement("input");
        newInputScore.setAttribute("type", "text");
        newInputScore.className = "newInputBookClass";
        editScore.onclick = function (e) {
            var thirdDiv = e.target.parentNode;
            editScore.remove();
            newInputScore.value = thirdDiv.innerHTML;
            thirdDiv.innerHTML = "";
            thirdDiv.appendChild(newInputScore);
            newInputScore.onkeyup = function (e) {
                if (e.keyCode == 13) {
                    var newScore = e.target.value;
                    thirdDiv.innerHTML = newScore;
                    thirdDiv.appendChild(editScore);
                }
            };

        };
        bookNameDiv.appendChild(editBook);
        authorNameDiv.appendChild(editAuthor);
        scoreDiv.appendChild(editScore);
        // var theDivOfTheInput = firstDiv.innerHTML;
        //newInputBook.value = firstDiv.innerHTML;
        // firstDiv.innerHTML = "";
        // firstDiv.appendChild(newInputBook);
        //   newInputBook.onkeyup = function (e) {
        //      if (e.keyCode == 13) {
        //           var newvalue = e.target.value;
        //         var theDiv = e.target.parentNode;
        //      theDiv.innerHTML = newvalue;
        //      edit.style.display = "inline";
        // } else if (e.keyCode == 27) {
        // firstDiv.innerHTML = theDivOfTheInput;
        // edit.style.display = "inline";
        //  }

        //};

    };
    newElement.appendChild(bookNameDiv);
    newElement.appendChild(authorNameDiv);
    newElement.appendChild(scoreDiv);
    newElement.appendChild(edit);
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
