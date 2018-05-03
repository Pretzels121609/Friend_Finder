$(document).ready(function(){
    $("#submit").on("click", function(event){
        event.preventDefault();
        var userData = {
            name: $("#name").val().trim(),
            photo: $("#photo").val().trim(),
            scores: [
              $("#q1").val(),
              $("#q2").val(),
              $("#q3").val(),
              $("#q4").val(),
              $("#q5").val(),
              $("#q6").val(),
              $("#q7").val(),
              $("#q8").val(),
              $("#q9").val(),
              $("#q10").val()
            ]
          };
            // AJAX post the data to the friends API.
        $.post("/api/friends", userData, function(data) {

            // Grab the result from the AJAX post so that the best match's name and photo are displayed.
            $("#match-name").text(data.name);
            $("#match-img").attr("src", data.photo);
  
            // Show the modal with the best match
            $('.modal').modal('show')
  
          });

    })
});