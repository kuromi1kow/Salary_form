import EmployersItem from "../employee-item/employee-item";
import './employee-list.css';

const EmployersList = ({ data }) => {
    const elements = data.map(item => {
        const {id, ...itemProps} = item; //деструктуризация самого айтема
        return (
            <EmployersItem key={id} {...itemProps} />
        );
    });
    return (
        <ul className="app-list list-group mt-4">
            {elements}
        </ul>
    );
}

export default EmployersList;