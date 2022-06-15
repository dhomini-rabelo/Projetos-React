import { Div } from "./styles";
import { Link, useNavigate } from "react-router-dom"
import ProfileIcon from './../../../../../assets/profile.svg';
import BookIcon from './../../../../../assets/book.svg';
import MailIcon from './../../../../../assets/mail.svg';

export function SidebarItem({ title, description, icon, path, active }: { title: string; description: string; icon: string; path: string; active: boolean; }) {
    return (
        <Div.container>
            <Link to={path}>
                <Div.info>
                    <Div.title>{title}</Div.title>
                    <Div.description>{description}</Div.description>
                </Div.info>
                <Div.iconContainer active={active}>
                    {icon === 'profile' && <img src={ProfileIcon} style={{fill: 'white', width: '24px', height: '24px'}} />}
                    {icon === 'book' && <img src={BookIcon} style={{fill: 'white', width: '24px', height: '24px'}} />}
                    {icon === 'mail' && <img src={MailIcon} style={{fill: 'white', width: '24px', height: '24px'}} />}
                </Div.iconContainer>
                <Div.point active={active}></Div.point>
            </Link>
        </Div.container>
    )
}