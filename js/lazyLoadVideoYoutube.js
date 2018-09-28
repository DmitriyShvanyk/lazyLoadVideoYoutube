;
(function () {

	"use strict";

	function lazyLoadVideoYoutube() {

		var video = document.querySelectorAll('.video__inner');

		for (var i = 0; i < video.length; i++) {
			var videoImagePoster = "https://img.youtube.com/vi/" + video[i].getAttribute('data-embed') + "/sddefault.jpg";

			// load async image video poster
			var image = new Image();
			image.src = videoImagePoster;
			image.addEventListener('load', function (i) {
				video[i].appendChild(image);
			}.bind(this, i));


			video[i].addEventListener('click', function () {

				// create iframe for video
				var iframe = document.createElement('iframe');
				iframe.setAttribute('allowfullscreen', '');
				iframe.setAttribute('src', 'https://www.youtube.com/embed/' + this.getAttribute('data-embed') + "?rel=0&showinfo=0&autoplay=1");

				this.innerHTML = '';
				this.appendChild(iframe);

			});

		}

	}
	lazyLoadVideoYoutube();


})();
