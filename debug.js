useEffect(() => {
    function fetchPageID() {
      
        const page_id = page_data.data[0].id;
        fetchBusinessID(page_id);
    }
    fetchPageID();
}, [])
function fetchBusinessID(page_id) {

    const business_id = BI.instagram_business_account.id;
    console.log(page_id)
    fetchData(business_id)
}
function fetchData(business_id) {
   
    setMedia(data.business_discovery.media.data)
    setFollowers(data.business_discovery.followers_count)
    setMediaCount(data.business_discovery.media_count)
    fetchPosts(media)
}
function fetchPosts(media) {
    media.map((post) => (
        console.log(post.id)
 
    ))
}
