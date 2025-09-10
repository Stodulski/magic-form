import Checkbox from "./components/checkbox"
import { useState } from "react"
import { submitProspect } from "./enviarApi";

const getInitial = () => ({
  nombre: "",
  telefono: "",
  email: "",
  interes: "",
  zona: "",
  localPropio: false,
  variosNegocios: false,
  nombreNegocio: "",
  tieneFranquicias: false,
  atendidoPor: "",
  tengoExperiencia: false,
  comunicacionWhatsApp: false,
  novedadesCorreo: false,
  comentarios: "",
  nivelInteres: ""
});

function App() {
  const [formInfo, setFormInfo] = useState(getInitial);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;

    setFormInfo((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const vaciarCampos = () => {
    setFormInfo({
      nombre: "",
      telefono: "",
      email: "",
      interes: "",
      zona: "",
      localPropio: false,
      variosNegocios: false,
      nombreNegocio: "",
      tieneFranquicias: false,
      atendidoPor: "",
      tengoExperiencia: false,
      comunicacionWhatsApp: false,
      novedadesCorreo: false,
      comentarios: "",
      nivelInteres: ""
    });
  }

  return (
    <main className="max-w-full">
      <header className="bg-[#0c5aa4] h-[120px] header-bg flex justify-center items-center">
        <img src="/logo magic.png" loading="eager" alt="" className="w-[180px] bg-[#0c5aa4]" />
      </header>


      <div className="flex flex-col gap-2 m-5 max-w-[900px] px-5 mx-auto" >
        {/* Nombre */}
        <div>
          <label htmlFor="nombre" className="block text-[#0c5aa4] font-bold text-2xl ">Nombre y apellido</label>
          <div className="mt-3">
            <input type="text" name="nombre" required className="text-black block w-full shadow-lg rounded-md py-5 px-5 text-xl ring-2 ring-inset ring-[#0c5aa4] bg-white" value={formInfo.nombre} onChange={handleChange} />
          </div>
        </div>

        {/* Telefono */}
        <div className="flex flex-row w-full gap-5 mt-2">
          <div className="w-full">
            <label htmlFor="telefono" className="block text-[#0c5aa4] font-bold text-2xl ">Teléfono</label>
            <div className="mt-3">
              <input type="tel" name="telefono" className="text-black text-xl shadow-lg block w-full rounded-md py-5 px-5 ring-2 ring-inset ring-[#0c5aa4] bg-white" value={formInfo.telefono} onChange={handleChange} />
            </div>
          </div>

          {/* Email */}
          <div className="w-full">
            <label htmlFor="email" className="block text-[#0c5aa4] font-bold text-2xl ">Email</label>
            <div className="mt-3">
              <input type="email" name="email" className="text-black text-xl shadow-lg block w-full rounded-md py-5 px-5 ring-2 ring-inset ring-[#0c5aa4] bg-white" value={formInfo.email} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div>
          <Checkbox value={formInfo}
            onChange={handleChange} setFormInfo={setFormInfo} />
        </div>

        <div className="flex flex-col gap-2">

          {/* Experiencia comercial */}
          <label className="flex cursor-pointer bg-white gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 shadow" htmlFor="tengoExperiencia">
            <div className="flex items-center">
              <input id="tengoExperiencia" className="size-4 rounded border-gray-300" name="tengoExperiencia" type="checkbox" checked={formInfo.tengoExperiencia} onChange={handleChange} />
            </div>
            <div>
              <strong className="font-medium text-gray-900">Tengo experiencia comercial</strong>
            </div>
          </label>

          {/* Comunicacion wsp */}
          <label className="flex cursor-pointer bg-white gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 shadow" htmlFor="comunicacionWhatsApp">
            <div className="flex items-center">

              <input id="comunicacionWhatsApp" className="size-4 rounded border-gray-300" name="comunicacionWhatsApp" type="checkbox" checked={formInfo.comunicacionWhatsApp} onChange={handleChange} />
            </div>
            <div>
              <strong className="font-medium text-gray-900">Quiero que se comuniquen por WhatsApp</strong>

            </div>
          </label>

          {/* Comunicacion correo */}
          <label className="flex cursor-pointer bg-white gap-4 rounded-lg border border-gray-200 p-4 transition hover:bg-gray-50 has-[:checked]:bg-blue-50 shadow" htmlFor="novedadesCorreo">
            <div className="flex items-center">

              <input id="novedadesCorreo" checked={formInfo.novedadesCorreo} className="size-4 rounded border-gray-300" name="novedadesCorreo" type="checkbox" onChange={handleChange} />
            </div>
            <div>
              <strong className="font-medium text-gray-900">Quiero recibir novedades en mi correo</strong>
            </div>
          </label>
        </div>

        {/* Comentarios */}
        <textarea name="comentarios" id="" value={formInfo.comentarios} placeholder="Comentarios" onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-md shadow focus:outline-none focus:ring-2 bg-white focus:ring-[#0c5aa4] min-h-[200px]"></textarea>

        <label htmlFor="">
          <h2 className="block text-[#0c5aa4] font-bold text-4xl my-2 text-center">Interés</h2>
          <div className="flex gap-2">
            <div className="w-full">
              <input className="peer sr-only" value="bajo" onChange={handleChange} name="nivelInteres" id="bajo" type="radio" />
              <div className="flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-xl border border-gray-300 bg-white p-1 shadow transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400">
                <label className="flex cursor-pointer text-xl w-full items-center justify-center text-sm uppercase black peer-checked:text-blue-500" htmlFor="bajo">
                  Bajo
                </label>
              </div>
            </div>
            <div className="w-full">
              <input className="peer sr-only" value="medio" onChange={handleChange} name="nivelInteres" id="medio" type="radio" />
              <div className="flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-xl border shadow border-gray-300 bg-white p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400">
                <label className="flex cursor-pointer text-xl w-full items-center justify-center text-sm uppercase text-black peer-checked:text-blue-500" htmlFor="medio">
                  Medio
                </label>
              </div>
            </div>
            <div className="w-full">
              <input className="peer sr-only" value="alto" onChange={handleChange} name="nivelInteres" id="alto" type="radio" />
              <div className="flex h-16 w-full cursor-pointer flex-col items-center justify-center rounded-xl border shadow border-gray-300 bg-white p-1 transition-transform duration-150 hover:border-blue-400 active:scale-95 peer-checked:border-blue-500 peer-checked:shadow-md peer-checked:shadow-blue-400">
                <label className="flex cursor-pointer items-center w-full justify-center text-sm uppercase text-black text-xl peer-checked:text-blue-500" htmlFor="alto">
                  Alto
                </label>
              </div>
            </div>
          </div>
        </label>
        <button className=" w-full bg-[#0c5aa4] text-white py-5 rounded-lg font-bold hover:cursor-pointer hover:opacity-80" onClick={() => submitProspect(vaciarCampos, formInfo)}>Enviar datos</button>
      </div>
    </main>
  )
}

export default App
