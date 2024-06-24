import { Component } from "react";
import './SearchInput.style.css'


class SearchInput extends Component {
    render () {

        const { onSearchChange, placeholder, className } = this.props;
        return(
            <input 
            className={`search-input ${className}`} 
            type="search" 
            placeholder={placeholder}
            onChange={onSearchChange}
        />
        )
    }
}


export default SearchInput;