import { Component } from "react";
import './CardList.style.css'
import Cards from "./Cards.comp";



class CardList extends Component {

    static defaultProps = {
        teachers: []
    };

    render () {
        
        const { teachers } = this.props;
        return(
            <Cards teachers={teachers} />
        )
    }
}


export default CardList;