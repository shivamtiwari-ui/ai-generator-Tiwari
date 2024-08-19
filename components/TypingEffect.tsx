// import React, { useEffect, useState } from 'react';

// const TypingEffect = ({ text, speed }) => {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       setDisplayedText((prev) => prev + text[index]);
//       index++;
//       if (index === text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return <span>{displayedText}</span>;
// };

// export default TypingEffect;

import React, { useEffect, useState } from 'react';

// Define the prop types
interface TypingEffectProps {
  text: string;
  speed: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText(prev => prev + text[index]);
      index++;
      if (index === text.length) {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <div>{displayedText}</div>;
};

export default TypingEffect;

