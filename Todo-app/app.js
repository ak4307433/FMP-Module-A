 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-analytics.js";
 import { getDatabase,ref,set,push } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBp6Madk3DRqiq2-1s53AgHJGadf1DtGWE",
   authDomain: "todoappwithdatabase-77b4e.firebaseapp.com",
   projectId: "todoappwithdatabase-77b4e",
   storageBucket: "todoappwithdatabase-77b4e.appspot.com",
   messagingSenderId: "782201516645",
   appId: "1:782201516645:web:508924e56806972755cc8c",
   measurementId: "G-XK13ZE00KL"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
 const db = getDatabase()








var todolists = document.getElementById("todo-works");

window.addtodo =function(){
    var todoItems = document.getElementById("todo-items");


    var obj = {
        value: todoItems.value,
    }

    console.log(obj)

    obj.id = push(ref(db,"todoitem/")).key
    const reference = ref(db, `Todo Items/${obj.id}`)
    set(reference,obj)

    
    
    var listWork = document.createElement('li');
    var litext = document.createTextNode(todoItems.value);
    listWork.appendChild(litext);
    todolists.appendChild(listWork)


    var del = document.createElement('button');
    var delText = document.createTextNode("Delete");
    del.appendChild(delText);
    todolists.appendChild(del)
    del.setAttribute("onclick","delitems(this)");
    
    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("EDIT");
    editbtn.appendChild(edittext);
    todolists.appendChild(editbtn);
    editbtn.setAttribute("onclick" , "edititem(this)")
    
    
    todoItems.value = "" ;
    // console.log(todolists)

}


 window.delitems = function(r){
    r.parentNode.remove();
    // console.log(r.parentNode)
}


 window.clearall =function(){
    // todo-works.innerHTML =     
}

 window.edititem = function(e){
    var val = e.parentNode.firstChild.nodeValue;
    var editval = prompt("Enter Edit Value" , "val");
    e.parentNode.firstChild.nodeValue = editval;
    

    
}