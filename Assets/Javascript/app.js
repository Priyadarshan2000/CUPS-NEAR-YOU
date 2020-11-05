$(document).ready(function() {

      $('select').material_select();

  $("#inter").hide(); 

 

  function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

  function validate() {
    $("#result").text("");
    var email = $("#email").val();
    if (validateEmail(email)) {
      $("#result").text(email + " is valid :)");
      $("#result").css("color", "green");
    } else {
      $("#result").text(email + " is not valid :(");
      $("#result").css("color", "red");
    }
    return false;
  }

  $("#validate").bind("click", validate); 



 
  var config = {
    apiKey: "AIzaSyBj10oSnNz60osM5NOoS90QpaJlcJGU1lA",
    authDomain: "coffeeformdata.firebaseapp.com",
    databaseURL: "https://coffeeformdata.firebaseio.com",
    projectId: "coffeeformdata",
    storageBucket: "coffeeformdata.appspot.com",
    messagingSenderId: "27513446655"
  };

  firebase.initializeApp(config);

  
  var database = firebase.database();

 
    var name = "";
    var email = "";
    var feedback = "";

    
    $("#submit").on("click", function(event) {
      event.preventDefault();
    $("#inter").show();


      
      name = $("#name").val().trim();
      email = $("#email").val().trim();
      feedback = $("#validate").val().trim();

      database.ref().push({
        name: name,
        email: email,
        feedback: feedback,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
   
    $('#name, #email, #validate').val('');
    return false;
    });
    
    
    database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
    
      var sv = snapshot.val();

    
    }, function(errorObject) {
      console.log("Errors handled: " + errorObject.code);
    });

});


 

  function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  }

  function validate() {
    $("#result").text("");
    var email = $("#email").val();
    if (validateEmail(email)) {
      $("#result").text(email + " is valid :)");
      $("#result").css("color", "green");
    } else {
      $("#result").text(email + " is not valid :(");
      $("#result").css("color", "red");
    }
    return false;
  }

  $("#validate").bind("click", validate); 

 