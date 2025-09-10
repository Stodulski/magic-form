import Radio from "./radio";
import { useEffect } from "react";

const getDefaultExtras = () => ({
    localPropio: false,
    zona: "",
    variosNegocios: false,
    nombreNegocio: "",
    tieneFranquicias: false,
    atendidoPor: ""
});

export const FranquQuestions = ({ value, onChange, setFormInfo }: any) => {

    useEffect(() => {
        if (!value.interes) return;
        // Resetear SOLO los campos pedidos cuando cambia "interes"
        setFormInfo((prev: { interes: any; }) => ({
            ...prev,
            ...getDefaultExtras(),
            interes: prev.interes
        }));
    }, [value.interes, setFormInfo]);

    return (
        <fieldset className="">

            {/* Zona interes */}
            <div><label htmlFor="zona" className="block text-[#0c5aa4] font-bold text-2xl ">Zona de interés</label>
                <div className="mb-2 mt-2">
                    <input type="text" name="zona" value={value.zona} onChange={onChange} className="text-black bg-white block w-full rounded-md py-5 px-5 text-lg ring-2 ring-inset ring-[#0c5aa4] " />
                </div>
            </div>

            <div className="space-y-2">

                {/* Local Propio */}
                <label className="flex shadow cursor-pointer bg-white gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50" htmlFor="localPropio">
                    <div className="flex items-center">

                        <input id="localPropio" name="localPropio" checked={value.localPropio} onChange={onChange} className="size-4 rounded border-gray-300" type="checkbox" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900">Tengo local propio</strong>

                    </div>
                </label>

                {/* Varios Negocios */}
                <label className="flex shadow cursor-pointer  bg-white gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50" htmlFor="variosNegocios">
                    <div className="flex items-center">

                        <input id="variosNegocios" name="variosNegocios" checked={value.variosNegocios} onChange={onChange} className="size-4 bg-white rounded border-gray-300" type="checkbox" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900">Tengo varios negocios</strong>

                    </div>
                </label>


            </div>
        </fieldset>
    );
}


export const LocalQuestions = ({ value, onChange, setFormInfo }: any) => {

    useEffect(() => {
        if (!value.interes) return;
        setFormInfo((prev: { interes: any; }) => ({
            ...prev,
            ...getDefaultExtras(),
            interes: prev.interes
        }));
    }, [value.interes, setFormInfo]);

    return (
        <fieldset className="">
            {/* Nombre del negocio */}

            <div><label htmlFor="nombreNegocio" className="block text-[#0c5aa4] font-bold text-2xl ">Nombre del negocio</label>
                <div className="mb-2 mt-2">

                    <input type="text" name="nombreNegocio" id="nombreNegocio" value={value.nombreNegocio} onChange={onChange} className="bg-white text-black block w-full rounded-md py-5 px-5 text-lg ring-2 ring-inset ring-[#0c5aa4] " />
                </div>
            </div>

            {/* tiene franquicias*/}
            <div className="space-y-2">
                <label className="flex shadow cursor-pointer bg-white gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50" htmlFor="tieneFranquicias">
                    <div className="flex items-center">

                        <input id="tieneFranquicias" checked={value.tieneFranquicias} onChange={onChange} name="tieneFranquicias" className="size-4 rounded border-gray-300 " type="checkbox" />
                    </div>
                    <div>
                        <strong className="font-medium text-gray-900">Tiene franquicias</strong>

                    </div>
                </label>


            </div>

            {/* Atendido por */}

            <label>
                <h2 className="text-2xl font-bold text-[#0c5aa4]  my-2">Atendido por:</h2>
                <Radio value={value}
                    onChange={onChange} /></label>
        </fieldset>
    );
}





