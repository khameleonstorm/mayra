import s from './ServicesHero.module.css'
import Image from 'next/image'
import mayra from '../public/assets/mayra-femia-hetrick6.jpg'
import Link from 'next/link'


export default function ServicesHero() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.left}>
          <h1><span>My </span> Services</h1>
          <h2>              
            Diversify your portfolio with expert guidance in real estate, gold, and agriculture. 
              Maximize your returns and minimize your risks with my years of experience and deep 
              understanding of market trends. Contact me today to secure your financial future.
          </h2>
          <Link href="/contact" className='heroBtn'>Contact Me!</Link>
        </div>
        <div className={s.right}>
          <Image src={mayra} alt="Mayra Femia Hetrick" width={500}/>
        </div>
      </div>
    </div>
  )
}
