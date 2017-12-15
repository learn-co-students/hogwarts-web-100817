import React from 'react';
import PigDetail from './PigDetail';
import PigFace from './PigFace';

export default class PigCard extends React.Component {
  constructor() {
    super();

    this.state = {
      showDetail: false,
      hideMe: false
    };
  }

  convertName = () => {
    return this.props.thisPig.name
      .toLowerCase()
      .split(' ')
      .join('_');
  };

  showDetail = () => {
    this.setState(prevState => {
      return { showDetail: !prevState.showDetail };
    });
  };

  toggleCard = () => {
    this.setState(prevState => {
      return { hideMe: !prevState.hideMe };
    });
  };

  render() {
    const pigs = this.props.thisPig;
    const myState = this.state;
<<<<<<< HEAD
    const detailOutput = this.state.showDetail === false ? (
      <PigFace
        pigs={pigs}
        showDetail={this.showDetail}
        convertName={this.convertName}
      />
    ) : (
      <PigDetail
        pigs={pigs}
        showDetail={this.showDetail}
        convertName={this.convertName}
      />
    )
    const hideMe = !this.state.hideMe? detailOutput : null
    return (
      <div className="four wide column">
        {hideMe}
=======
    const faceOrDetail =
      myState.showDetail === false ? (
        <PigFace
          pigs={pigs}
          showDetail={this.showDetail}
          convertName={this.convertName}
          toggleCard={this.toggleCard}
        />
      ) : (
        <PigDetail
          pigs={pigs}
          showDetail={this.showDetail}
          convertName={this.convertName}
          toggleCard={this.toggleCard}
        />
      );
    return (
      <div className="four wide column">
        {this.state.hideMe === false ? (
          faceOrDetail
        ) : (
          <button onClick={this.toggleCard}> ShowMe! </button>
        )}
>>>>>>> 8e2f621dcd54bafdc2cb42a99edeeb80739b8f74
      </div>
    );
  }
}
