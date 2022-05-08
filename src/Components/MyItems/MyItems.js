import React, { useEffect, useState } from 'react';

const MyItems = () => {
    const [myProducts, setMyProducts] = useState([]);

    useEffect(() => {
      fetch("https://gadhop.herokuapp.com/my")
        .then((res) => res.json())
        .then((data) => setMyProducts(data));
    }, []);
    return (
        <div>
            <h2>User Added Items here </h2>
        </div>
    );
};

export default MyItems;