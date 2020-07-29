import React from 'react';

export default function FormHeader({ text }) {
    return (
        <h3 className="text-bold text-center p-2" style={{ fontSize: 22, fontFamily: "IBM Plex Sans", fontWeight: 600}}>
            {text}
        </h3>
    );
}
