import React , {useState, useEffect

} from 'react';

const Clock = () =>{

    
    

    const getTime = () =>{

        
        const currentTime = new Date();
        const hours = currentTime.getHours();
        const minutes = currentTime.getMinutes();
        const seconds = currentTime.getSeconds();
        const ampm = hours >= 12 ? 'pm' : 'am';
        return {
            hours,
            minutes,
            seconds,
            ampm
        };
        }
    

    const [time, setTime] = useState(getTime());

    useEffect(() => {
        const intervalId = setInterval(()=> {
            setTime(getTime());
        }, 1000);

        return () => clearInterval(intervalId);

    }, [])
   
    
   

    const { hours, minutes, seconds, ampm} = time;

    return (
        <div className='clock'>
          {hours === 0 ? 12 : hours > 12 ? hours - 12 : hours}:{' '}
          {minutes > 9 ? minutes : `0${minutes}`}:{' '}
          {seconds > 9 ? seconds : `0${seconds}`} {ampm}
        </div>
      );
    

}


export default Clock