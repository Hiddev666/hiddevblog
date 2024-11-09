import Image from 'next/image'
import Form from 'next/form'

const Login = (props) => {
    return (
        <div className="w-full h-screen flex justify-between items-center">
            <div className="w-1/2 h-screen flex justify-center items-center">
                <Image
                    src="/login.svg"
                    width={600}
                    height={600}
                    alt="Picture of the author"
                />
            </div>
            <div className="w-1/2">
                <h1 className="text-4xl font-bold">Log In.</h1>
                <Form action="/search">
                    <input name="query" />
                    <button type="submit">Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default Login