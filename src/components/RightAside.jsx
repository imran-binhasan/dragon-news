import { FaFacebook, FaGoogle, FaInstagram, FaXTwitter} from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const RightAside = () => {
    return (
        <aside className="border col-span-3 space-y-2">
            <h3 className="py-2 font-medium">Login with</h3>
            <div className="flex flex-col gap-2">
                <button className="gap-2 border rounded py-1 flex items-center justify-center border-blue-600 text-blue-600"><FaGoogle className="text-lg"/> Login with Google</button>
                <button className="gap-2 border rounded py-1 flex items-center justify-center border-gray-600"><FaGithub className="text-lg"/>Login with Github</button>
            </div>
            <h3 className="py-2 font-medium">Find us on</h3>
            <div className="flex flex-col border rounded border-gray-300">
                <button className="gap-2 border py-2 flex items-center justify-center border-b-gray-300 text-blue-600"><FaFacebook className="text-lg"/> Facebook</button>
                <button className="gap-2 border py-2 flex items-center justify-center border-b-gray-300"><FaXTwitter className="text-lg"/>Twitter</button>
                <button className="gap-2 border  py-2 flex items-center justify-center "><FaInstagram className="text-lg"/>Instragram</button>
            </div>
        </aside>
    );
};

export default RightAside;