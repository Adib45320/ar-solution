interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  price?: string;
  onOrder?: () => void;
}

const ServiceCard = ({ title, description, icon, features, price, onOrder }: ServiceCardProps) => {
  return (
    <div className="service-card">
      {icon && <div className="service-icon">{icon}</div>}
      <h3>{title}</h3>
      <p className="service-description">{description}</p>
      {features && features.length > 0 && (
        <ul className="service-features">
          {features.map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
      )}
      {price && <div className="service-price">{price}</div>}
      {onOrder && (
        <button onClick={onOrder} className="order-button">
          Order Now
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
