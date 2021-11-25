import React from "react";

function ImageNav({ movies, current, next, check }) {
  return (
    <div className="dots">
      {movies.map((item, index) => {
        return (
          <div
            key={item.id}
            className={`${index + 1 === current ? "dot active" : "dot"}`}
            onClick={() => next(check(index + 1))}
          ></div>
        );
      })}
    </div>
  );
}

export default ImageNav;
