const Footer = () => {
    return (
        <div className="footer">
            <footer className="bg-blue-200 flex flex-col px-5 py-3  navbar border-5 border-t-blue-600">
                <div className="logos bg-black flex justify-center p-3 gap-8 rounded-xl">
                    <a href="https://github.com/utkarsh2004git" target="_blank">
                        <img
                            className="h-10 transition-all hover:scale-125 duration-500"
                            src='/github.svg'
                            alt="github"
                        />
                    </a>
                    <a href="https://www.instagram.com/utkarsh_001122/" target="_blank">
                        <img
                            className="h-10 transition-all hover:scale-125 duration-500"
                            src='/insta.svg'
                            alt="insta"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/utkarsh-shahare-7b4109214/" target="_blank">
                        <img
                            className="h-10 transition-all hover:scale-125 duration-500"
                            src='/linkedin.svg'
                            alt="linkedin"
                        />
                    </a>
                    <a href="https://codepen.io/utkarsh_001122" target="_blank">
                        <img
                            className="h-10 transition-all hover:scale-125 duration-500"
                            src='/codepen.svg'
                            alt="codepen"
                        />
                    </a>
                    <a href="https://www.google.com" target="_blank">
                        <img
                            className="h-10 transition-all hover:scale-125 duration-500"
                            src='/google.svg'
                            alt="google"
                        />
                    </a>
                </div>
                <div className="Fcontent flex flex-col text-center  text-lg cursor-pointer hover:underline p-2">
                    <span>Content Owned, Updated and Maintained by Utkarsh Shahare Copyright &copy; 2024, All Rights Reserved.</span>
                    <span>Designed and Developed by <span className="utk font-bold hover:text-orange-500"> Utkarsh Shahare</span></span>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
