import { FranquQuestions, LocalQuestions } from "./options";
const Checkbox = ({ value, onChange, setFormInfo }: any) => {
    return (
        <div className="space-y-5 mt-5">
            <div className="flex gap-2"><label className="shadow has-[:checked]:ring-blue-700 bg-gray-100 has-[:checked]:text-white cursor-pointer has-[:checked]:bg-[#00c5aa] bg-white w-full p-5 border border-black/30 rounded-md flex justify-between items-center shadow-lg">
                <div className="flex items-center space-x-5">
                    <h2 className="text-xl">Quiero abrir mi franquicia</h2>
                </div>
                <input type="radio" name="interes" onChange={onChange} value="franquicia" checked={value.interes === "franquicia"} className="checked:border-indigo-500 h-5 w-5" />
            </label>

                <label className="shadow has-[:checked]:ring-blue-700 has-[:checked]:text-white cursor-pointer has-[:checked]:bg-[#00c5aa] w-full p-5 border bg-white border-black/30 rounded-md flex justify-between items-center shadow-lg">
                    <div className="flex items-center space-x-5">
                        <h2 className="text-xl ">Espacio exclusivo Magic</h2>
                    </div>
                    <input type="radio" name="interes" onChange={onChange} value={"espacio magic"} checked={value.interes === "espacio magic"} className="checked:border-indigo-500 h-5 w-5" />
                </label></div>


            {/* interes */}

            {value.interes === "franquicia" && <FranquQuestions value={value}
                onChange={onChange} setFormInfo={setFormInfo} />}



            {value.interes === "espacio magic" && <LocalQuestions value={value}
                onChange={onChange} setFormInfo={setFormInfo} />}



        </div>
    );
}

export default Checkbox;
