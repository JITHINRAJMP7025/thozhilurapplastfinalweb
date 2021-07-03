var  userid = document.getElementById("Userid"); 
var  password = document.getElementById("Password"); 
function login()
{

 var id=userid.value; 
 var password1=password.value;
  //  window.alert(id+" "+password1);
    var ref = firebase.database().ref('users/'+'/Admin').orderByKey();
    ref.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        
          var key = childSnapshot.key;
          if(key == id){
           // window.alert(key);
           //new line
           var ref1=firebase.database().ref('users/'+'/Admin/'+id+'/password');
           ref1.on('value', (snapshot) => {
            const data = snapshot.val();
                if(data==password1){
                   // Check browser support
                  if (typeof(Storage) !== "undefined") {
                   // Store
                     localStorage.setItem("homeuserid", id);
                  }
                  window.location.href = "home.html";
                }
                else{
                  window.alert("Panchayatid or Password is Incorrect!!!!!")
                }
               
             
            });
            
              
              
          }
          
         
        
         // var childData = childSnapshot.val();
          
      });
    });
      

}