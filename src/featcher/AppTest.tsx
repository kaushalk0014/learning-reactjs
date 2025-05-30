import  React from 'react';

const AppTest = () => {
    const [inputValue, setInputValue] = React.useState("");
    const [show, setShow] = React.useState(false);
    const [nameList, setNameList] = React.useState<string[]>([]);

    const handleSubmit = () => {
        setShow(true);
        setNameList((prev) => [...prev, inputValue]);
        setInputValue("");
    };

    const handleChanges = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setShow(false);
    };

    return (
        <div>
            <input type="text" onChange={handleChanges} value={inputValue} />
            <button onClick={handleSubmit}>Submit</button>
            <div>
                {show ? <b>Your name is {nameList.join(", ")}</b> : <div></div>}
            </div>
        </div>
    );
};
export default AppTest;