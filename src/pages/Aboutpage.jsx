import { Outlet, Link } from 'react-router-dom';
const About = () => {
    return (
        <div>
            <h1>About us</h1>
            <p>this page should look better,but...</p>
            <ul>
                <li><Link to="contacts">Our Contacts</Link></li>
                <li><Link to="team">Our Team</Link></li>
            </ul>

            <Outlet />
        </div>
    )
}
export {About}
