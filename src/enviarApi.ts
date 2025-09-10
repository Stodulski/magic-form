export async function submitProspect(
    vaciar: any,
    data: any,
): Promise<{ ok: boolean }> {
    const form = data

    alert("Formulario enviado con éxito.");

    vaciar()


    const url =
        "https://script.google.com/macros/s/AKfycbyc3abeYTQFdbS7-oeSYCp_GrPNSuKQQiht2ua6474zmx5Eno3M78mDOLqwu5peW8pV3g/exec";

    if (!data?.nombre || !data?.email) {
        return { ok: false };
    }
    const controller = new AbortController();

    try {
        await fetch(url, {
            method: "POST",
            mode: "no-cors",
            signal: controller.signal,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nombre: form.nombre ?? "-",
                telefono: form.telefono ?? "-",
                email: form.email ?? "-",
                interes: form.interes ?? "-",
                zona: form.zona ?? "-",
                localPropio: !!form.localPropio,
                variosNegocios: !!form.variosNegocios,
                nombreNegocio: form.nombreNegocio ?? "-",
                tieneFranquicias: !!form.tieneFranquicias,
                atendidoPor: form.atendidoPor ?? "-",
                tengoExperiencia: !!form.tengoExperiencia,
                comunicacionWhatsApp: !!form.comunicacionWhatsApp,
                novedadesCorreo: !!form.novedadesCorreo,
                comentarios: form.comentarios ?? "-",
                nivelInteres: form.nivelInteres ?? "-",
            }),
        });



        return { ok: true };
    } catch (e: any) {
        alert("Error al enviar.");
        return { ok: false };
    }
}