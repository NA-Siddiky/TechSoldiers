import React from 'react';
import './Features.css'
import images from '../../../images/Banner.jpg'
import images2 from '../../../images/image2.png'

const Features = () => {
    return (
        <div class="main-features">
            <div className="blog-card">
                <input type="radio" name="select" id="tap-1" checked />
                <input type="radio" name="select" id="tap-2" />
                <input type="radio" name="select" id="tap-3" />
                <input type="checkbox" id="imgTap" />
                <div class="sliders">
                    <label for="tap-1" class="tap tap-1"></label>
                    <label for="tap-2" class="tap tap-2"></label>
                </div>
                <div class="inner-part">
                    <label for="imgTap" class="img">
                        <img src={images} alt="" />
                    </label>
                    <div class="content content-1">
                        <span>26 December 2017</span>
                        <div class="title">
                            Lorem Ipsum Dolor</div>
                        <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo animi atque aliquid pariatur voluptatem numquam, quisquam. Neque est voluptates doloribus!</div>
                        <button>Read more</button>
                    </div>
                </div>
                <div class="inner-part">
                    <label for="imgTap" class="img">
                        <img src={images2} alt="" />
                    </label>
                    <div class="content content-2">
                        <span>26 December 2018</span>
                        <div class="title">
                            Lorem Ipsum Dolor</div>
                        <div class="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum eos ut consectetur numquam ullam fuga animi laudantium nobis rem molestias.</div>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;