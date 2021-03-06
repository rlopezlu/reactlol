import React from 'react'
import '../Styles/SingleTeamMate.css'
import version from '../apiVersion'

// TODO:version might need to be updated per patch update
// TODO: get iconUrl version from request /lol/static-data/v3/versions
const iconUrl = `http://ddragon.leagueoflegends.com/cdn/${version}/img/profileicon/`//3262.png"

function SingleTeamMate(props){

  function handleClick() {
    props.selectTeamMate(props.name, props.id)
    console.log(props.name);
    console.log(props.id);
  }

  return(
    <div className={"teamMember "+props.current} onClick={handleClick}>
      <p>{props.name}</p>
      <img className="iconImageTeamMates" alt={props.icon} src={iconUrl+props.icon+".png"} />
      <p>{props.count} games</p>
    </div>
  )
}

export default SingleTeamMate
