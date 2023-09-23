import { Layouts } from "@/components"

export default function ApiExamplePage() {
    return (
        <Layouts.Dashboard className="text-dark dark:text-white">
            <h1 className="text-3xl font-medium my-5">API Example</h1>

            <p>The examples below show responses from the example API endpoints.</p>
            <p>
                <em>You must be signed in to see responses.</em>
            </p>

            <h2 className="text-2xl font-medium my-5">Session</h2>
            <p>/api/auth/session</p>
            <iframe src="/api/auth/session" />

            <h2 className="text-2xl font-medium my-5">JSON Web Token</h2>
            <p>/api/auth/jwt</p>
            <iframe src="/api/auth/jwt" />
        </Layouts.Dashboard>
    )
}