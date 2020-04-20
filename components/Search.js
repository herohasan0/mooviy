import { inject, observer } from 'mobx-react';

@inject('store')
@observer
class Search extends React.Component {
  render() {
    const inputChanges = (e) => {
      this.props.store.searchVal = e.target.value;
    };

    const resetInput = () => {
      this.props.store.searchVal = '';
    };

    return (
      <form className="Search">
        <input
          className="Search-input"
          onChange={inputChanges}
          value={this.props.store.searchVal}
        />
        <input type="submit" className="Search-button" />
      </form>
    );
  }
}

export default Search;
