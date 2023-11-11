import { dblClick } from '@testing-library/user-event/dist/click';
import './app.css';
import Appinfo from '../app-info/app-info';
import AppSearch from '../app-search/app-search';
import AppFillter from '../app-fillter/app-fillter';
import EmployersList from '../employee-list/employee-list';
import { Component } from 'react';
import EmployersAdd from '../app-add/app-add';


// class WhoAmI extends Component {
// constructor(props){
//     super(props);
// }
//     render() {
//         const{name, link} this.props;
//         return (
//             <div>
//                 <h1>My name is, {name.FirstName} </h1>
//                 <a href={link}>My link</a>
//             </div>
//         );
//     }
// };


const data = [
    { name: "Ali", salary: 200, increase: true, id: 1 },
    { name: "Sanzhar", salary: 1200, increase: false, id: 2 },
    { name: "Alisher", salary: 2200, increase: true, id: 3 }
];
function App() {
    return (
        <div className='app'>
            <Appinfo /> 
            <div className="app-search">
                <AppSearch />
                <AppFillter />
            </div>
            <EmployersList data={data} />
            <EmployersAdd />
{/* 
     <WhoAmI name={{FirstName: "Assylkhan"}}    link="htttps/memword"/>
    <WhoAmI name={{FirstName: "Alisher"}}       link="httpfxc"/> */}
        </div>
    );
}
export default App;