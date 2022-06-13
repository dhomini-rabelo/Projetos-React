import { createContext, ReactNode, useContext, useReducer } from 'react'


// Context
type FormContextValueType = {
    currentStep: number;
    name: string;
    level: 0 | 1;
    email: string;
    github: string;
}

export type FormContextType = { formData: FormContextValueType; formDataDispatch: (action: ActionType) => void }

const initialContextValue: FormContextValueType = {
    currentStep: 0,
    name: '',
    level: 0,
    email: '',
    github: '',
}

const FormContext = createContext<FormContextType | null>(null)


// Reducer
type ActionType = { type: FormActions; payload: any;}

export enum FormActions {
    setCurrentStep,
    setName,
    setLevel,
    setEmail,
    setGithub
}

function formReducer (state: FormContextValueType, action: ActionType) {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        default:
            throw new Error('Invalid action type') 
    }
}

// Provider
export function FormProvider({ children }: { children: ReactNode }) {
    const [formData, formDataDispatch] = useReducer(formReducer, initialContextValue)
    
    return (
        <FormContext.Provider value={{ formData, formDataDispatch }}>
            {children}
        </FormContext.Provider>
    )
}


// Hook
export function useFormContext() {
    const context = useContext(FormContext)
    if (context === undefined) throw new Error('Context outside provider')
    return context
} 