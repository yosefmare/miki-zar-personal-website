import { Link } from "react-router-dom"
import Button from "./Button"

const About = () => {
    return (
        <div className="flex flex-col gap-2  items-center justify-center h-[100vh]">
            <div className=" bg-slate-600 h-[450px] w-[500px] flex items-center justify-center flex-col rounded-md shadow-2xl text-white">
                <div className=" w-24 h-24 rounded-full flex items-center justify-center bg-transparent mb-5 border-4 border-amber-400">
                    <h3>img</h3>
                </div>
                <h1>About Me</h1>
                <div className=" text-center w-[80%]">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa alias harum similique nisi, tenetur pariatur ipsa esse, inventore officiis quod minus numquam voluptatem voluptate sapiente earum libero, facilis nesciunt odio.</p>
                </div>
            </div>
            <Link to={'/glairy'}>
                <Button content="My Glairy" />
            </Link>
        </div>
    )
}

export default About
