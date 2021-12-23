import styled from 'styled-components'
import logoPic from '../../static/1.png'

export  const HeaderWrapper =styled.div`
	position :relative;
	height:56px;
	border-bottom: 1px solid #f0f0f0;
 `;
export const Logo = styled.a.attrs({href:'./'})` 
	position:absolute;
	top:0;
	left:0;
	display:block;
	width:100px;
	height:56px;
	background:url(${logoPic});
	background-size:contain;
`;
export const Nav=styled.div`
	width:960px;
	height:100%;
	margin:0 auto;
	background:green;
 `;
 export const NavItem=styled.div`
 	&.left{
 		float:left;
 	}
  	&.right{
 		float:right;
 	}	
	
 `;
 		// 	<HeaderWrapper>
			// 	<Logo/>
			// 	<Nav/>
			// 		<NavItem className='left'>首頁</NavItem>
			// 		<NavItem className='left'>下載App</NavItem>
			// 		<NavItem className='right'>登入</NavItem>
			// 		<NavItem className='right'>Aa</NavItem>
			// 	<Nav/>
			// </HeaderWrapper>