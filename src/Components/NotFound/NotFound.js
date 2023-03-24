import React from "react";
import not_fount from "../../img/404.png";
const NotFound = () => {
  return (
    <div className="notFound">
      <h1 className="not-f">لا توجد نتائج...</h1>
      <img src={not_fount} alt="not found" />
    </div>
  );
};

export default NotFound;
