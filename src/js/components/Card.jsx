import React from "react";

const Card = () => {
    return (
        <div className="card">
            <img src="https://picsum.photos/seed/picsum/500/325" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <p className="card-text text-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};
export default Card;