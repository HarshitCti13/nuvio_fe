import React from "react";

const TableHeader = ({ data = [], isEmail = true }) => {
  return (
    <thead>
      <tr>
        {data?.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
