import React from 'react';

const InstagramCollage = () => {
  return (
    <div style={{height: '100vh', overflow: 'scroll', padding: '20px 0'}}>
      <iframe
        title="aijan instagram"
        style={{border: 0, width: '100%', height: '100%'}}
        src="https://embedsocial.com/api/pro_hashtag/6d63a15b30a915bb6a033932faefb92616c4688f">
      </iframe>
    </div>
  );
};

export default InstagramCollage;