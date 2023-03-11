import { useState } from "react"

const UserData = {
    name: '',
    regTime: ''
}

export const UserForm = () => {
    const [name, setName] = useState('')

    const saveData = () => {
        UserData.name = name;
        UserData.regTime = new Date().toString();
        localStorage.setItem('UserData', JSON.stringify(UserData));
        window.location.replace('/lobby/abs');
        return
    }

    return (
        <div className=" mx-auto w-full max-w-xs z-10" >
            <div className="bg-teal-200 shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4" id="form">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={()=> saveData()}>
                        Save
                    </button>
                </div>
                <br/>
                <p className="text-center text-gray-500 text-xs">
                    &copy;2020 BackDoor Deals Corp. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default UserForm;