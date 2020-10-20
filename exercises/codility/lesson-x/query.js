import React, { useState } from "react";
import classnames from "classnames";
// you should import `lodash` as a whole module
import { debounce } from "lodash";
import axios from "axios";

const ITEMS_API_URL = "https://example.com/api/items";
const DEBOUNCE_DELAY = 500;

// the exported component can be either a function or a class

export const ListItems = ({ items, onSelectItem }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <div className="list is-hoverable">
      {items.map((item, index) => {
        return (
          <a class="list-item" key={index} onClick={() => onSelectItem(item)}>
            {item}
          </a>
        );
      })}
    </div>
  );
};

export default function Autocomplete(props) {
  const [searchedValues, setSearchedValues] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchedValue = debounce((searchValue) => {
    const url = `${ITEMS_API_URL}?q=${searchValue}`;

    setIsLoading(true);
    axios
      .get(url)
      .then((response) => {
        if (response.status === 200) {
          setSearchedValues(response.data);
        }
      })
      .catch((error) => {
        console.log("The request was not possible: ", error);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, DEBOUNCE_DELAY);

  const onSearchChange = (event) => {
    fetchSearchedValue(event.target.value);
  };

  return (
    <div className="wrapper">
      <div
        className={classnames({
          control: true,
          "is-loading": isLoading,
        })}
      >
        <input type="text" className="input" onChange={onSearchChange} />
      </div>
      <ListItems items={searchedValues} onSelectItem={props.onSelectItem} />
    </div>
  );
}
