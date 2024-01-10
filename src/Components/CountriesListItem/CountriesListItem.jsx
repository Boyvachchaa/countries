import React, { Component } from 'react';
import CountriesList from '../CountriesList/CountriesList';

class CountriesListItem extends Component {
    render() {

        const { countriesList, modeChange } = this.props

        return (
            <div className="container" >
                <div className='list_wrapper'>
                    {countriesList && countriesList.map((country) => {
                        const { flags, name, capital, region, population, subregion,
                            tld, borders, currencies, languages } = country;

                        let nativeName = '',
                            currencie = '',
                            language = ''

                        for (const key in name.nativeName) {
                            nativeName = name.nativeName[key].common
                        }

                        for (const key in currencies) {
                            currencie = currencies[key]?.name
                        }

                        for (const key in languages) {
                            language += ', ' + languages[key]
                        }

                        language = language.substring(1)

                        return <CountriesList 
                                    flag={flags.png}
                                    name={name.common}
                                    capital={capital}
                                    region={region}
                                    population={population}
                                    subregion={subregion}
                                    nativeName={nativeName}
                                    topLevelDomein={tld}
                                    currencies={currencie}
                                    languages={language}
                                    borders={borders}
                                    modeChange={modeChange}
                                />
                    })}
                
                </div>
            </div>
        );
    }
}

export default CountriesListItem;