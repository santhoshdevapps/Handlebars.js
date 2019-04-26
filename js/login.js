$("#loginButton").click(function() {
  // 0. DO NOT DELETE - stops the <a> link from reloading the page
  event.preventDefault();

let username = $("#usernameBox").val()
  if (username === "humbercollege" || username === "nintendo") {
    localStorage.setItem("username", username)
    window.location.href="index.html"
  }
  else {
    $("#results").html("Sorry, wrong username or password.")
    return
  }


});

