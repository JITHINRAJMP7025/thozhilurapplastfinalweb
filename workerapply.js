
  
   var wrkapply= localStorage.getItem("homeuserid");
 

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
                var mobile=snapshot.val().mobile;
               // var link=snapshot.val().adharphoto;
             
                if(panchayat == wrkapply){
                AddItemsToTable(Name,Address,Adharno,Bankno,wrkn,key,wrkapply,mobile);
                wrkn++;
                }
            

               });

           
        });
   });

window.onload = application;


function AddItemsToTable(Name,Address,Adharno,Bankno,wrkn,key,wrkapply,mobile){
var tbody = document.getElementById('tbody1');
var trow = document.createElement('tr');
var td1 = document.createElement('td');
var td2 = document.createElement('td');
var td3 = document.createElement('td');
var td4 = document.createElement('td');
var td5 = document.createElement('td');
var td6 =  document.createElement('td');
var td7 = document.createElement('td');
var td8 = document.createElement('input');
td8.setAttribute("type", "text");
td8.setAttribute("id", "cardno");
td8.setAttribute("width","20px");
let td9 =  document.createElement('button');//let for var
td1.innerHTML= wrkn;
td2.innerHTML= Name;
td3.innerHTML= Address;
td4.innerHTML= Adharno;
td5.innerHTML=mobile;
td6.innerHTML= Bankno;
var color = "#FF0000";
td7.innerHTML="<font color="+color+">click here</font>";
td7.onclick = function (){
  localStorage.setItem("userid", key);
  localStorage.setItem("homeuserid", wrkapply);
  window.location.href = "adharimage.html";
}
td8.innerHTML="text";
td9.innerHTML="Set";
td9.onclick = function () {
  var value1=document.getElementById("cardno").value;
  var firebaseRef = firebase.database().ref('users/'+"/Panchayat/"+wrkapply+"/cardno/"+mobile);
  firebaseRef.set ({
    cardno: value1
    
 });
 var firebaseRef = firebase.database().ref('users/'+"/Panchayat/"+wrkapply+"/thozhilcardnumber/"+mobile);
 firebaseRef.set ({

  name: Name,
  address: Address,
  adhar: Adharno,
  mobile: mobile,
  bank: Bankno,
  cardno :value1
   
 });
 var adaRef = firebase.database().ref('users/'+'/workers/'+key+'/Applydetails');
 adaRef.remove()
   .then(function() {
     console.log("Remove succeeded.")
   })

}

trow.appendChild(td1); 
trow.appendChild(td2); 
trow.appendChild(td3);
trow.appendChild(td4);
trow.appendChild(td5);
trow.appendChild(td6);
trow.appendChild(td7);
trow.appendChild(td8);
trow.appendChild(td9);
tbody.appendChild(trow);
}