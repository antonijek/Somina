const Footer = () => {
    return (
        <footer className="w-screen justify-between flex flex-col fixed bottom-0 p-5 -mx-5 bg-purple-300 md:flex-row">
            <a href="#" className="text-gray-600 hover:text-gray-100">Services</a>
            <a href="#" className="text-gray-600 hover:text-gray-100">Products</a>
            <a href="#" className="text-gray-600 hover:text-gray-100">Portfolio</a>
            <a href="#" className="text-gray-600 hover:text-gray-100">About</a>
            <p href="#" className="text-gray-200 italic">Powered by ClickNik©</p>
        </footer>
    )
}

export default Footer;