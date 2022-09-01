import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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
