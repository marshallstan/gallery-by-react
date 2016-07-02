'use strict';

var React = require('react/addons');

// CSS
require('normalize.css');
require('../styles/main.scss');

var imageDatas = require('../data/imageDatas.json');

// var imageURL = require('../images/yeoman.png');
imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0 ; i < imageDatasArr.length ; i++){
        var singleImageData =  imageDatasArr[i];

        singleImageData.imageURL = requier('../image/' + singleImageData.fileName);
        imageDatasArr[i] = singleImageData;
    }
    return imageDatasArr;
})(imageDatas);

var GalleryByReactApp = React.createClass({
  render: function() {
    return (
        <section className="stage">
            <section className="img-sec"></section>
            <nav className="controller-nav"></nav>
        </section>
    );
  }
});
React.render(<GalleryByReactApp />, document.getElementById('content')); // jshint ignore:line

module.exports = GalleryByReactApp;
