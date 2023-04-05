import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import SideCart from '../SideCart/SideCart';
import './Home.css'

const Home = ({ handleWatchTime, watchTime }) => {
    const [course, setCourse] = useState([]);
    const [cart, setCart] = useState([])


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])

    
    const handleAddToSpent = (course) => {
        const newCourse = [...cart, course]
        setCart(newCourse)
    }


    return (
        <div className='main-container'>
            <div className="home-container">
                {
                    course.map(course => <Card
                        key={course.id}
                        course={course}
                        handleAddToSpent={handleAddToSpent}
                        handleWatchTime={handleWatchTime}
                    ></Card>)
                }
            </div>

            <div className="cartContainer mt-10">
                <div className="cartContainer mt-10">
                    <SideCart cart={cart} watchTime={watchTime}></SideCart>
                </div>

            </div>







            <div className='container'>
                    <h2 className='font-bold text-2xl text-center mt-8 '>Questions about react</h2>
                    <div className="card">
                        <div className="card-body ">
                            <h1 className='font-bold text-xl'>01. Different between props vs state?</h1>
                            <p>The word "properties" is abbreviated as "props," and they are used to transfer data from a parent component to a child component. The child component cannot change them since they are read-only. Similar to HTML attributes, props are defined by the parent component and supplied as an attribute to the child component. <br></br>
                                State, on the other hand, is used to manage the internal state of a component. Unlike props, state can be modified by the component itself. State is initialized and updated using the setState method, which triggers a re-render of the component. State is used to store information that can change over time, such as user input or the result of an API call.</p>
                        </div>
                    </div>

                    <div className="card w-45">
                        <div className="card-body ">
                            <h1 className='font-bold text-xl'>02. How does useState works?</h1>
                            <p>We start by importing the useState hook from the React library, and then we declare a state variable and the initial value calling the "useState". The current state and a function to update it are both values in an array that is returned. Every time the setter function is called, the Hook takes an initial state value as an argument and returns an updated state value.</p>
                        </div>
                    </div>
                
                
    
                    <div className="card w-45">
                        <div className="card-body ">
                            <h1 className='font-bold text-xl'>03. Explain purpose of useEffect other then fetching data.</h1>
                            <p>UseEffect is a flexible hook that can be applied to a variety of tasks in addition to data retrieval. It gives functional components a mechanism to handle side effects and can be used to change the document title, add event listeners, start animations, and more.</p>
                        </div>
                    </div>
              
              
                    <div className="card w-45">
                        <div className="card-body ">
                            <h1 className='font-bold text-xl'>04. How does react works?</h1>
                            <p>React is a JavaScript library for building user interfaces.React uses a virtual DOM, state management, lifecycle methods, and a unidirectional data flow to provide an efficient and flexible way to build user interfaces. 
                            React components: React components are the building blocks of a React application. They are reusable pieces of code that describe what should be displayed on the screen. Components can be written as classes or functions.

JSX: React uses JSX, a syntax extension to JavaScript, to write components in a declarative and intuitive way. JSX allows you to mix HTML-like syntax with JavaScript expressions.

Virtual DOM: React uses a virtual DOM, an in-memory representation of the real DOM, to optimize updates and avoid unnecessary re-renders. When a component's state or props change, React updates the virtual DOM and compares it with the previous version. Then, React calculates the minimum number of changes needed to update the real DOM.

                            </p>
                        </div>
                    </div>
             
            </div>
        </div>
    );
};

export default Home;