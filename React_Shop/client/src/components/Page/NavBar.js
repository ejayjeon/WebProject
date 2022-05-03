import React from 'react'
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function NavBar(){
    return(
        <>
        <Navbar expand='lg' bg='dark' variant='dark'>
				<Container fluid>
					<Navbar.Brand href='#'>Project_Shopping Mall</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbarScroll' />
					<Navbar.Collapse id='navbarScroll'>
						<Nav
							className='me-auto my-2 my-lg-0'
							style={{ maxHeight: '100px' }}
							navbarScroll>
							<Nav.Link as={Link} to="/" className='link'>Main</Nav.Link>
							<Nav.Link as={Link} to="/detail" className='link'>Detail</Nav.Link>
							<Nav.Link as={Link} to="/cart" className='link'>Cart</Nav.Link>
						</Nav>
            
						<Form className='d-flex'>
							<FormControl
								type='search'
								placeholder='Search'
								className='me-2'
								aria-label='Search'
							/>
							<Button variant='outline-success'>Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>

        </>
    )
}