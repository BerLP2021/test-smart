import React from 'react'

import './Spinner.scss';

const Spinner: React.FC = () => {

    return (
        <div className="newtons-cradle">
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
            <div className="newtons-cradle__dot"></div>
        </div>
    )
}
export default Spinner;