import React from "react";
import "./card.css";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteExpense } from "../../redux/actions";

const Card = ({ item, notifySuccess }) => {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    notifySuccess();
    dispatch(deleteExpense(item));
  };

  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-info">
        <label className="card-title">{item.title}</label>        
        <label className="card-category-title">Category: {item.category.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount"> {item.amount} VNĐ</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i class="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
