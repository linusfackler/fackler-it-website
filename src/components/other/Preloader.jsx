import React from 'react'

export const Preloader = () => {
  return (
    <div>
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
    </div>
  )
}
