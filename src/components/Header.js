import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
            <FontAwesomeIcon icon={faSailboat} />
            <span className="font-semibold text-xl tracking-tight">Sail Selector</span>
        </div>
        </nav>
    )
}
