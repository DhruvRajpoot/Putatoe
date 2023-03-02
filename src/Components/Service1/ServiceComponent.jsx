import React from 'react'
import './Service1.css'

const ServiceComponent = (props) => {
    return (
        <div className='servicewrapper'>
            <h6 className='serviceheading'>{props.data.title}</h6>
            <h6 className='servicetype'>Construction</h6>
            <div className='d-flex justify-content-center'><hr className="w-75 mt-0 mb-3 mb-md-4" /></div>
            <div className="container d-flex overflow-scroll px-0">
                {
                    props.data.services.map((ele, index) => {
                        return <div key={index} className="serviceitemclass">
                            <div className={`${ele.img?'d-block':'d-none'}`}><img src={ele.img} className="service1img"/></div>
                            <div className={`service1img ${ele.img?'d-none':'d-flex align-items-center justify-content-center'}` } style={{background:`${ele.bg}`}}><span className='character'>{ele.name.charAt(0)}</span></div>
                            <p className='my-1' style={{fontSize:'calc(.8rem + .1vw)'}}>{ele.name}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ServiceComponent
