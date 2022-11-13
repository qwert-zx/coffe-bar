import React from "react";
import Form from "../form/Form";

function Contacts() {
	return (
		<div className="contacts">
				<div className="contacts_wrapper">
					<h2>Have a Question ? Get in Touch with us 👋</h2>
					<p>Fill up the Form  and ou team will get back to within 24 hrs</p>
					<Form></Form>
				</div>
				<div className="contacts__img">
					<div className="contacts__img_left"></div>
					<div className="contacts__img_right"></div>
				</div>
		</div>
	);
}

export default Contacts;