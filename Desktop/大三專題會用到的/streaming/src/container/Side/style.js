import styled from 'styled-components'
import './style.css'


export  const SideWrapper =styled.div`
    height: 100%;
    padding: 0px 0px;
    box-sizing: border-box;
    background-image: linear-gradient(0deg,#3381b0,#c2196c);
    display: flex;
    flex-direction: column;
    box-shadow: 5px 0px 10px hsla(240, 40%, 15%,.6);
 `;
 export const SideForm=styled.form`
 	display: flex;
	margin: 0 10px 50px;
	border-radius: 100px;
	border:1px solid rgb(255,255,255,.4); 	
 `;
 export const nav_a=styled.a`
	display: block;
	padding: 10px;
	color: #fff;
	text-decoration: none;
	position: relative;
	font-family: 'Noto Sans TC', sans-serif;
 `;