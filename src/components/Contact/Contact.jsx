import React from "react";
import linkedin from "../../../src/img/linkedin.png";
import github from "../../../src/img/github.png";
import email from "../../../src/img/email.png";
import HomeButton from "../Button/HomeButton";
import BackButton from "../Button/BackButton";
import ResetButton from "../Button/ResetButton";
import CreateButton from "../Button/CreateButton";
import SearchBar from "../SearchBar/SearchBar";
import "./Contact.css";

export default function Contact() {
	return (
		<div>
			<div className="container-contact">
				<HomeButton />
				<BackButton />
				<ResetButton />
				<CreateButton />
				<SearchBar />
			</div>
			<div className="container-links">
				<div>
					<a
						className="text-link"
						href="https://github.com/victorfalconi"
						target="_blank"
						rel="noreferrer noopener">
						<img className="github-logo" src={github} alt="img not found"/>
						https://github.com/victorfalconi/
					</a>
				</div>
				<div>
					<a
						className="text-link"
						href="https://www.linkedin.com/in/victor-falconi/"
						target="_blank"
						rel="noreferrer noopener">
						<img className="linkedin-logo" src={linkedin} alt="img not found" />
						https://www.linkedin.com/in/victor-falconi/
					</a>
				</div>
				<div>
					<a
						className="text-link"
						href="mailto:v.falconi.m@gmail.com/"
						target="_blank"
						rel="noreferrer noopener">
						<img className="email-logo" src={email} alt="img not found" />
						v.falconi.m@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
}
