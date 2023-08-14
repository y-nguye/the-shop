import { useState } from 'react';

export default function TodoListComponent() {
    const [job, setJob] = useState('');
    // Callback trong khởi tạo useState này mang khiến cho mỗi lần re-render TodoListComponent không chạy nữa
    // giúp cải thiện performace
    const [jobs, setJobs] = useState(() => {
        // Khởi tạo dữ liệu từ trong bộ nhớ cục bộ (nếu có)
        const storageJobs = JSON.parse(localStorage.getItem('jobStorage'));
        return storageJobs ?? [];
    });
    function handleSubmit() {
        if (job) {
            setJobs((prev) => {
                const newJobs = [...prev, job];
                const jsonJobs = JSON.stringify(newJobs);
                localStorage.setItem('jobStorage', jsonJobs);
                return newJobs;
            });
            setJob('');
        }
    }

    function handleDelete(i) {
        const storageJobs = JSON.parse(localStorage.getItem('jobStorage'));
        setJobs(() => {
            const newJobs = storageJobs.filter((_, index) => index !== i);
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('jobStorage', jsonJobs);
            console.log(newJobs);
            return newJobs;
        });
    }

    return (
        <div>
            <h1>Todo Simple</h1>
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((x, i) => (
                    <li key={i}>
                        {x} <button onClick={() => handleDelete(i)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
