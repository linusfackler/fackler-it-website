import React, { useEffect } from 'react';

export const Preloader = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if (preloader) {
                preloader.style.display = 'none';
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="preloader">
            <div id="loading">
                <div id="loading-center">
                    <div id="loading-center-absolute">
                        <div className="object" id="object_one"></div>
                        <div className="object" id="object_two"></div>
                        <div className="object" id="object_three"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
