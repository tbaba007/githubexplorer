import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";
import accordionStyle from "./Accordion.module.scss";
import { AccordionProps } from "./types";

const Accordion = ({ isOpen, children, title,id,onOpen }:Partial<AccordionProps>) => {
  const [isAccrodionOpen, setIsAccrodionOpen] = useState(isOpen);

  const handleOpening = (id:bigint) => {
    onOpen?.(id);
    setIsAccrodionOpen((prev) => !prev);
  };

  return (
    <div className={accordionStyle.accordion}>
      <div onClick={()=>handleOpening(id!!)} >
        <div className={accordionStyle.accordionBody}>
          <h6 className={accordionStyle.title}>{title}</h6>
            <section>
            {!isAccrodionOpen ? (
            <FontAwesomeIcon icon={faChevronUp} color="#000" size="1x" />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} color="#000" size="1x" />
          )}
            </section>
         
        </div>
      </div>

      
    </div>
  );
};

export default Accordion;
