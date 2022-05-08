import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [myProducts, setMyProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
      fetch(`https://gadhop.herokuapp.com/my?uid=${user.uid}`)
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