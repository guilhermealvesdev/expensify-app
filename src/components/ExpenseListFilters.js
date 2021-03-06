import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter} from '../actions/filters'

const ExpenseListFilters = (props) => {
    return (
        <input type="text" value={props.filters.text} onChange={(e) => {
            props.dispatch(setTextFilter(e.target.value));
        }} />
    );
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}
 
export default connect(mapStateToProps)(ExpenseListFilters);