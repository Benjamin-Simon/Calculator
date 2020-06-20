import React from 'react';
import w from './WallInsulation.module.css'

const WallInsulation = (props) => {
  return (
    <section>
      <h2>Insulation</h2>
      <div>
        <button>+</button>
        <span>Add wall</span>
      </div>
    </section>
  );
};

export default WallInsulation;