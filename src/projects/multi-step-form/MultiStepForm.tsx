import { useState } from 'react'
import FormProgressBar from './FormProgressBar'
import './MultiStepForm.css'
import FormStep from './FormStep'

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const handleStepChange = (step: number) => {
    setCurrentStep(step)
  }

  const formSteps = [
    {
      title: 'Step 1',
      description: 'This is the first step of the form',
      fields: [
        {
          label: 'Name',
          type: 'text',
          id: 'name',
        },
        {
          label: 'Email',
          type: 'email',
          id: 'email',
        },
      ],
      nextStep: 2,  
    },
    {
      title: 'Step 2',
      description: 'This is the second step of the form',
      fields: [
        {
          label: 'Phone',
          type: 'tel',
          id: 'phone',
        },
        {
          label: 'Address',
          type: 'text',
          id: 'address',
        },
      ],
      nextStep: 3,
    },
    {
      title: 'Step 3',
      description: 'This is the third step of the form',
      fields: [
        { 
          label: 'City',
          type: 'text',
          id: 'city',
        },
        {
          label: 'State',
          type: 'text',
          id: 'state',
        },
      ],
      nextStep: 4,
    },
    {
      title: 'Step 4',
      description: 'This is the fourth step of the form',
      fields: [
        { 
          label: 'Zip Code',
          type: 'text',
          id: 'zipCode',
        },
        {
          label: 'Country',
          type: 'text',
          id: 'country',
        },
      ],
    },  
  ]

  return (
    <div>
      <FormProgressBar steps={4} currentStep={currentStep} onStepChange={handleStepChange}/>
      {
        formSteps.map((step, stepIndex) => stepIndex === currentStep - 1 && (
          <FormStep currentStep={currentStep} steps={4} title={step.title} description={step.description} onPrevious={() => setCurrentStep(currentStep - 1)} onNext={() => setCurrentStep(currentStep + 1)}>
            {step.fields.map((field) => (
              <fieldset>
                <label htmlFor={field.id}>{field.label}</label>
                <input type={field.type} id={field.id} />
              </fieldset>
            ))}
          </FormStep>
        ))
      }
    </div>
  )
}

export { MultiStepForm }