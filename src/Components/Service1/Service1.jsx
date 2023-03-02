import React from 'react'
import royalbrick from '../../assets/service/royalbrick.webp'
import morang from '../../assets/service/morang.webp'
import acc from '../../assets/service/acc.webp'
import gangotri from '../../assets/service/gangotri.png'
import interior from '../../assets/service/interior.webp'
import ServiceComponent from './ServiceComponent'

const Service1 = () => {
    const services=[
        {
            title:'Popular Service Products',
            services:[
                {
                    img:royalbrick,
                    name:'Royal Brick'
                },
                {
                    img:morang,
                    name:'Dehri Bihar Morang'
                },
                {
                    img:acc,
                    name:'Acc Gold'
                },
                {
                    img:royalbrick,
                    name:'Royal Brick'
                },
                {
                    img:morang,
                    name:'Dehri Bihar Morang'
                },
                {
                    img:acc,
                    name:'Acc Gold'
                },                {
                    img:royalbrick,
                    name:'Royal Brick'
                },
                {
                    img:morang,
                    name:'Dehri Bihar Morang'
                },
                {
                    img:acc,
                    name:'Acc Gold'
                },                {
                    img:royalbrick,
                    name:'Royal Brick'
                },
                {
                    img:morang,
                    name:'Dehri Bihar Morang'
                },
                {
                    img:acc,
                    name:'Acc Gold'
                }
            ]
        },
        {
            title:'All Popular Service Providers',
            services:[
                {
                    name:'Gangotri Building',
                    bg:'#85CDFD'
                },
                {
                    img:gangotri,
                    name:'Gangotri Devi Construction'
                },
                {
                    name:'Prats Showroom',
                    bg:'#20262E'
                },
                {
                    name:'Pulak shops',
                    bg:'#3795BD'
                },
                {
                    name:'Singh Building Material',
                    bg:'#3C2A21'
                },
                {
                    name:'Modular Kitchen',
                    bg:'#301E67'
                },
                {
                    name:'Suprabha Interiors',
                    img: interior
                },
                {
                    name:'Gangotri Building',
                    bg:'#2D033B'
                },
                {
                    name:'Gangotri Devi Construction',
                    bg:'404258'
                }
            ]
        }
    ]
  return (
    <div>
      <ServiceComponent data={services[0]}/>
      <ServiceComponent data={services[1]}/>
    </div>
  )
}

export default Service1
