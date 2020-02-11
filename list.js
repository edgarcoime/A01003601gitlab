//style the list
function styleList(){
document.getElementById("movieList").style.listStyleType = "none";
var x = document.getElementsByTagName("STYLE")[0];
x.innerHTML = "li {  border: 1px solid #ddd; margin-top: -1px; background-color: #f6f6f6; padding: 12px;    text-decoration: none;    font-size: 18px;    color: black;    display: block;  } table {    border-collapse: collapse;    width: 100%;  }   th, td {    text-align: left;    padding: 8px;  }  tr:nth-child(even){background-color: #f2f2f2}  th {    background-color: #4CAF50;    color: white;}";
}

// filter through movies
function filterMovie() {
    var input = document.getElementById("filterMovie");
    var filter = input.value.toUpperCase();
    ul = document.getElementById("movieList");
    li = ul.getElementsByTagName('li')

    // Looping through list items
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName
    } 
}


// clicking on close to hide current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


var list = [];
var checkList = [];

var x = document.createElement("TABLE");
x.setAttribute("id", "myTable");
document.getElementById("historyList").appendChild(x);
var tr = document.createElement("TR");
document.getElementById("myTable").appendChild(tr);
tr.setAttribute("id", "tr")
var tha = document.createElement("TH");
var thb = document.createElement("TH");
tha.setAttribute("id", "th1");
thb.setAttribute("id", "th2");
var th1 = document.getElementById("tr").appendChild(tha);
var th2 = document.getElementById("tr").appendChild(thb);
document.getElementById("th1").innerText = String("Movie Name");
document.getElementById("th2").innerText = String("Repeat Times");
// var inputValue = document.getElementById("movieInputForm").value;

// Create a new list item when clicing on the "Add Movie" button


var count = 0;
var index = 0;

function newElement() {
    var inputValue = document.getElementById("movieInputForm").value;
    var li = document.createElement("li");
    var t = document.createTextNode(inputValue);

    li.appendChild(t);
    if (inputValue === "") {
        alert("You must type something!");
    } else {
        document.getElementById("movieList").appendChild(li);
    }
    document.getElementById("movieInputForm").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);




    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }


    var lli = document.getElementsByTagName("li");
    var tr = document.createElement("TR");
    var text = document.createTextNode(inputValue);
    document.getElementById("myTable").appendChild(tr);

    var td = document.createElement("TD");
    var tc = document.createElement("TD");


    tr.setAttribute("id", "myTr"+index);
    if(inputValue !=="")  {
        if (!list.includes(inputValue)){
            one = 1;
            td.setAttribute("id", "myTd"+index);
            td.appendChild(text);
            document.getElementById("myTr"+index).appendChild(td);
            tc.setAttribute("id", "myTc"+index);
            document.getElementById("myTr"+index).appendChild(tc);
            document.getElementById("myTc"+index).innerText = one;
            index++;
            list.push(inputValue);
        }else{
            document.getElementById("myTc"+list.indexOf(inputValue)).innerText ++;
        }
    }   
    console.log(list);
    checkList.push(inputValue);
    console.log(checkList);
}





// Clear Movies button removes all child elements of UL
function clearUL() {
    var ul = document.getElementById("movieList");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
}


//Create history of the list
// function history() {
//     let inputValue = "hi";
//     var x = document.createElement("TABLE");
//     x.setAttribute("id", "myTable");
//     document.getElementById("historyList").appendChild(x);
  
//     var y = document.createElement("TR");
//     y.setAttribute("id", "myTr");
//     document.getElementById("myTable").appendChild(y);
  
//     var z = document.createElement("TD");
//     var t = document.createTextNode(inputValue);
//     z.appendChild(t);
//     document.getElementById("myTr").appendChild(z);

// }