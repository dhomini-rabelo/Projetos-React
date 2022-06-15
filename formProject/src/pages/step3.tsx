import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import { FormPageBase } from '../components/bases/Form'
import { Div } from '../styles'
import { useFormContext, FormActions, FormContextType } from "../contexts/form"


export function Step3() {
  let navigate = useNavigate()
  let { formData, formDataDispatch } = useFormContext() as FormContextType

  function handleNextStep() {
    if (!(formData.email.includes('@'))){
      alert('Digite um email válido')
    }else if (formData.github === ''){
      alert('Digite um link de github válido')
    } else {
      console.log(formData)
    }
  }

  useEffect(() => {
    if ( formData.name === '' ) { navigate('/') } else if ( formData.level === 0 ) { navigate('/step2') } else {
      formDataDispatch({ type: FormActions.setCurrentStep, payload: 3 })
    }
  }, [])
  

  return (
    <FormPageBase>
      <Div.container>
      <p>Passo 3/3</p>
        <h1>Legal {formData.name}, onde te achamos?</h1>
        <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

        <hr/>

        <label>
            Qual seu e-mail?
            <input
                type="email"
                value={formData.email}
                onChange={(e: ChangeEvent<HTMLInputElement>) => formDataDispatch({type: FormActions.setEmail, payload: e.target.value})}
            />
        </label>

        <label>
            Qual seu GitHub?
            <input
                type="url"
                value={formData.github}
                onChange={(e: ChangeEvent<HTMLInputElement>) => formDataDispatch({type: FormActions.setGithub, payload: e.target.value})}
            />
        </label>

        <Link to="/step2" className="backButton">Voltar</Link>
        <button onClick={handleNextStep}>Finalizar Cadastro</button>
      </Div.container>
    </FormPageBase>
  )
}