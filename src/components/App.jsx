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
      max: 3,
      key: 'AIzaSyAUeN4BNdnstGYB58BHhWAInw-31totrsU'
    };
    return this.props.searchYouTube(options, (data) => { this.set(data); });
  }

  render() {
    return (
      <div>
        <Nav />
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
    var video = JSON.parse(event.target.dataset.vid);
    this.setState({
      curVideo: video
    });
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
