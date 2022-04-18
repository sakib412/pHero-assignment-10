import React from "react";

const Blogs = () => {
    return (
        <div>
            <h2 className="text-primary text-center my-3">Blog</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            Q1 :Difference between `authorization` and `authentication`
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            Authentication is a process for varifing someome <br></br>
                            Where as Authorization is a process for varifing someone`s access
                            to cirtain file , link ,data or other permition.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            Q2 :Why are you using `firebase`? What other options do you have
                            to implement authentication?
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            {" "}
                            <p>
                                {" "}
                                In this course firebaese is used for Authentication <br></br>
                                There are some other option for authentication :<br></br>
                            </p>
                            <ol>
                                <li>Passport JS</li>
                                <li>AuthO</li>
                                <li>Permit</li>
                                <li>Grant</li>
                                <li>Feather </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            Q3 :What other services does `firebase` provide other than
                            authentication
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body">
                            <p>
                                Firebase also provide Realtime Databse ,Hostiong , Storage .
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
