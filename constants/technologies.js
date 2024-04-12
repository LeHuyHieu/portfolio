import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io";
import { BsBootstrap } from "react-icons/bs";
import Jquery from "public/assets/svg/jquery.svg";
import Laravel from "public/assets/svg/laravel.svg";
import Mysql from "public/assets/svg/mysql.svg";
import Php from "public/assets/svg/php.svg";
import Git from "public/assets/svg/git.svg";
import Postman from "public/assets/svg/postman.svg";
import Figma from "public/assets/svg/figma.svg";
import Vue from "public/assets/svg/vue.svg";
import Angular from "public/assets/svg/angular.svg";
import Scss from "public/assets/svg/scss.svg";
import Vscode from "public/assets/svg/vs-code.svg";
import Cursor from "public/assets/svg/cursor.svg";
import Phpstorm from "public/assets/svg/phpstorm.svg";

export const TECHNOLOGIES = [
	{
		category: "Front-end",
		items: [
			{ name: "HTML", icon: <AiFillHtml5 size={32} /> },
			{ name: "CSS", icon: <DiCss3 size={32} /> },
			{ name: "JS", icon: <IoLogoJavascript size={32} /> },
			{ name: "Jquery", icon: <Jquery width={32} size={32} /> },
			{ name: "Bootstrap", icon: <BsBootstrap size={32} /> },
			{ name: "VueJS", icon: <Vue width={32} size={32} /> },
			{ name: "Angular", icon: <Angular width={32} size={32} /> },
			{ name: "Scss", icon: <Scss width={32} size={32} /> },
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
			{ name: "Postman", icon: <Postman width={32} size={32} /> },
			{ name: "Figma", icon: <Figma width={32} size={32} /> },
		]
	},
	{
		category: "Editer",
		items: [
			{ name: "VsCode", icon: <Vscode width={32} size={32} /> },
			{ name: "Cursor", icon: <Cursor width={32} size={32} /> },
			{ name: "PhpStorm", icon: <Phpstorm width={32} size={32} /> },
		]
	},
];
