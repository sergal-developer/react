import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom text-secondary" href="#">Your Site Name</a>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By <a className="border-bottom text-secondary" href="https://htmlcodex.com">HTML Codex</a>
              <br />Distributed By: <a className="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
