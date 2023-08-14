import { useState, useEffect } from 'react';

function Button({ href, onClick, children }) {
    let Components = 'button';
    const props = {};

    props.href = href;
    props.onClick = onClick;

    return <Components {...props}>{children}</Components>;
}

function SetTime() {
    const [countDown, setCountDown] = useState(10);

    useEffect(() => {
        const timerID = setInterval(() => {
            setCountDown(countDown - 1);
        }, 1000);

        return () => clearInterval(timerID);
    });

    return <h1>{countDown}</h1>;
}

function ChooseImage() {
    const [avatar, setAvatar] = useState();

    useEffect(() => {
        return () => avatar && URL.revokeObjectURL(avatar.preview);
    }, [avatar]);

    function handlePreviewAvatar(e) {
        //  file sẽ là một object
        const file = e.target.files[0];

        file.preview = URL.createObjectURL(file);
        setAvatar(file);
    }

    return (
        <>
            <input type="file" onChange={handlePreviewAvatar}></input>
            <br />
            {avatar && <img src={avatar.preview} alt="" width="20%" />}
        </>
    );
}

function RadioCheck() {
    const [isChecked, setIsChecked] = useState();
    const courses = [
        { id: '1', name: 'HTML-CSS' },
        { id: '2', name: 'JavaScript' },
        { id: '3', name: 'React' },
    ];

    function handleChange(id) {
        setIsChecked(id);
    }
    function handleClick() {
        console.log({ id: isChecked });
    }

    return (
        <>
            <h1>Radio</h1>

            {courses.map((x) => (
                <div key={x.id}>
                    <input
                        type="radio"
                        onChange={() => handleChange(x.id)}
                        checked={isChecked === x.id}
                    />
                    {x.name}
                </div>
            ))}
            <button onClick={handleClick}>Register</button>
        </>
    );
}

function CheckBox() {
    const [checked, setChecked] = useState([]);
    const courses = [
        { id: '1', name: 'HTML-CSS' },
        { id: '2', name: 'JavaScript' },
        { id: '3', name: 'React' },
    ];
    console.log(checked);

    function handleChange(id) {
        setChecked((prev) => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter((item) => item !== id);
            } else {
                return [...prev, id];
            }
        });
    }

    function handleClick() {
        console.log({ id: checked });
    }

    return (
        <>
            <h1>CheckBox</h1>
            {courses.map((x) => (
                <div key={x.id}>
                    <input
                        type="checkbox"
                        onChange={() => handleChange(x.id)}
                        checked={checked.includes(x.id)}
                    />
                    {x.name}
                </div>
            ))}
            <button onClick={handleClick}>Register</button>
        </>
    );
}

export default function Components() {
    const [toggle, setToggle] = useState(false);
    const Form = {
        Input() {
            return <input></input>;
        },
        Checkbox() {
            return <input type="checkbox"></input>;
        },
    };
    const type = 'Input';
    const Components = Form[type];

    return (
        <div>
            <Components />
            <br />
            <Button
                href="https://swiperjs.com/demos#responsive-breakpoints"
                onClick={() => setToggle(!toggle)}
            >
                Toggle
            </Button>
            {toggle && <SetTime />}
            <br />
            <ChooseImage />
            <br />
            <RadioCheck />
            <br />
            <CheckBox />
        </div>
    );
}
