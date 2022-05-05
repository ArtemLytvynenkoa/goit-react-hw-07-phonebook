import Section from "./Components/Section";
import ContactForm from "./Components/ContactForm";
import ContactsList from "./Components/ContactsList";
import ContactsFilter from "./Components/ContactsFilter";
import Notification from "./Components/Notification";
import Loader from "Components/Loader";
import { useFetchContactsQuery } from './redux/contactsList/slice';

function App() {
  const { data, isFetching, isError} = useFetchContactsQuery();

  return (
      <>
        <Section title="Phone book">
          <ContactForm />   
        </Section>

        <Section title="Contacts"> 
          {isFetching && <Loader/>}
          {(!data || isError) && <Notification message="Contacts book is empty!" />}
          {data && !isError &&
            <>
              <ContactsFilter/>
              <ContactsList contacts={data}/> 
            </> 
          }
        </Section>
      </>  
    )
}

export default App;
