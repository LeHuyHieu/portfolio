import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import Jquery from "public/assets/svg/jquery.svg";
import Laravel from "public/assets/svg/laravel.svg";
import Mysql from "public/assets/svg/mysql.svg";
import Php from "public/assets/svg/php.svg";
import Git from "public/assets/svg/git.svg";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "Jquery", icon: <Jquery width={32} size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
		]
	},
	{
		category: "Back-end",
		items: [
			{ name: "PHP", icon: <Php size={32} /> },
			{ name: "Laravel", icon: <Laravel size={32} /> },
			{ name: "Mysql", icon: <Mysql width={32} size={32} /> },
		]
	},
	{
		category: "Other",
		items: [
			{ name: "Git", icon: <Git width={32} size={32} /> },
		]
	},
];
