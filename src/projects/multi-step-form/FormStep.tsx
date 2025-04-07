
interface Props {
  currentStep: number
  steps: number
  title?: string
  description?: string
  onPrevious?: () => void
  onNext?: () => void
  children?: React.ReactNode
}

const FormStep = ({currentStep, steps, title, description, onPrevious, onNext, children}: Props) => {
  return (
    <div className="form-step">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
      <div className="form-step-buttons">
        {currentStep > 1 && <button className="form-step-previous-button" onClick={onPrevious}>Previous</button>}
        {currentStep < steps && <button className="form-step-next-button" onClick={onNext}>Next</button>}
      </div>
    </div>
  )
}

export default FormStep