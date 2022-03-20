import React, { useState, useEffect } from 'react'
import First from "../components/First"
import Second from "../components/Second"
import Third from "../components/Third"
import { EngagementContext } from "../pages/Contexts/EngagementContext";
import axios from 'axios'
function loggedin() {

    const [show, setShow] = useState({ showPost: false, id: "" });
    const [IMG, SETIMG] = useState([]);
    const [mediaInsights, setMediaInsights] = useState({});

    const [userDetails, setUserDetails] = useState({});
    const [accountInsights, setAccountInsights] = useState({});
    const ACCESS_TOKEN = '';


    // const page_data = {
    //     "data": [
    //         {
    //             "access_token": "",
    //             "category": "Marketing agency",
    //             "category_list": [
    //                 {
    //                     "id": "123377808095874",
    //                     "name": "Marketing agency"
    //                 }
    //             ],
    //             "name": "The Crazy Entrepreneur",
    //             "id": "102838832364823",
    //             "tasks": [
    //                 "ANALYZE",
    //                 "ADVERTISE",
    //                 "MESSAGING",
    //                 "MODERATE",
    //                 "CREATE_CONTENT",
    //                 "MANAGE"
    //             ]
    //         }
    //     ],
    //     "paging": {
    //         "cursors": {
    //             "before": "MTAyODM4ODMyMzY0ODIz",
    //             "after": "MTAyODM4ODMyMzY0ODIz"
    //         }
    //     }
    // }
    // const BI = {
    //     "instagram_business_account": {
    //         "id": "17841452131317817"
    //     },
    //     "id": "102838832364823"
    // }
    // const media = {
    //     "business_discovery": {
    //         "followers_count": 2,
    //         "media_count": 2,
    //         "media": {
    //             "data": [
    //                 {
    //                     "comments_count": 1,
    //                     "like_count": 2,
    //                     "id": "17917228841192422"
    //                 },
    //                 {
    //                     "comments_count": 1,
    //                     "like_count": 2,
    //                     "id": "17951548414706253"
    //                 }
    //             ]
    //         },
    //         "id": "17841452131317817"
    //     },
    //     "id": "17841452131317817"
    // }

    // const per_post = {
    //     "id": "17917228841192422",
    //     "media_type": "IMAGE",
    //     "media_url": "https://scontent-bom1-1.cdninstagram.com/v/t51.29350-15/275426376_499090298296331_874631106699180033_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8ae9d6&_nc_ohc=-EExxHfXfjYAX-Yyh7c&_nc_ht=scontent-bom1-1.cdninstagram.com&edm=AEQ6tj4EAAAA&oh=00_AT-uPzPpejhKHiSF3rdfgohQZ-Q1S6ngAFvnhgAATlPL7w&oe=62392D64",
    //     "owner": {
    //         "id": "17841452131317817"
    //     },
    //     "timestamp": "2022-03-09T16:02:47+0000"
    // }

    // const userDetails = {
    //     "id": "17841452131317817",
    //     "ig_id": 52222537710,
    //     "followers_count": 5,
    //     "follows_count": 13,
    //     "media_count": 2,
    //     "name": "Alia Bhagat",
    //     "profile_picture_url": "https://scontent-bom1-2.xx.fbcdn.net/v/t51.2885-15/275499815_153637590383327_6609720765538790447_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=86c713&_nc_ohc=wA_U2Vr2Q2QAX8vdBCJ&_nc_ht=scontent-bom1-2.xx&edm=AL-3X8kEAAAA&oh=00_AT_FQc4e4WTd_1JsrEB3R8o5WkFzo6159j3IwiiJT4RG-g&oe=6239FB63",
    //     "username": "_aaila_aalia_"
    // }

    // const accountInsights = {
    //     "data": [
    //         {
    //             "name": "impressions",
    //             "period": "day",
    //             "values": [
    //                 {
    //                     "value": 0,
    //                     "end_time": "2022-03-17T07:00:00+0000"
    //                 },
    //                 {
    //                     "value": 0,
    //                     "end_time": "2022-03-18T07:00:00+0000"
    //                 }
    //             ],
    //             "title": "Impressions",
    //             "description": "The total number of times that the business account's media objects have been viewed.",
    //             "id": "17841452131317817/insights/impressions/day"
    //         },
    //         {
    //             "name": "reach",
    //             "period": "day",
    //             "values": [
    //                 {
    //                     "value": 0,
    //                     "end_time": "2022-03-17T07:00:00+0000"
    //                 },
    //                 {
    //                     "value": 0,
    //                     "end_time": "2022-03-18T07:00:00+0000"
    //                 }
    //             ],
    //             "title": "Reach",
    //             "description": "The total number of times that the business account's media objects have been uniquely viewed.",
    //             "id": "17841452131317817/insights/reach/day"
    //         },
    //         {
    //             "name": "profile_views",
    //             "period": "day",
    //             "values": [
    //                 {
    //                     "value": 0,
    //                     "end_time": "2022-03-17T07:00:00+0000"
    //                 },
    //                 {
    //                     "value": 0,
    //                     "end_time": "2022-03-18T07:00:00+0000"
    //                 }
    //             ],
    //             "title": "Profile views",
    //             "description": "The total number of users who have viewed the business account's profile within the specified period.",
    //             "id": "17841452131317817/insights/profile_views/day"
    //         }
    //     ],
    //     "paging": {
    //         "previous": "https://graph.facebook.com/v13.0/17841452131317817/insights?access_token=EAANFg0BMulMBADueID8Nh8ZA0KwgaLF78GCJQMYy5TAwHSYnpKQYkhc0pPclhyeAt98APQZAvMMMvpsQXP24dKJn1EBGO1qKiEwh4MYcLpbrSxSOubwEsgPEDI61dj78yRCV75YNe5CZARVNhfAsvFo0LqvUQJK0N407EU6XhRzTEbrVC6HZC9qn3HXJMZCJrWQRNADFEZBlK00KxvBO1P9p3oXGzF5UZB5oBMiqJEj4SFV9OMZA9TNLomelkrKskxEZD&pretty=0&metric=impressions%2Creach%2Cprofile_views&period=day&since=1647259675&until=1647432475",
    //         "next": "https://graph.facebook.com/v13.0/17841452131317817/insights?access_token=EAANFg0BMulMBADueID8Nh8ZA0KwgaLF78GCJQMYy5TAwHSYnpKQYkhc0pPclhyeAt98APQZAvMMMvpsQXP24dKJn1EBGO1qKiEwh4MYcLpbrSxSOubwEsgPEDI61dj78yRCV75YNe5CZARVNhfAsvFo0LqvUQJK0N407EU6XhRzTEbrVC6HZC9qn3HXJMZCJrWQRNADFEZBlK00KxvBO1P9p3oXGzF5UZB5oBMiqJEj4SFV9OMZA9TNLomelkrKskxEZD&pretty=0&metric=impressions%2Creach%2Cprofile_views&period=day&since=1647605277&until=1647778077"
    //     }
    // }

    // useEffect(() => {
    //     async function fetchPageID() {
    //         const res = await axios.get(`https://graph.facebook.com/v13.0/me/accounts?access_token=${ACCESS_TOKEN}`)
    //         const page_data = res.data
    //         const page_id = page_data.data[0].id;
    //         fetchBusinessID(page_id);
    //     }
    //     fetchPageID();
    // }, [])
    // async function fetchBusinessID(page_id) {
    //     const res = await axios.get(`https://graph.facebook.com/v13.0/${page_id}?fields=instagram_business_account&access_token=${ACCESS_TOKEN}`)
    //     const BI = res.data
    //     const user_id = BI.instagram_business_account.id;
    //     fetchUserDetails(user_id);
    // }
    // async function fetchUserDetails(user_id) {
    //     const res = await axios.get(`https://graph.facebook.com/v3.2/${user_id}?fields=biography%2Cid%2Cig_id%2Cfollowers_count%2Cfollows_count%2Cmedia_count%2Cname%2Cprofile_picture_url%2Cusername%2Cwebsite&access_token=${ACCESS_TOKEN}`)
    //     const details = res.data
    //     console.log(details)
    //     const user_details = details;
    //     const username = user_details.username;
    //     console.log(username)
    //     setUserDetails(user_details);
    //     fetchData(user_id, username);
    //     fetchAccountInsights(user_id);
    // }
    // async function fetchData(user_id, username) {
    //     const res = await axios.get(`https://graph.facebook.com/v3.2/${user_id}?fields=business_discovery.username(${username}){followers_count,media_count,media{comments_count,like_count}}&access_token=${ACCESS_TOKEN}`)
    //     const data = res.data
    //     const media = data.business_discovery.media.data
    //     console.log("Media is hereeeeeeeeeeeee........", media)
    //     fetchPosts(media);
    //     fetchMediaInsights(media);
    // }
    // async function fetchAccountInsights(user_id) {
    //     const res = await axios.get(`https://graph.facebook.com/v13.0/${user_id}/insights?metric=impressions,reach,profile_views&period=day&access_token=${ACCESS_TOKEN}`)
    //     const account_insights = res.data
    //     setAccountInsights({ ...accountInsights, account_insights })
    // }


    // function fetchPosts(media) {
    //     async function perPost(post_id) {
    //         const res = await axios.get(`https://graph.facebook.com/v13.0/${post_id}?fields=id,media_type,media_url,like_count,comments_count,owner,timestamp&access_token=${ACCESS_TOKEN}`)
    //         const per_post_data = res.data
    //         console.log('post post media url: ', per_post_data)
    //         SETIMG((img) => [...img, per_post_data])
    //     }
    //     media.map((post) => {
    //         perPost(post.id)
    //         console.log(post.imageUrl)
    //     }
    //     )
    // }
    // function fetchMediaInsights(media) {
    //     async function perPostInsights(post_id) {
    //         const res = await axios.get(`https://graph.facebook.com/v13.0/${post_id}/insights?metric=impressions,reach,saved,engagement&access_token=${ACCESS_TOKEN}`)
    //         const per_post_insights = res.data
    //         setMediaInsights((mediaInsights)=> { ...mediaInsights, per_post_insights })
    //     }
    //     media.map((post) => (
    //         perPostInsights(post.id)
    //     ))
    // }


    console.log('useState waaleeee', IMG)
    // console.log("businessid:", business_id, "Page_id:", page_id, "followers:", followers, "media_count:", media)


    return (
        <div className='flex bg-gray-100'>
            <EngagementContext.Provider value={{ show, setShow, IMG, userDetails }}>
                <First className='flex-none' />
                <div className='ml-10 w-[1px] h-screen bg-gray-200 drop-shadow-sm' />
                <Second className="flex-auto" />
                <Third className='flex-auto' />
            </EngagementContext.Provider>
        </div>
    )
}

export default loggedin
