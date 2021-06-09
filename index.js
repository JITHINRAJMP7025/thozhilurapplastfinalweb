
function myclick()
{
   var  name1 = document.getElementById("nameleader"); 
   var  mobile = document.getElementById("mobileid"); 
   var  password = document.getElementById("password");
 var name2=name1.value;
 var mobile1=mobile.value; 
 var password1=password.value;
 window.alert("Registered Successfully"); 

var firebaseRef = firebase.database().ref('users/'+"/Panchayat/"+"/leaderlogin/"+mobile1);
//window.alert(firebaseRef);
 //firebaseRef.set("hai");
 
 firebaseRef.set ({
    name: name2,
    number: mobile1,
    password: password1
 });


firebaseRef.child().set();
firebaseRef.child("text").set(val1);

  
   
}

