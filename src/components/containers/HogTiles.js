import React from "react";
import Filter from "../Filter";
import HogTile from "./HogTile";
import hogs from "../../porkers_data";

class HogTiles extends React.Component {
  state = {
    hogs: hogs,
    filter: {
      greased: false,
      sorting: "name"
    }
  };

  filterHandler = e => {
    switch (e.target.value) {
      case "greased":
        const currentVal = this.state.filter.greased;
        this.setState(prevState => {
          return {
            ...prevState,
            filter: {
              ...prevState.filter,
              greased: !currentVal
            }
          };
        });
        break;
      case "name":
        this.setState(prevState => {
          return {
            ...prevState,
            filter: {
              ...prevState.filter,
              sorting: "name"
            }
          };
        });
        break;
      case "weight":
        this.setState(prevState => {
          return {
            ...prevState,
            filter: { ...prevState.filter, sorting: "weight" }
          };
        });
        break;
      default:
        debugger;
    }
  };

  toggleDisplayHandler = e => {
    const name = e.target.value;
    const hogIndex = this.state.hogs.findIndex(hog => hog.name === name);
    const hogs = this.state.hogs;
    hogs[hogIndex].display = false;
    this.setState(prevState => {
      return {
        ...prevState,
        hogs: hogs
      };
    });
  };

  showAllHandler = e => {
    const hogs = [...this.state.hogs];
    hogs.forEach(hog => (hog.display = true));
    this.setState(prevState => {
      return {
        ...prevState,
        hogs: hogs
      };
    });
  };

  render() {
    const filteredHogs = this.state.filter.greased
      ? this.state.hogs.filter(hog => hog.greased)
      : this.state.hogs;
    let sortedHogs;
    if (this.state.filter.sorting === "name") {
      sortedHogs = filteredHogs.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    } else if (this.state.filter.sorting === "weight") {
      const fuckThis =
        "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water";
      sortedHogs = filteredHogs.sort((a, b) => a[fuckThis] - b[fuckThis]);
    }
    const shownHogs = sortedHogs.filter(hog => hog.display);
    const myHogs = shownHogs.map(hog => {
      return (
        <HogTile
          hog={hog}
          key={hog.name}
          toggleDisplay={this.toggleDisplayHandler}
        />
      );
    });
    const disabled = shownHogs.length === filteredHogs.length ? "disabled" : ""
    return (
      <div className="hog_tiles">
        <Filter
          filterHandler={this.filterHandler}
          showAll={this.showAllHandler}
          disabled={disabled}
        />
        <div className="ui grid container">{myHogs}</div>
      </div>
    );
  }
}

export default HogTiles;
