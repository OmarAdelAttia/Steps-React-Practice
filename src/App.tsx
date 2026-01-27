const messages = ['Learn React ⚛️', 'Apply for jobs 💼', 'Invest your new income 🤑'];

function App() {
  const step = 1;

  return (
    <div className="steps">
      <div className="numbers">
        {messages.map((_message: string, index: number) => (
          <div key={index} className={`${step >= index + 1 ? 'active' : ''}`}>
            {index + 1}
          </div>
        ))}
      </div>

      <div className="message">
        Step {step}: {messages[step - 1]}
      </div>

      <div className="buttons">
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </div>
    </div>
  );
}

export default App;
