const Radio = ({ onChange }: any) => {
    return (
        <div className="flex gap-2">
            <div className="w-full">
                <input className="peer sr-only w-full" value="familia" onChange={onChange}  name="atendidoPor" id="familia" type="radio" />
                <div className="flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-300 bg-white p-1 shadow transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400">
                    <label className="flex cursor-pointer text-xl w-full items-center justify-center text-sm uppercase black peer-checked:text-blue-500" htmlFor="familia">
                        Familia
                    </label>
                </div>
            </div>
            <div className="w-full">
                <input className="peer sr-only w-full" value="socio" onChange={onChange} name="atendidoPor" id="socio" type="radio" />
                <div className="flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-xl border shadow border-gray-300 bg-white p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400">
                    <label className="flex cursor-pointer text-xl w-full items-center justify-center text-sm uppercase text-black peer-checked:text-blue-500" htmlFor="socio">
                        Socio
                    </label>
                </div>
            </div>
            <div className="w-full">
                <input className="peer sr-only w-full" value="empleados" onChange={onChange} name="atendidoPor" id="empleados" type="radio" />
                <div className="flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-xl border shadow border-gray-300 bg-white p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400">
                    <label className="flex cursor-pointer items-center w-full justify-center text-sm uppercase text-black text-xl peer-checked:text-blue-500" htmlFor="empleados">
                        Empleados
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Radio;
