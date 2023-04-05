import React from 'react';

const Description = (props) => {


    const {description} = props.course

    return (
        <div className="card w-auto  m-5 bg-base-100 shadow-xl ">
  <div className="card-body">
    <h2 className="text-lg">{description}</h2>
    
  </div>
</div>
    );
};

export default Description;