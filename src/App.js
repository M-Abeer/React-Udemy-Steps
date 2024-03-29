import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function previous() {
    if (step > 1) {
      setStep((s) => step - 1);
    }
  }
  function next() {
    if (step < 3) {
      setStep((s) => step + 1);
    }
  }
  function change() {
    setIsOpen((is) => !is);
  }
  return (
    <>
      <button className="close" onClick={change}>
        &times;
      </button>
      {isOpen ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button bgColor="#7950f2" textColor="#fff" onClick={previous}>
              <span>👈</span> Previous
            </Button>

            <Button bgColor="#7950f2" textColor="#fff" onClick={next}>
              Next <span>👉</span>
              <span>🤓</span>
            </Button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;

function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}]
    </button>
  );
}
