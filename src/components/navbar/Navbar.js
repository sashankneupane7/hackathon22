import React from "react"
import { NavbarContainer, LogoContainer, NavMenu, NavItems, NavButton } from "./NavbarElements"



const Navbar = (props) => {

	return (
		<NavbarContainer>
			<LogoContainer>
				Some Logo
			</LogoContainer>
			<NavMenu>
				<NavItems>
					<NavButton>Search</NavButton>
				</NavItems>
			</NavMenu>
		</NavbarContainer>

	)
}

export default Navbar