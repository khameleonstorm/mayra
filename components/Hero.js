import s from './Hero.module.css'
import Image from 'next/image'
import mayra from '../public/assets/mayra.jpg'

export default function Hero() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.left}>
          <h1><span>Mayra </span> Femia Hetrick</h1>
          <h2>With expertise in constructing investment portfolios, I specialize in implementing intelligent and consistent trading strategies.</h2>
          <button className='heroBtn'>Contact Me!</button>
        </div>
        <div className={s.right}>
          <Image src={mayra} alt="Mayra Femia Hetrick" width={500}/>
        </div>
      </div>
    </div>
  )
}
