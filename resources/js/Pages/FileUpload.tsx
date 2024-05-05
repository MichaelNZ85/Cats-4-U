import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useForm, router } from '@inertiajs/react';

const UploadPage: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const { post } = useForm();

    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFile(event.target.files[0]);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!file) return;
        router.post(route('file.upload'), { file: file }, {
            onSuccess: () => {
                console.log('File uploaded successfully!');
                // Optionally, you can redirect the user or display a success message
            },
            onError: (errors) => {
                console.error('Failed to upload file:', errors);
                // Optionally, you can display an error message to the user
            },
        });
    };

    return (
        <div>
            <h1>Upload File</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
        </div>
    );
};

export default UploadPage;
