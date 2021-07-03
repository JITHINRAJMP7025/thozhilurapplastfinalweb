var wrkapply= localStorage.getItem("homeuserid");

var wrkn=1;
var flag;

var ref = firebase.database().ref('users/'+'/leader').orderByKey();
ref.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    
      var leaderkey = childSnapshot.key;
      var ref1=firebase.database().ref('users/'+'/leader/'+leaderkey+'/applywork').orderByKey();
        ref1.once("value")
        .then(function(snapshot){
         snapshot.forEach(function(childSnapshot) {
        
             var key1 = childSnapshot.key;
             var ref2=firebase.database().ref('users/'+'/leader/'+leaderkey+'/applywork/'+key1);
           
             ref2.on('value', (snapshot) => {
   
             var Cardno = snapshot.val().cardno;
             var Mobile = snapshot.val().mobileno;
             var Name = snapshot.val().name;
                             
                             
             var ref3=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+"/leaderlogin/").orderByKey();
             ref3.once("value")
             .then(function(snapshot) {
               snapshot.forEach(function(childSnapshot) {
               
                 var key3 = childSnapshot.key;
                //  console.log(key3);
                 // window.alert(Mobile);
                 if(leaderkey==key3)
                 {
                
                   AddItemsToTable(Name,Mobile,Cardno,wrkn,key3,key1,wrkapply);
                     wrkn++;
                   // window.alert(Cardno+""+Mobile+""+Name);
                 }
               
               });
             });
            
            
             });
             
            });
          });

        });
      });
           //  var ref2=firebase.database().ref('users/'+'/leader/'+leaderkey+'/applywork/'+key1);
             //     var data = snapshot.val()
            /* var Cardno = snapshot.val().cardno;
             var Mobile = snapshot.val().mobileno;
             var Name = snapshot.val().name;
             window.alert("second loop")*/

     /*var ref3=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/flag');
             ref3.set ({
              flag: 0
           
               });
               */
             /*  window.alert("flag set");
               var ref4=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/aprvdcard').orderByKey();
               ref4.once("value")
               .then(function(snapshot) {
                 snapshot.forEach(function(childSnapshot) {
                 
                   var key2 = childSnapshot.key;
                   window.alert(key2+"loloop");
                 });
                });

      });
    });*/
     
    /*  var ref1=firebase.database().ref('users/'+'/leader/'+leaderkey+'/applywork').orderByKey();
           ref1.once("value")
           .then(function(snapshot){
            snapshot.forEach(function(childSnapshot) {
           
                var key1 = childSnapshot.key;
                window.alert("1st loop");
              // var Cardno = key1;
              // window.alert(Cardno);
                var ref2=firebase.database().ref('users/'+'/leader/'+leaderkey+'/applywork/'+key1);
                ref2.on('value', (snapshot) => {
                 
                  var count=snapshot.val().count;
                 
                 
                 
                  window.alert("second loop");
                       var ref3=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/flag');
                        ref3.set ({
                         flag: 0
                      
                          });
               
                     
                       var ref4=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/aprvdcard').orderByKey();
                       ref4.once("value")
                       .then(function(snapshot) {
                         snapshot.forEach(function(childSnapshot) {
                         
                           var key2 = childSnapshot.key;
                        window.alert(key2+"is"+Cardno);
                        if(Cardno == key2){
                         window.alert("match");
                          var ref5=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/flag');

                          ref5.set ({
                            flag: 1
                         
                             });
                         
                          
                        }
                      });
                    }); 
                     
                     var ref6=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/flag');
                     
                     ref6.on('value', (snapshot) => {
                       
                       var flag1=snapshot.val().flag;
                    
                    
                        if(flag1 == 0){
                     
                         
                          var ref3=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+"/leaderlogin/").orderByKey();
                          ref3.once("value")
                          .then(function(snapshot) {
                            snapshot.forEach(function(childSnapshot) {
                            
                              var key = childSnapshot.key;
                               console.log(key);
                              // window.alert(Mobile);
                              if(leaderkey==key)
                              {
                             
                                AddItemsToTable(Name,Mobile,Cardno,wrkn,key,key1,wrkapply);
                                  wrkn++;
                                // window.alert(Cardno+""+Mobile+""+Name);
                              }
                            
                            });
                          });
                         
                        }
                      });
                      
                      
                    
                       
                  
                                    });            //  window.alert(Cardno+""+Mobile+""+Name);
                                  
                                 
          });
         
         });*/
     
     

/* function approvedcard(key1){
  var ref4=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/aprvdcard').orderByKey();
  ref4.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    
      var key2 = childSnapshot.key;
      window.alert("key1="+key1);
      if(key1 == key2){
      window.alert("hai");
      }
      window.alert("key2="+key2);
    });
   });
 }*/
        
 
  

window.onload = application;


function AddItemsToTable(Name,Mobile,Cardno,wrkn,key3,key1,wrkapply){
 // window.alert(Cardno);
var tbody = document.getElementById('tbody1');
var trow = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
var td5 = document.createElement('td');
var td6 = document.createElement('button');

td1.innerHTML= wrkn;
td2.innerHTML= Name;
td3.innerHTML= Cardno;
td4.innerHTML= Mobile;
var color = "#FF0000";
td5.innerHTML="<font color="+color+">click here</font>";
td5.onclick = function (){
  localStorage.setItem("userid", key3);
  localStorage.setItem("cardid",key1);
  localStorage.setItem("homeuserid",wrkapply);
  window.location.href = "landtax.html";
  //window.alert("hai");
 
}
td6.innerHTML="verify";
td6.onclick = function (){
//  window.alert(Mobile+"mobile");
 // window.alert(Cardno+"cardno");
  var ref4=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+Mobile+'/'+Cardno);
//window.alert(wrkapply);
//window.alert(key1);
  ref4.set ({
    status: "approved"
 
     });
     var ref5=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+'/aprvdcard/'+Cardno);
     //window.alert(wrkapply);
     //window.alert(key1);
       ref5.set ({
         name:Name,
        cardno : Cardno,
        mobile:Mobile

       });
       var adaRef = firebase.database().ref('users/'+'/leader/'+key3+'/applywork/'+Cardno);
       adaRef.remove()
         .then(function() {
           console.log("Remove succeeded.")
         })
 
};



trow.appendChild(td1); 
trow.appendChild(td2); 
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);

tbody.appendChild(trow);

function frontpage(){
  localStorage.setItem("panchayat", Name);
  localStorage.setItem("card", Cardno);
  localStorage.setItem("homeuserid", wrkapply);
  window.location.href = "approved.html";

}
}

