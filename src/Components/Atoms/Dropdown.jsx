import React, { useState } from "react";

const Dropdown = ({ initialValue, items, style, theme }) => {
  const [value, setValue] = useState(initialValue);
  const [listState, setListState] = useState("hidden");
  const showList = () => {
    setListState(listState === "hidden" ? "displayed" : "hidden");
  };
  const listStateStyles = {
    hidden: {
      display: "none"
    },
    displayed: {
      display: "block"
    }
  };
  
  return (
    <div
      tabIndex={0}
      
      role="select"
      aria-labelledby={value}
      className={`container ${theme}-mode-elements ${theme}-mode-text ${style}focus:outline-none focus:bg-blue-100 relative z-20`}
      onBlur={() => {
        setListState("hidden");
        
      }}
    >
      <div
        className="header px-3 py-3 rounded shadow-md cursor-pointer"
        onClick={() => {
          showList();
        }}
        onFocus={() => {
          setListState("displayed");
        }}
      >
        <div className="w-full flex justify-between items-center">
          <span>{value}</span>
          <svg
            width="29"
            height="25"
            viewBox="0 0 29 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.5 11.5L14.5 17.5L8.5 11.5"
              stroke="black"
              strokeWidth="2"
              strokeMiterLimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <ul
        role="listbox"
        className="list mt-2 rounded shadow-md relative z-40"
        style={{
          transition: "display 2s linear",
          lineHeight: "2.5rem",
          ...listStateStyles[listState],

          li: {}
        }}
      >
        {items.map((item) => <ListItem value = {item} setValue = {(item) => {setValue(item)}}>{item}</ListItem>)}
      </ul>
    </div>
  );
};

const ListItem = ({ value, children, setValue}) => {
  return (
    <li
      role="option"
      onClick = {
        () => {
          setValue(value);
        }
      }
      className="px-3 hover:bg-blue-200 cursor-pointer"
    >
      {children}
    </li>
  );
};

export default Dropdown;

