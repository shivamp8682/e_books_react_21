import React from "react";

const Pricing = (props) => {
  console.log(props.dataList);

  const renderProperty = props.dataList.map((item) => {
    return (
      <div>
       {/* <h2>{item.id} </h2> */}
        <h2>{item.name} </h2>
        <img src={item.image}/>
      </div>
    );
  });
  return (
    <div>
      <h2>{renderProperty}</h2>

      <button className="btn btn-outline-success my-4">Click Me</button>
    </div>
  );
};

export default Pricing;
