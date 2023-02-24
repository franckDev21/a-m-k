import React, { FC, useEffect, useState } from "react";
import useQuestions from "../../../hooks/useQuestions";

interface TimerProps {
  timer?: number; // seconds
}

const Timer: FC<TimerProps> = () => {

  const [secondes,setSeconds] = useState(0)
  const { currentQuestion, refCurrentQuestion, desactiveQuestion } = useQuestions()

  const convertToTime = (p_seconds: number) => {
    if (p_seconds >= 3600) {
      let hours = Math.floor(p_seconds / 3600); // le nombre d'heurs
      let secondesRestante = p_seconds % 3600; // le reste de secondes

      let { minutes, seconds } = convertToMinutes(secondesRestante);

      return {
        hours,
        minutes,
        seconds,
      };
    } else {
      let { minutes, seconds } = convertToMinutes(p_seconds);

      return {
        hours: 0,
        minutes,
        seconds,
      };
    }
  };

  const convertToMinutes = (seconds: number) => {
    let minutes = Math.floor(seconds / 60); // le nombre de minutes
    let secondesRestante = seconds % 60; // le reste de secondes

    return {
      minutes,
      seconds: secondesRestante,
    };
  };

  const showTime = (seconds: number) => {
    return {
      hours : convertToTime(seconds).hours,
      minutes : convertToTime(seconds).minutes,
      seconds : convertToTime(secondes).seconds,
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('call-hort condition');
      
      if(secondes >= 1){
        setSeconds(s => s - 1)
        console.log('call-dans condition');
      }else{
        clearInterval(interval)
        desactiveQuestion()
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [secondes]);

  useEffect(() => {
    setSeconds(currentQuestion?.timer as number)
  },[refCurrentQuestion])

  return (
    <div>
      {showTime(secondes).hours}:{showTime(secondes).minutes}:{showTime(secondes).seconds}
    </div>
  );
};

export default Timer;
