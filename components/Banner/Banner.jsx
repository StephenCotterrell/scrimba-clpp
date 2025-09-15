import React from "react"
import classnames from 'classnames'
import { FaCheckCircle } from 'react-icons/fa'
import { FaCircleXmark } from 'react-icons/fa6'
import { GoAlertFill } from "react-icons/go"
import { HiInformationCircle } from "react-icons/hi"

export default function Banner({ children, status, className, ...rest }) {
    const statusClass = status && `banner-${status}`

    const allClasses = classnames('banner', statusClass, className)

    const iconComponent = status === "success" ? <FaCheckCircle />
    : status === "warning" ? <GoAlertFill />
    : status === "error" ? <FaCircleXmark />
    : status === "neutral" ? <HiInformationCircle />: null

    return (
            <div className={allClasses}>
                <div className="icon-div"> 
                    {iconComponent}
                </div>
                <div className="content-div">
                    {children}
                </div>
            </div>
    )
}