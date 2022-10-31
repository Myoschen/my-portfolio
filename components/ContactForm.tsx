import axios from 'axios';
import { FormEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          'https://script.google.com/macros/s/AKfycbxCwwWa_JLcA_uHuhN1Vg7loFFotBg8z8J7H4Tna2s_VnmHYoWX2pcNuccu4rppQqw_Pg/exec',
          JSON.stringify({
            name,
            email,
            subject,
            message,
          }),
          { headers: { 'Content-Type': 'text/plain;charset=utf-8' } }
        );
        toast.success('Success');
      } catch (err) {
        if (err instanceof Error) toast.error(`${err.message}`);
      }
    },
    [name, email, subject, message]
  );

  return (
    <form className="flex-1 gap-y-4 form-control" onSubmit={handleSubmit}>
      <div className="flex items-center justify-around gap-x-4">
        <input
          type="text"
          className="w-full input input-bordered"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          className="w-full input input-bordered"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <input
        type="text"
        className="w-full input input-bordered"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        required
      />
      <textarea
        className="textarea textarea-bordered w-full h-[300px]"
        style={{ resize: 'none' }}
        placeholder="Message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <button className="btn">Submit</button>
    </form>
  );
}
