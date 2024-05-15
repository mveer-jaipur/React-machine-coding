import { useState } from "react";

export interface IFileExplorer {
    id: number;
    isFolder: boolean;
    name: string;
    items: IFileExplorer[]
}

export const data: IFileExplorer = {
    id: 0,
    isFolder: true,
    name: 'root',
    items: [{
        id: 1,
        isFolder: true,
        name: 'first',
        items: [{
            id: 8,
            name: '1-1',
            isFolder: false,
            items: []
        },{
        id: 1-2,
        isFolder: false,
        name: '1-2',
        items: []
    },{
        id: 1-3,
        isFolder: false,
        name: '1-3',
        items: []
    }]
    }, {
        id: 2,
        isFolder: true,
        name: 'second',
        items: []
    },{
        id: 3,
        isFolder: false,
        name: 'File',
        items: []
    }]

};

export const useAddFolder = () => {
    function insertNode ({child, tree, parentId, isFolder}: {child: string, tree: IFileExplorer, parentId: number, isFolder: boolean}) {
        if(tree.id === parentId) {
            tree.items.unshift({
                id: Number(Math.random()),
                name: child,
                isFolder,
                items: []
            })

            return tree;
        }
    }

    return {insertNode}
}

export const Folder = ({explorer, onAddNewFolder}: {explorer: IFileExplorer, onAddNewFolder: React.FunctionComponent}) => {

    const [expanded, setExpanded] = useState(false);
    const [showInput, setShowInput] = useState({
        show: false,
        isFolder: false
    });

    const handleExpand = () => {
        setExpanded(!expanded);
    }

    const handleAddFolder = (e: React.MouseEvent<HTMLButtonElement>, isFolder: boolean) => {
        e.stopPropagation();
        setExpanded(!expanded);
        setShowInput({
            show: true,
            isFolder
        });
    }

    const addNewFolder = (e: React.KeyboardEvent<HTMLInputElement>) => {
       if(e.key === 'Enter' && e.currentTarget.value) {
            
            onAddNewFolder({child: e.currentTarget.value, tree: data , parentId: explorer.id, isFolder: showInput.isFolder})

            setShowInput({
               ...showInput, show: false
            })
       }
    }

    if(explorer.isFolder) {
    return (
        <>
            <div className="flex flex-col bg-yellow-50 w-40 m-1 border-pink-300 border-solid p-1" >
                <div className="flex flex-row justify-between align-middle items-center">
                    <div onClick={handleExpand}>📁 {explorer.name}</div> 
                    <button className="bg-yellow-600 p-1 rounded-md" onClick={(e) => handleAddFolder(e, true)}>Folder +</button>
                </div>
            </div>
            <div className="flex flex-col ml-8" style={{display: expanded ? 'block': 'none'}}>
                {   
                    showInput.show && 
                    <input type="text" className="border-solid" 
                        onKeyDown={(e) => addNewFolder(e)} 
                        onBlur={() => setShowInput({show: false, isFolder: false})} />
                }
                {
                explorer.items.map((item: IFileExplorer) => 
                     <Folder explorer={item} key={item.id}/>
                )}
            </div>
        </>
    )
    } else {
        return <div className="flex bg-yellow-50 w-40 m-1 border-pink-300 border-solid p-1">
                 🗄 {explorer.name} 
            </div>
    }


}

export const FileExplorer = () => {
    const [state, ]

    const { insertNode } = useAddFolder();

    const handleAddNewFolder = (ob: any) => {
        const items = insertNode(ob);

    }

    return <Folder explorer={data} onAddNewFolder={(ob) => handleAddNewFolder(ob)} />
}