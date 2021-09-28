import React from 'react'

const Header = () => {
    return (
        <header className="main-container">
            <div className="head flex space-between align-center">
                <div className="left">
                    <h1>CVS Reader</h1>
                </div>
                <div className="right">
                    <ul className="flex clean-list justify-center align-center fs18 ">
                        <li>Explorium</li>
                        <li>Home</li>
                        <li>Task</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header;