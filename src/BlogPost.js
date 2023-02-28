import React from 'react';
import './index.css'
const BlogPost = () => {

    const BlogInfo = [
        {
            title: "Title Heading",
            titledesc: "Title Description",
            date: "February 20, 2023",
            text: "Lorem ipsum dolor sit amet, consectetur adipis",
            index: 1,
            img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc"
        },
        {
            title: "Title Heading",
            titledesc: "Title Description",
            date: "February 21, 2023",
            text: "Lorem ipsum dolor sit amet, consectetur adipis",
            index: 2,
            img: "http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcSJKyrj1M_E4zNvs1V3mfNkv13MajxmmotwGgNlb639NJVMdPgVDHv29wgH_SnTO_Ep_SPNM6vm_yslNWc"
        }
    ]
    return(
        <>
       
      
        <div className='row'>
        {BlogInfo.map((elem,index) => (
            <div className="flex-container">
                <div className='leftcolumn'>
                    <h2>{elem.title}</h2>
                    <h5>{elem.titledesc} <span>{elem.date}</span></h5>
                    <div className='bloggerImg'>
                        <img src={elem.img} alt="" />
    
                <div>
                    <p>{elem.text}</p>
                </div>
                </div>
                
            </div>
            </div>
        ))}
            <div className='rightcolumn'>
                <div className='card'>
                    <h2>About Me</h2>
                    <div className='ownImg'>
                        <img src="https://scontent-los2-1.xx.fbcdn.net/v/t1.6435-9/178631375_1130459130785111_1346819165472185105_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYrPMOTBFpxx81tsGw9Vowdwb9q0jbqKl3Bv2rSNuoqYfjKE0jHd6k_IlG9Shtc03lRu-nB_J9gOF-J5mRdh-B&_nc_ohc=7uGMEjt-C7YAX83WWYN&_nc_ht=scontent-los2-1.xx&oh=00_AfCc2evJC2Vu3iXkw_PgyiV8VXsLxh8W3KLtQgqPZo_1Sg&oe=641B1349" alt="" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iusto cum libero nobis ad nemo labore!</p>
                </div>
                <div className='rcard'>
                    <h3>Popular Post</h3>
                    <div className='ppImg'>
                        <img src="https://netstorage-legit.akamaized.net/images/e2f8c7724c95821b.jpg?impolicy=cropped-image&imwidth=720" alt="" />
                        <img src="https://netstorage-legit.akamaized.net/images/e2f8c7724c95821b.jpg?impolicy=cropped-image&imwidth=720" alt="" />
                        <img src="https://netstorage-legit.akamaized.net/images/e2f8c7724c95821b.jpg?impolicy=cropped-image&imwidth=720" alt="" />
                    </div>
                    <h3>Follow Me </h3>
                    <div className='social-links'>
                        <a href="#facebook"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                        <a href="#instagram"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href="#twitter"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    </div>
                </div>
                
                
            </div>
            
        </div>
        <div className='Footer'>
                    <footer>
                        <small>&copy; Copyright 2023 Milblock.All Rights Reserved</small>
                        
                    </footer>
                </div>
        </>
    );
};

export default BlogPost;