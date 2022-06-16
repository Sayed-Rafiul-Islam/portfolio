import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './CustomLink.css'

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <div>
            <Link
                style={{ backgroundImage: match ? "linear-gradient(210deg, #0b717f, #0ba276)" : "", color: match ? 'white' : '', borderBottom: match ? "4px solid white" : '' }}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div >
    );
}

export default CustomLink;