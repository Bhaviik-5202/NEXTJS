import Link from "next/link";

export default function LAB24Home() {
    return (
        <section className="content">
            <h2>LAB 24 Home</h2>
            <p>
                This lab demonstrates middleware for query handling, token validation,
                token refresh, and basic Next.js configuration.
            </p>
            <ul className="bullet-list">
                <li>
                    Open <Link href="/LAB_24/config">/LAB_24/config</Link> without
                    <code> pageNo </code> to see middleware set it to <code>0</code>.
                </li>
                <li>
                    Try protected routes without a token to get redirected to
                    <Link href="/LAB_24/login"> login</Link>.
                </li>
            </ul>
        </section>
    );
}
