import React from "react";
import './SwipeButtons.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

function SwipeButtons(){
    return(
        <div className= " swipeButtons">
            <IconButton className="SB_repeat">
                <ReplayIcon fontSize= "large"/>
            </IconButton>
            <IconButton className="SB_left">
                <CloseIcon fontSize= "large"/>
            </IconButton>
            <IconButton className="SB_star">
                <StarRateIcon fontSize= "large"/>
            </IconButton>            
            <IconButton className="SB_right">
                <FavoriteIcon fontSize= "large"/>
            </IconButton>            
            <IconButton className="SB_light">
                <FlashOnIcon fontSize= "large"/>
            </IconButton>
            
        </div>
    );
}

export default SwipeButtons;