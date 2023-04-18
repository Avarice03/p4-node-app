import React from "react";

function FilterCategory({ categories, label, filterCategory, category, cuisine }) {
  // Pass the parameters to filter function in recipes 
  const selectedCategory = (e) => {
    if (label === "Category") {
      filterCategory(e.target.value, cuisine);
    }

    if (label === "Cuisine") {
      filterCategory(category, e.target.value);
    }
  };

  // List each category in the dropdown menu
  const dropdownItems = categories.map((category) => {
    return (
      <li key={category}>
        <button
          className="dropdown-item"
          value={category}
          onClick={selectedCategory}
        >
          {category}
        </button>
      </li>
    );
  });

  return (
    <div>
      <button
        type="button"
        className="btn btn-danger dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {label}
      </button>
      <ul className="dropdown-menu">
        <li>
          <button
            value="All"
            className="dropdown-item"
            onClick={selectedCategory}
          >
            All
          </button>
        </li>
        {dropdownItems}
      </ul>
    </div>
  );
}

export default FilterCategory;
