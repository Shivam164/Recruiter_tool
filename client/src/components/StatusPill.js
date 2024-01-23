import React from 'react'
import { classNames } from '../shared/Utils';

function StatusPill({ value }) {
    const status = value ? value.toLowerCase() : "unknown";

    return (
        <span
        className={classNames(
            "px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm",
            status.startsWith("hired") ? "bg-green-100 text-green-700" : null,
            status.startsWith("contacted") ? "bg-yellow-100 text-yellow-700" : null,
            status.startsWith("rejected") ? "bg-red-100 text-red-700" : null,
            status.startsWith("offer") ? "bg-blue-100 text-blue-700" : null,
            status.startsWith("interview") ? "bg-orange-100 text-orange-700" : null
        )}
        >
        {status}
        </span>
    );
}

export default StatusPill;