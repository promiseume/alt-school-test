import React from 'react'
import './landing-page.css'
import { useNavigate } from "react-router"
import ErrorBoundary from '../ErrorBoundary/error'
export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className='landing-page'>
        <ErrorBoundary>
      <main className='content'>
      <h1>Huemans</h1>
      <p>Welcome to Huemans.</p>
      <p>Jump right in and see a lot of humans.</p>
      <button onClick={()=> navigate('/user')}>View Users</button>
      </main>
        </ErrorBoundary>
    </div>
  )
}
