import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import { storage } from './firebase-config';
import { firestore } from './firebase-config';
import { db } from './firebase-config';
import { collection, doc, getDocs } from 'firebase/firestore';
import { Swiper, SwiperSlide } from 'swiper/react';



//FETCHING DATA AND IMAGES FROM FIRESTORE//
async function fetchDataFromFirestore() {
    const querySnapshot = await getDocs(collection(db, "residences"));

    const data = [];
    querySnapshot.forEach((doc) => {
        const docData = doc.data();
        const imageUrl = docData.mainPictureUrl; 

        data.push({
            id: doc.id,
            ...docData,
            imageUrl: imageUrl,
        });
    });

    return data;
}
//FETCHING DATA AND IMAGES FROM FIRESTORE//


function App() {

  //FETCHING DATA AND IMAGES FROM FIRESTORE inside function//  
    
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const data = await fetchDataFromFirestore();
            setUserData(data);
        }
        fetchData();
    }, []);

    //FETCHING DATA AND IMAGES FROM FIRESTORE inside function//
    

  return (

    <div>
      <br></br>
      {/* {userData.map((user) => (
        <div key={user.id}>
            <p>Name: {user.residenceName}</p>
            <img src={user.imageUrl} alt="Residence Image" />
        </div>
      ))} */}
      {/** SEARCH BAR*/}
      <div className="contoir">
        <input type="text" name="text" className="input" placeholder="Search"></input>
        <button className="search__btn">
        <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {/** SEARCH BAR*/}
        <br></br>
        <div>
        <h1 className='head'> TOWN</h1>
        </div>
      {/**CONTENT CARDS*/}

      <div className='Wrap'>
        {/**Card 1 */}
        
        {userData.map((user) => (
        <div className='onit' key={user.id}>
            <div className="main">
                <div className="card">
                    <div className="fl">
                        <div className="fullscreen">
                        </div>
                    </div>
                    <div className="card_content">
                        <view className='imagerc'>
                            <img
                                style={{width: '100%', height:  '100%' }}
                                src={user.imageUrl}
                            />
                        </view>
                        <label className="switch_738">
                        </label>
                    </div>
                    <div className="card_back"></div>
                </div>
                <div className="data">
                    <div className="img">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 80 80">
                    <g stroke-width="2.00" fill="none" stroke-linecap="butt">
                    <path stroke="#59afb1" d="M 14.06 0.00
                        Q 13.33 4.09 13.93 7.52
                        A 1.04 1.02 -78.7 0 0 14.37 8.19
                        L 32.87 20.19"></path>
                    <path stroke="#4fa6a8" d="M 32.87 20.19
                        L 42.25 26.79"></path>
                    <path stroke="#69cbc0" d="M 42.25 26.79
                        C 41.40 28.26 24.14 34.92 21.32 36.20"></path>
                    <path stroke="#6fcdbb" d="M 21.32 36.20
                        Q 15.81 38.21 11.00 41.21"></path>
                    <path stroke="#5ec8ab" d="M 11.00 41.21
                        L 9.75 40.96"></path>
                    <path stroke="#5cae9e" d="M 9.75 40.96
                        Q 5.99 37.71 1.71 35.19
                        A 1.00 1.00 0.0 0 0 0.22 35.85
                        L 0.00 36.94"></path>
                    <path stroke="#3190a6" d="M 79.95 6.12
                        L 62.46 11.32"></path>
                    <path stroke="#3a96a3" d="M 62.46 11.32
                        Q 47.42 14.67 32.87 20.19"></path>
                    <path stroke="#22a3be" d="M 80.00 11.06
                        L 64.50 17.46"></path>
                    <path stroke="#28879d" d="M 64.50 17.46
                        L 62.46 11.32"></path>
                    <path stroke="#2ba9bb" d="M 64.50 17.46
                        L 43.00 26.96"></path>
                    <path stroke="#4ab2b2" d="M 43.00 26.96
                        L 42.25 26.79"></path>
                    <path stroke="#45ced3" d="M 80.00 52.31
                        Q 71.64 45.91 62.46 40.67"></path>
                    <path stroke="#13636e" d="M 62.46 40.67
                        Q 62.43 36.88 58.50 36.79"></path>
                    <path stroke="#45ced3" d="M 58.50 36.79
                        Q 50.07 32.95 43.00 26.96"></path>
                    <path stroke="#326b65" d="M 58.50 36.79
                        Q 55.85 40.04 56.86 44.07
                        C 57.53 46.71 60.02 47.68 61.77 45.19
                        Q 61.91 44.99 61.94 44.74
                        L 62.46 40.67"></path>
                    <path stroke="#59d4b5" d="M 40.81 79.86
                        Q 46.22 74.94 52.34 70.94
                        A 1.00 1.00 0.0 0 0 52.39 69.30
                        Q 44.74 63.65 43.10 62.62
                        Q 34.11 56.98 32.50 55.79"></path>
                    <path stroke="#6ad8c5" d="M 32.50 55.79
                        C 36.74 55.42 30.64 48.79 29.79 47.81
                        C 27.54 45.21 26.34 42.09 24.05 39.44
                        Q 22.66 37.82 21.32 36.20"></path>
                    <path stroke="#326b65" d="M 48.75 39.07
                        A 2.30 2.30 0.0 0 0 46.45 36.77
                        L 46.05 36.77
                        A 2.30 2.30 0.0 0 0 43.75 39.07
                        L 43.75 44.21
                        A 2.30 2.30 0.0 0 0 46.05 46.51
                        L 46.45 46.51
                        A 2.30 2.30 0.0 0 0 48.75 44.21
                        L 48.75 39.07"></path>
                    <path stroke="#326b65" d="M 58.63 54.41
                        C 54.90 57.18 50.72 56.87 46.91 54.39
                        A 1.00 0.99 51.9 0 0 46.04 54.28
                        C 42.37 55.52 43.88 58.13 46.28 59.41
                        Q 53.38 63.20 60.15 58.94
                        C 62.54 57.43 62.47 54.80 59.41 54.23
                        A 1.00 1.00 0.0 0 0 58.63 54.41"></path>
                    <path stroke="#4bb793" d="M 9.75 40.96
                        Q 5.15 43.50 0.05 44.46"></path>
                    <path stroke="#5fd6b0" d="M 32.50 55.79
                        L 11.00 41.21"></path>
                    <path stroke="#48d08e" d="M 11.19 80.00
                        Q 12.51 79.61 11.57 78.67
                        Q 5.99 73.11 1.70 65.70
                        C 1.28 64.97 0.74 64.76 0.00 65.19"></path>
                    </g>
                    <path fill="#6ebfb6" d="M 0.00 0.00
                        L 14.06 0.00
                        Q 13.33 4.09 13.93 7.52
                        A 1.04 1.02 -78.7 0 0 14.37 8.19
                        L 32.87 20.19
                        L 42.25 26.79
                        C 41.40 28.26 24.14 34.92 21.32 36.20
                        Q 15.81 38.21 11.00 41.21
                        L 9.75 40.96
                        Q 5.99 37.71 1.71 35.19
                        A 1.00 1.00 0.0 0 0 0.22 35.85
                        L 0.00 36.94
                        L 0.00 0.00
                        Z"></path>
                    <path fill="#439eac" d="M 14.06 0.00
                        L 80.00 0.00
                        L 79.95 6.12
                        L 62.46 11.32
                        Q 47.42 14.67 32.87 20.19
                        L 14.37 8.19
                        A 1.04 1.02 -78.7 0 1 13.93 7.52
                        Q 13.33 4.09 14.06 0.00
                        Z"></path>
                    <path fill="#1f81a0" d="M 79.95 6.12
                        L 80.00 11.06
                        L 64.50 17.46
                        L 62.46 11.32
                        L 79.95 6.12
                        Z"></path>
                    <path fill="#308d99" d="M 62.46 11.32
                        L 64.50 17.46
                        L 43.00 26.96
                        L 42.25 26.79
                        L 32.87 20.19
                        Q 47.42 14.67 62.46 11.32
                        Z"></path>
                    <path fill="#25c5dc" d="M 80.00 11.06
                        L 80.00 52.31
                        Q 71.64 45.91 62.46 40.67
                        Q 62.43 36.88 58.50 36.79
                        Q 50.07 32.95 43.00 26.96
                        L 64.50 17.46
                        L 80.00 11.06
                        Z"></path>
                    <path fill="#64d6ca" d="M 42.25 26.79
                        L 43.00 26.96
                        Q 50.07 32.95 58.50 36.79
                        Q 55.85 40.04 56.86 44.07
                        C 57.53 46.71 60.02 47.68 61.77 45.19
                        Q 61.91 44.99 61.94 44.74
                        L 62.46 40.67
                        Q 71.64 45.91 80.00 52.31
                        L 80.00 80.00
                        L 40.81 79.86
                        Q 46.22 74.94 52.34 70.94
                        A 1.00 1.00 0.0 0 0 52.39 69.30
                        Q 44.74 63.65 43.10 62.62
                        Q 34.11 56.98 32.50 55.79
                        C 36.74 55.42 30.64 48.79 29.79 47.81
                        C 27.54 45.21 26.34 42.09 24.05 39.44
                        Q 22.66 37.82 21.32 36.20
                        C 24.14 34.92 41.40 28.26 42.25 26.79
                        Z
                        M 48.75 39.07
                        A 2.30 2.30 0.0 0 0 46.45 36.77
                        L 46.05 36.77
                        A 2.30 2.30 0.0 0 0 43.75 39.07
                        L 43.75 44.21
                        A 2.30 2.30 0.0 0 0 46.05 46.51
                        L 46.45 46.51
                        A 2.30 2.30 0.0 0 0 48.75 44.21
                        L 48.75 39.07
                        Z
                        M 58.63 54.41
                        C 54.90 57.18 50.72 56.87 46.91 54.39
                        A 1.00 0.99 51.9 0 0 46.04 54.28
                        C 42.37 55.52 43.88 58.13 46.28 59.41
                        Q 53.38 63.20 60.15 58.94
                        C 62.54 57.43 62.47 54.80 59.41 54.23
                        A 1.00 1.00 0.0 0 0 58.63 54.41
                        Z"></path>
                    <path fill="#499c85" d="M 9.75 40.96
                        Q 5.15 43.50 0.05 44.46
                        L 0.00 36.94
                        L 0.22 35.85
                        A 1.00 1.00 0.0 0 1 1.71 35.19
                        Q 5.99 37.71 9.75 40.96
                        Z"></path>
                    <path fill="#70dac0" d="M 21.32 36.20
                        Q 22.66 37.82 24.05 39.44
                        C 26.34 42.09 27.54 45.21 29.79 47.81
                        C 30.64 48.79 36.74 55.42 32.50 55.79
                        L 11.00 41.21
                        Q 15.81 38.21 21.32 36.20
                        Z"></path>
                    <rect fill="#000000" x="43.75" y="36.77" width="5.00" height="9.74" rx="2.30"></rect>
                    <path fill="#000000" d="M 58.50 36.79
                        Q 62.43 36.88 62.46 40.67
                        L 61.94 44.74
                        Q 61.91 44.99 61.77 45.19
                        C 60.02 47.68 57.53 46.71 56.86 44.07
                        Q 55.85 40.04 58.50 36.79
                        Z"></path>
                    <path fill="#4dd1a0" d="M 9.75 40.96
                        L 11.00 41.21
                        L 32.50 55.79
                        Q 34.11 56.98 43.10 62.62
                        Q 44.74 63.65 52.39 69.30
                        A 1.00 1.00 0.0 0 1 52.34 70.94
                        Q 46.22 74.94 40.81 79.86
                        L 11.19 80.00
                        Q 12.51 79.61 11.57 78.67
                        Q 5.99 73.11 1.70 65.70
                        C 1.28 64.97 0.74 64.76 0.00 65.19
                        L 0.05 44.46
                        Q 5.15 43.50 9.75 40.96
                        Z"></path>
                    <path fill="#000000" d="M 46.91 54.39
                        C 50.72 56.87 54.90 57.18 58.63 54.41
                        A 1.00 1.00 0.0 0 1 59.41 54.23
                        C 62.47 54.80 62.54 57.43 60.15 58.94
                        Q 53.38 63.20 46.28 59.41
                        C 43.88 58.13 42.37 55.52 46.04 54.28
                        A 1.00 0.99 51.9 0 1 46.91 54.39
                        Z"></path>
                    <path fill="#43ce7c" d="M 11.19 80.00
                        L 0.00 80.00
                        L 0.00 65.19
                        C 0.74 64.76 1.28 64.97 1.70 65.70
                        Q 5.99 73.11 11.57 78.67
                        Q 12.51 79.61 11.19 80.00
                        Z"></path>
                    </svg>
                    </div>
                    <div className="text">
                    <div className="text_m">{user.residenceName}</div>
                    <div className="text_s">{user.residenceDescription}</div>
                    </div>
                </div>
                <div className="btns">
                    <div className="likes">
                    <svg className="likes_svg" viewBox="-2 0 105 92">
                    <path d="M85.24 2.67C72.29-3.08 55.75 2.67 50 14.9 44.25 2 27-3.8 14.76 2.67 1.1 9.14-5.37 25 5.42 44.38 13.33 58 27 68.11 
                    50 86.81 73.73 68.11 87.39 58 94.58 44.38c10.79-18.7 4.32-35.24-9.34-41.71Z"></path></svg><span class="likes_text">..</span>
                    </div>
                    {/* <div className="comments">
                    <svg className="comments_svg" viewBox="-405.9 238 56.3 54.8" title="Comment"><path d="M-391 291.4c0 1.5 1.2 1.7 1.9 1.2 1.8-1.6 15.9-14.6 15.9-14.6h19.3c3.8 0 4.4-.8 4.4-4.5v-31.1c0-3.7-.8-4.5-4.4-4.5h-47.4c-3.6 0-4.4.9-4.4 4.5v31.1c0 3.7.7 4.4 4.4 4.4h10.4v13.5z"></path></svg><span class="comments_text">12</span>
                    </div> */}
                    <div className="views">
                    <svg className="views_svg" viewBox="0 0 30.5 16.5" title="Views">
                    <path d="M15.3 0C8.9 0 3.3 3.3 0 8.3c3.3 5 8.9 8.3 15.3 8.3s12-3.3 15.3-8.3C27.3 3.3 21.7 0 15.3 0zm0 14.5c-3.4 0-6.2-2.8-6.2-6.2C9
                     4.8 11.8 2 15.3 2c3.4 0 6.2 2.8 6.2 6.2 0 3.5-2.8 6.3-6.2 6.3z"></path></svg><span class="views_text">..</span>
                    </div>
                </div>
            </div>
        </div> 
      ))}
    
    </div>
    {/**Card 2 */}

    {/**Card 3 */}


    <br></br>
        <div>
            <h1 className='head'> BBA</h1>
        </div>

        {/**Card 1 */}

    {/**Card 2 */}

    {/**Card 3 */}
 

    <br></br>
        <div>
        <h1 className='head'>ISIPHINGO</h1>
        </div>

        <div className='Wrap'>
        
        </div>
    <br></br>


      {/**CONTENT CARD*/}
        
    </div>
    
    
  );
}

export default App;
