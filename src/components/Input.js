import React from 'react'

export default (type = "text", maxLength = 100, placeHolder, onKeyUp, style) => (
    <div>    
        <input className="storybookInput" 
            type={type}
            maxLength={maxLength}
            placeholder={placeHolder}
            style={style}
            onKeyUp={() => onKeyUp("input keyup")}>
        </input>
    </div>
)