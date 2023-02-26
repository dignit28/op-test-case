import React from "react";
// Styles
import "./ScrollableContainer.css";

const TRACK_HEIGHT = 445;
const THUMB_HEIGHT = 104;

function ScrollableContainer() {
  const thumbRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const [initialDragPosition, setInitialDragPosition] = React.useState(null);
  const [initialScrollTop, setInitialScrollTop] = React.useState(0);

  const handleThumbPosition = () => {
    const { scrollTop, scrollHeight } = contentRef.current;
    const newThumbTop =
      (scrollTop / (scrollHeight - TRACK_HEIGHT)) *
      (TRACK_HEIGHT - THUMB_HEIGHT);
    const thumb = thumbRef.current;
    thumb.style.top = `${newThumbTop}px`;
  };

  const handleTrackClick = (event) => {
    const { clientY } = event;
    const { scrollHeight } = contentRef.current;
    const trackTopOffset = event.target.getBoundingClientRect().top;
    const thumbOffset = THUMB_HEIGHT / 2;
    const newThumbTop = Math.min(
      Math.max(clientY - trackTopOffset - thumbOffset, 0),
      TRACK_HEIGHT - THUMB_HEIGHT
    );
    const scrollRatio =
      (scrollHeight - TRACK_HEIGHT) / (TRACK_HEIGHT - THUMB_HEIGHT);
    const newScrollTop = scrollRatio * newThumbTop;
    contentRef.current.scrollTo({ top: newScrollTop, behavior: "smooth" });
  };

  const handleTouchStart = (event) => {
    setInitialDragPosition(event.touches[0].clientY);
    setInitialScrollTop(contentRef.current.scrollTop);
  };

  const handleTouchMove = (event) => {
    const { scrollHeight } = contentRef.current;
    const deltaThumb = event.touches[0].clientY - initialDragPosition;
    const scrollRatio =
      (scrollHeight - TRACK_HEIGHT) / (TRACK_HEIGHT - THUMB_HEIGHT);
    const delta = deltaThumb * scrollRatio;
    const newScrollTop = initialScrollTop + delta;
    contentRef.current.scrollTop = newScrollTop;
  };

  return (
    <div className="scroller_wrapper">
      <div className="scroller_scrollbar">
        <div className="scroller_track" onClick={handleTrackClick}></div>
        <div
          id="scroller_thumb"
          className="scroller_thumb"
          ref={thumbRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        ></div>
      </div>
      <div className="scroller_content-wrapper">
        <div className="scroller_content-mask scroller_content-mask__top"></div>
        <div
          id="scroller_content"
          className="scroller_content"
          ref={contentRef}
          onScroll={handleThumbPosition}
        >
          <span className="scroller_text scroller_text__bold">
            Lorem ipsum dolor sit amet
          </span>
          <span className="scroller_text">
            , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
            <br></br>
            Duis ut diam quam nulla. Mauris in aliquam sem fringilla ut morbi
            tincidunt. Vitae aliquet nec ullamcorper sit amet risus nullam eget
            felis. Nulla pharetra diam sit amet nisl. Eget nulla facilisi etiam
            dignissim diam quis enim lobortis. Est sit amet facilisis magna.
            <br></br>
            Neque laoreet suspendisse interdum consectetur libero id.
            <br></br>
            Nec ullamcorper sit amet risus nullam eget felis eget.
            <br></br>
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor id.
            <br></br>Euismod quis viverra nibh cras pulvinar mattis nunc.
            <br></br>
            Massa massa ultricies mi quis. Sit amet massa vitae tortor
            condimentum lacinia. Et malesuada fames ac turpis egestas
            <br></br>
            integer eget. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere.
            <br></br>
            <br></br>
            Amet justo donec enim diam vulputate ut pharetra sit.
            <br></br>
            Risus ultricies tristique nulla aliquet enim tortor at auctor.
            <br></br>
            Velit sed ullamcorper morbi tincidunt ornare massa.
            <br></br>
            Quis hendrerit dolor magna eget est lorem ipsum. Etiam dignissim
            diam quis enim. Gravida neque convallis a cras. Ut enim blandit
            volutpat maecenas volutpat. Mauris sit amet massa vitae tortor
            condimentum lacinia quis vel.
          </span>
        </div>
        <div className="scroller_content-mask scroller_content-mask__bottom"></div>
      </div>
    </div>
  );
}

export default ScrollableContainer;
