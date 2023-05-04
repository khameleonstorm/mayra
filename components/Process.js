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
          <h2>Over 22 years of my career, I have managed over $6.7 billion and provided investment advisory services to 800 clients. I give good degree of security on my clients investments, making sure that they never lose out on any deal.</h2>
        </div>

        <div className={s.cards}>
          <div className={s.card}>
            <FaBookReader />
            <h3>LEARN</h3>
            <p>Framing the problem is crucial to the success of any project. I make sure I understand everything about my client, their risk appetite, preferred investment and wealth management duration, Previous inhibitors to wealth management and what is the problem we&apos;re trying to solve.</p>
          </div>
          <div className={s.card}>
            <SiMarketo />
            <h3>STRATEGY</h3>
            <p>Every wealth manager has to achieve a specific goal. After learning what my clients needs in the first phase aforementioned, I try to think of a strategy to actualize them. This phase is mostly done through Workshop with you, the client. I&apos;m a big believer of collaboration and co-creation.</p>
          </div>
          <div className={s.card}>
            <IoShieldCheckmark />
            <h3>SUCCESS</h3>
            <p>Guided by a Myriad of investment insights, I create multiple concepts to solve the problem we identified. However, only the real viable solution make it to you. I don’t present sketches or rough ideas, I present working solutions to creating and managing wealth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
