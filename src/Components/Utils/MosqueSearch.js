import React from "react";
import { Select } from "antd";
// import { UserOutlined } from '@ant-design/icons';

const { Option } = Select;

function MosqueSearch(props) {
  const onChange = (value) => {
    console.log(`selected ${value}`);
  };

  const onBlur = () => {
    console.log("blur");
  };

  const onFocus = () => {
    console.log("focus");
  };

  const onSearch = (val) => {
    console.log("search:", val);
  };

  return (
    <div className="mosque-search">
      <Select
        showSearch
        style={{ width: "90%" }}
        placeholder="Search by States"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {props.states && props.states.length > 0 ? (
          props.states.map((state, i) => (
            <Option key={i + 1} value={state}>
              {state}
            </Option>
          ))
        ) : (
          <Option value="Abuja">Abuja</Option>
        )}
      </Select>
    </div>
  );
}

export default MosqueSearch;
