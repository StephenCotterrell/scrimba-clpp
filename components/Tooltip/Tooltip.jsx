import React from 'react' 
import { TooltipContext } from "./TooltipWrapper"
import { PiTrayBold } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";

export default function Tooltip({ children, ...rest }) {
    const ctx = React.useContext(TooltipContext)
    if (!ctx) return null;

    const { isVisible, setIsVisible, open, scheduleClose } = ctx;
    
    if (!isVisible) return null;
    
    
    return (
        <div
        className="tooltip-bubble"
        role="tooltip"
        onMouseEnter={open}
        onMouseLeave={scheduleClose}
        >
            <span style={{ display: 'inline-flex'}} className="tooltip-icon">
                <PiTrayBold size='1.5em'/>
            </span>
            <div className="tooltip-content">
                {children}
            </div>

            <div
                type='button'    
                aria-label="Close tooltip"
                onClick={(e) => {
                    e.stopPropagation();
                    setIsVisible(false);
                }}
                style={{
                    cursor: 'pointer',
                }}
            >
                <IoMdClose className="tooltip-close" size="1.5em"/>
            </div>

            <span
                aria-hidden
                className="tooltip-arrow"
                style={{
                    position: 'absolute',
                    left: 50,
                    bottom: -6,
                    width: 12,
                    height: 12,
                    transform: 'rotate(45deg)'
                }}
            />

        </div>
    )
}