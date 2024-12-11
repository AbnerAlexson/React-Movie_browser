import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react'

export default function Navbar({ setSearchText }) {
    const [enterSearch, setEnterSearch] = useState('')

    const navigate = useNavigate();
    const updateSearch = (e) => {
        navigate('/search')
        setEnterSearch(e.target.value)
    }

    const submitSearch = () => {
        setSearchText(enterSearch)
    }

    const onKeyDownEnterHandler = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            submitSearch()
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to='/'>Movie Browser</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Coming soon</Link>
                </li>
            </ul>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={updateSearch} onKeyDown={onKeyDownEnterHandler} />
                <button className="btn btn-outline-success" type='button' onClick={submitSearch}>Search</button>
            </form>
            </div>
        </div>
        </nav>
    )
}