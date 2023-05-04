import s from './Services.module.css'
import Image from 'next/image'
import Marya from '../public/assets/mayra2.jpg'

export default function Services() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.heading}>
          <div className={s.left}>
            <Image src={Marya} alt='Marya Femia Hetrick' width={500}/>
          </div>
          <div className={s.right}>
            <h1>MY SERVICES</h1>
            <h2>
              Diversify your portfolio with expert guidance in real estate, gold, and agriculture. 
              Maximize your returns and minimize your risks with my years of experience and deep 
              understanding of market trends. Contact me today to secure your financial future.
            </h2>
            <button className='heroBtn reverseBtn'>Contact Me!</button>
          </div>
        </div>

        <div className={s.cards}>
          <div className={s.card}>
            <h3>REAL ESTATE</h3>
            <p>
              Real estate is a smart investment for long-term wealth, steady income, and stability in your portfolio.
            </p>
          </div>
          <div className={s.card}>
            <h3>GOLD</h3>
            <p>
            Gold is a stable investment for long-term wealth, diversification, and protection against inflation.
            </p>
          </div>
          <div className={s.card}>
            <h3>AGRICULTURE</h3>
            <p>
              Agriculture is a tangible investment for long-term wealth, sustainable income, and global demand.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
