import React from 'react';
import w from './WallInsulation.module.css'

const WallInsulation = (props) => {
  return (
    <section className={`container ${w.wrapper}`}>
      <h2 className={`row ${w.heading}`}>Insulation</h2>
      <div className={`row ${w.content}`}>
        <button type="button" className={`btn btn-primary ${w.btnAddWall}`}>+</button>
        <span className={`${w.btnLabel}`}>Add wall</span>
      </div>
    </section>
  );
};

export default WallInsulation;