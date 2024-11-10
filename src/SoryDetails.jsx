import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './StoryDetail.css'; // Ensure this file exists
import axios from 'axios';

const StoryDetail = () => {
    const { id } = useParams();
    const [story, setStory] = useState(null);
    const [activeTab, setActiveTab] = useState('Description');

    useEffect(() => {
        const fetchStory = async () => {
            try {
                const response = await axios.post(`https://mxpertztestapi.onrender.com/api/sciencefiction/${id}`);
                console.log(response);
                // const data = await response.json();
                setStory(response.data);
            } catch (error) {
                console.error('Error fetching story:', error);
            }
        };

        fetchStory();
    }, [id]);

    if (!story) return <div>Loading...</div>;

    return (
        <div>
            <div className="tabs">
                <button className="tab" onClick={() => setActiveTab('Title')}>Title</button>
                <button className="tab" onClick={() => setActiveTab('Description')}>Description</button>
                <button className="tab" onClick={() => setActiveTab('Details')}>Details</button>
                <button className="tab" onClick={() => setActiveTab('Comments')}>Comments</button>

            </div>

            <div className="tab-content">
                {activeTab === 'Description' && (
                    <div>
                        <h2>{story.title}</h2>
                        <p>{story.description}</p>
                    </div>
                )}
                {activeTab === 'Details' && (
                    <div>
                        <h2>Details</h2>
                        <p>{story.details || 'No details available.'}</p>
                    </div>
                )}
                {activeTab === 'Comments' && (
                    <div>
                        <h2>Comments</h2>
                        <p>{story.comments || 'No comments available.'}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default StoryDetail;