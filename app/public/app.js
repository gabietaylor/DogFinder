   // on click for button
   $(document).on('click', '#buttonSbmt', function() {
       console.log("I am working");

       if ($('#name').val().trim() == '') {
           alert("Please enter your name!!");
           return;
       }
       if ($('#image').val().trim() == '') {
           alert("Please put a picture!!");
           return;
       }

       // answer array
       var userAnswers = [];
       for (var i = 1; i <= 10; i++) {
           if ($("input:radio[name=q" + i + "]:checked").val() == null) {
               alert("Please answer all the questions!!");
               return;
           } else {
               userAnswers.push($("input:radio[name=q" + i + "]:checked").val());
           }
       };
       console.log(userAnswers);

       // once everything logs
       var answerHolder = {
           name: $('#name').val().trim(),
           image: $('#image').val().trim(),
           scores: userAnswers
       };
       console.log(answerHolder);

       // making API
       var URL = window.location.origin;
       console.log(API working);

       // push the dog info out after submit
       $.post("/api/dogs", answerHolder, function(data) {
           console.log(data.name);
           console.log(data.photo);
           $("#dogInfo").html("<h3>" + data.name + "</h3> <br> <img src=" + data.photo + " style='width:450px;'</img>");
           $('#dogModal').modal("show")
       })

       // empties inputs
       $('#name').val('');
       $('#image').val('');
       $('input:radio').attr("checked", false);

       return false;
   });