import { Link, useNavigate } from "react-router-dom"
import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import { FormPageBase } from '../components/bases/Form'
import { Div } from '../styles'
import { useFormContext, FormActions, FormContextType } from "../contexts/form"
import { SelectBox } from "../components/pages/SelectBox"


export function Step2() {
  let navigate = useNavigate()
  let { formData, formDataDispatch } = useFormContext() as FormContextType

  function handleNextStep() {
    if ( formData.level !== 0 ) {
      navigate('/step3')
    } else {
      alert('Selecione seu nível de conhecimento')
    }
  }

  useEffect(() => {
    if ( formData.name === '' ) { navigate('/') } else {
      formDataDispatch({ type: FormActions.setCurrentStep, payload: 2 })
    }
  }, [])
  

  return (
    <FormPageBase>
      <Div.container>
      <p>Passo 2/3</p>
      <h1>{formData.name}, o que melhor descreve você?</h1>
      <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>

      <hr/>

        <SelectBox
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          selected={formData.level === 1}
          onClick={() => formDataDispatch({ type: FormActions.setLevel, payload: 1 })}
      />

        <SelectBox
            title="Sou programador"
            description="Já programo há 2 anos ou mais"
            icon="😎"
            selected={formData.level === 2}
            onClick={() => formDataDispatch({ type: FormActions.setLevel, payload: 2 })}
        />

        <Link to="/" className="backButton">Voltar</Link>
        <button onClick={() => handleNextStep()}>Próximo</button>
      </Div.container>
    </FormPageBase>
  )
}