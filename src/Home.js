import React from 'react'
import './Home.css'
import Product from './Product'

const Home = () => {
  return (
    <div className='home'>
        <div className='home__container'>
            <img
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'  
                alt='' 
            />

            <div className='home__row'>
            <Product 
              id='ngftyui'
              title='The lean startup: How constant Innovation creates radically successful business payback' 
              price={29.99}
              image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' 
              rating={1} 
            />
            <Product
              id='986543e'
              title='Apple iPhone 12 Pro Max, 128GB, Pacific Blue - Fully Unlocked (Renewed)'
              price={239.0}
              rating={4}
              image='https://m.media-amazon.com/images/I/41ZCg7l8N6L._AC_SX679_.jpg'
            />
            </div>

            <div className='home__row'>
            <Product
              id='ki76tju'
              title='Samsung LC49RG90SSUXEN Curved LED Gaming Monitor'
              price={199.99}
              rating={5}
              image='https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg'
            />
            <Product 
              id='lkjhtyui'
              title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric'
              price={98.99}
              rating={5}
              image='https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$'
            />
            <Product 
              id='kiuytrt9'
              title='New Apple ipad Pro (12.9-inch, Wi-Fi, 128GB) = Silver (4th generation)'
              price={598.99}
              rating={4}
              image='https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg'
            />
            </div>

            <div className='home__row'>
            <Product 
              id='kiuytrt9'
              title='oneisall Dog Shaver Clippers Low Noise Rechargeable Cordless Electric Quiet Hair Clippers Set for Dogs Cats Pets'
              price={598.99}
              rating={4}
              image='https://m.media-amazon.com/images/I/718b82U4VAL._SL1500_.jpg'
            />
            </div>
        </div>
    </div>
  )
}

export default Home