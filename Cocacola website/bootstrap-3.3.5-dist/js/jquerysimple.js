//check if document has loaded//
$(document).ready(function() {
  $("#pitch > h1").mouseenter(function() {
    $("h1").fadeOut(1000).fadeIn(1000);
  });

  $("#project1 > h5").hide();
  $("#project1 img").mouseenter(function() {
    $("#project1 h5").show(1000).hide(1200);
  });
  $('#contact-form').on('submit', function(e) {
    url = '/';
    data = $(this).serialize();

    $.post(url, data).done(function() {
      alert('You are logged in');
    }).fail(function() {
      alert('Oooops. Something went wrong');
    });
    //
    e.preventDefault();
  });
  $("#contact-form").validate({

    rules: {
      fullname: "required",
      email: {
        required: true,
        email: true
      },
    },
    messages: {
      fullname: "Please Enter Your Full Names",
      email: {
        required: "Email cannot be empty!!",
        email: "Please use this format user@someone.com",
        maxlength: "Maximum length should be 20"
      }
    },
    highlight: function(element) {
      $(element).addClass('error');
    }
  });
  $("#tabs").tabs();
});

$.getElementsByClassName('facebook')({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});

$.getElementsByClassName('twitter')({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
$.getElementsByClassName('linkedin')({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
$.getElementsByClassName('instagram')({
  url: url,
  data: data,
  success: success,
  dataType: dataType
});
githubReposurl = 'https://api.github.com/users/terencegit/repos';
$.get(githubReposurl, function(repositories)  {
//parse data object
  projectlistTemplate ='';
  projectlistTemplate += '<ul>';

  repositories.forEach(function(repository)
  {
    projectlistTemplate += '<li>';
    projectlistTemplate += '<h2><a href="#">Introduction to bootstrap</h2>';

  });

  //+ '<li>' + '<h2><a href="#">Introduction to Bootstrap></h2>' + '<p>My Project description</p>' + '<a href="#">Teams working on projects</a>' + '<li>' + '</ul>';

$('#open-source-content').html(projectlistTemplate);

});
