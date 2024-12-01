import "./composition.css";
import profile from "../../Images/profile.png"


const Card = ({ title, children, customClass }) => {
  return (
    <div className={`card ${customClass}`}>
      {title && <h2 className="card-title">{title}</h2>}
      <div className="card-content">{children}</div>
    </div>
  );
};

const Composition = () => {
  return (
    <div className="main-container">
      <h1>State Composition</h1>
      <h4>
        Explanation: Composition in React refers to the practice of building
        complex components by combining simpler components. It is a core concept
        in React and allows you to create flexible and reusable components.
        Rather than using inheritance (which is less flexible), React encourages
        composition as a way to build components that can be combined and nested
        in a flexible and maintainable manner.
      </h4>
     <div className="composition-container">
     <Card title="User Profile" customClass="profile-card">
        <img
          src={profile}
          alt="User"
          className="profile-image"
        />
        <h3 className="profile-name">Manojkumar R</h3>
        <p className="profile-bio">1% better than yesterday !</p>
      </Card>

      <Card title="Product Details" customClass="product-card">
        <h3 className="product-name">Wireless Headphones</h3>
        <p className="product-price">$99.99</p>
        <button className=" buy-now-btn">Buy Now</button>
      </Card>

      <Card title="Notification" customClass="notification-card">
        <p className="notification-message">Your order has been shipped!</p>
        <p className="notification-timestamp">2 hours ago</p>
      </Card>
     </div>
    </div>
  );
};

export default Composition;
