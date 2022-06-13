import { useNavigate } from "react-router-dom"
import { ChangeEvent, ReactNode, useEffect, useState } from 'react'
import { FormPageBase } from '../components/bases/Form'
import { Div } from '../styles'
import { useFormContext, FormActions, FormContextType } from "../contexts/form"
import { SelectBox } from "../components/pages/SelectBox"


export function Step2() {
  let navigate = useNavigate()
  let { formData, formDataDispatch } = useFormContext() as FormContextType

  function handleNextStep() {
    if (formData.name !== '') {
      navigate('/step3')
    } else {
      alert('Digite seu nome')
    }
  }

  useEffect(() => {
    formDataDispatch({ type: FormActions.setCurrentStep, payload: 2 })
  }, [])
  

  return (
    <FormPageBase>
      <Div.container>
        <p>Passo 2/3</p>
        <h1>Vamos começar com seu nome</h1>
        <p>Preencha o campo abaixo com seu nome completo.</p>

        <hr/>

        <SelectBox
          title="Sou iniciante"
          description="Comecei a programar há menos de 2 anos"
          icon="🥳"
          // selected={state.level === 0}
          // onClick={()=>setLevel(0)}
      />

        <SelectBox
            title="Sou programador"
            description="Já programo há 2 anos ou mais"
            icon="😎"
            // selected={state.level === 1}
            // onClick={()=>setLevel(1)}
        />

        <button onClick={() => handleNextStep()}>Próximo</button>
      </Div.container>
    </FormPageBase>
  )
}