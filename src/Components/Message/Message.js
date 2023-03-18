import React from 'react'
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { useRef, useState } from 'react';
import 'firebase/compat/analytics';
import './Message.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCa3wVQbAjK3brWvZUxTnSedBvXOp7jliU",
  authDomain: "saarthi2-b95b7.firebaseapp.com",
  projectId: "saarthi2-b95b7",
  storageBucket: "saarthi2-b95b7.appspot.com",
  messagingSenderId: "157391074602",
  appId: "1:157391074602:web:ed868a599c3eabefde5a53",
  measurementId: "G-FZ1489VB30"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function Message() {
  const [user] = useAuthState(auth);

  return (
    <div className="chat-app">
      <header>
        <h1> Chat here 🚑 </h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );

  function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }

    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned for life!</p>
      </>
    )

  }

  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }

  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField: 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
      e.preventDefault();

      const { uid, photoURL } = auth.currentUser;

      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })

      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }

    return (<>
      <main>

        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>

      </main>

      <form onSubmit={sendMessage}>

        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

        <button type="submit" disabled={!formValue}> Send Message 📩 </button>

      </form>
    </>)
  }


  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

    return (<>
      <div className={`message ${messageClass}`}>
        <div className='chat-app'>
          <div>
            <img className='img' src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt='err' />
          </div>
          <div className='msg'>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </>)
  }
}


export default Message