import "./followMe.css";
import React from "react";
import $ from "jquery";
export default function FollowMe() {
  let itemHeight = 140;
  function dragEnd() {
    document.documentElement.style.setProperty("--socialTop", `18px`);
    $(".socialmedia").addClass("ownAnimate");
  }
  return (
    <div className="socialmedia my-2 animate__animated animate__flipInX animate__fast">
      <p
        draggable
        onDragStart={(e) => e.dataTransfer.setDragImage(new Image(), 0, 0)}
        onDrag={(e) => {
          if (
            e.clientY < window.innerHeight / 3 &&
            e.clientY - itemHeight > 18
          ) {
            document.documentElement.style.setProperty(
              "--socialTop",
              `${e.clientY - itemHeight}px`
            );
          } else if (e.clientY == 0) {
            dragEnd();
          }
          $(".socialmedia").removeClass("animate__flipInX");
          $(".socialmedia").removeClass("ownAnimate");
        }}
        onDragEnd={dragEnd}
        className="followMe sunFont m-0 "
      >
        Follow Me
      </p>
      <div className="socialItems animate__animated  animate__fast pb-3 d-flex flex-column gap-2">
        <a
          className="text-white"
          href="https://www.linkedin.com/in/ali1kh/"
          target="_blank"
        >
          <i className="fa fs-5 fa-brands fa-linkedin-in"></i>
        </a>
        <a
          className="text-white"
          href="https://www.github.com/ali1kh"
          target="_blank"
          s
        >
          <i className="fa fs-5 fa-brands fa-github"></i>
        </a>
        <a
          href="https://twitter.com/aly1kh"
          target="_blank"
          className="text-white"
        >
          <i className="fa-brands fs-5 fa-x-twitter"></i>
        </a>
      </div>
    </div>
  );
}
