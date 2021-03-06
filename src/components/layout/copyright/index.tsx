import React from 'react';
import Package from '../../../../package.json';
import { Link } from 'react-router-dom';
import CSS from './index.module.scss';

function CopyRight() {
    return (
        <Link
            className={CSS.copyright}
            target="_blank"
            to='/changelog/'>
            <div>
                <span>CAPUP ©2020 </span>
                <span>Version @V{Package.version}</span>
            </div>
        </Link>
    )
}

export default CopyRight;