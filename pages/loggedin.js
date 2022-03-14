import React, { useState } from 'react'
import First from "../components/First"
import Second from "../components/Second"
import Third from "../components/Third"
import { EngagementContext } from "../pages/Contexts/EngagementContext";

function loggedin() {
    const [show, setShow] = useState({ showPost: false, id: "" });
    const posts = [{
        id: 1,
        name: 'Elon Musk',
        imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        likes: '2M',
        comments: '12k',
        caption: 'This is caption1',
        location: 'San Francisco',
        shares: '20k',
        saves: '10k'
    },
    {
        id: 2,
        name: 'Elon Musk',
        imgUrl: 'https://image.cnbcfm.com/api/v1/image/106434195-1595357993564-elon.jpg?v=1625260371',
        likes: '2M',
        comments: '22k',
        caption: 'This is caption2',
        location: 'China',
        shares: '300k',
        saves: '10k'
    },
    {
        id: 3,
        name: 'Elon Musk',
        imgUrl: 'https://cdn.britannica.com/45/223045-050-A6453D5D/Telsa-CEO-Elon-Musk-2014.jpg',
        likes: '300k',
        comments: '56k',
        caption: 'This is caption3',
        location: 'Washington DC',
        shares: '220k',
        saves: '20k'
    },
    {
        id: 4,
        name: 'Elon Musk',
        imgUrl: 'https://cdn.vox-cdn.com/thumbor/XT9uTPJO2p_VG-fGB29CmvOh9N0=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23119870/1234657391.jpg',
        likes: '200k',
        comments: '90k',
        caption: 'This is caption4',
        location: 'India',
        shares: '120k',
        saves: '50k'
    },
    {
        id: 5,
        name: 'Elon Musk',
        imgUrl: 'https://imageio.forbes.com/specials-images/imageserve/5f47d4de7637290765bce495/0x0.jpg?format=jpg&crop=2146,2145,x1699,y559,safe&fit=crop',
        likes: '1M',
        comments: '2k',
        caption: 'This is caption5',
        location: 'LA',
        shares: '100k',
        saves: '9k'
    }
    ]

    return (
        <div className='flex bg-gray-100'>
            <First className='flex-none' />
            <div className='ml-10 w-[1px] h-screen bg-gray-200 drop-shadow-sm' />
            <EngagementContext.Provider value={{ show, setShow, posts }}>
                <Second className="flex-auto" />
                <Third className='flex-auto' />
            </EngagementContext.Provider>
        </div>
    )
}

export default loggedin