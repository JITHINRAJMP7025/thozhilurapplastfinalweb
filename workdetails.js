
function selectalldata(){
    firebase.database.ref('users/'+'/leader').once('value',
    function(AllRecords){
        AllRecords.forEach( 
            function(CurrentRecord){
                firebase.database.ref(CurrentRecord).once('value',
                function(record){
                    record.foreach(
                     
                    )
                });
            }
        );
    });
}