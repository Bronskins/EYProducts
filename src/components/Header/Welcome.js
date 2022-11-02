import './Header.scss'
import './HeaderButton'
import './Welcome.css'
import React, { useState } from 'react'

function Header(props){

    const [checked, setChecked] = useState(false);

    const handleChange = (event) => {
        setChecked(event.currentTarget.checked)
        document.getElementById('header-welcome').classList.toggle('hide')

      }

    return (
    <div id="header-welcome" className="header-welcome">
        <h3>Welcome to EY Products</h3>
        <div className="header-welcome-disclaimer">
        <label>Close this tab.</label>
        <input checked={checked} onChange={handleChange} type="checkbox"></input>
        </div>

    </div>
    );
}

export default Header;