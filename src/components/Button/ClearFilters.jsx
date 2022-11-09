import React from "react";
import { useDispatch } from 'react-redux';
import { clearFilter } from '../../redux/actions';
import "./ClearFilters.css";

function ClearFilters() {
  const dispatch = useDispatch();

	function handleClear() {
		dispatch(clearFilter());
	}

	return (
		<div>
			<button className="clearbutton" onClick={handleClear}>CLEAR FILTER</button>
		</div>
	);
};

export default ClearFilters;
