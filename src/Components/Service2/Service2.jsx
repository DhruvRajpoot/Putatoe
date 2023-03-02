import React from 'react'
import './Service2.css'
import daily from '../../assets/service2/daily.png'
import edu from '../../assets/service2/edu.webp'
import construction from '../../assets/service2/construction.jpg'
import courier from '../../assets/service2/courier.webp'

const Service2 = () => {
    const data = [
        {
            name: 'Daily Needs',
            img: daily
        },
        {
            name: 'Education',
            img: edu
        },
        {
            name: 'Construction',
            img: construction
        },
        {
            name: 'Courier',
            img: courier
        },
        {
            name: 'Daily Needs',
            img: daily
        },
        {
            name: 'Education',
            img: edu
        },
        {
            name: 'Construction',
            img: construction
        },
        {
            name: 'Courier',
            img: courier
        },
        {
            name: 'Daily Needs',
            img: daily
        },
        {
            name: 'Education',
            img: edu
        },
        {
            name: 'Construction',
            img: construction
        },
        {
            name: 'Courier',
            img: courier
        }
    ]
    return (
        <div className='service2wrapper'>
            <h6 className="serviceheading">Services We Provide</h6>
            <div className="d-sm-flex justify-content-center">
                <div className="row mx-1 container mx-0 px-0">
                    {data.map((ele, index) => {
                        return <div key={index} className="col-6 col-sm-4 col-lg-3 col-xl-2 p-1 position-relative bg-light rounded-3 mb-1">
                            <img src={ele.img} alt="" className='service2img' />
                            <p className='service2name'>{ele.name}</p>
                            <p className="discount">20% Off</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Service2
