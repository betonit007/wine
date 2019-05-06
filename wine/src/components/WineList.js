import React from 'react';
import { connect } from 'react-redux';
import { getWine } from '../actions';

class WineList extends React.Component {

    componentDidMount() {
        this.props.getWine();
    }


    render() {

        return (
            
            <div className="wines">
            <h1 className="wines__title">Wine List</h1>
            <ul className="wines__list">
            
              { this.props.wines ? this.props.wines
                  .map((wine) => {
                    return <li key={wine.name} className="wine">{wine.name}</li>;
                  })
              : <div></div>} 
            </ul>
          </div>
        )
    }
    
}

const mapStateToProps = state => {
    return {wines : state.wine.data}
}



export default connect(mapStateToProps, { getWine })(WineList);