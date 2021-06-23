var wrkapply= localStorage.getItem("homeuserid");

var wrkn=1;
var ref = firebase.database().ref('users/'+'/leader').orderByKey();
ref.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
    
      var key = childSnapshot.key;
     
      var ref1=firebase.database().ref('users/'+'/leader/'+key+'/applywork').orderByKey();
           ref1.once("value")
           .then(function(snapshot){
            snapshot.forEach(function(childSnapshot) {
           
                var key1 = childSnapshot.key;
               // window.alert(key1);
               
                var ref2=firebase.database().ref('users/'+'/leader/'+key+'/applywork/'+key1);
                ref2.on('value', (snapshot) => {
                  var Cardno = snapshot.val().cardno;
                  var Mobile = snapshot.val().mobileno;
                  var Name = snapshot.val().name;
                  //  window.alert(Cardno+""+Mobile+""+Name);
                  var ref3=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+"/leaderlogin/").orderByKey();
                  ref3.once("value")
                  .then(function(snapshot) {
                    snapshot.forEach(function(childSnapshot) {
                    
                      var key = childSnapshot.key;
                      if(Mobile==key)
                      {
                        AddItemsToTable(Name,Mobile,Cardno,wrkn,key,key1,wrkapply);
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

window.onload = application;


function AddItemsToTable(Name,Mobile,Cardno,wrkn,key,key1,wrkapply){
  window.alert(Cardno);
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
  localStorage.setItem("userid", key);
  localStorage.setItem("cardid",key1);
  window.location.href = "landtax.html";
  //window.alert("hai");
 
}
td6.innerHTML="verify";
td6.onclick = function (){
  window.alert(Mobile);
  var ref4=firebase.database().ref('users/'+"/Panchayat/"+wrkapply+'/workstatus/'+Mobile);
//window.alert(wrkapply);
//window.alert(key1);
  ref4.set ({
    status: "approved"
 
     });
 
};



trow.appendChild(td1); 
trow.appendChild(td2); 
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);

tbody.appendChild(trow);
}

