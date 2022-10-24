import React from 'react'
import './landing-page.css'
import { useNavigate } from "react-router"

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className='landing-page'>
      <main className='content'>
      <h1>Huemans</h1>
      <p>Welcome to Huemans.</p>
      <p>Jump right in and see a lot of humans.</p>
      <button onClick={()=> navigate('/user')}>View Users</button>
      </main>
    </div>
  )
}
