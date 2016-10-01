class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      curVideo: window.exampleVideoData[0]
    };
  }

  render() {
    // debugger;
    var videos = window.searchYouTube({}, this.props.searchYouTube);
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.curVideo} />
        </div>
        <div className="col-md-5">
          <VideoList onClickFunc={this.onVideoEntryClick.bind(this)} videos={window.exampleVideoData}/>
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
