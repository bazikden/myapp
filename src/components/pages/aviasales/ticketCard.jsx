import React from 'react'

export const TicketCard = ({ticket}) => {

    const date = (old, newdate) => {
        let ms = Date.parse(old) + (newdate * 60 * 1000)
        let departure = new Date(old).toTimeString().slice(0, 5)
        let arrival = new Date(ms).toTimeString().slice(0, 5)
        return `${departure} - ${arrival}`
    }
    return (
        <div className='aviasales-tickets-block-card'>
            <div className='aviasales-tickets-block-card-header'>
                <div>{ticket.price} p.</div>
                <div><img src={`http://pics.avs.io/99/36/${ticket.carrier}.png`} alt=""/></div>
            </div>
            {
                ticket.segments.sort((a, b) => a.duration - b.duration).map(e => (
                    <div key={e.origin + e.data + e.duration} className='aviasales-tickets-block-card-info'>
                        <div className='aviasales-tickets-block-card-info-time'>
                            <div>{e.origin} - {e.destination}</div>
                            <div><span>{date(e.date, e.duration)}</span></div>
                        </div>
                        <div className='aviasales-tickets-block-card-info-fly-length'>
                            <div>в пути</div>
                            <div><span style={{
                                fontSize: '14px',
                                textTransform: 'lowercase'
                            }}>{Math.floor(e.duration / 60) + 'ч ' + e.duration % 60 + 'м'}</span></div>
                        </div>
                        <div className='aviasales-tickets-block-card-info-time-count-races'>
                            <div>
                                {
                                    e.stops.length === 0 ? "Без пересадок" :
                                        e.stops.length === 1 ? "1 пересадка" :
                                            e.stops.length + " пересадки"
                                }
                            </div>
                            {e.stops.length === 0 ? <span>----</span>
                                :
                                e.stops.map((stop, i) => (
                                    <span style={{margin: '0 2px'}} key={i}>{stop}{i !== e.stops.length - 1 &&
                                    <span>,</span>}</span>


                                ))}
                        </div>
                    </div>
                ))
            }

        </div>
    )
}