import React from "react";
import "./ProfileMockup.css"

const profile =
{
    name: "Rebecca Anderson",
    subtitle: "Toyota Corolla (Dubai, ET-806-KJA)",
    details:
    [
        { title: "50", subtitle: "Deliveries" },
        { title: "5h", subtitle: "Delivery Time" },
        { title: "5.0", subtitle: "Konveyo Rating" },
    ]
}

const StarRating = props => (
    <div className="star-rating">
        {Array(props.count || 5).fill("").map((_, i) => <i key={i} className="fas fa-star"></i>)}
    </div>
);

export default _props =>
{
    return (
    <main className="main">
        <section className="profile-wrapper">
            <div className="background-wrapper">
                <div className="background"></div>
            </div>
            <section className="inner-wrapper">
                <div className="top-flex">
                    <i className="fas fa-bars"></i>
                    <span>Konveyo Profile</span>
                    <i className="fas fa-envelope"></i>
                </div>
                <div>
                    <i className="back-arrow fas fa-arrow-left"></i>
                    <img height="150px" width="140px" className="image" src="/ceo.jpeg" alt="profile" />
                </div>
                <div className="name-plate">
                    <span>
                        <strong className="name">{profile.name}</strong>
                        <i className="fas fa-check-circle"></i>
                    </span>
                    <StarRating />
                </div>
                <div className="details-section">
                    <span className="subtitle">
                        <i className="fas fa-car"></i>
                        <span>{profile.subtitle}</span>
                    </span>
                </div>
                <div className="details-flex">
                    {
                        profile.details.map((detail, i) =>
                        <div key={i} className="outline">
                            <strong className="title">{detail.title}</strong>
                            <span className="subtitle">{detail.subtitle}</span>
                        </div>)
                    }
                </div>
                <button className="button">Edit Profile</button>
                <span className="report"><strong>Report User</strong></span>
            </section>
        </section>
    </main>)
}