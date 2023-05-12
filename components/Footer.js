import { FaTelegramPlane } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <div className={s.ctn}>
      <div className={s.wrp}>
        <h1>
          I believe we all have the power to change our lives within us.
           I also believe there is no shame in asking for help to deliver such change.
        </h1>

        <div className={s.contacts}>
          <h2>-CONTACTS-</h2>
          <div className={s.contact}>
            <div><a href="https://t.me/MayraFemiaHetrick"><FaTelegramPlane /></a><p>Telegram</p></div>
            <div><a href="mailto: help@mayrafemia.com"><IoMdMail /></a><p>help@mayrafemia.com</p></div>
          </div>
        </div>
      </div>
    </div>
  )
}
