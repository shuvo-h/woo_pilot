import React from 'react';

const Accordion: React.FC = () => (
    <div className="accordion-section">
        <div className="accordion-item">
                        <h3 className="accordion-title cursor-pointer">
                        Accordion Item 1
                    </h3>
<div className="accordion-content hidden">
                        Content for the first accordion item.
                    </div>
                    </div>
<div className="accordion-item">
                        <h3 className="accordion-title cursor-pointer">
                        Accordion Item 2
                    </h3>
<div className="accordion-content hidden">
                        Content for the second accordion item.
                    </div>
                    </div>
    </div>
);

export default Accordion;