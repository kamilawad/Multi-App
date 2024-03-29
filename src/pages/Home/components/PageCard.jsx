import { useNavigate } from "react-router-dom";
import "./pageCard.css";

const PageCard = ({ title, description, link }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate(link);
    };
  
    return (
      <div className="page-card" onClick={handleClick}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Go to {title}</p>
      </div>
    );
}

export default PageCard;