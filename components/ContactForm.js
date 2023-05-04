import s from './ContactForm.module.css'
import TextField from '@mui/material/TextField';

export default function ContactForm() {
  return (
    <div className='formCtn'>
      <form className='form'>
        <h1>CONTACT ME!</h1>
        <TextField label="Full Name" variant="outlined" />
        <TextField label="Email" variant="outlined" />
        <TextField label="Phone Number" variant="outlined" />
        <TextField label="Message" variant="outlined" multiline rows={4}/>
        <button className='heroBtn' style={{width: "100%"}}>Send</button>
      </form>
    </div>
  )
}
