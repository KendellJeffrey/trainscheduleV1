$( document ).ready(function() {

    var config = {
        apiKey: "",
        authDomain: "",
        databaseURL: "",
        projectId: "",
        storageBucket: "",
        messagingSenderId: ""
    };
    // Init firebase
    firebase.initializeApp(config);

    var data = firebase.data();

    $("#trainButton").on("click", function(event) {
        event.preventDefault(); //no button reset

        //set realtime
        var realtime = moment();
        
        var trainName = $("#name").val().trim();

        // puts train info together 
        var newTrain = {
            train: trainName
        };


        //sends new train to db
        data.ref().push(newTrain);
        
        $("#name").val("");


        //stops the page from having a error / moving
        return false;

    }); //end of onclick

    //childsnapshop is a modified source of my data 
    data.ref().on("child_added", function(childSnapshot, prevChildKey) {
            console.log("childsnappshot");
            
            //vars
            var trainName = childSnapshot.val().train;
            

            $("#tbody").append("<tr><td>" + trainName + "</td></tr>");

    });
});

