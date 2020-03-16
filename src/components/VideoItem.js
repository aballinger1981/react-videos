import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div className="video-item item" onClick={() => onVideoSelect(video)}>
            <img
                className="ui image"
                alt={video.snippet.title}
                src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
}


// THIS WORKS THE SAME AS ABOVE.  JUST WANTED TO SHOW A DIFFERENT WAY
// class VideoItem extends React.Component {
//     handleVideoSelect = () => {
//         this.props.onVideoSelect(this.props.video);
//     }

//     render() {
//         const { video } = this.props;
//         return (
//             <div className="video-item item" onClick={this.handleVideoSelect}>
//                 <img
//                     className="ui image"
//                     alt={video.snippet.title}
//                     src={video.snippet.thumbnails.medium.url} />
//                 <div className="content">
//                     <div className="header">{video.snippet.title}</div>
//                 </div>
//             </div>
//         );
//     }
// }

export default VideoItem;