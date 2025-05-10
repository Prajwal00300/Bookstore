import React from 'react'
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBooks from './OtherBooks'
import Review from './Review'



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <BestSellerBooks></BestSellerBooks>
      <FavBook></FavBook>
      <PromoBanner></PromoBanner>
      <OtherBooks></OtherBooks>
      <Review></Review>
    
    
    
    </div> 
  )
}
 
export default Home
