import React from 'react'

export const SocialChat = ({logined, friends}) => {
    const somefriends = friends.slice(0, 7)

    const pictures = [
        {src: "https://i.pinimg.com/originals/f1/f1/de/f1f1def931a05e17c4847aeba333f169.jpg"},
        {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjyRYvuZhMSWJNX-lMIQxeLLAFi1ZP4a5i4SMvTHtHtszhAtzlg"},
        {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-P70Gg6WblE0v_YZD6AoOY9RMYKAQGV2x5joRmNUjaI8Hc3o"},
        {src: "https://i.pinimg.com/originals/f1/f1/de/f1f1def931a05e17c4847aeba333f169.jpg"},
        {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw-P70Gg6WblE0v_YZD6AoOY9RMYKAQGV2x5joRmNUjaI8Hc3o"},
        {src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1rt2ziaCPLoWB1Ifh_DgAeWaPCvpOyTV-vBliT86q8RTWDqh2"},
        {src: "https://i.pinimg.com/originals/f1/f1/de/f1f1def931a05e17c4847aeba333f169.jpg"},
    ]
    return (
        <div className="social-chat">
            <button className='social-chat-btn'>Chat Online</button>


            <div className="social-chat-icons">

                {

                    !logined ?
                        pictures.map((e, i) => (
                            <img key={'social-chat-img' + i} src={e.src} alt=""/>
                        ))
                        :
                        somefriends.map(e => (
                            <img key={e.name} src={e.photos.small ? e.photos.small : pictures[5].src} alt=""/>
                        ))
                }


            </div>
        </div>
    )
}