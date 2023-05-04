import s from './Testimonial.module.css'

export default function Testimonial() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <h1>Success Stories</h1>
        <h2>Testimonials</h2>
        <div className={s.cards}>
          <div className={s.card}>
            <p>
              “Mayra Femia Hetrick helped me regain my confidence after being fired and helped 
              me find a healthy routine that put me on track towards changing my financial status. Now, I&apos;m doing something that I always wanted to do.”
            </p>
            <h3>~ Kasia Ductorn</h3>
          </div>
          <div className={s.card}>
            <p>
            “Mrs Mayra is always ready to help whenever I&apos;m stuck on any financial situation, stock related & other markets. She coached me fully for about a year before I started trading multiple portfolios, yet she still helps me understand the general markets and volatility patterns by the day”
            </p>
            <h3>~ Neil Grimston</h3>
          </div>
          <div className={s.card}>
            <p>
            ”These days, I have to consult Mayra Femia before making any investing decisions. She always has a precise representation of what is happening in real time across various financial markets. She simply excels at what she does.”
            </p>
            <h3>~ Kimberly Mitchel</h3>
          </div>
          <div className={s.card}>
            <p>
            “Mayra Femia is a very committed and effective stock broker, in addition to managing my stock portfolio, she reinvests in many financial markets and generates money even when there are widespread losses.”
            </p>
            <h3>~ Bladmir Alfaro</h3>
          </div>
        </div>
      </div>
    </div>
  )
}
