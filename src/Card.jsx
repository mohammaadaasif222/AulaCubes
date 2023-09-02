import React from "react";

const Card = ({ comment }) => {
  return (
    <div className="row d-flex justify-content-end mt-2">
      {/* <div className="col-md-12 col-lg-10 col-xl-8"> */}
        <div className="card">
          <div className="card-body">
            <div className="d-flex flex-start align-items-center">
              <img
                className="rounded-circle shadow-1-strong me-3"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(19).webp"
                alt="avatar"
                width="60"
                height="60"
              />
              <div>
                <h6 className="fw-bold text-primary mb-1">{comment.name}</h6>
                <p className="text-muted small mb-0">Email: {comment.email}</p>
              </div>
            </div>

            <p className="mt-3 mb-4 pb-2">{comment.body}</p>

            <div className="small d-flex justify-content-start">
              <a href="#!" className="d-flex align-items-center me-3">
                <i className="far fa-thumbs-up me-2"></i>
                <p className="mb-0">Like</p>
              </a>
              <a href="#!" className="d-flex align-items-center me-3">
                <i className="far fa-comment-dots me-2"></i>
                <p className="mb-0">Comment</p>
              </a>
              <a href="#!" className="d-flex align-items-center me-3">
                <i className="fas fa-share me-2"></i>
                <p className="mb-0">Share</p>
              </a>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default Card;
