import { useState, useEffect } from "react";
import "../App.css";
import DBJSON from "../data.json";
import axios from "axios";


export const Home = () => {
  // total obj in array.

  const { mens } = DBJSON;
  const initialData = mens || [];
  const [data, setData] = useState(initialData);
  const [showall, setShowall] = useState(initialData);
  const [item, setItem] = useState([]);
  const [filterState, setFilterState] = useState({
    method: "all",
    rating: 1,
  });
  const [sortByRating, setSortByRating] = useState(false);

  // single obj initial state
  const initialState = {
    description: "",
    title: "",
       image: "",
    original_price: "",
    discounted_price: "",
    sizes : ""
  };

  const [formData, setformData] = useState(initialState);

  const handlesubmit = (e) => {
    e.preventDefault();
    const showalladata = () => {
      return [...data, formData];
    };
    setData(showalladata);
    setShowall(showalladata);
  };
  console.log(showall);

  const handlePaymentMethodChange = (e) => {
    const { value } = e.target;

    const payment_methods = {
      card: false,
      cash: false,
      upi: false,
    };

    payment_methods[value] = true;

    setformData((prevState) => ({
      ...prevState,
      payment_methods,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "name", value, "value");

    setformData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const sortByRatingFunc = () => {
    setSortByRating((prev) => !prev);
  };

  const getCorrectPaymentMethod = (obj) => {
    for (let key in obj) {
      if (obj[key]) return key;
    }
  };
  const handlesorting = (rate) => {
    setFilterState({ ...filterState, rating: rate });
  };

  const handlepayment = (method) => {
    setFilterState({ ...filterState, method });
  };
  function getRestaurant() {
    fetch("http://localhost:3000/mens")
      .then((data) => data.json())
      .then((data) => {
        setFilterState(data);
        //console.log(data);
      });
  }



  useEffect(() => {
    const filterSearch = () => {
      const { method, rating } = filterState;
  
      let filteredArr = showall.filter((item) => {
        let newitem = item.payment_methods[method] && item.rating >= rating;
        return newitem;
      });
  
      filteredArr = filteredArr.sort((a, b) =>
        sortByRating ? b.rating - a.rating : a.rating - b.rating
      );
      setData(filteredArr);
    };
    filterSearch();
  }, [filterState, showall, sortByRating]);

  const {
    description,
    title,
    votes,
    reviews,
    image,
    original_price,
    rating,
    discounted_price,
    sizes
  } = formData;

  console.log(filterState, "filterState filterState");

  return (
    <div className="container">
    
    
      <br />
  
      <div>
        {data.map(
          ({
            description,
            title,
            payment_methods,
            image,
            discounted_price,
          
          }) => {
            const getPaymentmethod = getCorrectPaymentMethod(payment_methods);

            return (
            
                <div className="flexx">
                  <div className="shadoww">
                    <div className="Rest">
                      <div>
                        {" "}
                        <img src={image} alt="" />
                      </div>
                      <div>
                        <h5 className="name">{description}</h5>
                        <h5 className="add">{title}</h5>
                        <div className="list">
                          <h5>Min ₹{discounted_price} </h5>
                         
                          <li className="upto">Upto 10 discounted_price</li>
                        </div>
                       
                      
                     
                    </div>
                   
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="clear"></div>
    </div>
   
  );
};