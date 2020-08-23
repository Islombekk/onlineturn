import React, { useRef } from 'react'
import 'react-datepicker/dist/react-datepicker.css';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


interface TodoFormProps {
    onAdd(title: string, doctor: string): void
}


export const TodoForm: React.FC<TodoFormProps> = (props) => {

    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }
    const ref = useRef<HTMLInputElement>(null)

    const ref1 = useRef<HTMLSelectElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value, ref1.current!.value)
            ref.current!.value = ''
        }
    }

    const [age, setAge] = React.useState<string | string>('');
    const [open, setOpen] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string)
        console.log(event.target.value)
        props.onAdd(ref.current!.value, ref1.current!.value)
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <div className="input-field mt2">
            <div>
                <label htmlFor="name" className="active">
                    Введите Ваше Ф.И.О.
            </label>
                {
                    <input
                        // onChange={changeHandler}
                        // value={title} 
                        ref={ref}
                        type="text"
                        id="name"
                        placeholder="Введите Ваше Ф.И.О."
                        onKeyPress={keyPressHandler}
                    />
                }

            </div>
            <div>
                <label htmlFor="doctor" className="active">
                    Выберите врача
            </label>
                <br />
                {
                    <Select
                        ref={ref1}
                        id="doctor"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={age}
                        onChange={handleChange}
                    >
                        <MenuItem value={"Школвский Борис Елизарович"}>Школвский Борис Елизарович</MenuItem>
                        <MenuItem value={"Воронова Тамара Ильевна"}>Воронова Тамара Ильевна</MenuItem>
                        <MenuItem value={"Барсова Лилия Олеговна"}>Барсова Лилия Олеговна</MenuItem>
                        <MenuItem value={"Крючков Валерий Филиппович"}>Крючков Валерий Филиппович</MenuItem>
                    </Select>

                }
            </div>
            <div>
                <label htmlFor="doctor" className="active">
                    Выберите время приёма
            </label>
                <br />
                {
                    <TextField
                        id="datetime"
                        type="datetime-local"
                        defaultValue="2017-05-24T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                }

            </div>


        </div >

    )
}