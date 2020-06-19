//window.alert("working")

var db= firebase.firestore();

$("#chkLED1").click(function(){
    var LED1Status=$(this).is(':checked');
    db.collection("LED1Status").doc("pCyjqcS3Is74Aet87JSv")
    .set({
        status:LED1Status
    });
    // alert("Status:"+LED1Status)
});

//get data
//db.collection("LED1Status").get().then((querySnapsort)=>{
  //  querySnapsort.forEach((doc)=>{
    //    console.log('${doc.id}=>${doc.data()}');
   // });
//});
//real time update
db.collection("LED1Status").onSnapshot(function(Snapshot){
     Snapshot.docChanges().forEach(function(change){
         if(change.type==="modified"){
             console.log("Status:",change.doc.data().status);
             $("#chkLED1").prop('checked',change.doc.data().status)
         }
     });
});

db.collection("LED2Status").onSnapshot(function(Snapshot){
    Snapshot.docChanges().forEach(function(change){
        if(change.type==="modified"){
            console.log("Status:",change.doc.data().status);
            $("#chkLED2").prop('checked',change.doc.data().status)
        }
    });
});
db.collection("LED3Status").onSnapshot(function(Snapshot){
    Snapshot.docChanges().forEach(function(change){
        if(change.type==="modified"){
            console.log("Status:",change.doc.data().status);
            $("#chkLED3").prop('checked',change.doc.data().status)
        }
    });
});

("#chkLED2").click(function(){
    var LED2Status=$(this).is(':checked');
    db.collection("LED2Status").doc("pekUFNMNteM9EZJ3P93K")
    .set({
        status:LED2Status
    });
     alert("Status:"+LED2Status)
});
("#chkLED3").click(function(){
    var LED3Status=$(this).is(':checked');
    db.collection("LED3Status").doc("tGZUPgQxY2qfrVhwSvTj")
    .set({
        status:LED3Status
    });
     alert("Status:"+LED3Status)
});