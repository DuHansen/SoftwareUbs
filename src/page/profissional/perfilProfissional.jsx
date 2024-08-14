import React from 'react';

function Perfil() {
    const people = [
        {
            name: 'Calvin Hawkins',
            email: 'calvin.hawkins@example.com',
            image: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        }
    ];

    return (
        <div className="flex flex-col w-1/2 mx-auto mt-20 space-y-5">
            <h2 className="text-2xl font-bold text-center">Perfil</h2>
            {people.map((person) => (
                <div key={person.email} className="flex items-center space-x-4">
                    <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                    <div>
                        <p className="text-sm font-medium text-gray-900">{person.name}</p>
                        <p className="text-sm text-gray-500">{person.email}</p>
                    </div>
                </div>
            ))}
            <input className="px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Nome" />
            <input className="px-3 py-2 border border-gray-300 rounded-md" type="email" placeholder="Email" />
            <input className="px-3 py-2 border border-gray-300 rounded-md" type="password" placeholder="Senha" />
            <button className="px-3 py-2 bg-blue-500 text-white rounded-md">Atualizar</button>
        </div>
    );
}

export default Perfil;
