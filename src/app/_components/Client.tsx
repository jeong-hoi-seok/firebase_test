'use client';

import { collection, addDoc } from 'firebase/firestore';
import React from 'react';

import { db } from '@/lib/firebase';

const Client = () => {
  const [chat, setChat] = React.useState<string[]>([]);
  const [text, setText] = React.useState('');

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setText(value);
  };

  const addChat = async () => {
    if (text) {
      await addDoc(collection(db, 'chatLog'), {
        text,
      });

      setChat((prev) => [...prev, text]);
      setText('');
    }
  };

  return (
    <div>
      <h1>채팅창</h1>
      <div>
        {chat.map((d, i) => {
          return (
            <div key={i} className='bg-slate-800 p-2 text-white'>
              {d}
            </div>
          );
        })}
      </div>
      <div>
        <input type='text' value={text} onChange={changeText} />
        <button type='button' onClick={addChat}>
          전송
        </button>
      </div>
    </div>
  );
};

export default Client;
