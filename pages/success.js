import { useRouter } from "next/router";
import {motion as m} from 'framer-motion';

export default function Success() {

    const routers = useRouter();

    return (
        
        <m.main 
          initial={{opacity: 0}}
          animate={{opacity: 1}} 
          exit={{opacity: 0}}
          className="h-screen items-center flex justify-center">
            <div className="bg-white rounded-lg w-1/2 font-latoRegular text-center text-gray-700 p-16">
                <h1 className="text-3xl pb-4 font-latoBold">Thanks for the email, {routers.query.name} ✨</h1>
                <p className="text-lg text-gray-500">
                    We have sent you an email over to {routers.query.email}. We will get back to you soon !
                </p>
            </div>
        </m.main>
    )
}