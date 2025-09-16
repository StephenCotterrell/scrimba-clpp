import React from 'react' 
import classnames from 'classnames'

const TooltipContext = React.createContext()
export { TooltipContext }

export default function TooltipWrapper({ style, color, className, children, ...rest }) {
    const [isVisible, setIsVisible] = React.useState(false)
    const closeTimerRef = React.useRef(null)
    const styleClass = `tooltip-${style}-${color}`
    const allClasses = classnames('tooltip-container', styleClass, className)

    const open = () => {
        if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
        setIsVisible(true)
    }

    const scheduleClose = () => {
        closeTimerRef.current = setTimeout(() => setIsVisible(false), 250)
    }

    return (
        <TooltipContext.Provider value={{isVisible, setIsVisible, open, scheduleClose }}>
            <div 
                className={allClasses}
                onMouseEnter={open}    
                onMouseLeave={scheduleClose}
            >
                {children}
            </div>
        </TooltipContext.Provider>
    )
}