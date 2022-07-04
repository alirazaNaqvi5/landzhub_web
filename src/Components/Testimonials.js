import React from 'react'
import './Testimonials.css'

function Testimonials() {
    return (
        <div className='tmain'>
            <div className="reviews" align='center'>
                <img src="1.png" width={'100px'} alt="" />
                <div style={{marginTop: '20px'}}>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <div style={{marginTop: '5px'}}>26 JANUARY, 2022</div>
                <div style={{marginTop: '20px'}}>With landsagency you can buy or sell land in a very easy way, we are the first online land marketplace that you can use to make your lands transactions with only a few clicks.</div>
                <div style={{marginTop: '20px'}}>Mark Reyes</div>
            </div>
            <div className="reviews" align='center'>
                <img src="2.png" width={'100px'} alt="" />
                <div style={{marginTop: '20px'}}>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <div style={{marginTop: '5px'}}>09 MARCH, 2022</div>
                <div style={{marginTop: '20px'}}>Landsagency.com is one of the best websites to buy and sell lands. We believe that transparency is key to achieving the best possible results for our clients.</div>
                <div style={{marginTop: '20px'}}>ERIC JOHN</div>
            </div>
            <div className="reviews" align='center'>
                <img src="3.png" width={'100px'} alt="" />
                <div style={{marginTop: '20px'}}>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <div style={{marginTop: '5px'}}>18 JANUARY, 2022</div>
                <div style={{marginTop: '20px'}}>Thank you for making it so easy to manage my properties, I don't have to worry about updating my listings or getting new pictures uploaded.</div>
                <div style={{marginTop: '20px'}}>JORDAN HELBIG</div>
            </div>
        </div>
    )
}

export default Testimonials