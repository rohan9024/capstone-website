
import HomePage from '../components/HomePage'

// export const getStaticProps = async () => {

//   // const res = await fetch('https://jsonplaceholder.typicode.com/users');
//   // const res = await fetch('https://graph.facebook.com/v3.2/17841452131317817?fields=business_discovery.username(_aaila_aalia_){followers_count,media_count,media{comments_count,like_count}}&access_token=EAANFg0BMulMBAEeqcna5XbPvHdsDcs5tWuMTmekLqAFLyNeHJZBgzxJkoVfDCZBE1RZCu3tZCYpcbTZCsDZAKyPmW8L1ZCm8xjHYU3R8EqGcZCK4VfIjILewUjHBP27FUwt0gyPZBtl5uJXlMRZBzCnBWlOTNvma5ZCGw7djMeDp4TvAZCRho1HudASZCBK8heicDbWagiQi6jVHV7qPgYdUEwWDy6Rg1eOwOsSYZD');

//   const data = await res.json()

//   console.log(data)

//   return {
//     props: { ninjas: data }
//   }
// }


export default function Component({ ninjas }) {

  return (
    <>
      <HomePage />
    </>
  )
}