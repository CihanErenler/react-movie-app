import React from "react";

function ImageNav({ movies, current, next, check }) {
  return (
    <div className="dots">
      {movies.map((item) => {
        return (
          <div
            key={item.id}
            className={`${item.id === current ? "dot active" : "dot"}`}
            onClick={() => next(check(item.id))}
          ></div>
        );
      })}
    </div>
  );
}

export default ImageNav;
