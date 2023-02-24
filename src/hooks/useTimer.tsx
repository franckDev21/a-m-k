import { useEffect, useState } from "react";
import useQuestions from "./useQuestions";

const useTimer = () => {

  const [secondes,setSeconds] = useState(0)
  const { currentQuestion, desactiveQuestion, refCurrentQuestion} = useQuestions()

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

  return {
    hours : showTime(secondes).hours,
    minutes : showTime(secondes).minutes,
    seconds : showTime(secondes).seconds,
  };
};

export default useTimer;
