class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      curVidId: props.videoData[0].id.videoId
    };
  }

  // clickHandler(e) {
  //   this.state
  // }

  render() {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer curVidId={this.state.curVidId} video={this.props.videoData[0]}/>
        </div>
        <div className="col-md-5">
          <VideoList curVidId={this.state.curVidId} videos={this.props.videoData}/>
        </div>
      </div>
    );
  } 
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
