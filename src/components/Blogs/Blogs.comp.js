import React from "react";

const Blogs = () => {
    return (
        <div>
            <h2 className="text-primary text-center my-3">Blogs</h2>
            <div>
                <h3>Q1 :Difference between `authorization` and `authentication`</h3>
                <p>
                    In the security sector, the terms authentication and authorization are used interchangeably. They may have a similar sound, but they are fundamentally distinct. Authentication is used to verify someone's identity, whereas authorisation is a method of granting someone permission to access a specific resource. These are the two most fundamental security words, and they must be properly understood. We'll look at what authentication and authorisation are and how they differ from one another in this topic.
                </p>
            </div>
            <div>
                <h3>Q2 :Why are you using `firebase`? What other options do you have
                    to implement authentication?</h3>
                <p>
                    In this course firebaese is used for Authentication <br></br>
                    There are some other option for authentication :<br></br>
                </p>
                <ol>
                    <li>Passport JS</li>
                    <li>Grant</li>
                    <li>AuthO</li>
                    <li>Feather </li>
                </ol>

            </div>
            <div>
                <h3>Q3 :What other services does `firebase` provide other than
                    authentication</h3>
                <p>
                    Firebase  provides
                    <ol>
                        <li>Realtime Databse </li>
                        <li>Cloud Firestore.</li>
                        <li>Cloud Functions.</li>
                        <li>Authentication.</li>
                        <li>Hosting</li>
                        <li>Cloud Storage.</li>
                        <li>Google Analytics.</li>
                        <li>Cloud Messaging.</li>
                    </ol>



                </p>
            </div>

        </div>
    );
};

export default Blogs;
