import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="">
            <h1 className="text-center text-primary py-5">Services</h1>

            <div className="row ">
                {services?.map((service) => {
                    return (
                        <div key={service.id} className="col-lg-4 col-12 mb-2">
                            <div className="card">
                                <img
                                    style={{ height: "250px", objectFit: "cover" }}
                                    src={service.imgUrl}
                                    className="card-img-top"
                                    alt="wildImage"
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{service.services}</h5>
                                    <p className="card-text">{service.discription}</p>
                                    <p className="card-text">BDT {service.price} only</p>
                                    <Link to={"/checkout"} className="btn btn-primary">
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
