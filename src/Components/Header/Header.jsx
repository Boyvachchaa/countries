import React, { Component } from 'react';
import "./Header.scss"
import darkModeIcon from '../../assets/dark-mode-icon.svg'
import lightModeIcon from '../../assets/light-mode-icon.svg'

class Header extends Component {

    render() {
        const { modeChange, handleChangeMode } = this.props;
        return (
            <div className='header'>
                <div className="wrapper container">
                    <h2>Where in the world?</h2>
                    <div className="change-theme">
                        <div
                            className={`mode ${modeChange ? 'light' : 'dark'}`}
                            onClick={() => {
                                handleChangeMode();
                                this.toggleMode();
                            }}
                        >
                            <img src={modeChange ? lightModeIcon : darkModeIcon} alt="modeIcon" />
                            <p>{modeChange ? 'Light Mode' : 'Dark Mode'}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
