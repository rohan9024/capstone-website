// import React from 'react'

// function Left() {
//     return (
//         <div>
//             <div>
//                 <h1>Home</h1>
//             </div>
//             <div>
//                 <h1>Auto Post</h1>
//                 {/* Timer with date */}
//                 {/* Media file uploader */}
//             </div>
//             <div>
//                 <h1>View Managers</h1>

//                 {/* Scheduled posts */}
//                 {/* View access to accounts of influencers */}
//             </div>
//             <div>
//                 <h1>View Influencers</h1>

//                 {/* Scheduled posts */}
//             </div>

//         </div>
//     )
// }

// export default Left

import React, { useEffect, useState } from 'react'

function Left() {
    const [hasError, setErrors] = useState(false);
    const [data, setData] = useState({});

    useEffect(() =>
        fetch("https://graph.facebook.com/me?fields=id,name,likes,posts&access_token=EAAOnWswoXKYBAHdhO6ZAxZBGHAKcviRkDnIzI6snZCsFNKLMiNZBuVLmoq2PZAkXC7IqFU21bWP9I75ZBqiUtRPM6wpegqovLkPWvETJge0ZBKEViB5dSZA7WegZCY06bK6falZBoKTZCWQ1YFFDaGFJObRe5OukwDELuw5OVZAynbUQZCUbGkdIKfi8KivHmhK95q9ZBqV1Y6ZBItdLMIroZA7OhLaaST3ZB0fIZBhRlpRZA4mxGDdjZADhHTgB2DCYJZBGsrC59ZANQZD")
            .then(res => res.json())
            // .then(res => this.setState({ planets: res }))
            .then(res => setData(res))
            // .catch(() => this.setState({ hasErrors: true }))
            .catch(() => setErrors(true))
    );

    return <div>{JSON.stringify(data)}</div>;

}

export default Left