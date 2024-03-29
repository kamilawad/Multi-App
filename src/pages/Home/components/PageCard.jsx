import { useNavigate } from "react-router-dom";
import "./pageCard.css";

const PageCard = ({ title, description, link }) => {
    const navigate = useNavigate();
    
    const handleClick = () => {
      navigate(link);
    };
  
    return (
      <div className="page-card flex column center" onClick={handleClick}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    );
}

export default PageCard;