import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(null);
    setError(null);
    setLoading(true);

    if (!fullName || !email || !phoneNumber || !message) {
      setError('All fields are required');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fullName,
        email,
        phoneNumber,
        message
      })
    });

    if (res.ok) {
      // Handle successful response
      setSuccess('Message sent!');
      console.log('Message sent!');
    } else {
      // Handle error response
      setError('Error sending message');
      console.log('Error sending message');
    }

    setLoading(false);
    setEmail('');
    setFullName('');
    setPhoneNumber('');
    setMessage('');
  }


  return (
    <div className='formCtn'>
      <form className='form' onSubmit={handleSubmit}>
        <h1>CONTACT ME!</h1>
        <TextField label="Full Name" variant="outlined" onChange={(e) => setFullName(e.target.value)}/>
        <TextField label="Email" variant="outlined"  onChange={(e) => setEmail(e.target.value)}/>
        <TextField label="Phone Number" variant="outlined"  onChange={(e) => setPhoneNumber(e.target.value)}/>
        <TextField label="Message" variant="outlined" multiline rows={4} onChange={(e) => setMessage(e.target.value)}/>
        {error && <p className='formError'>{error}</p>}
        {success && <p className='formSuccess'>{success}</p>}
        <button className='heroBtn' style={{width: "100%"}}>{!loading? "Send" : "loading..." }</button>
      </form>
    </div>
  )
}
