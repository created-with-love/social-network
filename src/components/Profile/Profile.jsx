import React from 'react';
import './Profile.scss';

export default function Profile() {
  return (
    <div className="content">
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          alt="content-img"
          className="content-img"
        />
      </div>
      <div></div>
      <div>
        <img
          src="https://dyl80ryjxr1ke.cloudfront.net/external_assets/hero_examples/hair_beach_v1785392215/original.jpeg"
          alt="111"
          width="200"
        />
        Profile description
      </div>
      <div>
        My posts
        <div>New post</div>
        <div className="posts">
          <div className="item active">post 1</div>
          <div className="item">post 2</div>
        </div>
      </div>
    </div>
  );
}
