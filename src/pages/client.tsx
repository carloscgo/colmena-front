import { Layouts } from "@/components"

export default function ClientPage() {
    return (
        <Layouts.Dashboard className="text-dark dark:text-white">
            <h1 className="text-3xl font-medium my-5">Client Side Rendering</h1>

            <p>
                This page uses the <strong><code>useSession()</code></strong> React Hook in the{" "}
                <strong>&lt;Header/&gt;</strong> component.
            </p>
            <p>
                The <strong><code>useSession()</code></strong> React Hook is easy to use and allows
                pages to render very quickly.
            </p>
            <p>
                The advantage of this approach is that session state is shared between
                pages by using the <strong>Provider</strong> in <strong>_app.js</strong>{" "}
                so that navigation between pages using <strong><code>useSession()</code></strong> is
                very fast.
            </p>
            <p>
                The disadvantage of <strong><code>useSession()</code></strong> is that it requires
                client side JavaScript.
            </p>

            <h3 className="text-2xl font-medium my-5">Session</h3>
        </Layouts.Dashboard>
    )
}