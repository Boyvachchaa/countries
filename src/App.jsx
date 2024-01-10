import React, { Component } from 'react';
import "./App.scss"
import Header from './Components/Header/Header';
import searchIcon from './assets/searchIcon.svg'
import CountriesListItem from './Components/CountriesListItem/CountriesListItem';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countriesList: [],
      filterCountryList: [],
      searchText: '',
      countryFilter: '',
      countryItems: 8,
      modeChange: true,
    }
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      this.setState({ countriesList: data, filterCountryList: data });
    } catch (error) {
      console.log(error);
    }
  }
  

  handleSearchInput = (e) => {
    this.setState({ searchText: e.target.value })
    this.filterCountriesList(e.target.value)
  }


  filterCountriesList = (countryName) => {
    if (countryName) {
      this.setState(({ countriesList }) => {
        const filterCountryList = countriesList.filter((country) => {
          return country.name.common.toLowerCase().includes(countryName.toLowerCase());
        });
  
        return {
          filterCountryList
        };
      });
    } else {
      this.setState({ filterCountryList: this.state.countriesList });
    }
  }
  
  handleAddCountry = () => {
    this.setState({ countryItems: this.state.countryItems + 8 })
  }

  handleFilter = (e) => {
    this.setState({ countryFilter: e.target.value })
    this.setState({ countryItems: 8 })
  }

  filterCountriesListByRegion = (region, allList) => {
    switch(region) {
      case 'Africa':
        return allList.filter((country) => country.region === 'Africa')
      case 'America':
        return allList.filter((country) => country.region === 'Americas')
      case 'Asia':
        return allList.filter((country) => country.region === 'Asia')
      case 'Europe':
        return allList.filter((country) => country.region === 'Europe')
      case 'Oceania':
        return allList.filter((country) => country.region === 'Oceania')
      case 'Filter by Region':
        return allList
      default:
        return allList
    }
  }

  handleChangeMode = () => {
    this.setState((prevState) => ({
      modeChange: !prevState.modeChange,
    }), () => {
      console.log(this.state.modeChange);
    });
  };

  
  render() {
    const { countryFilter, filterCountryList, modeChange } = this.state
    const filterCountry = this.filterCountriesListByRegion(countryFilter, filterCountryList)

    return (
      <div className={`app ${modeChange ? 'light' : 'dark'}`}>
        <Header 
          modeChange={modeChange}
          handleChangeMode={this.handleChangeMode}/>
        <div className="container">
          <div className="filter-items">
            <form className="input-area">
              <img src={searchIcon} alt="Search Icon" />
              <input 
                type="search" 
                name="search"
                placeholder="Search for a country..."
                value={this.state.searchText}
                onChange={this.handleSearchInput}
              />
            </form>
            <select name="countryFilter" value={this.state.countryFilter} onChange={this.handleFilter}>
              <option value="Filter by Region">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
        <CountriesListItem 
          countriesList={filterCountry.slice(0, this.state.countryItems)}
          modeChange={this.state.modeChange}
        />

        {!filterCountry.length && (
          <div className="not-found">
            <h1>Country Not Found</h1>
          </div>
        )}

        <div className="container show">
          {filterCountry.length > this.state.countryItems ? 
          
            <button className="show_country" onClick={this.handleAddCountry}>
              Show
            </button>  
            :
            null
          }
          
        </div>
      </div>
    );
  }
}

export default App;