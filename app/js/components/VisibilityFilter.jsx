import React from 'react';
import { connect, dispatch } from 'react-redux';

import { updateVisibilityFilter } from '../actions/visibilityFilter';

const filterMapping = {
	'SHOW_ALL': 'Show All',
	'SHOW_ACTIVE': 'Show Active',
	'SHOW_COMPLETED': 'Show Completed'
}

const Link = ({
	filter,
	onClick,
	active
}) => {
	if (active) {
		return (
			<span>{filterMapping[filter]}</span>
		)
	} else {
		return (
			<a
				href='#'
				className={filter}
				onClick={e => {
					e.preventDefault();
					onClick(filter)
				}}
			>
				{filterMapping[filter]}
			</a>
		)
	}
}

const Footer = ({
	onFilterClick,
	visibilityFilter
}) => (
	<div>
		{Object.keys(filterMapping).map((key) => {
			return (
				<Link 
					active={visibilityFilter === key}
					filter={key}
					onClick={onFilterClick}
				/>
			)
		})}
	</div>
)

const mapStateToProps = (
	state
) => {
	return {
		visibilityFilter: state.visibilityFilter
	}
}

const mapDispatchToProps = (
  dispatch
) => {
  return {
    onFilterClick: (filter) => {
      dispatch(updateVisibilityFilter(filter));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);


































// const Link = ({
// 	onClick,
// 	active,
// 	children
// 	}) => {
// 	if (active) {
// 		return <span>{children}</span>;
// 	}

// 	return (
// 		<a href='#'
// 		   onClick={e => {
// 		     e.preventDefault();
// 		     onClick();
// 		   }}
// 		  >
// 		  {children}
// 		</a>
// 	);
// }

// const mapDispatchToProps = (
// 	dispatch,
// 	props
// ) => {
// 	return {
// 		onClick: () => {
// 			dispatch(updateVisibilityFilter(props.filter))
// 		}
// 	}
// }

// const mapStateToProps = (
// 	state,
// 	props
// ) => {
// 	return {
// 		active: props.filter === state.visibilityFilter
// 	}
// }

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Link);

// export default () => (
//   <p>
//     Show:
//     {' '}
//     <FilterLink filter='SHOW_ALL'>
//       All
//     </FilterLink>
//     {', '}
//     <FilterLink filter='SHOW_ACTIVE'>
//       Active
//     </FilterLink>
//     {', '}
//     <FilterLink filter='SHOW_COMPLETED'>
//       Completed
//     </FilterLink>
//   </p>
// );