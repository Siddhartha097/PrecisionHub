import './Card.css';
import React from 'react';


const Card = ({ image, content, title, align  }) => {
    return (
        <main className='card'>
            <img src={image} alt='img' />
            <div className='card_content' style={{ textAlign: align }}>
                <h3>{title}</h3>
                <p>
                    {content}
                </p>
            </div>
      </main>
    )
}

export default Card