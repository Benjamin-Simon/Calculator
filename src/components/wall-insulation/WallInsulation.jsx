import React from 'react';
import w from './WallInsulation.module.css';

const WallInsulation = (props) => {
  return (
    <section className={`container ${w.wrapper}`}>
      <div className='row'>
        <h2 className={`col-lg-12 ${w.heading}`}>Insulation</h2>
        <div className={`col-lg-12 ${w.content}`}>
          <button type="button" className={`btn btn-primary ${w.btnAddWall}`}>+</button>
          <span className={`${w.btnLabel}`}>Add wall</span>
        </div>
      </div>
    </section>
  );
};

export default WallInsulation;