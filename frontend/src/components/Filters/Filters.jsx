import React from "react";
import "./Filters.css";

const Filters = ({ selectedFilter, setSelectedFilter }) => {
  const filters = [
    { name: "Normal", value: "none" },
    { name: "Vivid", value: "contrast(120%) saturate(180%)" },
    { name: "Warm", value: "sepia(40%) saturate(140%)" },
    { name: "Vintage", value: "sepia(100%)" },
    { name: "Noir", value: "grayscale(100%)" },
    { name: "Cool", value: "hue-rotate(1deg) saturate(100%)" },
  ];

  return (
    <div className="filters">
      {filters.map((filter) => (
        <button
          key={filter.name}
          onClick={() => setSelectedFilter(filter.value)}
          className={selectedFilter === filter.value ? "active" : ""}
        >
          {filter.name}
        </button>
      ))}
    </div>
  );
};

export default Filters;
