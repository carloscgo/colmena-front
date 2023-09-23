import { Layouts } from "@/components"

export default function IndexPage() {
    return (
        <Layouts.Dashboard className="text-dark dark:text-white">
            <h1 className="text-3xl font-medium my-5">NextAuth.js Example</h1>
            <p>
                This is an example site to demonstrate how to use{" "}
                <a href="https://next-auth.js.org">NextAuth.js</a> for authentication.
            </p>
        </Layouts.Dashboard>
    )
}