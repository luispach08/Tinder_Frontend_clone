import React, { Component } from 'react';
import './Header.css';
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { IconButton } from '@mui/material';
import { Link, useHistory } from "react-router-dom"

function Header({backbutton}) {
    const history = useHistory();
        return (
            <div className="header">
                {backbutton ? (
                    <IconButton onClick={() => history.replace(backbutton)}>
                        <ArrowBackIosIcon className="header__icon" fontSize="large"/>
                    </IconButton>
                ):(
                    <IconButton>
                        <PersonIcon className="header__icon" fontSize="large"/>
                    </IconButton>
                )}
                <Link to="/">
                    <img className="tinderLogo"
                    src="https://1000logos.net/wp-content/uploads/2018/07/Tinder-icon.png" alt="tinder logo"/>
                </Link>
                <Link to="/chat">
                    <IconButton>
                        <ForumIcon className="header__icon" fontSize="large"/>
                    </IconButton>
                </Link>
            </div>
        );
}

export default Header;