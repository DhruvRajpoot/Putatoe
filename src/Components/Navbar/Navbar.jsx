import logo from '../../assets/logo.png'
import './Navbar.css'
import { ImLocation } from 'react-icons/im'
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsMicFill, BsFillBellFill } from 'react-icons/bs'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark p-0 fixed-top">
            <div className="container-fluid d-flex justify-content-around justify-content-lg-between">
                <div className='d-flex align-items-center order-1'>
                    <a className="navbar-brand d-none d-lg-flex" href="/">
                        <img src={logo} alt="" height="45" />
                        <div className='ms-2 me-4'>
                            <h4 className='logoheading my-0'>PUTATOE</h4>
                            <p className='logopara my-0'>One Solution</p>
                        </div>
                    </a>
                    <p className='locationpara text-light pt-1 pt-lg-3 mb-2 mb-lg-3'><span className='fs-5'><ImLocation /></span><span className='fw-bold l border border-1 rounded-3 p-1 ms-1'>Harhwa Fatak Nirala Nagar. Gorakpur</span></p>
                </div>
                <div className='position-relative order-3 order-lg-2 my-2 my-lg-0'>
                    <span className='searchicon'><BiSearchAlt2 /></span>
                    <input type="text" className='searchinp' placeholder='Search for products...' />
                    <span className='text-light ms-2 fs-5'><BsMicFill /></span>
                </div>
                <div className='icon order-2 order-lg-3'>
                    <span className='position-relative'>
                        <span className="position-absolute top-0 start-100 translate-middle rounded-circle badge bg-danger">
                            0
                        </span>
                        <BsFillBellFill />
                    </span>
                    <span className='mx-4'><MdOutlineAddShoppingCart /></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
