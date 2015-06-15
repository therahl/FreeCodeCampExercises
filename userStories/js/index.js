$(document).ready(function() {
  $.getJSON('http://www.freecodecamp.com/stories/hotStories', function(data) {
    
    var counter = 0;
    data.forEach(function(story, i) {
      var image = "<img src='"+story.image + "'>";
      var comments = "<span class='footer'>"+story.comments.length + " Comments | ";
      var userName = story.author.username + "</span>";
      var table = '<a href="'+story.link + 
          '"><div class="story">'+ 
          image + story.headline + "<br>" + comments + userName + '</div></a>'
    
      counter++;
      
      if(counter === 4) {
        counter = 0;
      }
      
      $('#'+counter).append(table);
      
    })
  })
  
})