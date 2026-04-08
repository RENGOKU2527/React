import Card from "./Card";
import React, { useState } from 'react';

const Cards = (props) => {
    console.log(props.category);
    console.log(props.courses);

    let category = props.category;
    const [likedCourses, setLikedCourses] = useState([]);

    function getCourses() {
        if (!props.courses) return [];

        const toAllCourses = () => {
            let allCourses = [];
            Object.values(props.courses || {}).forEach((array) => {
                (array || []).forEach((courseData) => {
                    allCourses.push(courseData);
                });
            });
            return allCourses;
        };

        if (category === "All") {
            return toAllCourses();
        }

        if (category === "Liked") {
            const allCourses = toAllCourses();
            if (!likedCourses || likedCourses.length === 0) return [];
            return allCourses.filter((course) => likedCourses.includes(course.id));
        }

        return props.courses[category] || [];
    }

    return (
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {getCourses().map((course) => (
                <Card 
                    course={course} 
                    key={course.id} // ✅ Use course.id, not props.courses.id
                    likedCourses={likedCourses} 
                    setLikedCourses={setLikedCourses} 
                />
            ))}
        </div>
    );
};

export default Cards;
