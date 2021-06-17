
  
   var wrkapply= localStorage.getItem("homeuserid");
 
 window.alert(wrkapply);

    var ref = firebase.database().ref('users/'+'/workers').orderByKey();
    ref.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
        
          var key = childSnapshot.key;
          var wrkn=1;
          var ref1=firebase.database().ref('users/'+'/workers/'+key+'/Applydetails');
           ref1.on('value', (snapshot) => {
              //const data = snapshot.val();
              // if(data==password1
                //window.alert(ref1);
               
                var Name = snapshot.val().name;
                var Address = snapshot.val().address;
                var Adharno = snapshot.val().adharno;
                var Bankno = snapshot.val().bankno;
                var panchayat = snapshot.val().panchayatname;
               // var link=snapshot.val().adharphoto;
                if(panchayat == wrkapply){
                AddItemsToTable(Name,Address,Adharno,Bankno,wrkn,key);
                wrkn++;
                }
               /* var tbody = document.getElementById('tbody1');
                var trow = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                var td5 = document.createElement('td');
                td1.innerHTML= ++wrkno;
                td2.innerHTML= Name;
                td3.innerHTML= Address;
                td4.innerHTML= Adharno;
                td2.innerHTML= Bankno;
                trow.appendChild(td1); 
                trow.appendChild(td2); 
                trow.appendChild(td3);
                trow.appendChild(td4);
                trow.appendChild(td5);
                tbody.appendChild(trow);*/

               });

               //});
        });
   });

window.onload = application;


function AddItemsToTable(Name,Address,Adharno,Bankno,wrkn,key){
var tbody = document.getElementById('tbody1');
var trow = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
var td5 = document.createElement('td');
var td6 = document.createElement('td');
var td7 = document.createElement('input');
td7.setAttribute("type", "text");
td7.setAttribute("id", "cardno");

let td8 =  document.createElement('button');
td1.innerHTML= wrkn;
td2.innerHTML= Name;
td3.innerHTML= Address;
td4.innerHTML= Adharno;
td5.innerHTML= Bankno;
var color = "#FF0000";
td6.innerHTML="<font color="+color+">click here</font>";
td6.onclick = function (){
  localStorage.setItem("userid", key);
  window.location.href = "adharimage.html";
}
td7.innerHTML="text";
td8.innerHTML="Apply";
td8.onclick = function () {
  var value1=document.getElementById("cardno").value;
  var firebaseRef = firebase.database().ref('users/'+"/Panchayat/"+wrkapply+"/cardno/"+Adharno);
  firebaseRef.set ({
    cardno: value1
    
 });

 var ref = firebase.database().ref('users/'+"/Panchayat/"+"/verify");
 ref.on('value', (snapshot) => {
  const data = snapshot.val();
  //var len=td7.document.getElementById ( "value1" ).innerText;
  
 td8.innerHTML=data;

 }); 
};

trow.appendChild(td1); 
trow.appendChild(td2); 
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);
trow.appendChild(td7);
trow.appendChild(td8);
tbody.appendChild(trow);
}