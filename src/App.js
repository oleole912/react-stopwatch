import { useState, useEffect } from "react";
import Button from "./components/Button/Button";
import Timer from "./components/Timer/Timer";
import Container from "./components/Container/Container";

const App = () => {
  const [timer, setTimer] = useState(null);
  const [time, setTime] = useState(0);
  const start = () => {
    clearInterval(timer);
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 1);
    }, 1))
  }

  const stop = () => {
    clearInterval(timer);
  }

  const reset = () => {
    clearInterval(timer);
    setTime(0);
  }

  useEffect(() => {
    return () => {
       if (timer) {
        clearInterval(timer);
       }
    };
  }, []);

  return (
    <Container>
      <Timer time={time} />
      <Button action={start}>Start</Button>
      <Button action={stop}>Stop</Button>
      <Button action={reset}>Reset</Button>
    </Container>
  );
}

export default App;
