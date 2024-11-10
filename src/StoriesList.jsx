import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StoriesList.css'; // Ensure this file exists
import axios from 'axios';


const Home = () => {
    const [stories, setStories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axios.get('https://mxpertztestapi.onrender.com/api/sciencefiction');
                console.log(response.data);
    
                setStories(response.data);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };
    
        fetchStories();
        console.log(stories);
    }, []);
    
    const viewStory = (id) => {
        navigate(`/story/${id}`);
    };
    
    return (
        // <div className="story-container">
        //     {stories.map((story) => (
        //         <div className="card" key={story._id}>
        //             <h3>{story.Title}</h3>
        //             {story.imageUrl && <img src={`https://ik.imagekit.io/dev24/I${story.Image}`} alt={story.title} className="story-image" />}
        //             <p>{story.description}</p>
        //             <button onClick={() => viewStory(story._id)}>View More</button>
        //         </div>
    
        <div className="story-container">
            {stories.map((story) => (
                <div className="card" key={story._id}>
                    <h3>{story.Title}</h3>
                    <img src={`https://ik.imagekit.io/dev24/${story.Image[0,1]}`} className="story-image"  />

                    {/* console.log(`Image URL: https://ik.imagekit.io/dev24/${story.Image}`); */}
                    <p>{story.Description}</p>
                    <p>{story.Status}</p>
                    <p>{story.Paragraph}</p>
                    <button onClick={() => viewStory(story._id)}>View More</button>
                </div>
            ))}
        </div>
    );};
export default Home;

