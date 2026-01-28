import { useState } from 'react';

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
              <button
                type="button"
                onClick={prevHandler}
                disabled={step < 1}
                className={step <= 1 ? 'disabled-btn' : ''}
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextHandler}
                disabled={step >= 3}
                className={step >= 3 ? 'disabled-btn' : ''}
              >
                Next
              </button>
            </div>
          </>
        )}
        {!isOpen && (
          <div className="btn">
            <button className="button" type="button" onClick={openCloseHandler}>
              Open
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
