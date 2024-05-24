import { useEffect, useState } from "react";
import { Link, json } from "react-router-dom"; // Assuming you are using React Router

function Show() {
    const [data, setData] = useState([]);

    useEffect(() => {
        var myHeaders = new Headers();
        var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
        };
        
        fetch("http://localhost:3090/", requestOptions)
            .then(da=> setData(json(da)))
            console.log("data",data)
    }, []);

    return (
        <>
            <h3 className='length'>Admin</h3>
            {data.map((item, index) => (
                <Link to={`/Detail${"engine"}/${item.title}`} key={index}>
                    <div className="product-card">
                        <div className="product-image">
                            <img width="250px" src={item.image} alt={item.title} />
                        </div>
                        <div className='details'>
                            <h1 className="name">{item.title}</h1>
                            <span className='price'>Price: $ {item.price}</span>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Show;
