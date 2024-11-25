import React from 'react';
import { useState, useEffect } from 'react';
import apiFunctions from '../firebase/api';


function useLoadBlog (search) {
    const [isLoaded, setIsLoaded] = useState();
    const [blogs, setBlogs] = useState([]);
    

    useEffect(() => {
        setIsLoaded(false);
        apiFunctions.getBlogs(search).then(
            (data) => {
                setIsLoaded(true);
                const blogArr = [];
                const initArr = data.val();
                for (const obj of initArr) {
                    if (obj) {
                        blogArr.push(obj);
                    }
                }
                //flip blogs order;
                setBlogs(blogArr.reverse());
            }
        ).catch((error) => {
            console.log(error);
        });

    },[]);


    return {isLoaded: isLoaded, blogs: blogs};
}

export {useLoadBlog};