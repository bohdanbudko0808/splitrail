import { Fragment } from "react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();    
    return (
        <Fragment>
            <div style={{ padding: '15px 30px', borderTop: '1px solid #e6e6e6' }} className="left-gap center">
                <p style={{ fontSize:'0.8em' }}>{`© ${currentYear} Split Rail Fence Store | Powered by`}
                    <Link href="https://www.webchimpy.com/" target="_blank">Web Chimpy</Link>
                    {`|`}
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    {`|`}
                    <Link href="/terms-and-conditions">Terms & Conditions</Link>
                </p>
            </div>
        </Fragment>
    );
}
