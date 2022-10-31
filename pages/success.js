import { useRouter } from "next/router";


export default function Success() {

    const routers = useRouter();

    return (
        
        <main className="h-screen items-center flex justify-center">
            <div className="bg-white rounded-lg w-1/2 font-latoRegular text-gray-700 p-16">
                <h1 className="text-3xl pb-4 font-latoBold">Thanks for the email {routers.query.name} ✨</h1>
                <p className="text-lg text-gray-500">
                    We have sent you an email over at {routers.query.email}. We will get back to you soon !
                </p>
            </div>
        </main>
    )
}