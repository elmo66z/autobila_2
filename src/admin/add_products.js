import { useEffect, useState } from "react";

function Add({ showModal, userid }) {
  // const adddata= async ()=>{
  //     const res = await fetch("http://localhost:3090")
  //     const data =  await res.json()
  //     setProducts(data)
  // }    
  // useEffect(()=>{
  //    adddata()
  // },[])
  const [Products, setProducts] = useState({
    image: "",
    title: "",
    price: "",
  });

  useEffect(() => {
    if (userid) {
      var myHeaders = new Headers();
      var raw = JSON.stringify({
        Products
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:3090" + userid, requestOptions)
        .then((response) => response.json())
        .then((result) => setProducts(result))
        .catch((error) => console.log("error", error));
    }
  }, [userid]);
  const Add = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: userid ? "PUT" : "POST",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:3090${userid ? `/${userid}` : ""}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("Result:", result);
        showModal(false);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
    <form>
      <span onClick={() => showModal(false)}>Close</span>
      <input
        type="text"
        id="image"
        name="image"
        value={Products.image}
        onChange={(e) => setProducts(e.target.value)}
      />
      <input
        type="text"
        placeholder="title"
        id="title"
        name="title"
        value={Products.title}
        onChange={(e) => setProducts(e.target.value)}
      />
      <input
        type="number"
        placeholder="price"
        id="price"
        name="price"
        value={Products.price}
        onChange={(e) => setProducts(e.target.value)}
      />
      <button onClick={Add}>Add</button>
    </form>
  </>
  );
}

export default Add;
