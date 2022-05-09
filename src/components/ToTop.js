import React, { useState } from 'react'
import '../components-css/ToTop.css';
import { BsChevronUp } from 'react-icons/bs';

function ToTop() {
    const [isVisible, setVisible] = useState(true);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
    };

    const scrollToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'
        });
      };
    
    window.addEventListener('scroll', toggleVisible);

    return (
        <div className="scroll-to-top-section">
            {isVisible ? (
            <div className="scroll-to-top" onClick={scrollToTop}>
                <div className="scroll-to-top-style">
                    <BsChevronUp />
                </div>
            </div>) : (
                <div className="scroll-to-top-none">
                    <div className="scroll-to-top-style">
                        
                    </div>
                </div>)}
        </div>
  )
}

export default ToTop