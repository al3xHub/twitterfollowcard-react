import React from 'react';
import { useState } from 'react';

function TwitterFollowCard({ formatUserName ,userName, name}) {

    const [isFollowing, setIsFollowing] = useState(false);
    const text = isFollowing ?  'Following' : 'Follow';
    const buttonClassName = isFollowing 
    ? 'tw-followCard-Button is-following'
    : 'tw-followCard-Button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

  return (
    <>
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img 
          className='tw-followCard-img'
          alt='avatar image' 
          src={`https://unavatar.io/dribbble/${userName}`}></img>
          <div className='tw-followCard-info'>
            <strong>{name}</strong>
            <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button 
          className={buttonClassName}
          onClick={handleClick}>{text}</button>
        </aside>
      </article> 
    </>
  )
}

export default TwitterFollowCard
