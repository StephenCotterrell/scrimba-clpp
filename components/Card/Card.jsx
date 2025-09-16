import React from "react"
import { HiOutlineCloudUpload } from "react-icons/hi";

export default function Card({ children, ...rest }) {

    
    return (
        <div className="card">
            <div className="card-icon-container">
                <HiOutlineCloudUpload className="card-icon"/>
            </div>
            <div className="card-text">
                {children}            
            </div>
        </div>
    )
}

