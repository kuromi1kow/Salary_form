import './app-fillter.css'
const AppFillter = () =>{
    return(
    <div className="btn-group">
        <button className="btn btn-light"
            type="button">
                    Все сотрудникиж
        </button>
        <button className="btn btn-outline-light"
            type="button">
                    На повышение
        </button>
        <button className="btn btn-outline-light"
            type="button">
                    Зарплата больше 2000 tg
        </button>
    </div>
    );
}

export default AppFillter;