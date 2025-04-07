import './MultiStepForm.css'

interface Props {
  steps?: number
  currentStep?: number
  onStepChange?: (step: number) => void
}

const FormProgressBar = ({steps = 4, currentStep = 1, onStepChange}: Props) => {
  return (
    <div className="form-progress-bar">
      {Array.from({length: steps}).map((_, index) => (
        <div key={index} className={`form-progress-bar-step ${index < currentStep ? 'active' : ''}`} onClick={() => onStepChange?.(index + 1)}>
        </div>
      ))}
    </div>
  )
}

export default FormProgressBar