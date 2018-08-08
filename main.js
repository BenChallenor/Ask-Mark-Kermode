const apiKey = config.API_KEY;

$('document').ready(function() {
      const video = {
        api: function() {
          $('.searchButton').click(function(event) {
            event.preventDefault();
              const film = ($('.inputBox').val());
              $.getJSON('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&order=relevance&q=mark+kermode+reviews%22' + film + '%22&key=' + apiKey, function(data) {
                  console.log(data);
                });
              });
            }
          }
          video.api();
        });
