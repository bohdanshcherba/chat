import React from 'react';
import s from './Avatar.module.css'

function Avatar({src, size=60,online=true}) {
    return (
        <div className={s.avatar_wrapper} style={{width:size,height:size}}>
            <div className={s.avatar}>
                <img src={src} alt="avatar"/>

            </div>
            {online?
            <div className={s.online}/>:null}
        </div>
    );
}

export {Avatar};
