interface WorkflowCardProps {
  title: string;
  description: string;
  emoji: string;
  tags: string[];
}

const WorkflowCard = ({ title, description, emoji, tags }: WorkflowCardProps) => {
  const whatsappLink = "https://wa.me/8801763636997";
  
  return (
    <div className="workflow-card">
      <div className="workflow-header">
        <span className="workflow-emoji">{emoji}</span>
        <h3 className="workflow-title">{title}</h3>
      </div>
      <p className="workflow-description">{description}</p>
      <div className="workflow-tags">
        {tags.map((tag, index) => (
          <span key={index} className="workflow-tag">{tag}</span>
        ))}
      </div>
      <div className="workflow-pricing">
        <div className="pricing-option">
          <span className="price-label">Without API</span>
          <span className="price-value">$50</span>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pricing-button">
            Order
          </a>
        </div>
        <div className="pricing-option">
          <span className="price-label">With API</span>
          <span className="price-value">Contact</span>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="pricing-button">
            Order
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkflowCard;
