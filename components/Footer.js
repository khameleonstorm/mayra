import s from './Footer.module.css'

export default function Footer() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <h1>
          I believe we all have the power to change our lives within us.
           I also believe there is no shame in asking for help to deliver such change.
        </h1>

        <div className={s.contact}>
          <h2>-CONTACTS-</h2>
          <a href="https://t.me/MayraFemiaHetrick">Telegram</a>
          <a href="mailto: help@mayrafemia.com">help@mayrafemia.com</a>
        </div>
      </div>
    </div>
  )
}
