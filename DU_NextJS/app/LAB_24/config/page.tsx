type ConfigPageProps = {
  searchParams: Promise<{ pageNo?: string }>;
};

export default async function ConfigPage({ searchParams }: ConfigPageProps) {
  const params = await searchParams;
  const pageNo = params.pageNo ?? "0";

  return (
    <section className="content">
      <h2>LAB 24 Config Page (Protected)</h2>
      <p>
        Current <code>pageNo</code>: <b>{pageNo}</b>
      </p>

      <h3>Configuration Notes</h3>
      <ul className="bullet-list">
        <li>
          Middleware ensures default <code>pageNo=0</code> for this route when
          query is missing.
        </li>
        <li>
          Token validation is enforced by middleware before loading this page.
        </li>
        <li>
          Next.js <code>next.config.ts</code> includes LAB 24 demo redirect and
          response header.
        </li>
      </ul>
    </section>
  );
}
