import Image from 'next/image'
import s from './AboutMe.module.css'
import mayra from '../public/assets/mayra-femia-hetrick4.jpg'
import Link from 'next/link'

export default function AboutMe() {
  return (
  <div className={s.ctn}>
    <div className={s.wrp}>
      <div className={s.left}>
        <h1><span>About </span> Me</h1>
        <h2>
          I&apos;m simply a tool you can use to unlock the potential you already
           have inside you. Success doesn&apos;t come from the outside, but from within.              
        </h2>
        <Link href="/contact" className='heroBtn'>Contact Me!</Link>
      </div>
      <div className={s.right}>
        <Image src={mayra} alt="Mayra Femia Hetrick" width={500}/>
      </div>
    </div>

    <div className={s.moreText}>
      <div className={s.left}>
        <h1><span>MAYRA </span> FEMIA HETRICK </h1>
        <p>
        I&apos;ve gone through a number of phases in my career, and have accumulated enough skills and experience within and outside the market to help manage your investments ensuring consistent profitability. I&apos;ve been registered with six prestigious investment firms, passed six brokerage examinations and gotten accredited with licenses about 22 states in the US.
        </p>
      </div>
      <div className={s.left}>
        <h1><span>EDUCATION </span> & EXPERIENCE</h1>
        <p>
        I&apos;ve worked with over 800 clients, in 23 counties, over 4 continents. What this has shown me is not only that success can happen anywhere, but that the building blocks of success are within everyone, wherever they come from. 
        </p>
        <p>
        I am never satisfied with my work until my clients have achieved all the financial goals that we set out together. It&apos;s this determination and refusal to let anyone down that has become my hallmark in the industry. 
        </p>
        <a href='https://brokercheck.finra.org/individual/summary/2022887' className='heroBtn'>More Details!</a>
      </div>
    </div>
  </div>
  )
}
