import React from "react";
import './Button.css'

interface Props {
    text: string;
}

export const Btn = (props: Props) => (
    <button>{props.text}</button>
)




