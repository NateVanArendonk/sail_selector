import React from "react";

export default function SubmitButton(props) {
    return (
        <button
            type="button"
            className="rounded-md bg-teal-500 hover:bg-teal-400 mx-2 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-third-color-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            onClick={props.onClick}
            >
            {props.buttonText}
        </button>
    )
}
