import React from "react"
import classnames from "classnames"

export default function Badge({ children, shape, color, className, ...rest }) {
    let shapeClass = shape && `badge-${shape}`
    let colorClass = color && `badge-${color}`
    const allClasses = classnames("badge", shapeClass, colorClass, className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}
