var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    success: function(data) {
      callback(data);
    },
    error: function(error) {
      console.log('error: ' + error);
    }

  });
};

window.searchYouTube = searchYouTube;
