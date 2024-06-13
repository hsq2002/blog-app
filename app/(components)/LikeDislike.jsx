
"use client"
import React, {useState, useEffect} from 'react'
import { AiFillLike, AiFillDislike } from "react-icons/ai"

const LikeDislike = () => {
    const [likes, setLikes] = useState(0)
    const [dislikes, setDislikes] = useState(0)

    const handleLike = () => {
        setLikes(prevLikes => prevLikes + 1);
    }

    const handleDislike = () => {
        setDislikes(prevDislikes => prevDislikes + 1);
    }

    return (
        <div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <AiFillLike color="blue" size="50" onClick={handleLike} style={{ cursor: 'pointer' }} />
                <span style={{ marginLeft: '10px', fontSize: '20px' }}>{likes}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <AiFillDislike color="red" size="50" onClick={handleDislike} style={{ cursor: 'pointer' }} />
                <span style={{ marginLeft: '10px', fontSize: '20px' }}>{dislikes}</span>
            </div>
        </div>
    );
};

export default LikeDislike
