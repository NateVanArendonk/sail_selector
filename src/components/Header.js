import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSailboat } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div class="flex items-center flex-shrink-0 text-white mr-6">
            <FontAwesomeIcon icon={faSailboat} />
            <span class="font-semibold text-xl tracking-tight">Sail Selector</span>
        </div>
        </nav>
    )
}
