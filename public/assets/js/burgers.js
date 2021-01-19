// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: {}
    }).then(
      function() {
        console.log("changed devour to", newDevour);
      }
    );
    location.href = "/";
  });

  $("#submit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = $("#bu").val().trim();

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: {burger_name: newBurger}
    }).then(function() {
        console.log("created new burger");
      }
    );
    location.href = "/";
  });
  
  // location.href = "/"
  // $(".delete-burger").on("click", function(event) {
  //   var id = $(this).data("id");

  //   // Send the DELETE request.
  //   $.ajax("/api/burgers/" + id, {
  //     type: "DELETE"
  //   }).then(
  //     function() {
  //       console.log("deleted burger", id);
  //       // Reload the page to get the updated list
  //       location.reload();
  //     }
  //   );
  // });
});
