import React, { Component } from 'react';
import './CountriesList.scss'
import lightModeCloseIcon from '../../assets/light-close-icon.svg'
import darkModeCloseIcon from '../../assets/dark-close-icon.svg'

class CountriesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
        }
    }

    handleShowModal = () => {
        this.setState((prevState) => ({
            showModal: !prevState.showModal
        }));
    }

    render() {
        const { flag, name, capital, region, population, topLevelDomain, currencies,
            languages, subregion, nativeName, borders, modeChange } = this.props;
        const { showModal } = this.state;

        return (
            <>
                <div className="container" >
                    <div className="list_wrapper" >
                        <div className='card' onClick={this.handleShowModal}>
                            <div className="flag">
                                <img src={flag} alt="Flag" />
                            </div>
                            <div className="info">
                                <h3>{name}</h3>
                                <div className="full_info">
                                    <p>Population: <span>{population}</span></p>
                                    <p>Region: <span>{region}</span></p>
                                    <p>Capital: <span>{capital}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {showModal && (
                    <div className="modal">
                        <div className="modal_items ">
                            <div className="all_info_item">
                                <div className="close_icon" onClick={this.handleShowModal}>
                                    <img src={modeChange ? lightModeCloseIcon : darkModeCloseIcon} alt="close Icon" />
                                </div>

                                <div className="main_info"div>
                                    <div className="flag">
                                        {flag && (
                                            <img src={flag} alt="flag" />
                                        )}
                                    </div>
                                    <div className="about">
                                        <div className="info_items">
                                            <div className="all_info">
                                                    {name && (
                                                        <h2 className='name'>{name}</h2>
                                                    )}

                                                    <div className="info_items_1">
                                                        {nativeName && (
                                                            <p>Native Name: <span>{ nativeName }</span></p>
                                                        )}
                                                        {population && (
                                                            <p>Population: <span>{ population }</span></p>
                                                        )}
                                                        {region && (
                                                            <p>Region: <span>{ region }</span></p>
                                                        )}
                                                        {subregion && (
                                                            <p>Sub Region: <span>{ subregion }</span></p>
                                                        )}
                                                        {capital && (
                                                            <p>Capital: <span>{ capital }</span></p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="info_items_2">
                                                    {topLevelDomain && (
                                                        <p>Top Level Domain: <span>{ topLevelDomain }</span></p>
                                                    )}
                                                    {currencies && (
                                                        <p>Currencies: <span>{ currencies }</span></p>
                                                    )}

                                                    {languages && (
                                                        <p>Languages: <span>{ languages }</span></p>
                                                    )}
                                                </div>
                                            </div>
                                            {borders && (
                                                <div className="borders">
                                                    <p>Border Countries: </p>

                                                    <div className="border_items">
                                                        {borders.map((border) => {
                                                            return(
                                                                <ul key={border}>
                                                                    <li>{border}</li>
                                                                </ul>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </>
        );
    }
}

export default CountriesList;
