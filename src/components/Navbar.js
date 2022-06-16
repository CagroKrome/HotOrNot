import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import './comp.css'

function Navbar(props) {
  return (
    <div className='navbar'>

        <a href='/' className={'navbar-element ' + props.home}>
            <FontAwesomeIcon className='xd' icon={faHome} />
        </a>

        <a href='stats' className={'navbar-element ' + props.stats}>
            <FontAwesomeIcon icon={faChartLine} />
        </a>

        <a href='info' className={'navbar-element ' + props.info}>
            <FontAwesomeIcon icon={faInfo} />
        </a>

    </div>
  )
}

export default Navbar