import "./grid.circles.styles.css";

const GridCircles = () => {
  const cells = Array.from({ length: 80 }, (_, i) => i);

  return (
    <div className="grid">
      {cells.map((cell) => (
        <div key={cell} className="cell">
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
};

export default GridCircles;
