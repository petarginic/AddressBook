import React,{useState,useEffect, useMemo} from 'react'
import Input from './Input';
import Jumbotron from './Jumbotron';
import Modal from './Modal';
import TableUsers from './TableUsers';

const AddressBook = () => {

    const [users, setUsers] = useState([]);
    const [usersFilter, setUsersFilter] = useState([...users]);
    const [searchWord, setSearchWord] = useState("")
    const [modalUser, setModalUser] = useState(null)
    const [quotes, setQuotes] = useState([])
    const [randomQuote, setRandomQuote] = useState(null)
    
    const handleSearchWordChange = (e) => {
            setSearchWord(e.target.value)
        }

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            const json = await response.json();
            setUsers(json)
        }

        const fetchQuotes = async () => {
            const response = await fetch("https://type.fit/api/quotes");
            const json = await response.json();
            setQuotes(json)
        }
        
        fetchUsers();
        fetchQuotes();
        },[])

    useMemo(() => {
        setUsersFilter(users.filter((user) => user.username.toLowerCase().includes(searchWord.toLocaleLowerCase()) ))
    },[searchWord,users])

    const handleOnOpenModal = (user) => {
        setModalUser(user)
    }

    const handleGetRandomQuote = () => {
        setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
        console.log(randomQuote)
    }

    return (
        <div className='addressbook'>         
            <Jumbotron  getRandomQuote={handleGetRandomQuote} quote={randomQuote}/>
            <Input  handleSearchWordChange={handleSearchWordChange} searchWord={searchWord} />
            <TableUsers users={usersFilter} searchWord={searchWord} openModal={handleOnOpenModal}/>
            {modalUser ? <Modal user={modalUser}/> : null}
        </div>
    )
}

export default AddressBook