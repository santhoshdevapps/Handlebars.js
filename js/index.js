$(document).ready(function() {

  const username = localStorage.getItem("username") 

  const URL = `https://myawesomeproject-ded96.firebaseio.com/users/${username}.json`
  console.log("getting response from: " + URL)
  $.ajax({
        dataType:"json",
        url:URL,
        success:function(responseData, status, xhr) {
          // alert("got data from the api!")
          console.log(responseData)


          let numPosts = responseData["posts"]
          let followers = responseData["followers"]
          let following = responseData["following"]
          let website = responseData["website"]
          let description = responseData["description"]
          let name = responseData["fullname"]




          let sourceTemplateCode = $("#userdetails-tpl").html() 
          console.log(sourceTemplateCode)
          let compiledTemplate = Handlebars.compile(sourceTemplateCode)

          let data = {
            "uname":username,
            "numOfPosts":numPosts,
            "numOfFollowers":followers,
            "numOfFollowing":following,
            "firstName":name,
            "description":description,
            "anchorLink":website
          }
          console.log(data)

          let htmlToAdd = compiledTemplate(data)
          $("#userinfoContainer").append(htmlToAdd)



            sourceTemplateCode = $("#photos-tpl").html()      
            console.log(sourceTemplateCode)
              compiledTemplate = Handlebars.compile(sourceTemplateCode)

              data = {
                "photos":responseData["photos"]
              }
              console.log(data)

              htmlToAdd = compiledTemplate(data)
              $("#photoGridContainer").append(htmlToAdd)


        },      // end success function
        error: function(jqXhr, textStatus, errorMesage) {
          alert("error");
          console.log('Error: ' + errorMessage); // An error occurred during the request.
        }
      })    // end ajax call
});
