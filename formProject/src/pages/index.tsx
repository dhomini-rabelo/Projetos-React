import { useNavigate } from "react-router-dom"
import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import { FormPageBase } from '../components/bases/Form'
import { Div } from '../styles'
import { useFormContext, FormActions, FormContextType } from "../contexts/form"


export function Index() {
  let navigate = useNavigate()
  let { formData, formDataDispatch } = useFormContext() as FormContextType

  function handleNextStep() {
    if (formData.name !== '') {
      navigate('/step2')
    } else {
      alert('Digite seu nome')
    }
  }

  useEffect(() => {
    formDataDispatch({ type: FormActions.setCurrentStep, payload: 1 })
  }, [])
  

  return (
    <FormPageBase>
      <Div.container>
        <p>Passo 1/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr/>

        <label>
            Seu nome completo
            <input
                type="text"
                autoFocus
                value={formData.name}
                onChange={(e: ChangeEvent<HTMLInputElement>) => formDataDispatch({type: FormActions.setName, payload: e.target.value})}
                />
        </label>

        <button onClick={() => handleNextStep()}>Próximo</button>
      </Div.container>
    </FormPageBase>
  )
}