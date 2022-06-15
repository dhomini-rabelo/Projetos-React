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
                    {/* {icon === 'profile' && <img src={ProfileIcon} style={{color: 'white'}} width={24} height={24} />} */}
                    {/* {icon === 'book' && <BookIcon fill="white" width={24} height={24} />} */}
                    {/* {icon === 'mail' && <MailIcon fill="white" width={24} height={24} />} */}
                </Div.iconContainer>
                <Div.point active={active}></Div.point>
            </Link>
        </Div.container>
    )
}