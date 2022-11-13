import React from "react";
import Img1 from "../../images/story-image-1.png"

function Story() {
	return (
		<div className="story">
			<div className="story__blck left">
				<h2>Our Story</h2>
				<p>Through True Rich Attended does no end it his mother since favourable real had half every him case in packages enquire we up ecstatic.</p>
				<img className="story__img" src={Img1}></img>
			</div>
			<div className="story__blck right">
				<h3>One of the best cafes in New York.</h3>
				<p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice and tone for error messages.</p>
				<p>Writing UX copies can be a little frustrating and confusing, and sometimes we are unsure about how to get the right word. To crack the code for the UX copies, we at Zeta Design wanted to build a Figma plugin for the larger design community. The plugin is called the Ghost UXWriter and has a set of UX copies cataloged and categorized with a voice and tone variation ranging from plain, casual to playful. The intention to build this Figma plugin originated from our Medium blog post, 'Designing voice and tone for error messages.</p>
			</div>
		</div>
	);
}

export default Story;