import classNames from "classnames";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom'
import Style from './home2.module.css'
import { MdVolumeUp, MdVolumeOff } from 'react-icons/md'
const HomePage2 = ({ menubar, footer }) => {
    const [muted, setMuted] = useState(true)
    const history = useHistory()
    return (
        <div className={classNames(Style['background'])} onClick={() => { history.push('/main-entrance') }}>
            <video autoPlay muted={muted} loop>
                <source src="/video/erugo.mp4" type="video/mp4"></source>
            </video>
            <div className={classNames(Style['image-inner-box'])} >
                <div className={classNames(Style['menu-button-wrapper'])}>
                    <div className={classNames(Style['company-name'])}>
                        <img src={require('./images/logo.png').default} style={{ width: "50px" }} alt="" />
                        <h2> &nbsp; ERUGO WORLD</h2>
                    </div>
                    <div className={classNames(Style['menu-button-area'])}>
                    </div>
                </div>
            </div>
            <div style={{ width: '100px', height: '80px', position: 'absolute', top: '0', right: '0', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        muted
                            ?
                            <MdVolumeOff
                                className="pointer"
                                fontSize={'40px'} color={'white'}
                                onClick={
                                    (e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setMuted(!muted)
                                    }
                                }
                            />
                            :
                            <MdVolumeUp
                                className="pointer"
                                fontSize={'40px'} color={'white'}
                                onClick={
                                    (e) => {
                                        e.preventDefault()
                                        e.stopPropagation()
                                        setMuted(!muted)
                                    }
                                }
                            />
                    }
                </div>
            </div>
        </div>
    )
}

export default HomePage2