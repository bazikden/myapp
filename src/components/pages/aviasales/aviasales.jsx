import React, {Component} from 'react'
import logo from './images/Logo.png'
import CountRaces from "./countRaces";
import {TicketBlock} from "./ticketBlock";
import {connect} from "react-redux";
import {filterByPriceAC, getTickets, pageFilterTickets} from "../../../redux/reducers/aviaSailsReducer";

class Aviasales  extends Component {
    state={}
    componentDidMount() {
        try {
            this.props.getTickets()
        }
        catch (e) {
            console.log('restart')
            this.props.getTickets()
        }


    }


    render() {

        return (
            <div className='aviasales'>
                <div className='aviasales-logo'>
                    <img src={logo} alt=""/>
                </div>
                <div className='aviasales-container'>
                    <CountRaces filterByPriceAC ={this.props.filterByPriceAC}/>
                    <TicketBlock
                        tickets={this.props.tickets}
                        filteredTickets={this.props.filteredTickets}
                        pageFilterTickets={this.props.pageFilterTickets}
                        filterByPrice ={this.props.filterByPrice}
                        filterByPriceAC ={this.props.filterByPriceAC}
                    />
                </div>

            </div>
        )
    }


}

const mapStateToProps = state => ({
    tickets:state.aviaSails.tickets,
    filteredTickets:state.aviaSails.filteredTickets,
    filterByPrice: state.aviaSails.filterByPrice
})



export default connect(mapStateToProps,{getTickets,pageFilterTickets,filterByPriceAC})(Aviasales)