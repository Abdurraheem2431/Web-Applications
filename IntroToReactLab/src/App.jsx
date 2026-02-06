import { useState } from 'react'
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import Image from './components/Image';
import PropsDisplay from './components/PropsDisplay';
import './App.css'

function App() {

  return (
    <>
      <h1>Hello World!!!!!</h1>

      <Counter />

      <TextInput />

      <Image />

      <ol className='ordered-list'>
        <li>This</li>
        <li>Is</li>
        <li>An</li>
        <li>Ordered</li>
        <li>List</li>
      </ol>
      
      <PropsDisplay name={'Abdu-R-Raheem Ishfaq'} age={20} />
    </>
  )
}

export default App
