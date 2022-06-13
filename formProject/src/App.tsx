import { useState } from 'react'
import { FormProvider } from './contexts/form'
import { Router } from './router'


function App() {


  return (
    <FormProvider>
      <Router />
    </FormProvider>
  )
}

export default App
