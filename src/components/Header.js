function Header() {
    return (
      <>
        <nav className='content'>
				<a className="logo-container" href='#inicio'>
					<img className='logo' src={logo} alt="logo" />
					
				</a>
				<ul>
					<Link href="#inicio">Início</Link>
					<Link href="#sobre">Sobre o projeto</Link>
					<Link href="#pitch">Vídeo Pitch</Link>
					<LinkRRD to="/login">
						<UserIcon className='user-icon'></UserIcon>
					</LinkRRD>
					<a className="menu-icon" href="#i">
						<MenuIcon size={32}></MenuIcon>
					</a>
				</ul>
			</nav>
      </>
    );
  }
  
  export default Header;
  