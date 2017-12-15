import React from 'react';
import PigCard from './PigCard';

export default class PigList extends React.Component {
  sortByWeight = pigs => {
    const weight =
      'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';
    return pigs.sort((pig1, pig2) => pig2[weight] - pig1[weight]);
  };
  sortByName = pigs => {
    return pigs.sort((pig1, pig2) => {
      if (pig1.name.toUpperCase() < pig2.name.toUpperCase()) {
        return -1;
      } else if (pig1.name.toUpperCase() > pig2.name.toUpperCase()) {
        return 1;
      } else {
        return 0;
      }
    });
  };
  render() {
    const pigGreasy = this.props.pigList.filter(
      pig => (this.props.isGreasy ? pig.greased : pig)
    );
    const sortedBy =
      this.props.filterBy === 'name'
        ? this.sortByName(pigGreasy)
        : this.sortByWeight(pigGreasy);

    const pigList = sortedBy.map((pig, i) => {
      // debugger;
      return <PigCard key={i + 1} id={i} thisPig={pig} />;
    });
    return (
      <div>
        <h2>Your Hogs</h2>
        <br />
        <div className="ui grid">{pigList}</div>
      </div>
    );
  }
}
