import React from 'react'
import './Hero.css'
import hero1 from '../../assets/hero4.jpg'
import hero2 from '../../assets/hero5.jpg'
import hero3 from '../../assets/hero6.jpg'
import Carousel from '../Carousel/Carousel'
import { ImMobile } from 'react-icons/im'
import { AiOutlineDesktop } from 'react-icons/ai'
import { HiCurrencyRupee, HiOutlineNewspaper, HiOutlineLightBulb } from 'react-icons/hi'
import { FaBlogger } from 'react-icons/fa'
import { GoMegaphone, GoFlame } from 'react-icons/go'
import { MdGroups, MdMessage, MdOutlineWaterDrop } from 'react-icons/md'
import { IoIosArrowDroprightCircle } from 'react-icons/io'


const Hero = () => {
    const images = [hero1, hero2, hero3]
    const services = [
        {
            icon: <ImMobile />,
            name: 'Mobile Recharge'
        },
        {
            icon: <AiOutlineDesktop />,
            name: 'DTH Recharge'
        },
        {
            icon: <HiCurrencyRupee />,
            name: 'Loans'
        },
        {
            icon: <GoMegaphone />,
            name: 'Promotion'
        },
        {
            icon: <HiOutlineNewspaper />,
            name: 'News'
        },
        {
            icon: <FaBlogger />,
            name: 'Blog'
        },
        {
            icon: <MdGroups />,
            name: 'Jobs'
        },
        {
            icon: <MdMessage />,
            name: 'Anonymous Feedback'
        },
        {
            icon: <GoFlame />,
            name: 'Gas Booking'
        },
        {
            icon: <HiOutlineLightBulb />,
            name: 'Electric Bill'
        },
        {
            icon: <MdOutlineWaterDrop />,
            name: 'Water Bill'
        },
        {
            icon: <IoIosArrowDroprightCircle />,
            name: 'See More'
        }
    ]
    return (
        <div className='wrapper mx-1'>
            <div className="my-2 p-1 bg-light rounded-3">
                <Carousel images={images} width={'100%'} height={'calc(7rem + 15vw)'} />
            </div>
            <div className='services p-1 p-sm-3 bg-light rounded-3 d-flex justify-content-center'>
                <div className="container row p-0">
                    {services.map((ele, index) => {
                        return <div className="serviceitem col-3 col-lg-2 text-center" key={index}>
                            <p className='servicesicon'>{ele.icon}</p>
                            <p className='servicespara'>{ele.name}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default Hero
