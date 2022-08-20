import React from "react";

const ListGroup = ({
  items,
  valueProperty,
  textProperty,
  onItemSelect,
  selectedItem,
}) => {
  const className = "list-group-item list-group-item-action ";
  return (
    <div>
      <div className="list-group">
        <a
          onClick={() => onItemSelect()}
          key="all"
          className={`${className} ${selectedItem ? "" : "active"}`}
          aria-current="true"
        >
          All genres
        </a>
        {items.map((item) => (
          <a
            onClick={() => onItemSelect(item[textProperty])}
            key={item[valueProperty]}
            className={`${className} ${
              selectedItem == item[textProperty] ? "active" : ""
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};

export default ListGroup;
