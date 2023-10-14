"use client"

import AuthForm from './auth-form'
import * as React from 'react';
import Navbar from './account/navbar';

export default function Home() {
  return (

    <> 
    <Navbar />

    <div className="w-screen h-screen flex justify-center pt-20 " >
      <div className='w-80'>
        <div >
          <AuthForm />
        </div>
      </div>
    </div>
    
    </>
    
  )
}
