import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function InputTextKey({setText,setCipherKey}){

    const textRef=useRef();
    const cipherKeyRef=useRef();

    const navigate=useNavigate();

    function handleStart(){
        const text=textRef.current.value;
        const cipherKey=cipherKeyRef.current.value;
        setText(text);
        setCipherKey(cipherKey);
        navigate("./remove-duplicates");
    }

    return <div className="text-key-inputs">
        <input ref={textRef} placeholder="Enter the Plain Text"/>
        <input ref={cipherKeyRef} placeholder="Enter the Encryption Key"/>
        <div className="start-encryption" onClick={handleStart}> Show Encryption Process</div>
    </div>
}

export default InputTextKey;