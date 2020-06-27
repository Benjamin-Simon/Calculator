import React, {useState} from 'react';
import w from './WallInsulation.module.css'

let testJson = [
    {color: "Red", price: 5},
    {color: "Green", price: 10},
    {color: "Yellow", price: 20},
    {color: "Blue", price: 30}
]

const WallInsulation = (props) => {
    let [height, setHeight] = useState("");
    let [width, setWidth] = useState("");
    let [wallMode, setWallMode] = useState(false)
    let [wallColor, setwallColor] = useState("aliceblue");
    let [total, setTotal] = useState(0);
    let [paint, setPaint] = useState({color: "", price: 0, paintTotal: false});
    let createWall = () => {
        setTotal(Math.ceil((height * width / 10000 * 4) * 100) / 100);
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
    let colorChange = (color, price) => {
        setTotal(Math.ceil((height * width / 10000 * 4 + height * width / 10000 * price) * 100) / 100)
        setwallColor(color);
        let paintBuffer = {color: color, price: price, paintTotal: true}
        setPaint(paintBuffer);

    }
    let allColors = testJson.map(elem => <div className={w.paintColor}
                                              onClick={() => colorChange(elem.color, elem.price)}
                                              title={elem.price + "$"} style={{background: elem.color}}/>)

    return (
        <div className={w.sectionOne}>
            {wallMode ?
                <div className={w.section}>
                    <div className={w.wall} style={{background: wallColor}}>
                        <div>Width {width} (sm)</div>
                        <div>Height {height} (sm)</div>
                    </div>
                    <div className={w.totalDiv}>
                        <h2>Paint Color</h2>
                        <div className={w.paintSection}>
                            {allColors}
                        </div>
                    </div>
                    <div className={w.totalDiv}>
                        Your wall {Math.ceil((height * width / 10000) * 100) / 100} m<sup>2</sup><br/>
                        Insulation price: 4$ <br/>
                        {paint.paintTotal ?
                            <div>
                                {paint.color} paint price {paint.price}$
                            </div> : <div></div>}
                        Total: {total}$ <br/>
                    </div>
                </div>
                :
                <div className={w.insulationForm}>
                    <h2>Insulation</h2>
                    <div>
                        Width <input type="number" value={width} onChange={widthChange} ref={widthRef}/> (sm)
                    </div>
                    <br/>
                    <div>
                        Height <input type="number" value={height} onChange={heightChange} ref={heightRef}/> (sm)
                    </div>
                    <br/>
                    <div>
                        <span>Add wall  </span>
                        <button className={"btn btn-primary"} onClick={createWall}>+</button>
                    </div>
                </div>}
        </div>
    );
};

export default WallInsulation;