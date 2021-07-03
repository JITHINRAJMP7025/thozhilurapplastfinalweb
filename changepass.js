
var panchayatid = localStorage.getItem("homeuserid");
var  id = document.getElementById("old password"); 
var pswrd1 = document.getElementById("new Password"); 
var  pswrd2 = document.getElementById("confirm Password"); 


//window.alert(panchayatid);
function submit(){
  //  var oldpswrd=id.value; 
    //var newpswrd=pswrd1.value;
    //var cnfrmpswrd=pswrd2.value;
    window.alert("hai");
    var ref = firebase.database().ref('users/'+'/Admin').orderByKey();
    ref.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        
          var key = childSnapshot.key;


           if(panchayatid == key){
            var ref1 = firebase.database().ref('users/'+'/Admin/'+key);
           
                     
            ref1.on('value', (snapshot) => {
              
              var pwrd=snapshot.val().password;
            });
            if(pwrd == oldpswrd){
               if(newpsrd == cnfrmpswrd){
                 var ref = firebase.database().ref('users/'+'/Admin/'+key);
           
                 ref4.set ({
                password: newpswrd
             
                 });
                }
                else{
                    window.alert("Password does not match");
                }
           }
           else{
               window.alert("old password is incorrect");
           }
        }
       });
    });*/


}