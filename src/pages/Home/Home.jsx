import React, { useState } from 'react';
import './Home.css';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import Spinner from '../../components/Spinner/Spinner';

const Home = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="home">
            <h1>Welcome to Work Hub</h1>
            <p>This is the home page of your React app.</p>

            {/* Button Component */}
            <Button label="Click Me" onClick={toggleModal} variant="primary" />
            <Button label="Secondary Button" onClick={() => alert('Secondary Button Clicked')} variant="secondary" />

            {/* Card Component */}
            <Card title="Card Title" description="This is a description for the card.">
                <p>Additional content inside the card.</p>
            </Card>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={toggleModal}>
                <h2>Modal Title</h2>
                <p>This is the content of the modal.</p>
                <Button label="Close Modal" onClick={toggleModal} variant="primary" />
            </Modal>

            {/* Spinner Component */}
            <div>
                <h3>Small Spinner</h3>
                <Spinner size="small" />

                <h3>Medium Spinner (Default)</h3>
                <Spinner />

                <h3>Large Spinner</h3>
                <Spinner size="large" />
            </div>
        </div>
    );
};

export default Home;