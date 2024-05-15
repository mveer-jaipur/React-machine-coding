import { useEffect, useState } from "react";

export interface Note {
    id: number;
    text: string;
}

export const NoteDragDrop = () => {
    const [notes, setNotes] = useState<Note[]>([{
        id: 1, 
        text: 'This is the first note'
    },{
        id: 2, 
        text: 'This is the second note'
    }]);

    useEffect(() => {
        
    }, [])

    const addNotes = () => {
        setNotes((notes: Note[]) => [...notes, {
                id: Math.random(),
                text: 'This is next Note'
            }]
        )
    }


    return(
        <div className="">
            <div className="my-10">
                <input type="text" placeholder="Enter the Note" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 m-5" />
                <button onClick={addNotes}>Add</button>
            </div>
            <div className="w-screen h-screen">
                {notes.map((note: Note) => <div key="{note.id}" className="w-40 h-40 bg-yellow-100 m-2"> 📌 {note.text}</div>)}
            </div>
            
        </div>
    )
}