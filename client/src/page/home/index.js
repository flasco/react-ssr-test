import React from 'react';
import './sass/app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Life',
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', left: 0, top: 0, }}>
        <div style={{ display: 'flex', flexDirection: 'row', height: 50, position: 'absolute', bottom: 0, width: '100%',borderTop:'1px solid #ddd' }}>
          <div style={{ flex: 1, }}>1</div>
          <div style={{ flex: 1, }}>2</div>
          <div style={{ flex: 1, }}>3</div>
        </div>
      </div>
    );
  }
}

export default App;
