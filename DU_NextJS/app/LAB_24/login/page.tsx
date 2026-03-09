import Link from "next/link";

type LoginPageProps = {
    searchParams: Promise<{ redirect?: string }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
    const params = await searchParams;
    const redirectTo = params.redirect || "/LAB_24/config";

    return (
        <section className="content">
            <h2>LAB 24 Login</h2>
            <p>
                Token is required to access protected LAB 24 routes. Click the button
                below to issue a short-lived token cookie.
            </p>

            <div className="actions">
                <Link
                    className="action-btn"
                    href={`/LAB_24/login/issue?redirect=${encodeURIComponent(redirectTo)}`}
                >
                    Issue Token and Continue
                </Link>
            </div>

            <p className="hint">Redirect target: {redirectTo}</p>
        </section>
    );
}
