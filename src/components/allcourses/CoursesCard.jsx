import React from "react";
import { coursesCard } from "../../dummydata";
import "./courses.css";

const CoursesCard = () => {
  return (
    <>
      <section className='coursesCard'>
        <div className='container grid2'>
          {coursesCard.map((val) => (
            <div className='items' key={val.id}> {/* Added key prop for each item */}
              <div className='content flex'>
                <div className='left'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>
                </div>
                <div className='text'>
                  <h1>{val.coursesName}</h1>
                  <div className='rate'>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <label htmlFor=''> (5.0)</label>
                  </div>
                  <div className='details'>
                    {val.courTeacher.map((details, index) => ( // Added index as a key
                      <div className='box' key={index}>
                        <div className='dimg'>
                          <img src={details.dcover} alt='' />
                        </div>
                        <div className='para'>
                          <h4>{details.name}</h4>
                        </div>
                        <span>{details.totalTime}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Removed price section */}
              {/* <div className='price'>
                <h3>
                  {val.priceAll} / {val.pricePer}
                </h3>
              </div> */}
              <button className='outline-btn'>ENROLL NOW!</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
