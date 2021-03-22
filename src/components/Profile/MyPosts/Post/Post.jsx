import React from 'react';
import s from './Post.module.css'
const Post = (props) => {
    return  <div className={s.item}>
    <img src="https://xochu-vse-znat.ru/wp-content/uploads/2017/11/vbyb.jpg" alt="#"/>
      { props.message }
      <div>
        <span>Like</span> { props.likescount }
      </div>
    </div>       
}




export default Post; 