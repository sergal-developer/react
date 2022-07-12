import React from 'react'

export const Spinner = () => {
  return (
    <>
    {/* <!-- Spinner Start --> */}
    <div id="spinner" className="bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* <!-- Spinner End --> */}
    </>
  )
}
