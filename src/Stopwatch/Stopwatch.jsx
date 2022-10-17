import React, {useEffect, useState} from "react";

const Stopwatch = () => {
    const [time, setTime] = useState(0);
    const [timerOn, setTimerOn] = useState(false);

    useEffect(() => {
        let interval = null;

        if (timerOn) {
            interval = setInterval(() => {
                setTime(prev => prev + 10)
            }, 10)
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [timerOn]);


    return (
        <div className="row align-self-center">
            <div>
                <span>{("0" + Math.floor((time/60000)%60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time/1000)%60)).slice(-2)}:</span>
                <span>{("0" + ((time/10)%100)).slice(-2)}</span>
            </div>
            <div className="btn-group">
                {!timerOn && time === 0 && (
                    <button type="button" className="btn btn-success" onClick={() => setTimerOn(true)}>Старт</button>
                )}
                {timerOn && (
                    <button  type="button" className="btn btn-danger" onClick={() => setTimerOn(false)}>Стоп</button>
                )}
                {!timerOn && time !== 0 && (
                    <button type="button" className="btn btn-success" onClick={() => setTimerOn(true)}>Возобновить</button>
                )}
                {!timerOn && time > 0 && (
                    <button  type="button" className="btn btn-danger" onClick={() => setTime(0)}>Очистить</button>
                )}
            </div>
        </div>
    )
}

export default Stopwatch;