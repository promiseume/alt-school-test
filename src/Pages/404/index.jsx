import React from 'react'
import './index.css'
import notFound from '../../not-found.svg'
import { useNavigate } from "react-router"
import ErrorBoundary from '../ErrorBoundary/error'

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className={'error-section container'}>
        <ErrorBoundary>
    <div>
        <h3>Sorry the page you are looking for could&apos;nt be found</h3>
        <p>The page you are looking for does not exist.It might be removed or had it name changed.</p>
        <div className={'error-return-btn'}>

        <button onClick={() => navigate('/')} style={{marginRight:'15px'}} className={'error-btn'}>Back to Home</button>
            <button onClick={() => navigate(-1)} className={'error-btn'}>Back</button>
        </div>
    </div>
    <div className={'error'}>
       <img src={notFound} alt={'notfound-img'}/>
    </div>
        </ErrorBoundary>
</section>     
  )
}
