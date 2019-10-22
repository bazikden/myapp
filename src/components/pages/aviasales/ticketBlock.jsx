import React, {useEffect, useState} from 'react'
import {TicketCard} from "./ticketCard";

export const TicketBlock = ({tickets, filteredTickets, pageFilterTickets, filterByPrice, filterByPriceAC}) => {
    const [showedtickets, setShowedTicketes] = useState(null)


    useEffect(
        () => {
            tickets && setShowedTicketes(tickets)
        }, [tickets])

    useEffect(() => {

    }, [showedtickets])
    useEffect(() => {
        setShowedTicketes(filteredTickets)
    }, [filteredTickets])


    const onFastBtnClick =  (data) => {

        let arr = new Array(...data)
        arr.sort((a, b) => Date.parse(a.segments.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))[0].date) - Date.parse(b.segments.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))[0].date))
        pageFilterTickets(arr)
        filterByPriceAC(false)


    }

    const onCheapBtnClick =  (data) => {
        let arr = new Array(...data)
        arr.sort((a, b) => a.price - b.price)
        pageFilterTickets(arr)
        filterByPriceAC(true)
    }


    return (
        <div className='aviasales-tickets-block'>
            <button onClick={() => onCheapBtnClick(filteredTickets ? filteredTickets : showedtickets)}
                    className={`aviasales-tickets-block-btn ${filterByPrice ? 'active' : ''}`}>самый дешевый
            </button>
            <button onClick={(e) => onFastBtnClick(filteredTickets ? filteredTickets : showedtickets)}
                    className={`aviasales-tickets-block-btn ${!filterByPrice ? 'active' : ''}`}>самый быстрый
            </button>
            {
                showedtickets && showedtickets.map((ticket, i) => {

                    return (

                        <TicketCard key={ticket.carrier + i + ticket.price} ticket={ticket}/>
                    )
                })


            }


        </div>
    )
}