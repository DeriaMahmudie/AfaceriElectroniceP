import React, { useEffect, useState } from "react";
import "./List.css";
import { url, currency } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const List = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/product/list`);
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeProduct = async (productId) => {
    const response = await axios.post(`${url}/api/product/remove`, {
      id: productId,
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add flex-col">
      <p>Toate produsele</p>
      <div className="list-table">
        <div className="list-table-format title">
          <b>Imagine</b>
          <b>Nume</b>
          <b>Categorie</b>
          <b>Pret</b>
          <b>Butoane</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>
                {currency}
                {item.price}
              </p>
              <p className="cursor" onClick={() => removeProduct(item._id)}>
                x
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
