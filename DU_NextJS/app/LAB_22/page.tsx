import Link from "next/link";
import "./styles.css";

export default function Lab22Home() {
    return (
        <div className="lab22-layout">
            <div className="lab22-card">
                <nav>
                    <ul className="lab22-list">
                        <li className="lab22-list-item">
                            <Link className="lab22-link" href="/LAB_22/auth-home">Auth</Link>
                        </li>
                        <li className="lab22-list-item">
                            <Link className="lab22-link" style={{ color: "#f59e42" }} href="/LAB_22/admin-home">Admin</Link>
                        </li>
                        <li className="lab22-list-item">
                            <Link className="lab22-link" style={{ color: "#22c55e" }} href="/LAB_22/client-home">Client</Link>
                        </li>
                        <li className="lab22-list-item">
                            <Link className="lab22-link" style={{ color: "#0ea5e9" }} href="/LAB_22/dynamic/123">Dynamic Route</Link>
                        </li>
                        <li className="lab22-list-item">
                            <Link className="lab22-link" style={{ color: "#a21caf" }} href="/LAB_22/dynamic/primes/1/10">Prime Numbers</Link>
                        </li>
                        <li className="lab22-list-item">
                            <Link className="lab22-link" style={{ color: "#f43f5e" }} href="/LAB_22/dynamic/records/3">Pagination</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
