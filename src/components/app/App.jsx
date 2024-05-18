import ContactForm from "../contact-form/ContactForm";
import SearchBox from "../search-box/SearchBox";
import ContactList from "../contact-list/ContactList";
import './App.css';


const App = () => {
    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />
            <SearchBox />
            <ContactList />
        </div>
    )
};
export default App;