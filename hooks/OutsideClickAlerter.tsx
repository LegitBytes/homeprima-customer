import { useState, useEffect, useRef, RefObject } from 'react';

export default function useComponentVisible(initialIsVisible: boolean) {
    const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
    const ref = useRef<HTMLDivElement>(null);
    const btnRef = useRef<any>(null)

    const handleClick = (event: Event) => {      
  
       
      if(btnRef.current && btnRef.current.contains(event.target as Node)) {
        return
      } 
      else if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsComponentVisible(false);
      }
    };

    useEffect(() => {
        document.addEventListener('click', handleClick, true);
        return () => {
            document.removeEventListener('click', handleClick, true);
        };
    }, []);

    return { ref, btnRef , isComponentVisible, setIsComponentVisible };
}