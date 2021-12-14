import { useState,createElement,useEffect } from "react";
import { useSpring, animated } from "react-spring";

const Run = () => {
  const [key, setKey] = useState(1);

 
  const array = ['rut','dina'];

  const scrolling = useSpring({
    from: { transform: "translate(99%,0)" },
    to: { transform: "translate(-60%,0)" },
    config: { duration: 10000 },
    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

 

  

  return (
    <div key={key}>
      <animated.div style={scrolling}>
          
        {array.map(el=>
            <span>{el} </span>
        )}     
     </animated.div>
    
    </div>
  );
};

export default Run;
