import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import Button from '@restart/ui/esm/Button';

const icon=<FontAwesomeIcon icon={faGoogle} />
const LogIn = () => {
    return (
        <div>
            <Button className='bg-danger'>{icon}  Google Log In</Button>
        </div>
    );
};

export default LogIn;