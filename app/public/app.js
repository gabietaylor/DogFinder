   // on click for button
   $(document).on('click', '#buttonSbmt', function() {
       console.log("I am working");
       // sends alert if name is not in
       if ($('#name').val().trim() == '') {
           alert("Please enter your name!!");
           return;
       }
       // sends alert if pic is not in
       if ($('#image').val().trim() == '') {
           alert("Please put a picture!!");
           return;
       }

       // answer array
       var userAnswers = [];
       for (var i = 1; i <= 10; i++) {
           if ($("input:radio[name=q" + i + "]:checked").val() == null) {
              // alert to answers all questions
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

    //post user object to dog API
       var currentURL = window.location.origin;
      console.log('userObject')

       // push the dog info out after submit
       $.post("/api/dogs", answerHolder, function(data) {
           console.log(data.name);
           console.log(data.photo);
           // pushes info from modal
           $("#dogInfo").html("<h3>" + data.name + "</h3> <br> <img src=" + data.photo + "</img>");
       })
           $('#dogModal').modal("show");

       // empties inputs
       $('#name').val('');
       $('#image').val('');
       $('input:radio').attr("checked", false);

       return false;
   });