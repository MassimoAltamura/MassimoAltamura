
import { AlertClock } from "./AlertClock";
import { Clock } from "./Clock";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";
import { MouseClicker } from "./MouseClicker";
import { MyForm } from "./MyForm";
import { MyUncontrolledForm } from "./MyUncontrolledForm";
import { MyList } from "./MyList";
import { Container } from "./Container";
import { LanguageContext } from "./LanguageContext";
import { useState } from "react";
import { HelloWorld } from "./HelloWorld";
import { GithubUser } from "./GithubUser";
import { HookCounter } from "./HookCounter";
import { useCounter } from "./useCounter";
import { Link, Route, Routes } from "react-router-dom";
import { Button } from "./Button";
import { Catalogue } from "./Catalogue";
import { Product } from "./Product";
import { GithubUsers } from "./GithubUsers";
import GithubProfile from "./GithubProfile";
export function App(){
    const [username, setUsername] = useState(''); 

    const handleInputChange = (event) => {
      setUsername(event.target.value);
    };
  
    return(
        <div>
            
            <Container title= {<>
                <h1>My awesome App</h1>
                <div>
                    <Link to="/">Home</Link> | <Link to="products">Products</Link> | <Link to="users" >Users</Link>
                </div></>}>
            <Routes>
                <Route path="/" element={<HelloWorld/>}/>
                <Route path="products" element={<Catalogue/>}>
                <Route index element={<p>Please select a products</p>} />
                <Route path=":id"element={<Product/>}></Route>
                </Route>
                <Route path="*" element={<div><p>Not found</p>
                <Link to="/">Go Home</Link>
                </div>}/>
                <Route path=":usermane" element={<GithubUser/>}/>
                <Route path="users" element={<GithubUsers/>}/>
                </Routes> 

                <div>
      <h1>Github User Fetcher</h1>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Enter GitHub username"
      />
      {username && <GithubProfile  username={username} />}
    </div>
                </Container>
            </div> 
    )
}