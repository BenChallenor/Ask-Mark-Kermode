const apiKey = config.API_KEY;

$('document').ready(function() {
  const video = {
    api: function() {
      $('.searchButton').click(function(event) {
        event.preventDefault();
        const film = ($('.inputBox').val());
        $(".inputBox").val("");
        $(".display").empty();
        $(".description").empty();;
        // clears search results
        $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=mark+kermode+reviews%22' + film + '%22&key=' + apiKey, function(data) {
          function results() {
            const firstResult = data.items[0];
            const Id = firstResult.id.videoId;
            const description = firstResult.snippet.description;
            const displayVideo = '<iframe width="460" height="265" src="https://www.youtube.com/embed/' + Id + '" frameborder="0" allowfullscreen></iframe>';
            $('.display').append(displayVideo);
            $('.description').append(description);
          }
          results();
        });
      });
    }
  }
  video.api();
});
