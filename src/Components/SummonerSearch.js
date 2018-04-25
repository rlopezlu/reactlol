import React from 'react';
import SearchBar from './SearchBar'
import '../Styles/Search.css'

function SummonerSearch(props){
  return(
    <div className="searchBarsDiv">
      <p className="SearchPrompt">LoL Team Mate History</p>
      <select value={props.selectedRegion} onChange={props.regionHandler}>
        {props.regions.map(region => {
          return <option value={region[1]} key={region[0]}>{region[0]}</option>
        })}
      </select>
      <p className="subPrompt">Enter your summoner name</p>
      <SearchBar parentSubmitHandler = {props.parentSubmitHandler}/>
    </div>
  )
}

export default SummonerSearch;
