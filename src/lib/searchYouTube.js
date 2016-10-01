var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${options.max}&q=${options.query}&type=video&key=${options.key}`,
    type: 'GET',
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.log('error: ' + error);
    }
  });
};

window.searchYouTube = searchYouTube;
