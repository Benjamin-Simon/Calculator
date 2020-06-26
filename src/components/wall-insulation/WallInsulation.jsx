import w from './WallInsulation.module.css'
import React, {useState} from 'react';


const WallInsulation = (props) => {
    let [height, setHeight] = useState("");
    let [width, setWidth] = useState("");
    let [wallMode, setWallMode] = useState(false)
    let [wallColor, setwallColor] = useState("aliceblue");
    let [total,setTotal]=useState(0);
    let [paint, setPaint] = useState({color:"", price:0, paintTotal:false});
    let createWall = () => {
        setTotal(Math.ceil((height * width / 1000000 * 4) * 100) / 100);
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
    let colorChange = (color,price) => {
        setTotal(Math.ceil((height * width / 1000000 * 4+height * width / 1000000 * price) * 100) / 100)
        setwallColor(color);
        let paintBuffer = {color:color,price:price,paintTotal:true}
        setPaint(paintBuffer);

    }

    return (
        <div className={w.sectionOne}>
            {wallMode ?
                <div className={w.Section}>
                    <div className={w.Wall} style={{background:wallColor}}>
                        <div>Width {width} mm</div>
                        <div>Height {height} mm</div>
                    </div>
                    <div className={w.TotalDiv}>
                        <h2>Paint Color</h2>
                        <div className={w.paintSection}>
                            <div className={w.paintColor} onClick={()=>{colorChange("Red",5)}} title={"5$"} style={{background: "red"}}/>
                            <div className={w.paintColor} onClick={()=>{colorChange("Green",10)}}  title={"10$"} style={{background: "green"}}/>
                            <div className={w.paintColor} onClick={()=>{colorChange("Yellow",20)}}  title={"20$"} style={{background: "yellow"}}/>
                            <div className={w.paintColor} onClick={()=>{colorChange("Blue",30)}}  title={"30$"} style={{background: "blue"}}/>
                        </div>
                    </div>
                    <div className={w.TotalDiv}>
                        Your wall {Math.ceil((height * width / 1000000) * 100) / 100} m2<br/>
                        Insulation price: 4$ <br/>
                        {paint.paintTotal?
                            <div>
                                {paint.color} paint price {paint.price}$
                            </div>:<div></div>}
                        Total: {total}$ <br/>
                    </div>

                </div>
                :
                <div className={w.InsulationForm}>
                    <h2>Insulation</h2>

                        <div>
                            Width <input type="number" value={width} onChange={widthChange} ref={widthRef}/> mm
                        </div>
                        <br/>
                        <div>
                            Height <input type="number" value={height} onChange={heightChange} ref={heightRef}/> mm
                        </div>
                        <br/>
                        <div>
                    <span>Add wall  </span>
                        <button className={"btn btn-primary"} onClick={createWall}>+</button></div>

                </div>}
        </div>
    );
};

export default WallInsulation;