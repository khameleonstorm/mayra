import s from './Process.module.css'
import { FaBookReader } from 'react-icons/fa'
import { SiMarketo } from 'react-icons/si'
import { IoShieldCheckmark } from 'react-icons/io5'

export default function Process() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <div className={s.heading}>
          <h1>MY PROCESSES</h1>
          <h2>Throughout my extensive 22-year career, I have successfully managed a portfolio exceeding $6.7 billion, offering investment advisory services to a diverse clientele of 800 individuals. One of my top priorities is ensuring the security of my clients investments, diligently working to minimize any potential losses and maximize profitable opportunities. With my expertise and commitment to delivering exceptional results, rest assured that your investments are in capable hands.</h2>
        </div>

        <div className={s.cards}>
          <div className={s.card}>
            <FaBookReader />
            <h3>LEARN</h3>
            <p>Understanding my clients is essential. I assess their risk tolerance, preferred investment duration, and past wealth management challenges to identify the core problem. This allows me to provide tailored solutions that address their unique needs and objectives.</p>
          </div>
          <div className={s.card}>
            <SiMarketo />
            <h3>STRATEGY</h3>
            <p>Understanding my clients by engaging in collaborative workshops, we work together to co-create a tailored strategy that aligns with their aspirations. Through open communication and shared expertise, we ensure that the resulting plan is well-informed and customized to their specific needs, increasing the potential for success.</p>
          </div>
          <div className={s.card}>
            <IoShieldCheckmark />
            <h3>SUCCESS</h3>
            <p>I meticulously filter through these options to present you with only the most viable and practical solutions. Rather than presenting mere sketches or rough ideas, I provide fully developed and actionable strategies for creating and managing wealth. Rest assured, the solutions I present are designed to deliver tangible results and optimize your financial journey.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
