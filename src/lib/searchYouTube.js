var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      maxResults: options.max,
      q: options.query,
      type: 'video',
      key: options.key,
      videoEmbeddable: true
    },
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.log('error: ' + error);
    }
  });
};

window.searchYouTube = searchYouTube;
