import React from 'react';
import { connect, dispatch } from 'react-redux';

import { updateVisibilityFilter } from '../actions/visibilityFilter';

const Link = ({
	onClick,
	active,
	children
	}) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<a href='#'
		   onClick={e => {
		     e.preventDefault();
		     onClick();
		   }}
		  >
		  {children}
		</a>
	);
}

const mapDispatchToProps = (
	dispatch,
	props
) => {
	return {
		onClick: () => {
			dispatch(updateVisibilityFilter(props.filter))
		}
	}
}

const mapStateToProps = (
	state,
	props
) => {
	return {
		active: props.filter === state.visibilityFilter
	}
}

const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);

export default () => (
  <p>
    Show:
    {' '}
    <FilterLink filter='SHOW_ALL'>
      All
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_ACTIVE'>
      Active
    </FilterLink>
    {', '}
    <FilterLink filter='SHOW_COMPLETED'>
      Completed
    </FilterLink>
  </p>
);