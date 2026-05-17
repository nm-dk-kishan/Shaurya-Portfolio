import { socials } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { WindowControls } from "#components";

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

            <div className="space-y-5 p-5">
                <img src="/images/adrian.jpg" alt="Adrian" className="w-20 rounded-full"/>

                <h3>Let's Connect!</h3>
                <p>Got an Idea? A bug or squash? Or just wanna talk tech? 
                I'm in.</p>
                <p>shauryaixd7537@gmail.com</p>

                <ul>
                    {socials.map(({id, bg, icon, link, text}) => (
                        <li key={id} style={{backgroundColor: bg}}>

                            <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                                <img src={icon} className="size-5" alt={text} />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;