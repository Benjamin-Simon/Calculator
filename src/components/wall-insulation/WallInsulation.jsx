import React, {useState} from 'react';
import w from './WallInsulation.module.css';

const WallInsulation = (props) => {
    let [height, setHeight] = useState("");
    let [width, setWidth] = useState("");
    let [wallMode, setWallMode] = useState(false)
    let createWall = () => {
        setWallMode(true)
    }
    let heightRef = React.createRef();
    let widthRef = React.createRef();
    let widthChange = () => {
        setWidth(widthRef.current.value)
    }
    let heightChange = () => {
        setHeight(heightRef.current.value)
    }


    return (
        <section className={`container ${w.wrapper}`}>
            {wallMode ?
                <div className={`row`}>
                    <div className={`col-6 ${w.Wall}`}>
                        <div >Width {width} mm</div>
                        <div>Height {height} mm</div>
                    </div>
                    <div className={`col-6 d-flex flex-column align-items-center justify-content-around`}>
                        <div>
                            You need {Math.ceil((height * width / 1000000) * 100) / 100} m2
                        </div>
                        <div>
                            1 m2 price: 4$
                        </div>
                        <div>
                            Total: {Math.ceil((height * width / 1000000 * 4) * 100) / 100}$
                        </div>
                    </div>
                </div>
                :
                <div className='row'>
                    <h2 className={`col-lg-12 ${w.heading}`}>Insulation</h2>
                    <div className={`col-lg-12 d-flex flex-column  align-items-center ${w.content}`}>
                        <div>
                            Width <input type="number" required={true} value={width} onChange={widthChange}
                                         ref={widthRef}/> mm
                        </div>
                        <br/>
                        <div>
                            Height <input type="number" value={height} onChange={heightChange} ref={heightRef}/> mm
                        </div>
                        <br/>
                        <div>
                            <button type="button" className={`btn btn-primary ${w.btnAddWall}`}
                                    onClick={createWall}>+
                            </button>
                            <span className={`${w.btnLabel}`}>Add wall</span>
                        </div>

                    </div>
                </div>}
        </section>
    );
};

export default WallInsulation;