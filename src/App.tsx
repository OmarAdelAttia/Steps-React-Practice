import { useState } from 'react';

const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  const [step, setStep] = useState<number>(1);
  const [hide, setHide] = useState<string>('Hide');

  const prevHandler = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
    if (step - 1 === 0) setHide('Show');
  };

  const nextHandler = () => {
    setStep((prevStep) => Math.min(prevStep + 1, messages.length));
  };

  const hideHandler = () => {
    if (hide === 'Hide') {
      setHide('Show');
      setStep(0);
    } else {
      setHide('Hide');
      setStep(1);
    }
  };

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((_message: string, index: number) => (
          <div key={index} className={`${step >= index + 1 ? 'active' : ''}`}>
            {index + 1}
          </div>
        ))}
      </div>

      <div className="message">{step > 0 ? messages[step - 1] : `Let's Rock it!`}</div>

      <div className="buttons">
        <button
          type="button"
          onClick={prevHandler}
          disabled={step < 1 || hide === 'show'}
          className={step < 1 || hide === 'show' ? 'disabled-btn' : ''}
          // className={step < 1 || hide === 'show' ? 'hide-btn' : ''} // in case we want to hide the button
        >
          Previous
        </button>
        <button
          type="button"
          onClick={nextHandler}
          disabled={step >= 3 || hide === 'show'}
          className={step >= 3 || hide === 'show' ? 'disabled-btn' : ''}
          // className={step >= 3 || hide === 'show' ? 'hide-btn' : ''} // in case we want to hide the button
        >
          Next
        </button>
        <button type="button" onClick={hideHandler}>
          {hide}
        </button>
      </div>
    </div>
  );
}

export default App;
