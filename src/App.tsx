import { useState } from 'react';
import { Button } from './components/Button';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  const [step, setStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const prevHandler = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  const nextHandler = () => {
    setStep((prevStep) => Math.min(prevStep + 1, messages.length));
  };

  const openCloseHandler = () => {
    setIsOpen((currState) => !currState);
  };

  return (
    <>
      {isOpen && (
        <button type="button" className="close" onClick={openCloseHandler}>
          &times;
        </button>
      )}
      <div className="steps">
        {isOpen && (
          <>
            <div className="numbers">
              {messages.map((_message: string, index: number) => (
                <div key={index} className={`${step >= index + 1 ? 'active' : ''}`}>
                  {index + 1}
                </div>
              ))}
            </div>

            <div className="message">{messages[step - 1]}</div>

            <div className="buttons">
              <Button onClick={prevHandler} step={step} direction="previous">
                <span>◀️</span> Previous
              </Button>
              <Button onClick={nextHandler} step={step} direction="next">
                Next <span>▶️</span>
              </Button>
            </div>
          </>
        )}
        {!isOpen && (
          <div className="btn">
            <Button onClick={openCloseHandler}>Open</Button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
