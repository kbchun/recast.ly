class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      curVideo: window.exampleVideoData[0],
      videos: []
    };
  }

  set(data) {
    this.setState({
      curVideo: data[0],
      videos: data
    });
  }

  componentDidMount() {
    var options = {
      query: 'dogs',
      max: 10,
      key: window.YOUTUBE_API_KEY
    };
    return this.props.searchYouTube(options, (data) => { this.set(data); });
  }

  render() {
    return (
      <div>
        <Nav onClickFunc={this.onSearchButtonClick.bind(this)} onEnterFunc={this.onSearchButtonEnter.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video={this.state.curVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onClickFunc={this.onVideoEntryClick.bind(this)} videos={this.state.videos}/>
        </div>
      </div>
    );
  }

  onVideoEntryClick(event) {
    $("html, body").animate({ scrollTop: 0 }, "fast");
    var video = JSON.parse(event.target.dataset.vid);
    this.setState({
      curVideo: video
    });
  }

  onSearchButtonClick(event) {
    var options = {
      query: event.target.closest('div').getElementsByTagName('input')[0].value,
      max: 10,
      key: window.YOUTUBE_API_KEY
    };
    return this.props.searchYouTube(options, (data) => { this.set(data); }); 
  }

  onSearchButtonEnter(event) {
    if (event.keyCode === 13) {
      var options = {
        query: event.target.closest('div').getElementsByTagName('input')[0].value,
        max: 10,
        key: window.YOUTUBE_API_KEY
      };
      return this.props.searchYouTube(options, (data) => { this.set(data); }); 
    }
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
