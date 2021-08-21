import React from 'react'
import Button from './Button'

const Header = ({title, toggleShowForm, showForm}) => { // or Header = ({title}) then {title} instead of {props.title}
    
    const onClick = (e) => {
        console.log("Clicked")
    }
    
    return (
        <div>
            <header className="header">
                <h1>{title}</h1>
                <Button title={showForm ? "Close": "Add"} color={showForm ? "red" : "green"} onClick={toggleShowForm}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

// Header.propTypes = {
//     title: PropTypes.string.isRequired;
// }

export default Header;